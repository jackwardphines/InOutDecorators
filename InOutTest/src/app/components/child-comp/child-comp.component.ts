import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  @Input() myString:string;
  @Output() onClick = new EventEmitter(); 
  constructor() { }

  ngOnInit() {
  }

}
