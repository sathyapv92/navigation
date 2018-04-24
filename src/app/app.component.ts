import { Component, SimpleChanges } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Customer } from './interface';
import { SharedserviceService } from './sharedservice.service';
import { OnChanges, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges,DoCheck {
    ngDoCheck(): void {
        // this.missionService.missionConfirmed$.subscribe(
        //     astronaut => {
        //       this._fb = astronaut ;
        //       console.log( JSON.stringify(this._fb) +"   this._fb")
        //     });
        this._fb = this.missionService.missionAnnouncedSource1;
        console.log( JSON.stringify(this._fb) +"   this._fb")
        this.fb = this.missionService.missionConfirmedSource1;
        console.log( JSON.stringify(this.fb) +"   this.fb")
        // this.missionService.missionAnnounced$.subscribe(
        //       astronaut => {
        //           this.fb = astronaut ;
        //           console.log(   JSON.stringify(this.fb)+"   this.fb")
        //         }
        //     );
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.missionService.missionConfirmed$.subscribe(
            astronaut => {
              this._fb = astronaut ;
              console.log(   this._fb+"   this._fb")
            });
  
        this.missionService.missionAnnounced$.subscribe(
              astronaut => {
                  this.fb = astronaut ;
                  console.log(   this.fb+"   this.fb")
                }
            );
    }
    constructor(private missionService: SharedserviceService,private _fb: FormBuilder,private fb: FormBuilder) {
       
      }
      
}
