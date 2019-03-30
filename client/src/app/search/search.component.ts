import { Component, OnInit, ViewChild } from "@angular/core";
declare var ol: any;

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  latitude: number = 25.4325;
  longitude: number = 81.7714;

  map: any;

  constructor() {}

  ngOnInit() {}
}
