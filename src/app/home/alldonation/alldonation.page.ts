import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tools } from '../../shared/tools';

@Component({
  selector: 'app-alldonation',
  templateUrl: './alldonation.page.html',
  styleUrls: ['./alldonation.page.scss'],
})
export class AlldonationPage implements OnInit {

  constructor(private route: Router,public toastController: ToastController,public tools:Tools) { 
    
  }

  ngOnInit() {
  }

  oninstwiseClick() {
    this.route.navigateByUrl('/instiwisedonation');
  }
  onschemewiseClick() {
    this.route.navigateByUrl('/schemewisedonation');
  }
}
