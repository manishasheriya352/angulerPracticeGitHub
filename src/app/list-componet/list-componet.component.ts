import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-componet',
  templateUrl: './list-componet.component.html',
  styleUrls: ['./list-componet.component.scss']
})
export class ListComponetComponent implements OnInit {

  constructor() { console.log("this is list component constructor");}

  ngOnInit(): void {
    console.log("this is list component oninit method");
  }

}
