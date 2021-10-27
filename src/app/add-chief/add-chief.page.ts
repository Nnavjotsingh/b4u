import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService, cheifs } from '../order.service';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-chief',
  templateUrl: './add-chief.page.html',
  styleUrls: ['./add-chief.page.scss'],
})
export class AddChiefPage implements OnInit {

  @Input() cheif: cheifs;
  isUpdate = false;

  data = {
    id: '',
    Name: '',
    Mobile: '',
    Email: '',
    Password: ''
  }

  Name: any;
  Mobile: any;
  Email: any;
  Password: any;
  constructor(public orderService: OrderService, private alertCtrl: AlertController, private modalCtrl: ModalController) { }
  onClick(){
    this.modalCtrl.dismiss();
  }
  ngOnInit() {
    if (this.cheif) {
      this.isUpdate = true;
      this.data = this.cheif;
      this.Name= this.cheif.Name;
      this.Mobile = this.cheif.Mobile;
      this.Email = this.cheif.Email;
      this.Password = this.cheif.Password;
    }
  }

  onSubmit() {
    let data: any = {
      Name: this.Name,
      Mobile: this.Mobile,
      Email: this.Email,
      Password: this.Password
    };
    if (this.isUpdate) {
      data.id= this.cheif.id;
      this.orderService.updatedatach(data,() => {
        this.alertCtrl.create({
      
          message: 'Cheif Updates Successfully',
          buttons: [
            {
              text: 'Yes'
            }
          ]
        }).then(alertE1 => alertE1.present());
      });

    } else {
      this.orderService.savedatach(data);
      this.alertCtrl.create({
        header: 'Add',
        message: 'Chief Added Successfully',
        buttons: [
          {
            text: 'Yes'
          }
        ]
      }).then(alertE1=> alertE1.present());
    };

  }

}
