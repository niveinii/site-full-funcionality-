import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    formBuilder.group({username: ['', Validators.required], password: ['', Validators.required]});
   }

  ngOnInit() {
  }
  signUp(email: String, username: String, password: String) {
    const user:Object = {email: email, username: username, password: password};
    this.userService.signUp(user).subscribe(res => {
      console.log(res)
      document.querySelectorAll("input").forEach(item => item.value = '');
    });
  }
  logIn(emails:String, passwords:String) {
    const user:Object = {email: emails, password: passwords};
    this.userService.logIn(user).subscribe(res => {
      document.querySelectorAll("input").forEach(item => item.value = '');
      localStorage.setItem('token', res['token']);
      localStorage.setItem('username',res['username']);
      document.location.assign("/home");
    })
  }

}