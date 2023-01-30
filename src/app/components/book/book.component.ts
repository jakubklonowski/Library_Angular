import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { book, bookResponse } from 'src/app/models/book';
import { HttpService } from 'src/app/services/http.service';
import { AddBookDialogComponent } from '../add-book-dialog/add-book-dialog.component';
import { ModifyBookDialogComponent } from '../modify-book-dialog/modify-book-dialog.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  books: MatTableDataSource<book> = new MatTableDataSource<book>
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator | null
  @ViewChild(MatSort) sort: MatSort = new MatSort
  columns: string[] = []
  columnsToDisplay: string[] = []

  constructor (
    private http: HttpService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.http.getBooks().subscribe(data => {
      this.books.data = data
    })
    .add(() => { // sets columns, paginator, sort
      this.columns = Object.keys(this.books.data[0])
      this.books.paginator = this.paginator
      this.books.sort = this.sort
      this.setColumnsToDisplay()
    })
  }

  setColumnsToDisplay() { // append columns for mod/del buttons
    this.columnsToDisplay = [...this.columns, 'modify', 'delete']
  }

  search(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.books.filter = filterValue.trim().toLowerCase()
  }

  drop(event : CdkDragDrop<string[]>) { // reorders columnsToDisplay[] after drag&drop
    moveItemInArray(this.columnsToDisplay, event.previousIndex, event.currentIndex)
  }

  openAddBookDialog() {
    const dialogRef = this.dialog.open(AddBookDialogComponent, {
      height: '80%',
      width: '80%'
    })
    dialogRef.afterClosed().subscribe(() => {
      this.getData()
    })
  }

  openModifyBookDialog(id: number, name: string, author: string) {
    var book: book = {Id: id, Name: name, Author: author}
    const dialogRef = this.dialog.open(ModifyBookDialogComponent, {
      height: '80%',
      width: '80%',
      data: {book}
    })
    dialogRef.afterClosed().subscribe(() => {
      this.getData()
    })
  }

  deleteBookById(id: number) {
    var bookResponse: bookResponse = {Id: id}
    this.http.deleteBook(bookResponse).subscribe()
    this.getData()
  }

}
