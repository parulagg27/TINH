import { Component, OnInit } from "@angular/core";
import { SearchService, Gear } from '../search.service';

@Component({
  selector: "app-gear",
  templateUrl: "./gear.component.html",
  styleUrls: ["./gear.component.css"]
})
export class GearComponent implements OnInit {
  gears: Gear[] = [];
  userImage: {};

  constructor(private search: SearchService) {}

  ngOnInit() {
    this.gears = this.search.Gears;
    this.userImage = {
      "background-image": "url(" + this.gears[0].image + ")"
    };
  }
}
