import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
submitted=false;
  onSubmit(d){
    this.submitted = true;
    console.log(d)
  }

  ngOnInit() {
    
  }

}

