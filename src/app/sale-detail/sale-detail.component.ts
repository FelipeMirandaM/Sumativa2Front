import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sale-detail',
  templateUrl: './sale-detail.component.html',
  styleUrls: ['./sale-detail.component.css']
})
export class SaleDetailComponent implements OnInit {
  productList!:Array<object>
  @Input() shoppingCart!: any;
  subTotal!:number;
  iva!:number;
  total!:number;
  constructor() { }

  ngOnInit(): void {
    console.log("Asd")
  }
  ngOnChanges(changes: SimpleChanges): void{
      console.log(this.shoppingCart)

  }

}

