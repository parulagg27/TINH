import { Injectable } from "@angular/core";

export interface Medicine {
  name: string;
}

@Injectable({
  providedIn: "root"
})
export class UserMedicinesService {
  medicines: Medicine[] = [
    {
      name: "Medicine A"
    },
    {
      name: "Medicine B"
    }
  ];

  constructor() {}
}
