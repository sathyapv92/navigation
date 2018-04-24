import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';

@Injectable()
export class SharedserviceService {

  constructor() { }
 // Observable string sources
  missionAnnouncedSource = new Subject<FormBuilder>();
  missionConfirmedSource = new Subject<FormBuilder>();
  missionAnnouncedSource1 = new FormBuilder;
  missionConfirmedSource1 = new FormBuilder;
 // Observable string streams
 missionAnnounced$ = this.missionAnnouncedSource.asObservable();
 missionConfirmed$ = this.missionConfirmedSource.asObservable();

 // Service message commands
 announceMission(mission: FormBuilder) {
  
   this.missionAnnouncedSource.next(mission);
   console.log(this.missionAnnounced$);
   this.missionAnnouncedSource1 = mission;
 }

 confirmMission(astronaut: FormBuilder) {
   this.missionConfirmedSource.next(astronaut);
   console.log(this.missionConfirmed$);
   this.missionConfirmedSource1 = astronaut;
 }
}
