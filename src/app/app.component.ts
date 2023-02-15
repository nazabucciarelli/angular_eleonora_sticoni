import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_eleonora_sticoni';

  images = [{url:'assets/background.jpg'},{url:'assets/background2.jpg'},{url:'assets/background3.jpg'},{url:'assets/background4.jpg'}];
}
