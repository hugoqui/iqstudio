import { Component, OnInit } from '@angular/core';
import { IqglobalService } from '../iqglobal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _data: IqglobalService) { }

  ngOnInit() {
  }

}
