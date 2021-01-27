import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alldonation',
  templateUrl: './alldonation.page.html',
  styleUrls: ['./alldonation.page.scss'],
})
export class AlldonationPage implements OnInit {

  constructor(private route: Router,public toastController: ToastController) { }

  ngOnInit() {
  }

  oninstwiseClick() {

    this.route.navigate(['/instiwisedonation']);

    // const toast = await this.toastController.create({
    //   message: 'This Is Institute wise',
    //   duration: 2000 ,
    //   color: 'primary'
    // });
    // toast.present();
  }
  onschemewiseClick() {
    this.route.navigate(['/schemewisedonation']);
  }
}
