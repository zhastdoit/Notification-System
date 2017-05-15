import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footbar',
  templateUrl: './footbar.component.html',
  styleUrls: ['./footbar.component.css']
})
export class FootbarComponent implements OnInit {
  project: string = "BitTiger Capstone Project"
  author: string = "Group3"
  year: string = "2017"
  constructor() { }

  ngOnInit() {
  }

}
