import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEndProject';
  isLoggedIn = localStorage.getItem('token');
  userName = localStorage.getItem('username');

  clearStorage(){
    if(this.isLoggedIn){
      localStorage.clear();
      document.location.assign("/home");

    }}

}
