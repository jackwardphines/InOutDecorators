import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Angular";
  result = '';
  
  funksion(st:string){
    this.result = "This is the app component, received this from child-component => " + st + ".";
  }
}
