import { Component } from '@angular/core';
import { JobList } from './list';
import { CreateJob } from './create';

@Component({
  selector: 'saved-items',
  templateUrl: './saved-items.html',
  styleUrls: ['./saved-items.css']
})

export class savedItems {
savedJobs: [string];
constructor() {
this.savedJobs = [''];
}
saveJob(n) {
  this.savedJobs.push(n);
}

}
