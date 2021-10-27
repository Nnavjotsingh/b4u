import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splach',
  templateUrl: './splach.page.html',
  styleUrls: ['./splach.page.scss'],
})
export class SplachPage implements OnInit {

  constructor(
    public router:Router,
  ) { 
    setTimeout(()=>{
      this.router.navigateByUrl('');
    },5000)
  }

  ngOnInit() {
  }

}
