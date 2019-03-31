import { Component, OnInit, Input } from "@angular/core";
import * as $ from "jquery";
import { UserService } from "src/app/user.service";

export interface IPost {
  text: string;
  comment?: IPost[];
  user: UserService;
  time?: string;
}

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  @Input() post: IPost;
  userImage: {};
  file: File = null;
  $: any;
  canComment: boolean = false;
  writeComment: string = "";

  constructor() {}

  ngOnInit() {
    this.userImage = {
      "background-image": "url(" + this.post.user.image + ")"
    };
  }

  toggleComment() {
    this.canComment = !this.canComment;
  }

  async onSubmit() {
    let commentObj: IPost = {
      text: this.writeComment,
      user: {
        firstname: "Sakshi",
        lastname: "Shreya",
        age: 123,
        image: "assets/user.png"
      }
    };
    await setTimeout(() => {}, 1000);
    this.post.comment.unshift(commentObj);
  }
}
