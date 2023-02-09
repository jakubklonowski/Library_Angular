import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { book, bookRequest, bookResponse } from '../models/book';
import { client, clientRequest, clientResponse } from '../models/client';
import { libraryJoin, libraryRequestJoin, libraryResponse } from '../models/library';
import { ErrorSnackbarService } from './error-snackbar.service';

const url = 'http://localhost:10000/api'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient,
    private snackbar: ErrorSnackbarService
  ) { }

  // /api/books ------------------------------------------------------------------------------

  getBook(bresp: bookResponse) : Observable<bookRequest> {
    return this.http.get<bookRequest>(url + '/books/' + bresp.Id).pipe(catchError(this.handleError.bind(this)))
  }

  getBooks() : Observable<book[]> {
    return this.http.get<book[]>(url + '/books').pipe(catchError(this.handleError.bind(this)))
  }

  postBook(bookRequest: bookRequest) : Observable<bookResponse> {
    return this.http.post<bookResponse>(url + '/books', {name: bookRequest.Name, author: bookRequest.Author}).pipe(catchError(this.handleError.bind(this)))
  }

  putBook(book: book) : Observable<never> {
    return this.http.put<never>(url + '/books/' + book.Id, {name: book.Name, author: book.Author}).pipe(catchError(this.handleError.bind(this)))
  }

  deleteBook(bresp: bookResponse) : Observable<never> {
    return this.http.delete<never>(url + '/books/' + bresp.Id).pipe(catchError(this.handleError.bind(this)))
  }

  // /api/clients ----------------------------------------------------------------------------

  getClient(cresp: clientResponse) : Observable<clientRequest> {
    return this.http.get<clientRequest>(url + '/clients/' + cresp.Id).pipe(catchError(this.handleError.bind(this)))
  }

  getClients() : Observable<client[]> {
    return this.http.get<client[]>(url + '/clients').pipe(catchError(this.handleError.bind(this)))

  }

  postClient(clientRequest: clientRequest) : Observable<clientResponse> {
    return this.http.post<clientResponse>(url + '/clients', {name: clientRequest.Name}).pipe(catchError(this.handleError.bind(this)))
  }

  putClient(client: client) : Observable<never> {
    return this.http.put<never>(url + '/clients/' + client.Id, {name: client.Name}).pipe(catchError(this.handleError.bind(this)))
  }

  deleteClient(cresp : clientResponse) : Observable<never> {
    return this.http.delete<never>(url + '/clients/' + cresp.Id).pipe(catchError(this.handleError.bind(this)))
  }

  // /api/libraries --------------------------------------------------------------------------

  getLibrary(lresp: libraryResponse) : Observable<libraryRequestJoin> {
    return this.http.get<libraryRequestJoin>(url + '/libraries/' + lresp.Id).pipe(catchError(this.handleError.bind(this)))
  }

  getLibraries() : Observable<libraryJoin[]> {
    return this.http.get<libraryJoin[]>(url + '/libraries').pipe(catchError(this.handleError.bind(this)))
  }

  postLibrary(libraryRequest : libraryRequestJoin) : Observable<libraryResponse> {
    return this.http.post<libraryResponse>(url + '/libraries', {libraryRequest: libraryRequest}).pipe(catchError(this.handleError.bind(this)))
  }

  putLibrary(id: number, library: libraryRequestJoin) : Observable<never>{
    return this.http.put<never>(url + '/libraries/' + id, {libraryRequestJoin: library}).pipe(catchError(this.handleError.bind(this)))
  }

  deleteLibrary(lresp: libraryResponse) : Observable<never>{
    return this.http.delete<never>(url + '/libraries/' + lresp.Id).pipe(catchError(this.handleError.bind(this)))
  }

  // error handling --------------------------------------------------------------------------

  handleError(error: HttpErrorResponse) { // responsible for error handling
    switch (error.status) {
      case 0: // A client-side or network error occurred.
        this.snackbar.openSnackbar("Network error! Check your connection!")
        break
      case 400:
        this.snackbar.openSnackbar(error.message)
        break
      case 401:
        this.snackbar.openSnackbar(error.message)
        break
      case 404:
        this.snackbar.openSnackbar(error.message)
        break
      case 500:
        this.snackbar.openSnackbar(error.message)
        break
      default: // no error.error.X is available here
        this.snackbar.openSnackbar("Error occured! Contact the administrator!")
    }
    return throwError(() => new Error('Error ' + error.status + '. Message: ' + error.message + '. Server response: ' + error.error.message + '.'))
  }

}
