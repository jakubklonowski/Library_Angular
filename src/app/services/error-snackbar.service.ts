import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ErrorSnackbarService {

  constructor(
    private snackbar: MatSnackBar,
  ) { }

  openSnackbar(message: string) {
    this.snackbar.open(message, 'X')
  }

}
