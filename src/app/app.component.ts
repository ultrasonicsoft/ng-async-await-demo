import { Component } from '@angular/core';
import { Employee } from './employee.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverData: Employee;
  asyncServerData: Employee;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.getData();
    this.getAsyncData();
  }

  getData() {
    this.dataService.getData().subscribe(data => {
      this.serverData = data;
    })
  }

  async getAsyncData() {
    this.asyncServerData = await this.dataService.getAsyncData();
  }
}
