import { Component, OnInit, Input } from "@angular/core";
import * as $ from "jquery";
import { UserService } from "src/app/user.service";

export interface IPost {
  text: string;
  comment: string[];
  user: UserService;
}

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  userImage: {};
  file: File = null;
  $: any;
  @Input() post: IPost;

  constructor(private user: UserService) {}

  ngOnInit() {
    this.userImage = { "background-image": "url(" + this.post.user.image + ")" };
  }
}
