import {Injectable} from 'angular2/core';

@Injectable()

export class CustomerService {
  createCustomer(form) {
    console.log('Creating new customer: ', form);
  }
}
