import { Component, OnInit } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'contact-me',
  templateUrl: 'contact-me.component.html',
  styleUrls: ['contact-me.component.scss'],
})
export class ContactMeComponent implements OnInit {
  constructor() {}

  public ngOnInit() {}
  public sendEmail(e: Event) {
    console.warn('here');
    e.preventDefault();

    emailjs
      .sendForm(
        'my_service123',
        'my_template123',
        e.target as HTMLFormElement,
        {
          publicKey: 'IOEt47AObRyQc6RFP',
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
  }
}
