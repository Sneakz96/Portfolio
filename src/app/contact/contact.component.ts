import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageSend = false;

  contact = {
    name: '', //Bind  to InputField name="name"
    email: '', //Bind to InputField name="email"
    message: '', //Bind to InputField name="message"
  };

  post = {
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

  @Input() status = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void { }

  sendMail(ngForm: any) {

    console.log(ngForm.form.controls.name);
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contact))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.messageSend = true;
            this.checkSendAlert();
            this.timeOutSendMail();
            // Here Message was send
          },
          error: (error) => {
            console.error(error);
            // Here Message was not send!!!!!
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

  checkSendAlert() {
    let alert = document.getElementById('alert');
    if (this.messageSend = true) {
      alert?.classList.remove('d-none');
    } else {
      alert?.classList.add('d-none');
    }
  }

  timeOutSendMail() {
    setTimeout(() => {
      this.messageSend = false;
    }, 2500);
  }
}