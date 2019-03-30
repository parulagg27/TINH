import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/user.service";
import * as $ from "jquery";
import { PrescriptionService } from "src/app/prescription.service";

@Component({
  selector: "user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.css"]
})
export class UserCardComponent implements OnInit {
  userImage: {};
  file: File = null;
  $: any;

  constructor(
    private user: UserService,
    private presService: PrescriptionService
  ) {}

  ngOnInit() {
    this.userImage = { "background-image": "url(" + this.user.image + ")" };
  }

  async onFileChange(event) {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = function(e) {
        $("#prescription-image").attr(
          "src",
          (<FileReader>e.currentTarget).result
        );
        $(".main").animate(
          {
            scrollTop: $("#prescription-image").offset().top - $(".header-main").height() - $(".title").height() - 16
          },
          1000
        );
      };
      reader.readAsDataURL(event.target.files[0]);
      this.presService.PrescriptionAvailable = true;
    }
  }
}
