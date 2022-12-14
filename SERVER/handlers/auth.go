package handlers

import (
	authdto "dumbflix/dto/auth"
	dto "dumbflix/dto/result"
	"dumbflix/models"
	"dumbflix/pkg/bcrypt"
	jwtToken "dumbflix/pkg/jwt"
	"dumbflix/repositories"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/go-playground/validator/v10"
	"github.com/golang-jwt/jwt/v4"
)

type handlerAuth struct {
  AuthRepository repositories.AuthRepository
}

func HandlerAuth(AuthRepository repositories.AuthRepository) *handlerAuth {
  return &handlerAuth{AuthRepository}
}

//fungsi register
func (h *handlerAuth) Register(w http.ResponseWriter, r *http.Request) {
  w.Header().Set("Content-Type", "application/json")

  request := new(authdto.RegisterRequest)
  if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
    w.WriteHeader(http.StatusBadRequest)
    response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
    json.NewEncoder(w).Encode(response)
    return
  }

  validation := validator.New()
  err := validation.Struct(request)
  if err != nil {
    w.WriteHeader(http.StatusBadRequest)
    response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
    json.NewEncoder(w).Encode(response)
    return
  }

  password, err := bcrypt.HashingPassword(request.Password)
  if err != nil {
    w.WriteHeader(http.StatusInternalServerError)
    response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
    json.NewEncoder(w).Encode(response)
  }

  user := models.User{
    Fullname	: request.Fullname,
    Email		: request.Email,
    Password	: password,
	  Gender		: request.Gender,
	  Phone		: request.Phone,
	  Address		: request.Address,
	  Subscribe	: "false",
  	Role:     "Customer",
  }

  // if user.Email == "ibrahimdeniharyanto@gmail.com"{
  //   user.Role = "Admin"
  // }

  data, err := h.AuthRepository.Register(user)
  if err != nil {
    w.WriteHeader(http.StatusInternalServerError)
    response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
    json.NewEncoder(w).Encode(response)
  }

  w.WriteHeader(http.StatusOK)
  response := dto.SuccessResult{Code: http.StatusOK, Data: convertResponse(data)}
  json.NewEncoder(w).Encode(response)
}


//fungsi login
func (h *handlerAuth) Login(w http.ResponseWriter, r *http.Request) {
  w.Header().Set("Content-Type", "application/json")

  request := new(authdto.LoginRequest)
  if err := json.NewDecoder(r.Body).Decode(&request); err != nil {
    w.WriteHeader(http.StatusBadRequest)
    response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
    json.NewEncoder(w).Encode(response)
    return
  }

  user := models.User{
    Email:    request.Email,
    Password: request.Password,
    Fullname: request.Fullname,
    Gender: request.Gender,
    Phone: request.Phone,
    Address: request.Address,
    Subscribe: request.Subscribe,
  }

  // Check email
  user, err := h.AuthRepository.Login(user.Email)
  if err != nil {
    w.WriteHeader(http.StatusBadRequest)
    response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
    json.NewEncoder(w).Encode(response)
    return
  }

  // Check password
  isValid := bcrypt.CheckPasswordHash(request.Password, user.Password)
  if !isValid {
    w.WriteHeader(http.StatusBadRequest)
    response := dto.ErrorResult{Code: http.StatusBadRequest, Message: "wrong email or password"}
    json.NewEncoder(w).Encode(response)
    return
  }

  //generate token
  claims := jwt.MapClaims{}
  claims["id"]		= user.ID
  claims["email"]	= user.Email
  claims["role"] = user.Role

  claims["exp"]		= time.Now().Add(time.Hour * 2).Unix() // 2 hours expired

  token, errGenerateToken := jwtToken.GenerateToken(&claims)
  if errGenerateToken != nil {
    log.Println(errGenerateToken)
    fmt.Println("Unauthorize")
    return
  }

  loginResponse := authdto.LoginResponse{
	  ID			: user.ID,
    Fullname	: user.Fullname,
    Email		: user.Email,
    Token		: token,
    Gender: user.Gender,
    Phone: user.Phone,
    Address: user.Address,
    Role: user.Role,
  }

  w.Header().Set("Content-Type", "application/json")
  response := dto.SuccessResult{Code: http.StatusOK, Data: loginResponse}
  json.NewEncoder(w).Encode(response)

}