import { Component, OnInit } from '@angular/core';
declare let L:any;
@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestApiComponent implements OnInit {
  
  
  constructor() { }

  ngOnInit() {
    var ny =[41.432053, 2.180550];
    var map = L.map('map').setView(ny, 6);
    var marker = L.marker(ny).addTo(map);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 20
    }).addTo(map);

    marker.bindPopup('<h3> Tolok <h3>')
  }

}
