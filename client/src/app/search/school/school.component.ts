import { Component, OnInit } from '@angular/core';
import { SearchService, School } from '../search.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  schools: School[] = [];
  userImage: {};

  constructor(private search: SearchService) {}

  ngOnInit() {
    this.schools = this.search.Schools;
    this.userImage = {
      "background-image": "url(" + this.schools[0].image + ")"
    };
  }
}
