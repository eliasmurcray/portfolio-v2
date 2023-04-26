import { Component } from '@angular/core';
import { RecaptchaComponent, RecaptchaErrorParameters } from 'ng-recaptcha';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  captchaString: string = '';
  formError: string = '';
  pending: boolean = false;

  handleSubmit(event: SubmitEvent): void {
    event.preventDefault();

    if(this.pending === true) {
      return;
    }

    this.formError = '';

    if(this.captchaString === '') {
      this.formError = 'Please verify humanness with reCAPTCHA';
      return;
    }

    const form = event.target as HTMLFormElement;

    const elements = [];
    for(const element of [form[0], form[1], form[2], form[3]]) {
      const value = (element as HTMLInputElement)?.value;
      elements.push(value);
    }

    let [ name, email, subject, message] = [form[0], form[1], form[2], form[3]].map((element) => (element as HTMLInputElement)?.value);
    
    if(!email) {
      this.formError = 'Email field is required';
      return;
    }

    if(!message) {
      this.formError = 'Message field is required';
      return;
    }

    if(!name) {
      name = 'Anonymous';
    }

    if(!subject) {
      subject = 'Untitled Request';
    }

    this.pending = true;
    fetch('https://api.eliasmurcray.com:3000/contact', {
      method: 'POST',
      headers: new Headers({
        'Accept': 'text/plain',
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        token: this.captchaString,
        name,
        email,
        subject,
        message
      })
    })
      .then(() => {
        (form[0] as HTMLInputElement).value = '';
        (form[1] as HTMLInputElement).value = '';
        (form[2] as HTMLInputElement).value = '';
        (form[3] as HTMLInputElement).value = '';
        grecaptcha.reset();
        this.formError = 'Email sent successfully! You will be contacted within 5 business days. :)';
        this.pending = false;
      })
      .catch((error) => {
        this.formError = error;
        console.error(error);
      });

  }

  errored(): void {
    this.captchaString = '';
  }

  resolved(captchaResponse: string): void {
    this.captchaString = captchaResponse;
  }
}
