import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';

@Injectable()
export class DataService {
  url = 'http://dummy.restapiexample.com/api/v1/employee/1';

  constructor(private httpClient: HttpClient) {
  }

  getData() {
    return this.httpClient.get<Employee>(this.url);
  }

  async getAsyncData() {
    return await this.httpClient.get<Employee>(this.url).toPromise();
  }

}
