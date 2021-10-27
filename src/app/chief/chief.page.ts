import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { AddChiefPage } from '../add-chief/add-chief.page';
import { cheifs, OrderService } from '../order.service';

@Component({
  selector: 'app-chief',
  templateUrl: './chief.page.html',
  styleUrls: ['./chief.page.scss'],
})
export class ChiefPage implements OnInit {

  cheifs: cheifs[];
featch = false;
  constructor(public navctrl: NavController,
    private service: OrderService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
  ) { }
  doRefresh(event){
    this.featch = true;
    this.service.getallcheif().subscribe(response => {
      this.featch = false;
      this.cheifs = response;
    })
  }
  add_Chief() {
    this.navctrl.navigateRoot('/add-chief');
  }

  ngOnInit() {
    this.featch = true;
    this.service.getallcheif().subscribe(response => {
      this.featch = false;
      this.cheifs = response;
    })
  }


  updateCh(cheif: cheifs){
    // this.alertCtrl.create({
      
    //   message: 'chief Update Successfully',
    //   buttons: [
    //     {
    //       text: 'Yes'
    //     }
    //   ]
    // }).then(alertE1 => alertE1.present());
    this.modalCtrl.create({
      component: AddChiefPage,
      componentProps: { cheif }
    })
    .then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data, role}) => {
      this.cheifs = this.cheifs.filter(std =>{
        if(data.id === std.id){
          return data;
        }
        return std;
      });
    });
  }

  removeCh(id: string) {
    this.alertCtrl.create({
      header: 'Delete',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'Yes',
          handler: () =>{
            this.service.remove(id).subscribe(() => {
              this.cheifs = this.cheifs.filter(itd => itd.id !== id);
            });
          }
        },
        { text: 'No' }
      ]
    }).then(alertE1=> alertE1.present());

  }

}
