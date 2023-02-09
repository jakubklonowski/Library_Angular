import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LibraryComponent } from './components/library/library.component';
import { AddLibraryDialogComponent } from './components/add-library-dialog/add-library-dialog.component';
import { ModifyLibraryDialogComponent } from './components/modify-library-dialog/modify-library-dialog.component';
import { BookComponent } from './components/book/book.component';
import { AddBookDialogComponent } from './components/add-book-dialog/add-book-dialog.component';
import { ModifyBookDialogComponent } from './components/modify-book-dialog/modify-book-dialog.component';
import { ClientComponent } from './components/client/client.component';
import { AddClientDialogComponent } from './components/add-client-dialog/add-client-dialog.component';
import { ModifyClientDialogComponent } from './components/modify-client-dialog/modify-client-dialog.component';
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
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    AddLibraryDialogComponent,
    ModifyLibraryDialogComponent,
    BookComponent,
    AddBookDialogComponent,
    ModifyBookDialogComponent,
    ClientComponent,
    AddClientDialogComponent,
    ModifyClientDialogComponent,
    PageNotFoundComponent
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
    MatSelectModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatNativeDateModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
