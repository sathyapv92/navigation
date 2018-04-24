import { Component, OnInit } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { AfterViewInit, AfterContentInit } from '@angular/core';
import { Child2Component } from '../child2/child2.component';
import { ViewChild } from '@angular/core';
import { ContentChildren } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit ,AfterContentInit{
  ngAfterContentInit(): void {
    console.log("child1"+this.child1.child1);
  }
  ngAfterViewInit(): void {
    console.log("child"+this.child.input);
    console.log(this.child);
    console.log(this.tes);
  }
  @ContentChildren(Child1Component)
  private child1:Child1Component;

  @ViewChildren(Child2Component) 
  private child:Child2Component;

  @ViewChild('test') tes;

  constructor() { }

  ngOnInit() {
  }

}
