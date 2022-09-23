package authdto

type LoginResponse struct {
	ID       int    `json:"id"`
	Fullname string `gorm:"type: varchar(255)" json:"fullname" validate:"required"`
	Email    string `gorm:"type: varchar(255)" json:"email" from:"email"`
	Token    string `gorm:"type: varchar(255)" json:"token"`
	Gender  string `json:"gender" gorm:"type: varchar(255)"`
	Phone   string `json:"phone" gorm:"type: varchar(255)"`
	Address string `json:"address" gorm:"type: varchar(255)"`
	Role string `json:"role"`
}