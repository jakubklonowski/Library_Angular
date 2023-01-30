import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { client } from 'src/app/models/client';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-modify-client-dialog',
  templateUrl: './modify-client-dialog.component.html',
  styleUrls: ['./modify-client-dialog.component.css']
})
export class ModifyClientDialogComponent {

  id: number = this.data.client.Id
  name: string = this.data.client.Name

  constructor(
    public dialogRef: MatDialogRef<ModifyClientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpService,
  ) {}

  ngOnInit() {
  }

  modifyClientById(id: number, name: string) {
    var client: client = {Id: id, Name: name}
    this.http.putClient(client).subscribe()
    .add(() => {
      this.closeThisDialog()
    })
  }

  closeThisDialog() {
    this.dialogRef.close()
  }

}
