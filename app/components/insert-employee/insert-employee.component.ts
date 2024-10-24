import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insert-employee',
  templateUrl: './insert-employee.component.html',
  styleUrl: './insert-employee.component.css'
})
export class InsertEmployeeComponent implements OnInit {

  employeeForm!: FormGroup;

  constructor(private _employeeService: EmployeeService, private route: Router, private fb: FormBuilder){}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      employee_id: ['', Validators.required],
      first_name: ['', [Validators.required, Validators.maxLength(50)]],
      last_name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.pattern('\\d{3}-\\d{3}-\\d{4}')]],
      hire_date: ['', Validators.required],
      job_id: ['', [Validators.required, Validators.maxLength(10)]],
      salary: ['', Validators.required],
      commission_pct: [''],
      manager_id: ['', Validators.required],
      department_id: ['', Validators.required],
    });
  }
  Back(){
    this.route.navigate(['/list-employees']);
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      console.log('Form Submitted', this.employeeForm.value);
      this.Back();
    } else {
      console.log('Form is invalid');
    }
  }
}
