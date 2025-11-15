import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Alert } from "../alert/alert";


@Component({
  selector: 'app-contact',
  imports: [CommonModule,
    ReactiveFormsModule, Alert],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  standalone: true,
})
export class Contact {

  btnText = 'Send Email';

  textoCampo: string = '';

  recibirTexto(texto: string): void {
    this.textoCampo = texto;
  }

  cambioText() {
    this.btnText = 'Sending...';
  }
  isAlertVisible: boolean = false;
  alertMessage: string = '';

  onAlertClosed(): void {
    this.isAlertVisible = false;
    this.btnText = 'Send Email';
  }


  showAlert(): void {
    this.alertMessage = 'Your message has been sent!';
    this.isAlertVisible = true;
  }

  form!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
ngOnInit(): void {
  this.form = this.formBuilder.group({
    to_name: 'Josias Matos',
    from_name: '',
    from_email: '',
    message: '',
  });
}

  user_id = 'y8gnFWbe0iEmcAFQW';

  async sendEmail() {
    if (
      this.form.value.from_name == '' ||
      this.form.value.from_email == '' ||
      this.form.value.message == ''
    ) {
      alert('Please fill all the fields');
      return;
    } else {
      this.cambioText();
      emailjs.init(this.user_id);
      const response = await emailjs.send(
        'service_jj3ned6',
        'template_123nyfv',
        {
          from_name: this.form.value.from_name,
          email: this.form.value.from_email,
          message: this.form.value.message,
        }
      );
      this.form.reset();
      if (response.status === 200) {
        this.showAlert();
      }
    }
  }
}

