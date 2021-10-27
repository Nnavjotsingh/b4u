import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ModalController } from '@ionic/angular';
import { items, OrderService } from '../order.service';
import { AddItemPage } from '../add-item/add-item.page';



@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {

  items: items[];
  featch = false;
  constructor(public navctrl: NavController,
    private service: OrderService,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
  ) { }
// ionViewWillEnter(){
//  this.items[''];
// }

  doRefresh(event) {
    // console.log('Begin async operation');
    this.featch = true;
    this.service.getall().subscribe(response => {
      console.log("res",this.items)
      this.items = response;
      this.featch = false;
    })
    
  }
  add_Item() {
    this.navctrl.navigateRoot('/add-item');
  }

  ngOnInit() {
    this.featch = true;
    this.service.getall().subscribe(response => {
      console.log("res",this.items)
      this.items = response;
      this.featch = false;
    })
  }

  updateItem(item: items){
    
 
    this.modalCtrl.create({
      component: AddItemPage,
      componentProps: { item }
    })
    .then(modal => {
      modal.present();
      
      return modal.onDidDismiss();


      
    }).then(({data, role}) => {
     
     
      this.items = this.items.filter(std =>{
        // console.log({std,data});

        if(data?.id === std.id){
          return data;

          
        }
        return std;
      });


      // this.alertCtrl.create({
      
      //   message: 'item Updatesss Successfully',
      //   buttons: [
      //     {
      //       text: 'Yes'
      //     }
      //   ]
      // }).then(alertE1 => alertE1.present());
    });

    
  }

  removeItem(id: string) {
    this.alertCtrl.create({
      header: 'Delete',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'Yes',
          handler: () =>{
            this.service.remove(id).subscribe(() => {
              this.items = this.items.filter(itd => itd.id !== id);
            });
          }
        },
        { text: 'No' }
      ]
    }).then(alertE1=> alertE1.present());

  }

}
