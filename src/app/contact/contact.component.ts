import { Component, OnInit } from "@angular/core";
import { Email } from "../../assets/Scripts/mail";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  constructor() {}
  emailSender = new Email();

  name = "";
  phone = "";
  email = "";
  message = "";

  ngOnInit() {}

  SendEmail() {
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

    console.log(body);

    this.emailSender.send(
      "contactoweb@mail.com",
      "hugo_2555@hotmail.com",
      "Contacto desde Sitio Web - iQ Studio",
      body,
      "smtp.gmail.com",
      "hugo2555@gmail.com",
      "uno1dos2tres3",
      ""
    );
    alert("Muchas gracias por contactarnos. \nEn breve un asesor se comunicará con usted.");
    // location.reload();
  }
}
