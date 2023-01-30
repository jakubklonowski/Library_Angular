import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { book } from 'src/app/models/book';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-modify-book-dialog',
  templateUrl: './modify-book-dialog.component.html',
  styleUrls: ['./modify-book-dialog.component.css']
})
export class ModifyBookDialogComponent {

  id: number = this.data.book.Id
  name: string = this.data.book.Name
  author: string = this.data.book.Author

  constructor(
    public dialogRef: MatDialogRef<ModifyBookDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpService,
  ) {}

  ngOnInit() {
  }

  modifyBookById(id: number, name: string, author: string) {
    var book: book = {Id: id, Name: name, Author: author}
    this.http.putBook(book).subscribe()
    .add(() => {
      this.closeThisDialog()
    })
  }

  closeThisDialog() {
    this.dialogRef.close()
  }

}
