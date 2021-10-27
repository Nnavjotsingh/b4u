import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { OrderService } from '../order.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-cart-cake',
  templateUrl: './add-cart-cake.page.html',
  styleUrls: ['./add-cart-cake.page.scss'],
})
export class AddCartCakePage implements OnInit {

  id: any;
  item: any;
  qnty: any;
  price: any;
  amt: any;
  descc: any;
  pond: any;
  flvr: any;
  imageData:any;
  
  constructor(public orderService: OrderService, private alertCtrl: AlertController, 
    private modalCtrl: ModalController,
    private http: HttpClient,
    private camera: Camera
    ) { }
    getcamera(){
      
      this.camera.getPicture({
        sourceType:this.camera.PictureSourceType.CAMERA,
        destinationType:this.camera.DestinationType.FILE_URI
      }).then((res) => {
        // console.log(res);
      this.imageData = "data:image/png;base64," + res;
      }).catch(e => {
        
        // console.log(e);
    
    
    })
    }
    getgallery(){
      this.camera.getPicture({
        sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType:this.camera.DestinationType.DATA_URL
      }).then((res) => {
        this.imageData = "data:image/png;base64," + res;
      }).catch(e => {
        console.log(e);
      })
      }
  ngOnInit() {
  }
  close(){
    this.modalCtrl.dismiss();
  }
  onSubmit() {
    let data: any = {
      item: 'Cake',
      qnty: '1',
      price: this.amt,
      amt: this.amt,
      descc: this.descc,
      pond: this.pond,
      flvr: this.flvr,
      file: this.imageData
    };
    this.orderService.saveaddcartcake(data);
    this.alertCtrl.create({
      header: 'Add',
      message: 'Cake Added Successfully',
      buttons: [
        {
          text: 'Yes'
        }
      ]
    }).then(alertE1 => alertE1.present());

  }
  
}
