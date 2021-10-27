import { Component, OnInit,Input } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { items as orderItem, OrderService } from '../order.service' ;
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ItemPage } from '../item/item.page';

////@Input() price: orderItem;

export interface items {
  id: string;
  
  name: string;
  price: string;
  des: string;
}


@Component({
  selector: 'app-add-cart-item',
  templateUrl: './add-cart-item.page.html',
  styleUrls: ['./add-cart-item.page.scss'],
})
export class AddCartItemPage implements OnInit {
  id: any;
  name: any;
  price: any;
  quantity: any;
  amount: any;
  constructor(
    private model: ModalController,
    private service: OrderService,
    private htttp: HttpClient,
    private alertCtrl:AlertController,
    private orderService:OrderService,
    private nav:NavController
  ) { }
 
  items: items[];
  selectedItem: any;
  // price: any;
  ngOnInit() {
    this.service.getall().subscribe(response => {
      console.log("res", response)
      this.items = response;
      this.price = 0.0;
    })

    if (this.price) {
      this.price = this.price.price;
    }
  }
  close() {
    this.model.dismiss();
  }

   itemprice(){
    console.log("itemprice",this.selectedItem);
   this.price = this.selectedItem?.price;
   this.name= this.selectedItem?.name;
    //  this.price = price;
   }

   setItemAmt(){
     if(this.quantity && this.price)
     this.amount = this.quantity * this.price;
   }

   onSubmit(){
    let data: any = {
      id: this.id,
      item: this.name, 
      qnty: this.quantity,
      price: this.price,
      amt: this.amount
    //descc: this
      // pond: this.pond,
      // flvr: this.flvr,
      // file: this.file
    };
    this.orderService.saveaddcart(data);
    this.alertCtrl.create({
      header: 'Add',
      message: 'Item added Successfully',
      buttons: [
        {
          text: 'Yes'
        }
      ]
    }).then(alertE1 => alertE1.present()).then(r=> this.model.dismiss());

   }
  
}
