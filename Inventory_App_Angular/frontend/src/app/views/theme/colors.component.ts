import { AfterViewInit, Component, HostBinding, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Squid } from '@squidcloud/client';

type DboCustomer = {
  Id?: BigInteger;
  CustCode?: string;
  CustName?: string;
  IsActive?: boolean;
  CreatedDate?: Date;
}
@Component({
  templateUrl: 'colors.component.html'
})
export class ColorsComponent implements OnInit {

  customerModel: any = {}

  constructor(private squid: Squid) {
  }

  
  ngOnInit(): void {}

  onSubmit(): void {

  }
  
}

