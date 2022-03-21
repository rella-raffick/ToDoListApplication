import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EssentialsService } from './essentials.service';
import { NavbarComponent } from './navbar/navbar.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes:Routes=[
  {path:'category/:id',component:TasklistComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasklistComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [EssentialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
