import { Component, OnInit } from '@angular/core';
import { Doctor, SearchService } from '../search.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
  doctors: Doctor[] = [];

  constructor(private search: SearchService) {}

  ngOnInit() {
    this.doctors = this.search.Doctors;
  }
}
