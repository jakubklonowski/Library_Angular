export interface library {
    id:         number
    id_book:    number
    id_client:  number
    date:       Date
    active:     boolean
}

export interface libraryRequest {
    id_book:    number
    id_client:  number
    date:       Date
    active:     boolean
}

export interface libraryResponse {
    id: number
}
