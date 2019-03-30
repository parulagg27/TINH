import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  firstname: string;
  lastname: string;
  age: number;
  image: string;
  constructor() {}
}
