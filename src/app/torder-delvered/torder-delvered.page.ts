import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { OrderService, todayor , ord_bal, order } from '../order.service';

@Component({
  selector: 'app-torder-delvered',
  templateUrl: './torder-delvered.page.html',
  styleUrls: ['./torder-delvered.page.scss'],
})
export class TorderDelveredPage implements OnInit {

  @Input() ord_bals: ord_bal;


  data = {
    id: '',
    rec: '',
    bal: ''
  }


  id: any;
  totalbal: any;
  totalAmount: any;
  revamt: any;
  balamt: any;


  order: order[];
  todayor: todayor[];
  ord_bal: ord_bal[];

public cake:any;
  featch = false;
  constructor(
    private model: ModalController,
    private http: HttpClient,
    private service: OrderService,
    private altctrl: AlertController,
    private nav: NavController,
  ) { }
  close() {
    this.model.dismiss();
  }


  ngOnInit() {
    if (this.ord_bals) {
      this.data = this.ord_bals;
      this.revamt = this.ord_bals.rec;
      this.balamt = this.ord_bals.bal;
      // console.log(this.data);
      
    }
    // let dataa: any = {
      //rec:this.rec,
      // balamt: this.bal

    // }
   // dataa.id = this.ord_bals
//this.service.orderupdate(dataa);
    //this.featch = true;
    //this.service.gettodaydor().subscribe(response => {
 //   this.featch = false;
    //this.todayor = response;
    // })

    this.totalAmount = this.todayor["balamt"];
    //  console.log(this.totalAmount);
    this.cake = (this.order["cart_items"].item) == 'Cake' ;
  }

  orderdone(ord_bals: ord_bal) {
    let data: any = {
      revamt: this.revamt,
      balamt: this.balamt,
      
    };
    
      data.id= this.todayor["id"];
      // console.log(this.todayor);        
      this.service.orderupdate(data);
      this.altctrl.create({
        header: 'Payment',
        message: 'Payment Recived Successfully',
        buttons: [
          {
            text: 'Yes'
          }
        ]
      }).then(alertE1 => alertE1.present());
  }
  

  balance() {
    if (this.totalAmount && this.revamt)
      this.balamt = this.totalAmount - this.revamt
  }

  // if(this.tbal && this.received)
  // this.totalbal = this. tbal - this.received


}
