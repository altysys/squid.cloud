import { Component, OnInit } from '@angular/core';

import { navItems } from './_nav';
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
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit  {
  

  public navItems = navItems;

  constructor(private squid: Squid) { }

  ngOnInit() {

  }

  projects = this.squid.collection<DboUser>('dbo.User','SqlServer').query().dereference().snapshots();
  
}
