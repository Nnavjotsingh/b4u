import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import { NavController, AlertController, ModalController, Platform} from '@ionic/angular';
import { OrderService, todayr, topand , toready , todelv ,todayor} from '../order.service';
import { TorderDelveredPage } from '././../torder-delvered/torder-delvered.page';


export interface cart_items{
  id:any;
  item:any;
  qnty:any;
  }
  

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {
  
  totalAmount: any;
  revamt: any;
  balamt: any;
  totalamt:any;
  
  todayr: todayr[];
  topand: topand[];
  toready:toready[];
  todelv:todelv[];
  todayor:todayor[];
  public peproni:any;
  @Input() cart_items:todayor;
  featch= false;
  constructor(public navctrl: NavController,
    private http: HttpClient,
    private service: OrderService,
    private alt: AlertController,
    private modctl: ModalController,
    private platform:Platform) { }
    ionViewWillEnter(){
      this.service.gettodayorder().subscribe(response => {
        this.todayr = response;
      })
      this.service.gettodaypand().subscribe(response => {
        this.topand = response;
       
      })
      this.service.gettodayready().subscribe(response => {
        this.toready = response;
        
      })
      this.service.gettodaydelv().subscribe(response => {
        // console.log(response);
        this.todelv = response;
            })

            this.featch = true;
            this.service.gettodaydor().subscribe(response => {
             // this.todayor = response;
            //  console.log(response);
             let todayOderLength = response.length;
             for(let i =0;i<todayOderLength;i++){
              //console.log(response[i]['cart_items']);
              response[i]["cart_items"] = JSON.parse(response[i]["cart_items"]);
              // response[i]["totalamt"] = JSON.parse(response[i]["cart_items"]);
              // response[i]["balamt"] = JSON.parse(response[i]["cart_items"]);
              
              this.featch = false;
             }
            //  console.log(response["cart_items"]);
             
            //  console.log(this.todayor["totalAmount"]);
            //  console.log(this.revamt);
              this.todayor = response;
              console.log(this.todayor);
              // console.log(this.totalamt);
              // this.todayor["cart_items"] = JSON.parse(this.todayor["cart_items"]);
              // console.log(this.cart_items);
                  })
    }
    doRefresh(event) {
      this.service.gettodayorder().subscribe(response => {
        this.todayr = response;
      })
      this.service.gettodaypand().subscribe(response => {
        this.topand = response;
       
      })
      this.service.gettodayready().subscribe(response => {
        this.toready = response;
        
      })
      this.service.gettodaydelv().subscribe(response => {
        // console.log(response);
        this.todelv = response;
            })

            this.featch = true;
            this.service.gettodaydor().subscribe(response => {
             // this.todayor = response;
            //  console.log(response);
             let todayOderLength = response.length;
             for(let i =0;i<todayOderLength;i++){
              //console.log(response[i]['cart_items']);
              response[i]["cart_items"] = JSON.parse(response[i]["cart_items"]);
              // response[i]["totalamt"] = JSON.parse(response[i]["cart_items"]);
              // response[i]["balamt"] = JSON.parse(response[i]["cart_items"]);
              
              this.featch = false;
             }
            //  console.log(response["cart_items"]);
             
            //  console.log(this.todayor["totalAmount"]);
            //  console.log(this.revamt);
              this.todayor = response;
              console.log(this.todayor);
              // console.log(this.totalamt);
              // this.todayor["cart_items"] = JSON.parse(this.todayor["cart_items"]);
              // console.log(this.cart_items);
                  })
  
     
    }

  goToItem() {
    this.navctrl.navigateRoot('/item');
  }
  goToCheif() {
    this.navctrl.navigateRoot('/chief');
  }
  allOrder(){
    this.navctrl.navigateRoot('/all-order');
  }

  delorder(todayor:todayor){
    this.modctl.create({
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
    // this.service.gettodayorder().subscribe(response => {
    //   this.todayr = response;
    // })
    // this.service.gettodaypand().subscribe(response => {
    //   this.topand = response;
     
    // })
    // this.service.gettodayready().subscribe(response => {
    //   this.toready = response;
      
    // })
    // this.service.gettodaydelv().subscribe(response => {
    //   console.log(response);
    //   this.todelv = response;
    //       })
          // this.featch = true;
          // this.service.gettodaydor().subscribe(response => {
           // this.todayor = response;
          //  console.log(response);
          //  let todayOderLength = response.length;
          //  for(let i =0;i<todayOderLength;i++){
            //console.log(response[i]['cart_items']);
            // response[i]["cart_items"] = JSON.parse(response[i]["cart_items"]);
            // response[i]["totalamt"] = JSON.parse(response[i]["cart_items"]);
            // response[i]["balamt"] = JSON.parse(response[i]["cart_items"]);
            
            // this.featch = false;
          //  }
          //  console.log(response["cart_items"]);
           
          //  console.log(this.todayor["totalAmount"]);
          //  console.log(this.revamt);
            // this.todayor = response;
            // console.log(this.todayor);
            // console.log(this.totalamt);
            // this.todayor["cart_items"] = JSON.parse(this.todayor["cart_items"]);
            // console.log(this.cart_items);
                // })
                // this.peproni=this.todayor["status"] == 0 ;  
                         
  }

}

