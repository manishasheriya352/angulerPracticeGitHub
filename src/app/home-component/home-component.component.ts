import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  constructor() { 
    console.log("this is home component constructor");
  }

  ngOnInit(): void {
    console.log("this is home component ngOnInit method");
  }

}
