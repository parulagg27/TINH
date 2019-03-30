/// <reference types="@types/googlemaps" />

import { Component, OnInit, ViewChild } from "@angular/core";
// import { google } from "googlemaps";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  @ViewChild("googleMap") gmapElement: any;
  map: google.maps.Map;

  constructor() {}

  ngOnInit() {
    var markers = [
      { lat: 28.4685, lng: 77.0056, toolTip: 'Place 2' },
      { lat: 28.4795, lng: 77.0276, toolTip: 'Place 3' },
      { lat: 28.4605, lng: 77.0546, toolTip: 'Place 4' }
    ]

    var mapProp = {
      center: new google.maps.LatLng(28.4595, 77.0266),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.HYBRID // also use ROADMAP,SATELLITE or TERRAIN
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    var marker = new google.maps.Marker({ position: mapProp.center });
    marker.setMap(this.map);
    var infowindow = new google.maps.InfoWindow({
      content: "Hey!! Here we are"
    });
    infowindow.open(this.map, marker);
    this.setMultipleMarker(markers, this);
  }

  setMultipleMarker(markers, self) {
    markers.forEach(function(marker) {
      (function(marker) {
        let mark = new google.maps.Marker({
          position: new google.maps.LatLng(marker.lat, marker.lng)
        });
        let infowindow = new google.maps.InfoWindow({
          content: marker.toolTip
        });
        infowindow.open(self.map, mark);
        mark.setMap(self.map);
      })(marker);
    });
  }
}
