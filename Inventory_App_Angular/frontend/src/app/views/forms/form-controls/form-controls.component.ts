import { Component, OnInit } from '@angular/core';
import { Squid } from '@squidcloud/client';
type DboCustomer = {
  Id?: BigInteger;
  CustCode?: string;
  CustName?: string;
  IsActive?: boolean;
  CreatedDate?: Date;
}
@Component({
  selector: 'app-form-controls',
  templateUrl: './form-controls.component.html',
  styleUrls: ['./form-controls.component.scss']
})
export class FormControlsComponent implements OnInit {

  public favoriteColor = '#26ab3c';
  public customerModel: DboCustomer = {};
  constructor(private squid: Squid) { }

  customers = this.squid.collection<DboCustomer>('dbo.Customer', 'SqlServer').query().dereference().snapshots();

  ngOnInit() {
    const result = this.squid.executeFunction('runNativeQuery');
    result.then(res => {
      console.log(res);
    })
  }

  async onSubmit() {
    var a = await this.squid
      .collection<DboCustomer>('dbo.Customer', 'SqlServer').
      doc()
      .insert({
        CustCode: this.customerModel.CustCode,
        CustName: this.customerModel.CustName,
        IsActive: true,
        CreatedDate: new Date()
      });
    
    alert("Customer Inserted.");
  }
}
