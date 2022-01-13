import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  headingForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.headingForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      profession: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zipcode: new FormControl(),
      phone: new FormControl(),
      email: new FormControl()

    })
  }

}
