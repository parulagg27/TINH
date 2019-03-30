import { Injectable, OnInit } from '@angular/core';

export interface CareTaker {
  firstname: string;
  lastname: string;
  exp: number;
  image: string;
  desc: string;
}

export interface Doctor {
  firstname: string;
  lastname: string;
  exp: number;
  image: string;
  desc: string;
}

export interface School {
  schoolname: string;
  address: string;
  image: string;
  desc: string;
}

export interface Gear {
  name: string;
  price: number;
  image: string;
  desc: string;
}

@Injectable({
  providedIn: 'root'
})
export class SearchService implements OnInit {
  caretakers: CareTaker[];
  doctors: Doctor[];
  schools: School[];
  gears: Gear[];
  constructor() { }
  ngOnInit() {
    this.caretakers = [{
      firstname: "ABC",
      lastname: "DEF",
      exp: 12,
      image: "",
      desc: "Dummy Dummy Dummy Dummy Dummy Dummy"
    }, {
      firstname: "LMN",
      lastname: "OPQ",
      exp: 13,
      image: "",
      desc: "Dummy1 Dummy1 Dummy1 Dummy1 Dummy1 Dummy1"
    }, {
      firstname: "GHI",
      lastname: "JKL",
      exp: 15,
      image: "",
      desc: "Dummy3 Dummy3 Dummy3 Dummy3 Dummy3 Dummy3"
    }, {
      firstname: "XYZ",
      lastname: "ABC",
      exp: 14,
      image: "",
      desc: "Dummy2 Dummy2 Dummy2 Dummy2 Dummy2 Dummy2"
    }, {
      firstname: "RST",
      lastname: "UVW",
      exp: 16,
      image: "",
      desc: "Dummy5 Dummy5 Dummy5 Dummy5 Dummy5 Dummy5"
    }];

    this.doctors = [{
      firstname: "ABC",
      lastname: "DEF",
      exp: 12,
      image: "",
      desc: "Dummy Dummy Dummy Dummy Dummy Dummy"
    }, {
      firstname: "LMN",
      lastname: "OPQ",
      exp: 13,
      image: "",
      desc: "Dummy1 Dummy1 Dummy1 Dummy1 Dummy1 Dummy1"
    }, {
      firstname: "GHI",
      lastname: "JKL",
      exp: 15,
      image: "",
      desc: "Dummy3 Dummy3 Dummy3 Dummy3 Dummy3 Dummy3"
    }, {
      firstname: "XYZ",
      lastname: "ABC",
      exp: 14,
      image: "",
      desc: "Dummy2 Dummy2 Dummy2 Dummy2 Dummy2 Dummy2"
    }, {
      firstname: "RST",
      lastname: "UVW",
      exp: 16,
      image: "",
      desc: "Dummy5 Dummy5 Dummy5 Dummy5 Dummy5 Dummy5"
    }];

    this.schools = [{
      schoolname: "DEF",
      address: "Long address, Long address, Long address",
      image: "",
      desc: "Dummy Dummy Dummy Dummy Dummy Dummy"
    }, {
      schoolname: "DEF",
      address: "Long address, Long address, Long address",
      image: "",
      desc: "Dummy Dummy Dummy Dummy Dummy Dummy"
    }, {
      schoolname: "DEF",
      address: "Long address, Long address, Long address",
      image: "",
      desc: "Dummy Dummy Dummy Dummy Dummy Dummy"
    }, {
      schoolname: "DEF",
      address: "Long address, Long address, Long address",
      image: "",
      desc: "Dummy Dummy Dummy Dummy Dummy Dummy"
    }, {
      schoolname: "DEF",
      address: "Long address, Long address, Long address",
      image: "",
      desc: "Dummy Dummy Dummy Dummy Dummy Dummy"
    }];

    this.gears = [{
      name: "DEF",
      price: 12,
      image: "",
      desc: "Dummy Dummy Dummy Dummy Dummy Dummy"
    }, {
      name: "DEF",
      price: 12,
      image: "",
      desc: "Dummy Dummy Dummy Dummy Dummy Dummy"
    }, {
      name: "DEF",
      price: 12,
      image: "",
      desc: "Dummy Dummy Dummy Dummy Dummy Dummy"
    }, {
      name: "DEF",
      price: 12,
      image: "",
      desc: "Dummy Dummy Dummy Dummy Dummy Dummy"
    }, {
      name: "DEF",
      price: 12,
      image: "",
      desc: "Dummy Dummy Dummy Dummy Dummy Dummy"
    }];
  }
}
