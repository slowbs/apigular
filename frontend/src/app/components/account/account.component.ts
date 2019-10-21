import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backendURL } from 'src/app/app.url';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  private backendURL: string = `${backendURL}/api/login`;

  public form = {
    email: '',
    phone: ''
  }

  constructor(
    private httpCleint:HttpClient,
    private router:Router
    ) { }

  ngOnInit() {
  }

  /** ส่งข้อมูลไปยัง Server */
  onSubmit() {
    //console.log(this.form)
    //delete this.form.email
    //this.form.phone = '';
    this.httpCleint
      .post(this.backendURL, this.form)
      .subscribe(
        // result => {
        //   console.log(result);
        //   this.router.navigate(['/profile'])
        // },
        result => this.router.navigate(['/profile']),
        except => alert(except.error.message)
      );
  }

}
