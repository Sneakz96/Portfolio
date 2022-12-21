import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() status = '';
  
  messageSend = false;

  contact = {
    name: '', //Bind  to InputField name="name"
    email: '', //Bind to InputField name="email"
    message: '', //Bind to InputField name="message"
  };


  post = {
    // Where to send the post request Ex. http://my-domain/sendMail.php
    //or https://my-domain/sendMail.php if you have SSL-Certificate Active
    endPoint: 'https://jahleelr-h.de/send_mail.php',
    // What to send, notice JSON.stringify
    body: (payload: any) => JSON.stringify(payload),
    // How to send, notice Content-Type and responseType
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('btn') btn!: ElementRef;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  sendMail(ngForm: any) {
    console.log(ngForm.form.controls.name);
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contact))
        .subscribe({
          next: (response) => {
            ngForm.resetForm()
            this.messageSend = true;
            this.timeOutSendMail();
            // Here Message was send
          },
          error: (error) => {
            console.error(error);
            // Here Message was not send!!!!!
          },

          complete: () => console.info('send post complete'),
        });

      // let nameField = this.nameField.nativeElement;
      // let mailField = this.mailField.nativeElement;
      // let messageField = this.messageField.nativeElement;
      // let btn = this.nameField.nativeElement;


      // nameField.disabled = true;
      // mailField.disabled = true;
      // messageField.disabled = true;
      // btn.disabled = true;


      // let fd = new FormData();
      // fd.append('name', nameField.value);
      // fd.append('mail', mailField.value);
      // fd.append('message', messageField.value);

      //SEND

      // await fetch('https://jahleel-rockendorfheider.developerakademie.net/mail/send_mail.php',
      //   {
      //     method: 'POST',
      //     body: fd
      //   }
      // );

      // nameField.disabled = false;
      // mailField.disabled = false;
      // messageField.disabled = false;
      // btn.disabled = false;

      // //ALERT

      // nameField.value = '';
      // mailField.value = '';
      // messageField.value = '';
    }
  }
  timeOutSendMail() {
    setTimeout(() => {
      this.messageSend = false;
    }, 1000);
  }

}
