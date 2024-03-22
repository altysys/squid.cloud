import { Component, OnInit } from '@angular/core';
import { Squid } from '@squidcloud/client';
type DboInvoice = {
  Id?: BigInteger;
  InvCode?: string;
  InvDate?: Date;
  CustId?: BigInteger;
  InvAmount?: number;
  IsActive?: boolean;
  CreatedDate?: Date;
  CreatedBy?: BigInteger;
  UpdatedDate?: Date;
  UpdatedBy?: BigInteger;
}
type DboCustomer = {
  Id?: BigInteger;
  CustCode?: string;
  CustName?: string;
  IsActive?: boolean;
  CreatedDate?: Date;
}

type DboProduct = {
  Id?: BigInteger;
  ProductCode?: string;
  ProductName?: string;
  Sku?: string;
  IsActive?: boolean;
  CreatedDate?: Date;
  CurrentStock?: BigInteger;
  ProductPrice?: number;
}


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  public InvoiceModel: DboInvoice = {};
  public productList: any = [];
  public products: any = [];
  constructor(private squid: Squid) { }

  invoices = this.squid.collection<DboInvoice>('dbo.Invoice', 'SqlServer').query().dereference().snapshots();
  customers = this.squid.collection<DboCustomer>('dbo.Customer', 'SqlServer').query().dereference().snapshots();

  ngOnInit() {
    var products = this.squid.collection<DboProduct>('dbo.Product', 'SqlServer').query().dereference().snapshots();
    products.subscribe(res => {
      this.products = res;
    });
  }

  async onSubmit() {
    //await this.squid
    //  .collection<DboInvoice>('dbo.Invoice', 'SqlServer').
    //  doc()
    //  .insert({
    //    InvCode: this.InvoiceModel.InvCode

    //  });
    //await this.squid.runInTransaction(async (transactionId: string) => {
    //  const user1 = this.squid.collection<DboInvoice>('dbo.Invoice','SqlServer').doc();
    //  const user2 = this.squid.collection<User>('users').doc('user_2_id');
    //  await user1.inser({ name: 'Alice' }, transactionId);
    //  await user2.update({ name: 'Bob' }, transactionId);
    //});
    const user1 = this.squid.collection<DboInvoice>('dbo.Invoice', 'SqlServer').doc();
    console.log(user1);
    alert("Product Inserted.");
  }

  onAddClick() {
    this.productList.push({});
  }
}
