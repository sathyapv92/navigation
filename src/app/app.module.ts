import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MissionComponent } from './mission/mission.component';
import { SharedserviceService } from './sharedservice.service';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Child1Component,
    Child2Component,
    MissionComponent,
    TestComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule ,
    FormsModule,
    RouterModule.forRoot([
      {
        path:"home",
        component:HomeComponent,
        children: [
        
          {path: 'tracks', component: Child1Component},
          {path: 'albums', component: Child2Component}
        ]
      },
        {
          path:"test",
          component:TestComponent,
      },{
        path:"test1",
        component:TestComponent,
      }
     
     ])
  ],
  providers: [SharedserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
