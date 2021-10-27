import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { AddCartCakePage } from '../add-cart-cake/add-cart-cake.page';
import { items as orderItem,carts, cheifs,OrderService} from '../order.service';
import { AddCartItemPage } from '../add-cart-item/add-cart-item.page';
import { HttpClient } from '@angular/common/http';
import { AddItemPage } from '../add-item/add-item.page';
import { Tab3Page } from '../tab3/tab3.page';
// import { NgForm } from '@angular/forms';
// import { FormControl, FormsModule } from '@angular/forms';



export interface items {
  id: string;
  name: string;
  price: string;
  des: string;
}

export interface cart{
  id:string;
  item:string;
amt:string;
price:string;

}

export interface chiefs{
  id:string;
  name:string;
  
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  {

name:any;
mb:any;
  bal:any;
  rec:any;
  ddate:any;
  ttime:any;
  dess:any;
  //Name:any;
  cheifid:any;
  orderid:any;
  id:any;
  selid:any;
  carts: carts[];
  selectedItems: [];
  totalAmount : number = 0;
  
  cheifs: cheifs[];
  ittttt = false;
  
  items: items[];
  selectedItem: any;
  totalitem:any;
  featch= false;

  // @ViewChild('form', {static:false}) slForm: NgForm;
  constructor(
    private service: OrderService,
    private modalCtrl: ModalController,
    private http: HttpClient,
    private navctrl: NavController,
    private alertCtrl: AlertController,
  //  private ngForm:NgForm
   
  ) {}
  
 ionViewWillEnter(){
  // console.log('keutyuir')
   // this.ittttt = true;
    // this.featch = true;
    this.service.getallcart().subscribe(response => {
      this.carts = response;
      // this.carts = [];
      // this.featch = false;
      this.ittttt = true;
    this.totalAmount =   Object.entries(this.carts).reduce((prev,current)=>{
      console.log(current);
      this.ittttt = false;
        return  prev + parseInt(current[1].amt);
      },0)
    })



   this.service.getallcheif().subscribe(response => {
     this.cheifs = response;
     
   });


   
  //  this.service.getselectitem().subscribe(response =>{
  //    this.orselite = response;
  //  });



//   ordSubmit(){
    
//     let data: any = {
//       cust_name:this.name,
//       cust_phone:this.mb,
//       totalamt:this.totalAmount,
//       revamt:this.rec,
//       orderdate:this.ddate,
//       ordertime:this.ttime,
//       odesc:this.dess,
      
//       cheif_id:this.cheifid,
      
//       balamt:this.bal
//     };
// this.service.saveorder(data);
// this.alertCtrl.create({
//   header: 'Add',
//   message: 'Order Done',
//   buttons: [
//     {
//       text: 'Yes'
//     }
//   ] 
// }).then(alertE1 => alertE1.present());
// }

 }
 doRefresh(event){
  this.service.getallcart().subscribe(response => {
    this.carts = response;
    // this.carts = [];
    // this.featch = false;
    this.ittttt = true;
  this.totalAmount =   Object.entries(this.carts).reduce((prev,current)=>{
    console.log(current);
    this.ittttt = false;
      return  prev + parseInt(current[1].amt);
    },0)
  })
 }
  // do(event){
  //   setTimeout(()=>{
  //     event.target.complete();
  //   },2000);
  // }

  add_Item() {
    this.navctrl.navigateRoot('/add-item');
  }

  async addcartcake() {
    // this.modalCtrl.create({
    //   component: AddCartCakePage
    // })
    //   .then(modal => modal.present());
    const modal = await this.modalCtrl.create({ component: AddCartCakePage });
    modal.onDidDismiss().then((data) => {
        console.log(data);
        if(data.data == undefined){
          this.ionViewWillEnter();
        }
    });
    return await modal.present();
  }

  async addcartitem() {
    // this.modalCtrl.create({
    //   component: AddCartItemPage
    // })
    //   .then(modal => modal.present());

    const modal = await this.modalCtrl.create({ component: AddCartItemPage });
    modal.onDidDismiss().then((data) => {
        console.log(data);
        if(data.data == undefined){
          this.ionViewWillEnter();
        }
    });
    return await modal.present();
  }
  getSelectedItems(){
      return  Object.entries(this.carts).reduce((prev,current)=>{
                 return  [...prev,current[1].id];
        },[]);
  }
  //this.modalCtrl.dismiss(null,'close');
  //console.log("btn clicked");
  // this.router.navigateByUrl('')
  removecart(id: string) {
    this.alertCtrl.create({
      header: 'Delete',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.service.removecart(id).subscribe(() => {
              this.carts = this.carts.filter(itd => itd.id !== id);
            });
          }
        },
        { text: 'No' }
      ]
    }).then(alertE1 => alertE1.present());

  }

  // amtItem(id:string,item:string,amt:string){
  //   this.alertCtrl.create(
  //   )
  // }

  // OnInint(id:string){
  //   this.service.getall().subscribe(response => {
  //     console.log("res", response)
  //     this.items = response;)
  //   }

  //   if(this.items && this.amt)
  //    this.amount = this.items * this.price;
  // }
  balance(){
    if(this.totalAmount && this.rec)
    this.bal = this.totalAmount - this.rec

  }

  resetForm(){
    this.name= "";
    this.mb="";
    this.rec="";
    this.dess="";
    this.ddate="";
    this.ttime="";
    this.bal="";
  }
  ordSubmit(){
    
    let data: any = {
      cust_name:this.name,
      cust_phone:this.mb,
      totalamt:this.totalAmount,
      revamt:this.rec,
      orderdate:this.ddate,
      ordertime:this.ttime,
      odesc:this.dess,
      
      cheif_id:this.cheifid,
      
      balamt:this.bal
    };
this.service.saveorder(data);
this.alertCtrl.create({
  header: 'Add',
  message: 'Order Done',
  buttons: [
    {
      text: 'Yes'
    }
  ] 
}).then(alertE1 => alertE1.present()).then(m=>this.resetForm()).then(n=>this.navctrl.navigateRoot('tabs/tab1'));
}


  }
