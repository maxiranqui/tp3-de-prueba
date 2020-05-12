import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  constructor(private fb: FormBuilder) { }


  pacienteForm = this.fb.group({
		nombre: [ '', Validators.required ],
		apellido: [ '' ],
		edad: [ '' ],
		direccion: this.fb.group({
			calle: [ '' ],
			numero: [ '' ]
		}),
		telefonos: this.fb.array([ this.fb.control('') ])
	});

	get telefonos() {
		return this.pacienteForm.get('telefonos') as FormArray;
	}

	agregarTelefono() {
		this.telefonos.push(this.fb.control(''));
	}

	submit() {
		this.pacienteForm.value();

		this.pacienteForm.setValue({
			nombre: 'Diego',
			apellido: 'Maradona',
			edad: 59,
			direccion: {
				calle: 'Perez'
			},
			telefonos: [ '' ]
		});

		this.pacienteForm.patchValue({ edad: 60 });
	}


























  ngOnInit(): void {
  }

}
