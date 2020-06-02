import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'matrix-side-menu';

  /* figure out how to send 'onAddedContact' to 'contact' component through the route */ 
  // onAddedContact(data: {name:string, email:string, details:string}) {
  //   this.contactDetails.push({ data });
  //   //send the 'data' to the server
  //   console.log("data", data)
  //   alert("Your details received successfully! \nThanks we will be in touch")
  // }
}
