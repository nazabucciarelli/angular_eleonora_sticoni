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

  text1Visible:boolean = false;
  text2Visible:boolean = false;
  text3Visible:boolean = false;
  juridicTextVisible:boolean = false;

  toggleText1(){
    this.text1Visible = !this.text1Visible;
  }
  toggleText2(){
    this.text2Visible = !this.text2Visible;
  }
  toggleText3(){
    this.text3Visible = !this.text3Visible;
  }
  toggleJuridicText(){
    this.juridicTextVisible = !this.juridicTextVisible;
  }

  navigateToContact(){
    this.router.navigate(['/contact']);
  }

  
}


