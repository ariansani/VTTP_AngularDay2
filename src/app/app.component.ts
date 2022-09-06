import { Component } from '@angular/core';
import { Registration } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aName = 'fred';
  names=['fred','wilma','betty','barney']

  betty: Registration = {
    name:'betty',
    email:'betty@gmail.com',
    gender:'f',
    newsletter: true
  }

  newRegistration(reg: Registration){
    console.info(">>>>> new registration: " ,reg);
  }
}
