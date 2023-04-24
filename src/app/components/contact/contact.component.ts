import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  handleSubmit(event: SubmitEvent): void {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    const [ name, email, subject, message] = [form[0], form[1], form[2], form[3]].map((element) => (element as HTMLInputElement).value);

    
  }
}
