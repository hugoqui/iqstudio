import { Component, OnInit } from "@angular/core";
import { IqglobalService } from "../iqglobal.service";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.css"]
})
export class ClientsComponent implements OnInit {
  constructor(private _data: IqglobalService) {}

  ngOnInit() {
    this._data.currentItem = "work";
  }
}
