import { Component } from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup} from "angular2/common";

@Component({
  selector: 'demo-form',
  styles: [ require('./demo-form.css') ],
  template: require('./demo-form.html'),
  directives: [FORM_DIRECTIVES]
})

export class DemoForm {

  onSubmit(model) {
    console.log('submitted: ' + JSON.stringify(model));
  }
}
