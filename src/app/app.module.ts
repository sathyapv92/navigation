import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule ,
    RouterModule.forRoot([
      {
        path:"home",
        component:HomeComponent,
        children: [
        
          {path: 'tracks', component: Child1Component},
          {path: 'albums', component: Child2Component}
        ]
      },
     
     ],{ enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
