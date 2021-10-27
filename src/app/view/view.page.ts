import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { OrderService,order } from '../order.service';

export interface cart_items{
  id:any;
  item:any;
  qnty:any;
  }

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
  order: order[];
  @Input() cart_items:order;
  
  public peproni:any;
  public cake:any;
  constructor(
    private service:OrderService,
    private navCtrl:NavController,
    private platform:Platform,
    private model:ModalController
  ) { 
   }
   close(){
     this.model.dismiss();
   }
  ngOnInit() {
    // this.service.getallorder().subscribe(response => {
    //   this.order = response;


    this.peproni=this.order["cheif_status"] ==0 ;
    //console.log(this.order);
    //console.log(JSON.parse(this.order["cart_items"]));
    this.order["cart_items"] = JSON.parse(this.order["cart_items"]);
    //console.log(this.cart_items);
    this.cake = (this.order["cart_items"].item) == 'Cake' ;
  }

}
