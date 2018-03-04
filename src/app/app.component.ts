import { Component } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  url = 'http://dummy.restapiexample.com/api/v1/employee/34';

  subscribeResult: Employee;
  promiseResult: Employee;
  asyncResult: Employee;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getDataUsingSubscribe();
    this.getDataUsingPromise();
    this.getAsyncData();
  }

  getDataUsingSubscribe() {
    this.httpClient.get<Employee>(this.url).subscribe(data => {
      this.subscribeResult = data;
      console.log('Subscribe executed.')
    });
    console.log('I will not wait until subscribe is executed..');
  }

  getDataUsingPromise() {
    this.httpClient.get<Employee>(this.url).toPromise().then(data => {
      this.promiseResult = data;
      console.log('Promise resolved.')
    });
    console.log('I will not wait until promise is resolved..');
  }

  async getAsyncData() {
    this.asyncResult = await this.httpClient.get<Employee>(this.url).toPromise();
    console.log('No issues, I will wait until promise is resolved..');    
  }
}
