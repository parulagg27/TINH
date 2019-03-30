import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {
  private prescriptionAvailable: boolean = false;
  prescriptionChanged = new Subject<boolean>();

  constructor() {}

  set PrescriptionAvailable(val: boolean) {
    this.prescriptionAvailable = val;
    this.prescriptionChanged.next(this.prescriptionAvailable);
  }

  get PrescriptionAvailable() {
    return this.prescriptionAvailable;
  }
}
