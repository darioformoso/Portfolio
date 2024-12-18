import { Component, OnInit } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'contact-me',
  templateUrl: 'contact-me.component.html',
  styleUrls: ['contact-me.component.scss'],
})
export class ContactMeComponent implements OnInit {
  public submitLoading = false;

  public fields = [
    { label: 'Full Name', id: 'user_name' },
    { label: 'Email', id: 'user_email' },
  ];
  constructor() {}

  public ngOnInit() {}
  public sendEmail(e: Event) {
    e.preventDefault();
    this.submitLoading = true;
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
          alert('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        }
      );
  }
}
