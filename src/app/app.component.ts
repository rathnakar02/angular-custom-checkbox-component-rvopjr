import { Component, VERSION } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inputOne = true;
  inputTwo = new FormControl(true);

  items = [
    { name: 'Dispense Date', value: false },
    { name: 'Location', value: false },
    { name: 'Hcpc', value: false },
  ];

  form;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      myFormControl: true,
    });

    this.items = [
      { name: 'Dispense Date', value: false },
      { name: 'Location', value: false },
      { name: 'Hcpc', value: false },
    ];
  }
}
