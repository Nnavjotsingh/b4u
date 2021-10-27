import { Component ,OnInit} from '@angular/core';
import { ModalController ,NavController,AlertController} from '@ionic/angular';
import { AllOrderPage } from '../all-order/all-order.page';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderService, todayr, topand , toready , todelv ,todayor} from '../order.service';
import { TorderViewPage } from './././../torder-view/torder-view.page';
import { TorderDelveredPage } from '././../torder-delvered/torder-delvered.page';
import { ViewPage } from '../view/view.page';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  todayor:todayor[]
  public peproni:boolean;
   
  featch= false;
  constructor(
     private modalCtrl:ModalController,
     private service:OrderService,
     private http:HttpClient,
    
    
    
    private navctrl: NavController,
    private alertCtrl: AlertController
    
  ) {}
  doRefresh(event){
    this.featch = true;
    this.service.gettodaydor().subscribe(response => {
      
      // console.log(response);
           let todayOderLength = response.length;
           for(let i =0;i<todayOderLength;i++){
            // console.log(response[i]['cart_items']);
            response[i]["cart_items"] = JSON.parse(response[i]["cart_items"]);
            
            this.featch = false;
           }
        
      
      this.todayor = response;
      
      this.peproni = this.todayor["cheif_status"] == '0' ;
      
    })
  }
  allOrder(){
    this.navctrl.navigateRoot('/all-order');
  }


  viewtorder(todayor:todayor){
    this.modalCtrl.create({
      component: TorderViewPage,
      componentProps: { todayor }
    })
    .then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data, role}) => {
      this.todayor = this.todayor
      .filter(ord =>{
        console.log({ord,data});
        if(data?.id === ord.id){
          return data;
        }
        return ord;
      });
    });
  }

  removeorder(id: string) {
    // this.service.removorder(id).subscribe(() => {
    //   this.order = this.order.filter(ord => ord.id !== id);
    // });
    // console.log(this.todayor[(id)]);
    this.alertCtrl.create({
      header: 'Delete',
      message: 'Are you sure you want to delete orders?',
      buttons: [
        {
          text: 'Yes',
          handler: () =>{
            this.service.removorder(id).subscribe(() => {
              this.todayor = this.todayor.filter(ord => ord.id !== id);
            });
          }
        },
        { text: 'No' }
      ]
    }).then(alertE1=> alertE1.present());
  }
  delorder(todayor:todayor){
    this.modalCtrl.create({
      component: TorderDelveredPage,
      componentProps: { todayor }
    })
    .then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data, role}) => {
      this.todayor = this.todayor
      .filter(ord =>{
        // console.log({ord,data});
        if(data?.id === ord.id){
          return data;
        }
        return ord;
      });
    });
  }
  ngOnInit() {
    

    
    this.featch = true;
    this.service.gettodaydor().subscribe(response => {
      
      // console.log(response);
           let todayOderLength = response.length;
           for(let i =0;i<todayOderLength;i++){
            // console.log(response[i]['cart_items']);
            response[i]["cart_items"] = JSON.parse(response[i]["cart_items"]);
            
            this.featch = false;
           }
        
      
      this.todayor = response;
      
      this.peproni = this.todayor["cheif_status"] == '0' ;
      
    })
   
    
     }
}
