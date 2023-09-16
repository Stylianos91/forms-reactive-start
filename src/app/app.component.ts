import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  eventsSubject: Subject<void> = new Subject<void>();

  genders = ['male', 'female'];
  signupForm: FormGroup;
  emailValue:any;
  ngOnInit(): void {
    this.signupForm =  new FormGroup({
      'username': new FormControl(null),
       'email': new FormControl(null),
      'gender': new FormControl('male'),
    })
  }
  onFormvalue(event){
    console.log('event',event);
     this.signupForm.setControl('email', new FormControl(event));
  }

  onSubmit() {
    this.eventsSubject.next();
    console.log('this.signupForm ', this.signupForm );
  }


}
