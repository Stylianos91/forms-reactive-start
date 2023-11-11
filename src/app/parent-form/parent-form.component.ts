import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css']
})
export class ParentFormComponent implements OnInit {

  eventsSubject: Subject<void> = new Subject<void>();
  options = ['alpha', 'beta','gamma'];
  selectedOption = "alpha";
  optiones: string[] = ["10", "20", "50"];
  selectedQuantity;
  genders = ['male', 'female'];
  signupForm: FormGroup;
  emailValue:any;
  ngOnInit(): void {
    this.signupForm =  new FormGroup({
      'username': new FormControl(null),
       'email': new FormControl(null),
      'gender': new FormControl('male'),
      'options': new FormControl('alpha'),
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
