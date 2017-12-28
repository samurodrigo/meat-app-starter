import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html'
})
export class DeliveryCostsComponent implements OnInit {
  @Input() itensValue: number;
  @Input() delivery: number;

  constructor() { }

  ngOnInit() {
  }

  total(){
    return this.itensValue + this.delivery;
  }

}
