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
    return this.http.get<bookRequest>(url + '/books/' + bresp.id)
  }

  getBooks() : Observable<bookRequest[]> {
    return this.http.get<bookRequest[]>(url + '/books')
  }

  postBook(bookRequest: bookRequest) : Observable<bookResponse> {
    return this.http.post<bookResponse>(url + '/books', {name: bookRequest.name, author: bookRequest.author})
  }

  putBook(book: book) : Observable<never> {
    return this.http.put<never>(url + '/books/' + book.id, {name: book.name, author: book.author})
  }

  deleteBook(bresp: bookResponse) : Observable<never> {
    return this.http.delete<never>(url + '/books/' + bresp.id)
  }

  // /api/clients ----------------------------------------------------------------------------

  getClient(cresp: clientResponse) : Observable<clientRequest> {
    return this.http.get<clientRequest>(url + '/clients/' + cresp.id)
  }

  getClients() : Observable<clientRequest[]> {
    return this.http.get<clientRequest[]>(url + '/clients')

  }

  postClient(clientRequest: clientRequest) : Observable<clientResponse> {
    return this.http.post<clientResponse>(url + '/clients', {name: clientRequest.name})
  }

  putClient(client: client) : Observable<never> {
    return this.http.put<never>(url + '/clients/' + client.id, {name: client.name})
  }

  deleteClient(cresp : clientResponse) : Observable<never> {
    return this.http.delete<never>(url + '/clients/' + cresp.id)
  }

  // /api/libraries --------------------------------------------------------------------------

  getLibrary(lresp: libraryResponse) : Observable<libraryRequest> {
    return this.http.get<libraryRequest>(url + '/libraries/' + lresp.id)
  }

  getLibraries() : Observable<libraryRequest[]> {
    return this.http.get<libraryRequest[]>(url + '/libraries')
  }

  postLibrary(libraryRequest : libraryRequest) : Observable<libraryResponse> {
    return this.http.post<libraryResponse>(url + '/libraries', {idBook: libraryRequest.id_book, 
                                                                idClient: libraryRequest.id_client,
                                                                date: libraryRequest.date,
                                                                active: libraryRequest.active})
  }

  putLibrary(library: library) : Observable<never>{
    return this.http.put<never>(url + '/libraries/' + library.id, {idBook: library.id_book, 
                                                                   idClient: library.id_client,
                                                                   date: library.date,
                                                                   active: library.active})
  }

  deleteLibrary(lresp: libraryResponse) : Observable<never>{
    return this.http.delete<never>(url + '/libraries/' + lresp.id)
  }

}
