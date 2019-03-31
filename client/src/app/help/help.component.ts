import { Component, OnInit } from "@angular/core";
import { IPost } from "../dashboard/post/post.component";

@Component({
  selector: "app-help",
  templateUrl: "./help.component.html",
  styleUrls: ["./help.component.css"]
})
export class HelpComponent implements OnInit {
  firstname: string;
  lastname: string;
  ageOfNeedy: number;
  text: string;
  post: IPost;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.post = {
      text: this.text,
      user: {
        firstname: this.firstname,
        lastname: this.lastname,
        age: this.ageOfNeedy,
        image: "assets/user.png"
      }
    }
    console.log(this.post);
  }
}
