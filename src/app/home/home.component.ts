import { Component, HostListener, ElementRef, OnInit } from "@angular/core";

import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { IqglobalService } from "../iqglobal.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  animations: [
    trigger("scrollAnimation", [
      state(
        "show",
        style({
          opacity: 1,
          transform: "translateY(0)"
        })
      ),
      state(
        "hide",
        style({
          opacity: 0,
          transform: "translateY(10%)"
        })
      ),
      transition("show => hide", animate("700ms ease-out")),
      transition("hide => show", animate("700ms ease-in"))
    ])
  ]
})
export class HomeComponent implements OnInit {
  constructor(public el: ElementRef, private _data: IqglobalService) {}
  state = "hide";

  ngOnInit() {
    this._data.currentItem = "home";
  }

  @HostListener("window:scroll", ["$event"])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    // const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition >= componentPosition) {
      this.state = "show";
    } else {
      // this.state = "hide";
    }
  }
}
