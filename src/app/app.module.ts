import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddCartCakePage } from './add-cart-cake/add-cart-cake.page';
import { AddItemPage } from './add-item/add-item.page';
import { TorderViewPage } from './torder-view/torder-view.page'
// import { FormBuilder } from '@angular/forms';


@NgModule({
  declarations: [AppComponent, AddCartCakePage, AddItemPage,TorderViewPage],
  entryComponents: [AddCartCakePage, AddItemPage,TorderViewPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // FormBuilder
  
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Camera],
  bootstrap: [AppComponent],
})
export class AppModule {}
