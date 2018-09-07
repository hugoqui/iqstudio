import { Component, OnInit } from "@angular/core";
import { Email } from "../../assets/Scripts/mail";
import { IqglobalService } from "../iqglobal.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  constructor(private _data: IqglobalService) {}
  emailSender = new Email();
  error = false;
  name = "";
  phone = "";
  email = "";
  message = "";

  ngOnInit() {
    this._data.currentItem = "contact";
  }

  Validate() {
    if (this.name === "") {
      this.error = true;
    }
    if (this.phone === "") {
      this.error = true;
    }
    if (this.email === "") {
      this.error = true;
    }
    if (this.message === "") {
      this.error = true;
    }
    return !this.error;
  }

  SendEmail() {
    if (this.Validate() === true) {
      const body =
        "<strong>Nombre: </strong>" +
        this.name +
        "<br>" +
        "<strong>Telefono: </strong>" +
        this.phone +
        "<br>" +
        "<strong>Email: </strong>" +
        this.email +
        "<br><br>" +
        "<strong>Mensaje: </strong><br>" +
        this.message;

      this.emailSender.send(
        "contactoweb@mail.com",
        "info@iqstudiogt.com",
        "Contacto desde Sitio Web - iQ Studio",
        body,
        "smtp.gmail.com",
        "hugo2555@gmail.com",
        "uno1dos2tres3",
        ""
      );
      alert(
        "Muchas gracias por contactarnos. \nEn breve un asesor se comunicará con usted."
      );
      this.name = '';
      this.phone = '';
      this.email = '';
      this.message = '';
    }
    // location.reload();
  }
}
