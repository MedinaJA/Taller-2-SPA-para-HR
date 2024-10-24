import { Component, OnInit } from '@angular/core';
import { employee, EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent implements OnInit{

  employee:employee[] = [];

  constructor(private _employeesService: EmployeeService, private route:Router){
  }

  ngOnInit(): void {
    this.employee = this._employeesService.getEmployees();
  }
  
}
