import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { book, bookRequest, bookResponse } from '../models/book';
import { client, clientRequest, clientResponse } from '../models/client';
import { library, libraryRequest, libraryResponse } from '../models/library';

const url = 'http://localhost:10000/api'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  // /api/books ------------------------------------------------------------------------------

  getBook(bresp: bookResponse) : Observable<bookRequest> {
    return this.http.get<bookRequest>(url + '/books/' + bresp.Id)
  }

  getBooks() : Observable<book[]> {
    return this.http.get<book[]>(url + '/books')
  }

  postBook(bookRequest: bookRequest) : Observable<bookResponse> {
    return this.http.post<bookResponse>(url + '/books', {name: bookRequest.Name, author: bookRequest.Author})
  }

  putBook(book: book) : Observable<never> {
    return this.http.put<never>(url + '/books/' + book.Id, {name: book.Name, author: book.Author})
  }

  deleteBook(bresp: bookResponse) : Observable<never> {
    return this.http.delete<never>(url + '/books/' + bresp.Id)
  }

  // /api/clients ----------------------------------------------------------------------------

  getClient(cresp: clientResponse) : Observable<clientRequest> {
    return this.http.get<clientRequest>(url + '/clients/' + cresp.Id)
  }

  getClients() : Observable<client[]> {
    return this.http.get<client[]>(url + '/clients')

  }

  postClient(clientRequest: clientRequest) : Observable<clientResponse> {
    return this.http.post<clientResponse>(url + '/clients', {name: clientRequest.Name})
  }

  putClient(client: client) : Observable<never> {
    return this.http.put<never>(url + '/clients/' + client.Id, {name: client.Name})
  }

  deleteClient(cresp : clientResponse) : Observable<never> {
    return this.http.delete<never>(url + '/clients/' + cresp.Id)
  }

  // /api/libraries --------------------------------------------------------------------------

  getLibrary(lresp: libraryResponse) : Observable<libraryRequest> {
    return this.http.get<libraryRequest>(url + '/libraries/' + lresp.Id)
  }

  getLibraries() : Observable<library[]> {
    return this.http.get<library[]>(url + '/libraries')
  }

  postLibrary(libraryRequest : libraryRequest) : Observable<libraryResponse> {
    return this.http.post<libraryResponse>(url + '/libraries', {idBook: libraryRequest.Id_book, 
                                                                idClient: libraryRequest.Id_client,
                                                                date: libraryRequest.Date,
                                                                active: libraryRequest.Active})
  }

  putLibrary(library: library) : Observable<never>{
    return this.http.put<never>(url + '/libraries/' + library.Id, {idBook: library.Id_book, 
                                                                   idClient: library.Id_client,
                                                                   date: library.Date,
                                                                   active: library.Active})
  }

  deleteLibrary(lresp: libraryResponse) : Observable<never>{
    return this.http.delete<never>(url + '/libraries/' + lresp.Id)
  }

}
