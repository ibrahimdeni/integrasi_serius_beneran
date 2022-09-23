package transaction

import "time"

// import "time"

type TransactionRequest struct {
	ID       int		`json:"id" gorm:"primary_key:auto_increment"`
	// Stardate time.Time 	`json:"startdate"`
	// Duedate  time.Time	`json:"duedate"`
	UserID   int		`json:"user_id`
	Attache  string 	`json:"attach" form:"image" gorm:"type: text" validate:"required"`
	Status   string		`json:"status" form:"status" gorm:"type: text" validate:"required"`
}

type UpdateTransactionRequest struct {
	StartDate time.Time `json:"startdate" form:"startdate"`
	DueDate   time.Time `json:"duedate" form:"duedate"`
	Attache   string    `json:"image"  form:"image"`
	Status    string    `json:"status" form:"status"`
}
