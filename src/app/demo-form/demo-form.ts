import { Component } from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators,
  AbstractControl} from 'angular2/common';

@Component({
  selector: 'demo-form',
  styles: [ require('./demo-form.css') ],
  template: require('./demo-form.html'),
  directives: [FORM_DIRECTIVES]
})

export class DemoForm {
  myForm: ControlGroup;
  firstName: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      firstName: ['', Validators.required],
      lastName: ['Bulo'],
      email: ['miro@bulo.com'],
      phone: ['123456798']
    });
  }

  onSubmit(model) {
    console.log('submitted: ' + JSON.stringify(model));
  }
}
