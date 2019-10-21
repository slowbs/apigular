import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GetComponent } from './components/member/get/get.component';
import { PostComponent } from './components/member/post/post.component';
import { PutComponent } from './components/member/put/put.component';
import { DeleteComponent } from './components/member/delete/delete.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { DeleteAllComponent } from './components/member/delete-all/delete-all.component';
import { PaginationPipe } from './pipe/pagination.pipe';
import { MemberComponent } from './components/member/member.component';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { ProfileComponent } from './components/profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    GetComponent,
    PostComponent,
    PutComponent,
    DeleteComponent,
    TooltipDirective,
    DeleteAllComponent,
    PaginationPipe,
    MemberComponent,
    AccountComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'member', pathMatch: 'full' },
      { path: 'member', component: MemberComponent },
      { path: 'account', component: AccountComponent },
      { path: 'profile', component: ProfileComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
