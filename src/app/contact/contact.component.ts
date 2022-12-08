import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  [x: string]: any;

  @ViewChild('myContact') myContact!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('btn') btn!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  async sendMail() {
    console.log('send mail', this.myContact);

   
    let nameField = this.nameField.nativeElement;
    let mailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let btn = this.nameField.nativeElement;


    nameField.disabled = true;
    mailField.disabled = true;
    messageField.disabled = true;
    btn.disabled = true;

    //SENDING ANIMATION

    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('mail', mailField.value);
    fd.append('message', messageField.value);

    //SEND

    await fetch('https://jahleel-rockendorfheider.developerakademie.net/mail/send_mail.php',
      {
        method: 'POST',
        body: fd
      }
    );

    nameField.disabled = false;
    mailField.disabled = false;
    messageField.disabled = false;
    btn.disabled = false;
      
    //ALERT
    
    nameField.value = '';
    mailField.value = '';
    messageField.value = '';
  }
}