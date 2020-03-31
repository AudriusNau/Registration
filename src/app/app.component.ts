import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

export interface RegisterList {
  name: string;
  lastname: string;
  email: string;
  phoneNumber: number;
  Italy: boolean;
  doctor: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
    Italy: new FormControl('', [Validators.required]),
    doctor: new FormControl('', [Validators.required])
  });


  registerForm: RegisterList;
   ELEMENT_DATA: RegisterList[] = [
    { name: 'Jonas', lastname: 'Jonaitis', email : 'jonas@gmail.com', phoneNumber: 65166263, Italy: true, doctor: 'A. Balandis' },
    { name: 'Petras', lastname: 'Petraitis', email : 'petras@gmail.com', phoneNumber: 65166222, Italy: false, doctor: 'A. Gegužis' },
    { name: 'Juozas', lastname: 'Juozaitis', email : 'juozas@gmail.com', phoneNumber: 65166333, Italy: true, doctor: 'A. Birželis' },
     { name: 'Algis', lastname: 'Algaitis', email : 'algis@gmail.com', phoneNumber: 65100333, Italy: false, doctor: 'A. Rugsėjis' }
  ];

  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', [Validators.required]);
  doctors: string[] = [
    'A. Gaidys', 'A. Balandis', 'B. Burokas', 'C. Morka', 'D. Erelis', 'E. Voveraitė', 'G. Danielius', 'K. Kazlėkas'
  ];
  displayedColumns: string[] = [ 'name', 'lastname', 'email', 'phoneNumber', 'Italy', 'doctor'];
  dataSource = this.ELEMENT_DATA;
  constructor() {}
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Būtina įvesti';
    }

    return this.email.hasError('email') ? 'Blogai įvestas paštas' : '';
  }

  onSubmit() {
      this.ELEMENT_DATA.push( this.profileForm.value);
      console.log(this.profileForm.value);
      this.loadData(this.ELEMENT_DATA);
  }

  loadData(data) {
    this.dataSource = [...data];
  }
}
