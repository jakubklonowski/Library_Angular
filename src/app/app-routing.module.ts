import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/book/book.component';
import { ClientComponent } from './components/client/client.component';
import { LibraryComponent } from './components/library/library.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'library', component: LibraryComponent },
  { path: 'books', component: BookComponent },
  { path: 'clients', component: ClientComponent },
  { path: '',   redirectTo: '/library', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
