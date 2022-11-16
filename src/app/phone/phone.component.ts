import { Component, OnInit } from '@angular/core';
import { phone } from '../phone';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  constructor() { }

  phone: phone [] = []

  ngOnInit(): void {
this.phone = [
  {
    phoneName : "nokia",
    phoneModel : "N70"
  },
  {
    phoneName : "iPhone",
    phoneModel : "iPhone10"
  },
  {
    phoneName : "philips",
    phoneModel : "zT60"
  },
  {
    phoneName : "Alcatel",
    phoneModel : "c20"
  },
]

  }

}
