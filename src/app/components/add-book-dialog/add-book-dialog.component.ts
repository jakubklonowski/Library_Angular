import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { bookRequest } from 'src/app/models/book';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.css']
})
export class AddBookDialogComponent {

  constructor (
    public dialogRef: MatDialogRef<AddBookDialogComponent>,
    private http: HttpService,
  ) {}

  addBook(name: string, author: string) {
    var bookRequest: bookRequest = {Name: name, Author: author}
    this.http.postBook(bookRequest).subscribe()
    .add(() => {
      this.closeThisDialog()
    })
  }

  closeThisDialog() {
    this.dialogRef.close()
  }

}
