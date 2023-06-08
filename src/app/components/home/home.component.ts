import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  constructor(private router: Router){
  }

  ngOnInit(): void {
  }

  isCollapsedFormacionCoaching = true;
  isCollapsedAsesoriaJuridica = true;
  isCollapsedTipoCoaching1 = true;
  isCollapsedTipoCoaching2 = true;
  isCollapsedTipoCoaching3 = true;


  navigateToContact(){
    this.router.navigate(['/contact']);
  }

  
}


