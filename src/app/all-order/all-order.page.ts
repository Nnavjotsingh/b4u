import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { OrderService, order, carts } from '../order.service';
import { OrderupdatePage } from '../orderupdate/orderupdate.page';
import { Tab2Page } from '../tab2/tab2.page';
import { cart_items, ViewPage } from '../view/view.page';

// export interface order{
// id:any;
// item:any;
// qnty:any;

// }

@Component({
  selector: 'app-all-order',
  templateUrl: './all-order.page.html',
  styleUrls: ['./all-order.page.scss'],
})

export class AllOrderPage implements OnInit {
  order: order[];
  carts: carts[];
  featch = false;
  // @Input() orders:cart_items;
  // cart_items = [];
  constructor(
    private model: ModalController,
    private http: HttpClient,
    private service: OrderService,
    private alertCtrl:AlertController,
    private navctrl:NavController
  ) { }
//   view(){
//   this.navctrl.navigateRoot('view');
// }
  ngOnInit() {
    this.featch = true;
    this.service.getallorder().subscribe(response => {
      //console.log({response});
      this.featch = false;
      this.order = response;
      // console.log(this.order.cart_items)
      
    })

    this.service.getallcart().subscribe(response => {
      this.carts = response;
    });
    
    // this.service.getorderitem().subscribe(response => {
    //   this.cart_items = response;
    // })
    
    //console.log(this.cart_items)
  }
  removeorder(id: string) {
    // this.service.removorder(id).subscribe(() => {
    //   this.order = this.order.filter(ord => ord.id !== id);
    // });
    console.log(this.order[(id)]);
    this.alertCtrl.create({
      header: 'Delete',
      message: 'Are you sure you want to delete orders?',
      buttons: [
        {
          text: 'Yes',
          handler: () =>{
            this.service.removorder(id).subscribe(() => {
              this.order = this.order.filter(ord => ord.id !== id);
            });
          }
        },
        { text: 'No' }
      ]
    }).then(alertE1=> alertE1.present());
  }
  vieworder(order: order){
    this.model.create({
      component: ViewPage,
      componentProps: { order }
    })
    .then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data, role}) => {
      this.order = this.order.filter(ord =>{
        console.log({ord,data});
        if(data?.id === ord.id){
          return data;
        }
        return ord;
      });
    });
  }
  updateorder(order: order){
    this.model.create({
      component: OrderupdatePage,
      componentProps: { order }
    })
    .then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data, role}) => {
      this.order = this.order.filter(ord =>{
        console.log({ord,data});
        if(data?.id === ord.id){
          return data;
        }
        return ord;
      });
    });
  }

}

