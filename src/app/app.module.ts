import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { JobList } from '../component/job/list';
import { CreateJob } from '../component/job/create';
import { FormsModule }   from '@angular/forms';
import { newFeatures } from '../component/job/new-feature';
import { savedItems } from '../component/job/saved-items';
const appRoutes: Routes = [
{ path: 'list', component: JobList },
{ path: '', redirectTo: '/list', pathMatch: 'full' },
{ path: 'submit-new-job', component: CreateJob },
{ path: 'saved-items', component: savedItems },
{ path: 'new-feature', component: newFeatures },
{ path: '**', component:  JobList }
]
@NgModule({
  imports: [
    RouterModule.forRoot(
          appRoutes,
          { enableTracing: true }
        ),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    JobList,
    CreateJob,
    newFeatures,
    savedItems
  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
