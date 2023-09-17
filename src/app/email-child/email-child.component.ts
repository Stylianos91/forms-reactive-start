import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-email-child',
  templateUrl: './email-child.component.html',
  styleUrls: ['./email-child.component.css']
})
export class EmailChildComponent implements OnInit {
@Output() emailValue = new EventEmitter<any>();
@Input() events: Observable<void>;
  constructor() { }
  emailForm: FormGroup;
  ngOnInit(): void {
    this.emailForm =  new FormGroup({
      'email': new FormControl(null),
    });
  this.events.pipe(take(1)).subscribe(() => this.emitFormValue());
  
  }
 
  emitFormValue() {
    console.log('this.emailForm.value', this.emailForm.value);
    this.emailValue.emit(this.emailForm.value['email']);
  }

}
