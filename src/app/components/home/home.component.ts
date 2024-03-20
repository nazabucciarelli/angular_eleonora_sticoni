import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  constructor(private router: Router){
  }

  ngOnInit(): void {
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed:60,
      deleteSpeed: 80
    })
    
    writer
      .type('ANCESTRAL')
      .rest(500)
      .remove(9) //characters amount
      .type('PODEROSO')
      .rest(500)
      .remove(8)
      .type('ENERGÍA DIVINA')
      .rest(500)
      .remove(14)
      .type('MANIFESTADOR')
      .rest(500)
      .remove(12)
      .type('MAGNIFICENTE')
      .rest(500)
      .remove(12)
      .type('FUERZA CREADORA')
      .rest(500)
      .remove(15)
      .type('AMOR INCONDICIONAL')
      .rest(500)
      .remove(18)
      .type('INSPIRADOR')
      .rest(500)
      .remove(10)
      .start()
              

  }
  
}


