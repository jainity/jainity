import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.page.html',
  styleUrls: ['./otpverification.page.scss'],
})
export class OtpverificationPage implements OnInit {
mno:any;
  constructor(private router: Router, public route: ActivatedRoute) { 
    this.route.params
      .subscribe((params) => {
        console.log('params =>', params.mno);
        this.mno = params.mno;
      });
  }

  onSubmitClick() {
    this.router.navigate(['/home']);
    }

    onResendClick() {
      this.router.navigate(['/home']);
      }

  ngOnInit() {
  }

}
