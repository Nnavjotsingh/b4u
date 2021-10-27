import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService, items } from '../order.service';
import { AlertController, ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {


  @Input() item: items;
  isUpdate = false;

  data = {
    id: '',
    name: '',
    price: '',
    des: ''
  }



  id: any;
  name: any;
  price: any;
  des: any;
  constructor(
    public orderService: OrderService,
     private alertCtrl: AlertController,
      private modalCtrl: ModalController,
      private http:HttpClient
      ) { }
  onClick(){
    this.modalCtrl.dismiss();
  }
  ionViewWillEnter(){
   this.name;
   this.price;
   this.des;
  }
  // doRefresh(event) {
  //   console.log('Begin async operation');

  //   setTimeout(() => {
  //     console.log('Async operation has ended');
  //     event.target.complete();
  //   }, 2000);
  // }
  ngOnInit() {
    if (this.item) {
      this.isUpdate = true;
      this.data = this.item;
      this.name= this.item.name;
      this.price = this.item.price;
      this.des = this.item.des;
    }
  }

  onSubmit() {
    let data: any = {
      name: this.name,
      price: this.price,
      des: this.des
    };
    console.log("data",this.des);
    if (this.isUpdate) {
      data.id= this.item.id;
      this.orderService.updatedata(data,()=>{
        this.alertCtrl.create({
      
          message: 'item Updates Successfully',
          buttons: [
            {
              text: 'Yes'
            }
          ]
        }).then(alertE1 => alertE1.present());
      });



    } else {
      this.orderService.savedata(data);
      this.alertCtrl.create({
        header: 'Add',
        message: 'Item Added Successfully',
        buttons: [
          {
            text: 'Yes'
          }
        ]
      }).then(alertE1 => alertE1.present());
    }
  }


}
