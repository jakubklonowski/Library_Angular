import { book } from "./book"
import { client } from "./client"

export interface library {
    Id:         number
    Date:       string
    Active:     boolean
}

export interface libraryJoin {
    Library:    library
    Book:       book
    Client:     client
}

export interface libraryRequest {
    Date:       string
    Active:     boolean
}

export interface libraryRequestJoin {
    LibraryRequest: libraryRequest
    Book:           book
    Client:         client
}

export interface libraryResponse {
    Id: number
}
