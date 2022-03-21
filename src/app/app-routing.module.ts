import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TasklistComponent } from './tasklist/tasklist.component';

const routes: Routes = [
  { path:'category/:id', component:TasklistComponent },
  { path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = 
  [
    TasklistComponent
  ]
