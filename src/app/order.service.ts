import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
//import { Mapping } from 'webpack-sources/node_modules/source-map';
//import { filter } from 'minimatch';

export interface items {
  id: string;
  name: string;
  price: string;
  des: string;
}

export interface cheifs {
  id: string;
  Name: string;
  Mobile: string;
  Email: string;
  Password: string;
}


export interface carts {
  id: string;
  item: string;
  qnty: string;
  price: string;
  amt: string;
  descc: string;
  pond: string;
  flvr: string;
  file: string;
}
export interface order {
  id: string;
  cust_name: string;
  cust_phone: string;
  totalamt: string;
  revamt: string;
  blamt: string;
  orderdate: string;
  ordertime: string;
  odesc: string;
  cart_items:string;
  

}
export interface orselitems {
  id: string;

}
export interface todayr{
  ttl_order:string;
}
export interface topand{
  ttl_order:string;
}
export interface toready{
  ttl_order:string;
}
export interface todelv{
  ttl_order:string;
}
export interface todayor{
  id: string;
  cust_name: string;
  cust_phone: string;
  totalamt: string;
  revamt: string;
  blamt: string;
  orderdate: string;
  ordertime: string;
  odesc: string;
  cart_items:string;
  status:string;
}
export interface ord_bal{
  id:any;
  rec:any;
  bal:any;
}
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = 'https://handyhospital.in/b4u/order/';
  constructor(private http: HttpClient, private modalCtrl: ModalController) { }


  getall() {
    return this.http.get<[items]>(this.url + '/item');
  }
  remove(id: string) {
    return this.http.delete(this.url + '/item/' + id);
  }
  savedata(postData) {
    this.http.post(this.url + '/item/', postData).subscribe((data) => {
      console.log("data", data);
    })
  }

  updatedata(item,callback =()=>{}) {
    this.http.put(this.url + '/item/' + item.id, item).subscribe((data) => {
      this.modalCtrl.dismiss();
      callback();
      console.log("data", data);
    })
  }


  // Cheif Coding

  getallcheif() {
    return this.http.get<[cheifs]>(this.url + '/cheif');
  }

  removeCh(id: string) {
    return this.http.delete(this.url + '/cheif/' + id);
  }

  savedatach(postData) {
    this.http.post(this.url + '/cheif/', postData).subscribe((data) => {
      console.log("data", data);
    })
  }

  updatedatach(cheif,callback= ()=>{}) {
    this.http.put(this.url + '/cheif/' + cheif.id, cheif).subscribe((data) => {
      this.modalCtrl.dismiss();
      console.log("data", data);
      callback();
    })
  }


  // Add Cart Cake

  getallcart() {
    return this.http.get<[carts]>(this.url + '/cart');
  }

  saveaddcartcake(postData) {
    this.http.post(this.url + '/cart/', postData).subscribe((data) => {
      console.log("data", data);
    })
  }

  saveaddcart(post) {
    this.http.post(this.url + '/cart', post).subscribe((data) => {
      console.log("data", data)
    })
  }

  removecart(id: string) {
    return this.http.delete(this.url + '/cart/' + id);
  }
  saveorder(post) {
    this.http.post(this.url + '/orders', post).subscribe((data) => {
      console.log("data", data)
    })
  }


  //Order

  getallorder() {
    return this.http.get<[order]>(this.url + '/orders');
    
  }
  

  getselectitem() {
    return this.http.get<[orselitems]>(this.url + '/cart/status/0');
  }

  removorder(id: string) {
    return this.http.delete(this.url + '/orders/' + id);
  }

  updateorder(order) {
    this.http.put(this.url + '/orders/' + order.id, order).subscribe((data) => {
      this.modalCtrl.dismiss();
      console.log("data", data);
    })
  }
  // getorderitem(){
  //   return this.http.get<order>(this.url + '/cart_items/');
  // }

  //HomePage
  gettodayorder(){
    return this.http.get<[todayr]>(this.url + '/today_order');
  }
  gettodaypand(){
    return this.http.get<[topand]>(this.url + '/tp');
  }
  gettodayready(){
    return this.http.get<[toready]>(this.url + '/tr');
  }
  gettodaydelv(){
    return this.http.get<[todelv]>(this.url + '/td');
  }
  gettodaydor(){
    return this.http.get<[todayor]>(this.url + '/tdao');
  }
  removtodorder(id: string) {
    return this.http.delete(this.url + '/tdao/' + id);
  }

  orderupdate(ord_bal) {
    this.http.put(this.url + '/ord_bal/' + ord_bal.id, ord_bal).subscribe((data) => {
      this.modalCtrl.dismiss();
      console.log("data", data);
    })
  }

}
