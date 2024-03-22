import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Squid } from '@squidcloud/client';
type DboUser = {
  Id?: BigInteger;
  UserName?: string;
  UserEmail?: string;
  Mobile?: string;
  Password?: string;
  IsActive?: boolean;
  CreatedDate?: Date;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private squid: Squid, private router: Router) { }

  loginModel: DboUser = {};

  async onSubmit() {
    var users = await this.squid.collection<DboUser>('dbo.User', 'SqlServer').query().dereference().snapshots();
    users.subscribe(res => {
      if (res.length > 0 && res.find(x => x.UserEmail === this.loginModel.UserEmail && x.Password === this.loginModel.Password)) {
        this.router.navigate(['/']);
      }
      else {
        alert("Login Failed")
      }
    })
  }
}
