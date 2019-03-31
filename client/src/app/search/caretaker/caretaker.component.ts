import { Component, OnInit } from "@angular/core";
import { CareTaker, SearchService } from "../search.service";

@Component({
  selector: "app-caretaker",
  templateUrl: "./caretaker.component.html",
  styleUrls: ["./caretaker.component.css"]
})
export class CaretakerComponent implements OnInit {
  caretakers: CareTaker[] = [];
  userImage: {};

  constructor(private search: SearchService) {}

  ngOnInit() {
    this.caretakers = this.search.CareTakers;
    this.userImage = {
      "background-image": "url(" + this.caretakers[0].image + ")"
    };
  }
}
