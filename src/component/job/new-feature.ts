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
  this.updateJobs()
  this.features = [''];
}
updateJobs() {
  this.http.post('http://localhost:3000/jobs', {feature: this.features}).subscribe((data: any) => {

  if (data.success) {
      this.features = data.features;
    }
        console.log('api data', data);
  }, (err) => {
    console.log('api error', err);
  });
}
postFeature(n) {
  this.updateJobs()
  this.features.push(n);
}
refresh() {
  this.http.get('http://localhost:3000/jobs').subscribe((data: any) => {
  if (data.success) {
      this.features = data.features;
    }
        console.log('api data', data);
  }, (err) => {
    console.log('api error', err);
  });
}
}
