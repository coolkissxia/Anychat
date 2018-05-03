import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Broadcaster} from '@ionic-native/broadcaster';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public broadcaster:Broadcaster ) {

  }


  toNative(){
    this.broadcaster.fireNativeEvent('videoChat', {
      "item":'admin'
    }).then(()=>{
        console.log('Successed!');
    });


  }
}
