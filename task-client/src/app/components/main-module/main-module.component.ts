import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-main-module',
  inputs: ['changeTrigger'],
  templateUrl: './main-module.component.html',
  styleUrls: ['./main-module.component.css']
})

export class MainModuleComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
