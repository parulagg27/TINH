import { Component, OnInit, OnDestroy } from "@angular/core";
import { PrescriptionService } from "../prescription.service";
import { Subscription } from "rxjs";
import { IPost } from "./post/post.component";
import { UserService } from "../user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  available: boolean;
  posts: IPost[] = [
    {
      text:
        "I would like to tell about an incident that happened with my son, who is 8 and suffers from cerebral palsy. This 13th march his conditions worsened while we were on a holiday and were not able to find any good qualified doctor using HINT we were able to find Dr. abhay who had an excellent past record.",
      comment: [
        {
          text: "Very Nice",
          user: {
            firstname: "Sakshi",
            lastname: "Shreya",
            age: 23,
            image: "assets/user.png"
          }
        },
        {
          text: "Not Good",
          user: {
            firstname: "Sakshi",
            lastname: "Shreya",
            age: 23,
            image: "assets/user.png"
          }
        }
      ],
      user: {
        firstname: "vaihav",
        lastname: "Rawat",
        age: 50,
        image: "assets/user.png"
      }
    },
    {
      text:
      "I often come across situations when, me  and my wife have to go out for meetings and leave our 6 year old son with down syndrome. Leaving our son alone without any supervision isn't even an option for us so with the help of HINT we found Mrs radha gupta who has worked for 13 years in daycare  for specially ablled.",
      comment: [],
      user: {
        firstname: "Sunny ",
        lastname: "Sharma",
        age: 46,
        image: "assets/user.png"
      }
    },
    {
      text:
        "It starts with one thing i don't know why it doesn't even matter how hard you try",
      comment: [],
      user: {
        firstname: "Linkin",
        lastname: "Park",
        age: 54,
        image: "assets/user.png"
      }
    }
  ];

  constructor(private presService: PrescriptionService) {
    this.available = presService.PrescriptionAvailable;
  }

  ngOnInit() {
    this.subscription = this.presService.prescriptionChanged.subscribe(
      (available: boolean) => {
        this.available = available;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
