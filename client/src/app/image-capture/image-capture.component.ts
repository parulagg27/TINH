import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-capture',
  templateUrl: './image-capture.component.html',
  styleUrls: ['./image-capture.component.css']
})
export class ImageCaptureComponent implements OnInit {
  result: boolean;
  constructor() { }

  ngOnInit() {
    this.result = /Android/i.test(navigator.userAgent)
    || /webOS/i.test(navigator.userAgent)
    || /iPhone/i.test(navigator.userAgent)
    || /iPad/i.test(navigator.userAgent)
    || /iPod/i.test(navigator.userAgent)
    || /Blackberry/i.test(navigator.userAgent);
  }

}
