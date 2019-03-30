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
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia temporibus vitae molestiae labore dolore autem asperiores magnam. Ducimus temporibus et dicta provident aliquam! Aliquid rerum fugiat magnam sunt ea sit!",
      comment: [
        {
          text: "Very Nice",
          user: {
            firstname: "Sakshi",
            lastname: "Shreya",
            age: 123,
            image: "assets/user.png"
          }
        },
        {
          text: "Not Good",
          user: {
            firstname: "Sakshi",
            lastname: "Shreya",
            age: 123,
            image: "assets/user.png"
          }
        }
      ],
      user: {
        firstname: "Dummy",
        lastname: "User",
        age: 50,
        image: "assets/user.png"
      }
    },
    {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia temporibus vitae molestiae labore dolore autem asperiores magnam. Ducimus temporibus et dicta provident aliquam! Aliquid rerum fugiat magnam sunt ea sit!",
      comment: [],
      user: {
        firstname: "Dummy",
        lastname: "User",
        age: 50,
        image: "assets/user.png"
      }
    },
    {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia temporibus vitae molestiae labore dolore autem asperiores magnam. Ducimus temporibus et dicta provident aliquam! Aliquid rerum fugiat magnam sunt ea sit!",
      comment: [],
      user: {
        firstname: "Dummy",
        lastname: "User",
        age: 50,
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
