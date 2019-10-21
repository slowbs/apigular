import { Component, OnInit } from '@angular/core';
import { backendURL } from 'src/app/app.url';
import { HttpClient } from '@angular/common/http';
import { Isession } from './profile.interface';
import { Router } from '@angular/router';
import { IMember } from '../member/member.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //private backendURL: string = `${backendURL}/api/profile`;
  //public profileItem: Isession.Session;
  public profileItem: IMember

  constructor(
    private httpClient:HttpClient,
    private router:Router
    ) { }

  ngOnInit() {
    this.httpClient
      //.get<Isession.Response>(this.backendURL)
      //.get<Isession.Response>(`${backendURL}/api/profile`)
      .get<IMember>(`${backendURL}/api/profile`)
      .subscribe(
        result => {
          //console.log(result.session)
          //this.profileItem = result.session
          this.profileItem = result
          //console.log(this.profileItem)
        },
        except => {
          alert(except.error.message),
          this.router.navigate(['/account'])
        }
        );
  }

  /** ออกจากระบบ */
  public onLogout(){
    //console.log('Logout')
    this.httpClient
    .post(`${backendURL}/api/logout`, null)
    .subscribe(
      // result => {
      //   console.log(result)
      // },
      result => this.router.navigate(['/account']),
      except => alert(except.error.message)
    )
  }

}
