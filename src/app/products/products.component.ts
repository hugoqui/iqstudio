import { Component, OnInit } from "@angular/core";
import { IqglobalService } from "../iqglobal.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  constructor(private _data: IqglobalService) { }

  ngOnInit() {
    this._data.currentItem = 'work';
  }
}
