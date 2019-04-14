import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BlogComponentComponent } from './components/blog-component/blog-component.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TableHerosComponent } from './components/table-heros/table-heros.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponentComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    TableHerosComponent,
    DocumentationComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
