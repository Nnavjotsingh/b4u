import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OrderService,todayor } from '../order.service';

@Component({
  selector: 'app-torder-view',
  templateUrl: './torder-view.page.html',
  styleUrls: ['./torder-view.page.scss'],
})
export class TorderViewPage implements OnInit {
  todayor:todayor[];
  public peproni:any;
  constructor(
    private model:ModalController,
    private service:OrderService,
  ) { }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  close(){
    this.model.dismiss();
  }
  ngOnInit() {
    this.peproni=this.todayor["cheif_status"] ==0 ;
    // this.peproni = (this.todayor["cart_items"].item) == 'Cake' ;
  }

}
