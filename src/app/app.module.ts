import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { PhotoComponent } from './photo/photo.component';
import { Page404Component } from './page404/page404.component';

const nameRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'my', component: MycomponentComponent},
  {path: 'photo', component: PhotoComponent},
  {path: 'user', component: UserComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: Page404Component},
]

@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    HomeComponent,
    UserComponent,
    ContactComponent,
    PhotoComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(nameRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
