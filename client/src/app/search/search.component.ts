import { Component, OnInit } from "@angular/core";
declare var ol: any;

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  latitude: number = 25.4325;
  longitude: number = 81.7714;
  defaultZoom: number = 10;

  map: any;

  constructor() {}

  ngOnInit() {
    this.map = new ol.Map({
      target: "map",
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

    this.add_map_point(this.latitude, this.longitude, "/src/assets/pin.svg");
    this.add_map_point(this.latitude+1, this.longitude+1, "https://upload.wikimedia.org/wikipedia/commons/e/ec/RedDot.svg");
  }

  add_map_point(lat, lng, src) {
    var vectorLayer = new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [
          new ol.Feature({
            geometry: new ol.geom.Point(
              ol.proj.transform(
                [parseFloat(lng), parseFloat(lat)],
                "EPSG:4326",
                "EPSG:3857"
              )
            )
          })
        ]
      }),
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 0.5],
          anchorXUnits: "fraction",
          anchorYUnits: "fraction",
          src: src
        })
      })
    });
    this.map.addLayer(vectorLayer);
  }

  setCenter() {
    let view = this.map.getView();
    view.setCenter(ol.proj.fromLonLat([this.longitude, this.latitude]));
    view.setZoom(8);
  }
}
