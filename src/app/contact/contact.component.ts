import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  //מאפשר את יצוא המידע מהילד להורה @Output() הדקורטור
  @Output() addContact = new EventEmitter<{name:string, email:string, details:string}>();

  constructor() { }

  ngOnInit(): void { }

  onAddContact(name, email, details){
    this.addContact.emit({
      name: name.value,
      email: email.value,
      details: details.value
    });
    if(name.value !== '' && email.value !== '' && details.value !== '') {
      console.log("name: ", name.value)
      console.log("email: ", email.value)
      console.log("details: ", details.value)
      //call to the server
      alert("Thanks! \nYour details received successfully! \nwe will be in touch")
      name = '';
      email = ''
      details = ''
    } else {;

      alert("You didn't fill all the fieldes!")
    }
  }

}
