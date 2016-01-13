import { Component } from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators,
  AbstractControl, Control} from 'angular2/common';

@Component({
  selector: 'demo-form',
  styles: [ require('./demo-form.css') ],
  template: require('./demo-form.html'),
  directives: [FORM_DIRECTIVES]
})

export class DemoForm {
  myForm: ControlGroup;
  firstName: AbstractControl;

  phoneValidator(control: Control) {
    if (!control.value.match(/^\+421/)) {
      return {invalidPhone: true};
    }
  }

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      firstName: ['Miro', Validators.required],
      lastName: ['Bulo', Validators.required],
      email: ['miro@bulo.com', Validators.required],
      phone: ['+421123456798', Validators.compose([
        Validators.required,
        this.phoneValidator
      ])]
    });

    this.myForm.controls['firstName'].valueChanges.subscribe(
      (value: string) => {
        console.log('name value changed: ', value);
      }
    );

    this.myForm.valueChanges.subscribe(
      (value: string) => {
        console.log('form value changed: ', value);
      }
    );
  }

  onSubmit(model) {
    console.log('submitted: ' + JSON.stringify(model));
  }

}
