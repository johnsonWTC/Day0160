import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { phone } from '../phone';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() phonelist :phone[] = [];
  @Output() selectedPhone = new EventEmitter<phone>();


  PhoneWasSelected(phone :phone){
    this.selectedPhone.emit(phone);
  }

}
