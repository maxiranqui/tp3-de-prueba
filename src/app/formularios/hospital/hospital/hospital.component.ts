import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  hospitalForm = this.fb.group({
		nombre: [" ",Validators.required ],
		direccion: this.fb.group({
			calle: [ '' ],
			numero: [ '' ]
		}),
	});

















  ngOnInit(): void {
  }

}
