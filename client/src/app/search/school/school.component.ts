import { Component, OnInit } from '@angular/core';
import { SearchService, School } from '../search.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  schools: School[] = [];

  constructor(private search: SearchService) {}

  ngOnInit() {
    this.schools = this.search.Schools;
  }
}
