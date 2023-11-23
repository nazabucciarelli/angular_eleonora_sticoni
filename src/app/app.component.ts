import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentChecked{
  showLoader: boolean = true;

  constructor(){}
  
  ngAfterContentChecked() {
    this.showLoader = false;  
  }

}

