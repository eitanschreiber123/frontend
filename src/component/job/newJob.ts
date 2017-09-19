import { Component } from '@angular/core';
export class JobInputs {
 constructor (
   public position: string,
   public company: string,
   public location: string,
   public skills: [string],
 ) { }
}
