import { Component } from '@angular/core';
import { Squid } from '@squidcloud/client';
type DboVendor = {
  Id?: BigInteger;
  VendorCode?: string;
  VendorName?: string;
  IsActive?: boolean;
  CreatedDate?: Date;
}

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent {
  public vendorModel: DboVendor = {};
  constructor(private squid: Squid) { }

  vendors = this.squid.collection<DboVendor>('dbo.Vendor', 'SqlServer').query().dereference().snapshots();

  async onSubmit() {
    await this.squid
      .collection<DboVendor>('dbo.Vendor', 'SqlServer').
      doc()
      .insert({
        VendorCode: this.vendorModel.VendorCode,
        VendorName: this.vendorModel.VendorName,
        IsActive: true,
        CreatedDate : new Date()
      });

    alert("Vendor Inserted.");
  }
}
