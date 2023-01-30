import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LibraryComponent } from './components/library/library.component';
import { BookComponent } from './components/book/book.component';
import { AddBookDialogComponent } from './components/add-book-dialog/add-book-dialog.component';
import { ModifyBookDialogComponent } from './components/modify-book-dialog/modify-book-dialog.component';
import { ClientComponent } from './components/client/client.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AddClientDialogComponent } from './components/add-client-dialog/add-client-dialog.component';
import { ModifyClientDialogComponent } from './components/modify-client-dialog/modify-client-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    BookComponent,
    ClientComponent,
    PageNotFoundComponent,
    ModifyBookDialogComponent,
    AddBookDialogComponent,
    AddClientDialogComponent,
    ModifyClientDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
