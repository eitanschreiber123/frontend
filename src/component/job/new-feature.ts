import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'new-feature',
  templateUrl: './new-feature.html',
  styleUrls: ['./new-feature.css']
})
export class newFeatures {
public features: [string];

constructor(private http: HttpClient) {
  this.features = [''];
}
postFeature(n) {
  this.features.push(n);
}
}
