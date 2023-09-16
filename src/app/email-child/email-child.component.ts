import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-email-child',
  templateUrl: './email-child.component.html',
  styleUrls: ['./email-child.component.css']
})
export class EmailChildComponent implements OnInit {
private eventsSubscription: Subscription;
@Output() emailValue = new EventEmitter<any>();
@Input() events: Observable<void>;
  constructor() { }
  emailForm: FormGroup;
  ngOnInit(): void {
    this.emailForm =  new FormGroup({
      'email': new FormControl(null),
    });
    this.eventsSubscription = this.events.subscribe(() => this.emitFormValue());
  
  }
 
  
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }
  emitFormValue() {
    console.log('this.emailForm.value', this.emailForm.value);
    this.emailValue.emit(this.emailForm.value['email']);
  }

}
