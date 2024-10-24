import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employees: employee[] = [
    {
      employee_id:"100",
      first_name: "Steven",
      last_name: "King",
      email: "SKING",
      phone_number: "515.123.4567",
      hire_date: "1987-06-17 00:00:00",
      job_id: "AD_PRES",
      salary: "24000.00",
      commission_pct: "",
      manager_id: "90",
      department_id: ""
    },
    {
      employee_id:"101",
      first_name: "Lex",
      last_name: "De Haan",
      email: "LDEHAAN",
      phone_number: "515.123.4569",
      hire_date: "1993-01-13 00:00:00",
      job_id: "AD_VP",
      salary: "17000.00",
      commission_pct: "",
      manager_id: "100",
      department_id: "90"
    },
    {
      employee_id:"102",
      first_name: "Alexander",
      last_name: "Hunold",
      email: "AHUNOLD",
      phone_number: "590.423.4567",
      hire_date: "1990-01-03 00:00:00",
      job_id: "IT_PROG",
      salary: "9000.00",
      commission_pct: "",
      manager_id: "102",
      department_id: "60"
    },
    {
      employee_id:"103",
      first_name: "Bruce",
      last_name: "Ernst",
      email: "BERNST",
      phone_number: "590.423.4568",
      hire_date: "1991-05-21 00:00:00",
      job_id: "IT_PROG",
      salary: "6000.00",
      commission_pct: "",
      manager_id: "103",
      department_id: "60"
    },
    {
      employee_id:"104",
      first_name: "David",
      last_name: "Austin",
      email: "DAUSTIN",
      phone_number: "590.423.4569",
      hire_date: "1997-06-25 00:00:00",
      job_id: "IT_PROG",
      salary: "4800.00",
      commission_pct: "",
      manager_id: "103",
      department_id: "60"
    }
];

  getEmployees(){
    return this.employees;
  }
}

export interface employee {
  employee_id: string;
  first_name:string;
  last_name:string;
  email:string;
  phone_number:string;
  hire_date:string;
  job_id:string;
  salary:string;
  commission_pct:string;
  manager_id:string;
  department_id:string;
}
