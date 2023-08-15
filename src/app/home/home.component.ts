

import { Component,ViewChild } from '@angular/core';

import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // @ViewChild('myForm') myForm: NgForm;
  userData = {
      username: '',
      email: ''
  };

  onSubmit() {
      // if (this.myForm.valid) {
          // Form is valid, process the data
          console.log(this.userData);
      }
  }
// }
