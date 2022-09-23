package models

type Film struct {
	ID            int              `json:"id" gorm:"primary_key:auto_increment"`
	Title         string           `json:"title" gorm:"type: varchar(255)"`
	Thumbnailfilm string           `json:"image" gorm:"type:varchar(255)"`
	Year          string           `json:"year" gorm:"type: varchar(255)" `
	Category      CategoryResponse `json:"category"`
	CategoryID    int              `json:"-"`
	Description   string           `json:"description" gorm:"type: varchar(255)"`
}

type FilmResponse struct {
	ID            int              `json:"id"`
	Title         string           `json:"title"`
	Thumbnailfilm string           `json:"thumbnailfilm"`
	Year          string           `json:"year"`
	Category      CategoryResponse `json:"category"`
	CategoryID    int              `json:"-"`
	Description   string           `json:"description"`
}

type FilmInCategory struct {
	ID            int              `json:"id"`
	Title         string           `json:"title"`
	Thumbnailfilm string           `json:"thumbnailfilm"`
	Year          string           `json:"year"`
	Category      CategoryResponse `json:"category"`
	CategoryID    int              `json:"-"`
	Description   string           `json:"description"`
}

func (FilmResponse) TableName() string {
	return "films"
}

func (FilmInCategory) TableName() string {
	return "films"
}