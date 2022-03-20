import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EssentialsService } from './essentials.service';
import { NavbarComponent } from './navbar/navbar.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasklistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [EssentialsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
