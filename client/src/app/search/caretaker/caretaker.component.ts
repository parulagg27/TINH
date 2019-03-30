import { Component, OnInit } from "@angular/core";
import { CareTaker, SearchService } from '../search.service';
declare var ol: any;

@Component({
  selector: "app-caretaker",
  templateUrl: "./caretaker.component.html",
  styleUrls: ["./caretaker.component.css"]
})
export class CaretakerComponent implements OnInit {
  latitude: number = 25.4325;
  longitude: number = 81.7714;
  map: any;
  caretakers: CareTaker[] = [];

  constructor(private search: SearchService) {}

  ngOnInit() {
    this.caretakers = this.search.caretakers;

    var mousePositionControl = new ol.control.MousePosition({
      coordinateFormat: ol.coordinate.createStringXY(4),
      projection: "EPSG:4326",
      undefinedHTML: "&nbsp;"
    });

    this.map = new ol.Map({
      target: 'map',
      controls: ol.control.defaults({
        attributionOptions: {
          collapsible: false
        }
      }).extend([mousePositionControl]),
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([this.longitude, this.latitude]),
        zoom: 8
      })
    });

    this.map.on('click', function (args) {
      console.log(args.coordinate);
      var lonlat = ol.proj.transform(args.coordinate, 'EPSG:3857', 'EPSG:4326');
      console.log(lonlat);
      
      var lon = lonlat[0];
      var lat = lonlat[1];
      alert(`lat: ${lat} long: ${lon}`);
    });
  }

  setCenter() {
    var view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(8);
  }
}
