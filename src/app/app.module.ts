import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewCourseComponent } from './components/new-course/new-course.component';
import { LogTestComponent } from './components/log-test/log-test.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { SignupPublisherComponent } from './components/signup-publisher/signup-publisher.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';   
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ServiceDetialsComponent } from './components/service-detials/service-detials.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NewCourseComponent,
    LogTestComponent,
    LoginFormComponent,
    HomeFooterComponent,
    SignupPublisherComponent,
    PaginationComponent,
    ServiceDetialsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
