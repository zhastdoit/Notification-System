import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

//const SAMPLETXT: string = "Wardell Stephen Curry II (born March 14, 1988) is an American professional basketball player for the Golden State Warriors of the National Basketball Association (NBA). Many players and analysts have called him the greatest shooter in NBA history.[1] In 2014–15, Curry won the NBA Most Valuable Player Award and led the Warriors to their first championship since 1975. The following season, he became the first player in NBA history to be elected MVP by a unanimous vote and to lead the league in scoring while shooting above 50–40–90. That same year, the Warriors broke the record for the most wins in an NBA season. Curry is the son of former NBA player Dell Curry and older brother of current NBA player Seth Curry. He played college basketball for Davidson. There, he was twice named Southern Conference Player of the Year and set the all-time scoring record for both Davidson and the Southern Conference. During his sophomore year, he also set the single-season NCAA record for three-pointers made. During the 2012–13 season, Curry set the NBA record for three-pointers made in a regular season with 272. He surpassed that record in 2015 with 286, and again in 2016 with 402. During the 2013–14 season, he and teammate Klay Thompson were nicknamed the \"Splash Brothers\" en route to setting the NBA record for combined three-pointers in a season with 484, a record they broke the following season (525) and again in the 2015–16 season (678). (Abstracted from Wikipedia)";
const TWO_OPTIONS = ["Show all search results", "Show exact words only"];

@Component({
  selector: 'app-main-module',
  inputs: ['changeTrigger'],
  templateUrl: './main-module.component.html',
  styleUrls: ['./main-module.component.css']
})

export class MainModuleComponent implements OnInit {
  public options = TWO_OPTIONS;
  public choseOption: string ="Show all search results";
  public keyword: string = "";
  public inputContent: string = "";
  public outputContent: string = "";

  constructor(
    private route: ActivatedRoute,
    @Inject("data") private data
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.data.getSampleText()
        .then(sampleText => {
          this.inputContent = sampleText;
          this.outputContent = sampleText;
        });
    });
  }

  /** Usage:
   * replace(): $& contains the string matched by the last pattern match
   * RegExp(): g: global, i: case insensitive
   * replace(/\s/g, ''): kick out the all space keyword
   */
  keywordMark() {
    let key = this.keyword;
    if (this.choseOption=="Show exact words only") key=" "+this.keyword+" ";
    let pattern = key.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    let regexp = new RegExp(pattern, 'gi');
    this.outputContent = key && key.replace(/\s/g, '').length ? this.inputContent.replace(regexp, (match) => `<strong><mark>${match}</mark></strong>`) : this.inputContent;
  }

}