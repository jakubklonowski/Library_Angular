import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { client, clientResponse } from 'src/app/models/client';
import { HttpService } from 'src/app/services/http.service';
import { AddClientDialogComponent } from '../add-client-dialog/add-client-dialog.component';
import { ModifyClientDialogComponent } from '../modify-client-dialog/modify-client-dialog.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {

  clients: MatTableDataSource<client> = new MatTableDataSource<client>
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
    this.http.getClients().subscribe(data => {
      this.clients.data = data
    })
    .add(() => { // sets columns, paginator, sort
      this.columns = Object.keys(this.clients.data[0])
      this.clients.paginator = this.paginator
      this.clients.sort = this.sort
      this.setColumnsToDisplay()
    })
  }

  setColumnsToDisplay() { // append columns for mod/del buttons
    this.columnsToDisplay = [...this.columns, 'modify', 'delete']
  }

  search(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.clients.filter = filterValue.trim().toLowerCase()
  }

  drop(event : CdkDragDrop<string[]>) { // reorders columnsToDisplay[] after drag&drop
    moveItemInArray(this.columnsToDisplay, event.previousIndex, event.currentIndex)
  }

  openAddClientDialog() {
    const dialogRef = this.dialog.open(AddClientDialogComponent, {
      height: '80%',
      width: '80%'
    })
    dialogRef.afterClosed().subscribe(() => {
      this.getData()
    })
  }

  openModifyClientDialog(id: number, name: string) {
    var client: client = {Id: id, Name: name}
    const dialogRef = this.dialog.open(ModifyClientDialogComponent, {
      height: '80%',
      width: '80%',
      data: {client}
    })
    dialogRef.afterClosed().subscribe(() => {
      this.getData()
    })
  }

  deleteClientById(id: number) {
    var clientResponse: clientResponse = {Id: id}
    this.http.deleteClient(clientResponse).subscribe()
    .add(() => {
      this.getData()
    })
  }

}
