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
    navigator.geolocation.getCurrentPosition(()=> {})
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

    // this.add_map_point(this.latitude, this.longitude, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6I2ZmM2UzZTtzdHJva2U6IzAw%0D%0AMDAwMDtzdHJva2Utd2lkdGg6MS4yNSIvPgo8L3N2Zz4=");
    
    this.add_map_point(this.latitude+.97, this.longitude-0.54, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6I2ZmM2UzZTtzdHJva2U6IzAw%0D%0AMDAwMDtzdHJva2Utd2lkdGg6MS4yNSIvPgo8L3N2Zz4=");
    this.add_map_point(this.latitude+.64, this.longitude+.34, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6I2ZmM2UzZTtzdHJva2U6IzAw%0D%0AMDAwMDtzdHJva2Utd2lkdGg6MS4yNSIvPgo8L3N2Zz4=");
    this.add_map_point(this.latitude+0.45, this.longitude-0.23, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6I2ZmM2UzZTtzdHJva2U6IzAw%0D%0AMDAwMDtzdHJva2Utd2lkdGg6MS4yNSIvPgo8L3N2Zz4=");
    this.add_map_point(this.latitude+.56, this.longitude+.98, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6I2ZmM2UzZTtzdHJva2U6IzAw%0D%0AMDAwMDtzdHJva2Utd2lkdGg6MS4yNSIvPgo8L3N2Zz4=");
    this.add_map_point(this.latitude+.57, this.longitude+.12, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6I2ZmM2UzZTtzdHJva2U6IzAw%0D%0AMDAwMDtzdHJva2Utd2lkdGg6MS4yNSIvPgo8L3N2Zz4=");

    this.add_map_point(this.latitude+0.5, this.longitude+0.5, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6eWVsbG93O3N0cm9rZTojMDAw%0D%0AMDAwO3N0cm9rZS13aWR0aDoxLjI1Ii8+Cjwvc3ZnPg==");
    this.add_map_point(this.latitude+.61, this.longitude+.34, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6eWVsbG93O3N0cm9rZTojMDAw%0D%0AMDAwO3N0cm9rZS13aWR0aDoxLjI1Ii8+Cjwvc3ZnPg==");
    this.add_map_point(this.latitude+0.5, this.longitude-0.323, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6eWVsbG93O3N0cm9rZTojMDAw%0D%0AMDAwO3N0cm9rZS13aWR0aDoxLjI1Ii8+Cjwvc3ZnPg==");
    this.add_map_point(this.latitude-.986, this.longitude+.938, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6eWVsbG93O3N0cm9rZTojMDAw%0D%0AMDAwO3N0cm9rZS13aWR0aDoxLjI1Ii8+Cjwvc3ZnPg==");
    this.add_map_point(this.latitude+.5327, this.longitude-.123, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6eWVsbG93O3N0cm9rZTojMDAw%0D%0AMDAwO3N0cm9rZS13aWR0aDoxLjI1Ii8+Cjwvc3ZnPg==");

    this.add_map_point(this.latitude+0.512, this.longitude+0.53, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6Z3JlZW47c3Ryb2tlOiMwMDAw%0D%0AMDA7c3Ryb2tlLXdpZHRoOjEuMjUiLz4KPC9zdmc+");
    this.add_map_point(this.latitude+.6224, this.longitude+.343, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6Z3JlZW47c3Ryb2tlOiMwMDAw%0D%0AMDA7c3Ryb2tlLXdpZHRoOjEuMjUiLz4KPC9zdmc+");
    this.add_map_point(this.latitude+0.4522, this.longitude-0.233, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6Z3JlZW47c3Ryb2tlOiMwMDAw%0D%0AMDA7c3Ryb2tlLXdpZHRoOjEuMjUiLz4KPC9zdmc+");
    this.add_map_point(this.latitude-.56, this.longitude+.983, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6Z3JlZW47c3Ryb2tlOiMwMDAw%0D%0AMDA7c3Ryb2tlLXdpZHRoOjEuMjUiLz4KPC9zdmc+");
    this.add_map_point(this.latitude+.157, this.longitude-.132, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6Z3JlZW47c3Ryb2tlOiMwMDAw%0D%0AMDA7c3Ryb2tlLXdpZHRoOjEuMjUiLz4KPC9zdmc+");

    this.add_map_point(this.latitude+0.15, this.longitude+0.53, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6Ymx1ZTtzdHJva2U6IzAwMDAw%0D%0AMDtzdHJva2Utd2lkdGg6MS4yNSIvPgo8L3N2Zz4=");
    this.add_map_point(this.latitude+.264, this.longitude+.334, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6Ymx1ZTtzdHJva2U6IzAwMDAw%0D%0AMDtzdHJva2Utd2lkdGg6MS4yNSIvPgo8L3N2Zz4=");
    this.add_map_point(this.latitude+0.345, this.longitude-0.223, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6Ymx1ZTtzdHJva2U6IzAwMDAw%0D%0AMDtzdHJva2Utd2lkdGg6MS4yNSIvPgo8L3N2Zz4=");
    this.add_map_point(this.latitude-.456, this.longitude-.938, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6Ymx1ZTtzdHJva2U6IzAwMDAw%0D%0AMDtzdHJva2Utd2lkdGg6MS4yNSIvPgo8L3N2Zz4=");
    this.add_map_point(this.latitude+.557, this.longitude+.132, "data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNj%0D%0APSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53%0D%0AMy5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3Lncz%0D%0ALm9yZy8yMDAwL3N2ZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9u%0D%0APSIxLjEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgaWQ9InN2ZzIiPgoJPGNpcmNsZSBjeD0iMTAi%0D%0AIGN5PSIxMCIgcj0iNS42MjUiIGlkPSJjMiIgc3R5bGU9ImZpbGw6Ymx1ZTtzdHJva2U6IzAwMDAw%0D%0AMDtzdHJva2Utd2lkdGg6MS4yNSIvPgo8L3N2Zz4=");
    
  
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
