import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit, AfterViewInit {
  @ViewChild('myVar') myVar : any;
  @Input() testInput : any;
  constructor() {
    console.log("constructor");
    console.log(this.testInput);
  }

  ngOnInit(): void {
    console.log("ngOninit called");
    console.log(this.testInput);
  }

  ngAfterViewInit() {
    console.log(this.myVar);
  }
  

}
