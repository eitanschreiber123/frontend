import { Component } from '@angular/core';
import { JobInputs } from './newJob';
import { JobList } from './list';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'create',
  templateUrl: './create.html'
})
export class CreateJob {
  public submitted: Boolean = false;
  public job: any = {
    position: '',
    company: '',
    location: '',
    skills: ['']
  };
  
postJobs() {
  this.http.post('http://localhost:3000/jobs', {job: this.job}).subscribe((data: any) => {

  if (data.success) {

      this.job = data.jobs;
    }
        console.log('api data', data);
  }, (err) => {
    console.log('api error', err);
  });
}
  constructor (private http: HttpClient) {

  };

  onSubmit() { this.submitted = true;
this.postJobs()
  }

  addSkill() {
     this.job.skills.push('');
   }

   trackByIndex(index: number, value) {
    return index;
  }

}
