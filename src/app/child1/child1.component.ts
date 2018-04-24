import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { Customer } from '../interface';
import { SharedserviceService } from '../sharedservice.service';
import { OnChanges, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit,OnChanges,DoCheck {
  ngDoCheck(): void {
    this.missionService.confirmMission(this._fb);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.missionService.confirmMission(this._fb);
  }

  
 child1 = "child1 works";
 public myForm: FormGroup;

 

  ngOnInit() {
      this.myForm = this._fb.group({
          name: ['', [Validators.required, Validators.minLength(5)]],
          addresses: this._fb.array([
              this.initAddress(),
          ])
      });
  }

  initAddress() {
      return this._fb.group({
          street: ['', Validators.required],
          postcode: ['']
      });
  }

  addAddress() {
      const control = <FormArray>this.myForm.controls['addresses'];
      control.push(this.initAddress());
  }

  removeAddress(i: number) {
      const control = <FormArray>this.myForm.controls['addresses'];
      control.removeAt(i);
  }

  save(model: Customer) {
      // call API to save
      // ...
      console.log(model);
  }

  constructor(private missionService: SharedserviceService,private _fb: FormBuilder) {
    this.missionService.confirmMission(this._fb);
  }

  // announce() {
  //   let mission = this.missions[this.nextMission++];
  //   this.missionService.announceMission(mission);
  //   this.history.push(`Mission "${mission}" announced`);
  //   if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  // }
}

