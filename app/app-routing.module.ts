import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { InsertEmployeeComponent } from './components/insert-employee/insert-employee.component';

const routes: Routes = [
  { path:'home', component:HomeComponent},
  { path:'list-employees', component:ListEmployeesComponent},
  { path:'insert-employee', component:InsertEmployeeComponent},
  { path:'**', redirectTo:'/list-employees', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
