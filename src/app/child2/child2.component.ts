import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SharedserviceService } from '../sharedservice.service';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit,OnChanges,DoCheck {
  ngDoCheck(): void {
    this.missionService.announceMission(this.fb);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.missionService.announceMission(this.fb);
  }

  input = "sathya";

 

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private missionService:SharedserviceService
  ) {}

  ngOnInit() {
    // build the form model
    this.myForm = this.fb.group({
      name: new FormControl('', Validators.required),
      quantity: this.fb.control(123),
      ate:this.fb.control(new Date("09/13/2018"))
    })
  }

  submit() {
    console.log("Reactive Form submitted: ", this.myForm);
  }

  announce() {
    
    this.missionService.announceMission(this.fb);
    
  }
}
