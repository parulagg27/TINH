import { Injectable, OnInit } from "@angular/core";

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
  providedIn: "root"
})
export class SearchService implements OnInit {
  constructor() {}

  ngOnInit() {}
  
  get CareTakers() {
    return [
      {
        firstname: "Sakshi",
        lastname: "Awesome_shreya",
        exp: 12,
        image: "",
        desc: "I am very helpfull person who like children"
      },
      {
        firstname: "Yash",
        lastname: "Se na ho payega",
        exp: 13 ,
        image: "",
        desc: "Dummy"
      },
      {
        firstname: "Parul",
        lastname: "JKL",
        exp: 2,
        image: "",
        desc: "I like helping people in need."
      },
      {
        firstname: "Anjali",
        lastname: "Bhawan",
        exp: 11,
        image: "",
        desc: "Life is a song."
      },
      {
        firstname: "Bhai",
        lastname: "Sallu hai",
        exp: 16,
        image: "",
        desc: "Uda do"
      }
    ];
  }

  get Doctors() {
    return [
      {
        firstname: "Pratul",
        lastname: "Raja",
        exp: 14,
        image: "",
        desc: "Raja raja raj keraja mai samaja"
      },
      {
        firstname: "Bojack",
        lastname: "Horseman",
        exp: 13,
        image: "",
        desc: "Life is a series of endless missed opportunity"
      },
      {
        firstname: "Rick",
        lastname: "Sanchez",
        exp: 15,
        image: "",
        desc: "I am a god"
      },
      {
        firstname: "Naruto",
        lastname: "uzamaki",
        exp: 14,
        image: "",
        desc: "i am gonna be a hokage dattabayo"
      },
      {
        firstname: "Hinata ",
        lastname: "Hyuga",
        exp: 16,
        image: "",
        desc: "I am gonna be Hokage's wife"
      }
    ];
  }

  get Schools() {
    return [
      {
        schoolname: "DPS",
        address: "Long address, Long address, Long address",
        image: "",
        desc: "Special school for special "
      },
      {
        schoolname: "DEF",
        address: "Long address, Long address, Long address",
        image: "",
        desc: "Special school for special "
      },
      {
        schoolname: "DEF",
        address: "Long address, Long address, Long address",
        image: "",
        desc: "Special school for special"
      },
      {
        schoolname: "DEF",
        address: "Long address, Long address, Long address",
        image: "",
        desc: "Special school for special "
      },
      {
        schoolname: "DEF",
        address: "Long address, Long address, Long address",
        image: "",
        desc: "Special school for special "
      }
    ];
  }

  get Gears() {
    return [
      {
        name: "DEF",
        price: 12,
        image: "",
        desc: "specially made for your needs "
      },
      {
        name: "DEF",
        price: 12,
        image: "",
        desc: "specially made for your needs"
      },
      {
        name: "DEF",
        price: 12,
        image: "",
        desc: "specially made for your needs"
      },
      {
        name: "DEF",
        price: 12,
        image: "",
        desc: "specially made for your needs"
      },
      {
        name: "DEF",
        price: 12,
        image: "",
        desc: "specially made for your needs"
      }
    ];
  }
}
