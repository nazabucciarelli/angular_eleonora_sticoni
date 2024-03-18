import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    // Suscribirse al evento de navegación
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
      
      setInterval(() => {
        this.openAlertDialog();
      }, 120000);
    });
  }

  openAlertDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      width: '250px',
      data: { message: 'Este es un mensaje de alerta' }
    });
  }


}