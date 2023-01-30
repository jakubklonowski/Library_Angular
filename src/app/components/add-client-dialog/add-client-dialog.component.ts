import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { clientRequest } from 'src/app/models/client';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-client-dialog',
  templateUrl: './add-client-dialog.component.html',
  styleUrls: ['./add-client-dialog.component.css']
})
export class AddClientDialogComponent {

  constructor (
    public dialogRef: MatDialogRef<AddClientDialogComponent>,
    private http: HttpService,
  ) {}

  addClient(name: string) {
    var clientRequest: clientRequest = {Name: name}
    this.http.postClient(clientRequest).subscribe()
    .add(() => {
      this.closeThisDialog()
    })
  }

  closeThisDialog() {
    this.dialogRef.close()
  }

}
