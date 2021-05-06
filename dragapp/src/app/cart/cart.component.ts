import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';

interface Product {
  proId: number;
  img: string;
  qty: number;
  baseAmount: number;
  discount:number;
  totalAmount?: number;
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  total: number=0;
  grandtot:number=0;
  dis:number=0;
  constructor() { }
  productArray: Product[]=[{
    proId:1,
    img:"https://danielk.tech/user/pages/01.home/best-angular-books-of-2021/learn%20angular%20in%2024%20hours.jpeg",
    qty:1,
    baseAmount: 800,
    discount:10,
    },
    {
      proId:2,
      img:"https://imgv2-2-f.scribdassets.com/img/word_document/382516900/original/7d5b503a5c/1583183117?v=1",
      qty:1,
      baseAmount: 1000,
      discount:20,
      },
      {
        proId:3,
        img:"https://danielk.tech/user/pages/01.home/best-angular-books-of-2021/learn%20angular%20in%2024%20hours.jpeg",
        qty:1,
        baseAmount: 500,
        discount:5,
        }
    ];
  ngOnInit(): void {
    this.productArray.forEach((product) => {
      product.totalAmount = product.baseAmount;
      this.total=this.total+product.totalAmount;
      this.dis=this.dis+product.discount
    });
  }

inc(prod:any)
{
  prod.qty=prod.qty+1;
  prod.totalAmount=prod.baseAmount*prod.qty;
  this.total=this.total+prod.baseAmount;
}
dec(prod:any)
{
  if(prod.qty!=1)
  {
    prod.qty=prod.qty-1;
    prod.totalAmount=prod.baseAmount*prod.qty;
    this.total=this.total-prod.baseAmount;
  }
}

remove(prod:any){
  console.log("removed"+ prod.proId)
  this.productArray.splice(prod.proId-1,1);
  this.total=this.total-prod.totalAmount;
  this.dis=this.dis-prod.discount;
  console.log(prod)
}
}
