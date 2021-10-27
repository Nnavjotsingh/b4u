import { Component , ViewChild } from '@angular/core';

import { Platform, AlertController , IonRouterOutlet } from '@ionic/angular';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild(IonRouterOutlet,{static:true}) routerOutlet: IonRouterOutlet;
  constructor(
    public nav: NavController,
    private route: Router,
    private altcon:AlertController,
    private plat:Platform,
    private location:Location,
  ) {
    this.backButtonEvent();
  }
  backButtonEvent(){
    this.plat.backButton.subscribeWithPriority(10, () => {
      if(!this.routerOutlet.canGoBack()){
        this.backButtonAlert()
      } else{
      this.location.back();  
      }
      
    });
    
  }
  async backButtonAlert(){
    const alert  = await this.altcon.create({
      message:'You just pressed the back Button!',
      buttons:[{
        text:'Cancel',
        role:'Cancel'
      },{
        text:'Close App',
        handler:() =>{
          navigator['app'].exitApp();
        }
      }]
    });
await alert.present();
  }
}
