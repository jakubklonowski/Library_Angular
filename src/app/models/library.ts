export interface library {
    Id:         number
    Id_book:    number
    Id_client:  number
    Date:       Date
    Active:     boolean
}

export interface libraryRequest {
    Id_book:    number
    Id_client:  number
    Date:       Date
    Active:     boolean
}

export interface libraryResponse {
    Id: number
}
