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
          time: "31-03-2019",
          user: {
            firstname: "Sakshi",
            lastname: "Shreya",
            age: 23,
            image: "assets/user.png"
          }
        },
        {
          text: "Not Good",
          time: "31-03-2019",
          user: {
            firstname: "Sakshi",
            lastname: "Shreya",
            age: 23,
            image: "assets/user.png"
          }
        }
      ],
      time: "31-03-2019",
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
      time: "30-03-2019",
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
        "You first wonder why this happened to you. And then you move on with your life and try and do everything you can for your child. It almost never seems enough, the pain and the doctor visits and the injections. But everything is worth it when you see your son sleeping quietly after dinner and an extensive dosage of medicines.",
      time: "29-03-2019",
      comment: [],
      user: {
        firstname: "Usha",
        lastname: "Manohar",
        age: 37,
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
