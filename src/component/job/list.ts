import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'job-list',
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class JobList {
 private jobs: Array<any> = [];

  constructor (private http: HttpClient) {
    this.updateJobs()

  };
  updateJobs() {
    this.http.get('http://localhost:3000/jobs').subscribe((data: any) => {
    if (data.success) {
        this.jobs = data.jobs;
      }
          console.log('api data', data);
    }, (err) => {
      console.log('api error', err);
    });
  }
saveJob(n) {

}
}
