import { Component, OnInit } from '@angular/core';

const SAMPLE_OPTIONS = ["CS503", "UX501"];

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  public options = SAMPLE_OPTIONS;

  constructor() { }

  ngOnInit() {
  }

}
