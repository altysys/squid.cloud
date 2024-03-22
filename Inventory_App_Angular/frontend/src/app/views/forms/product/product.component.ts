import { Component } from '@angular/core';
import { Squid } from '@squidcloud/client';
type DboProduct ={
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
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  public productModel: DboProduct = {};
  constructor(private squid: Squid) { }

  products = this.squid.collection<DboProduct>('dbo.Product', 'SqlServer').query().dereference().snapshots();

  async onSubmit() {
    await this.squid
      .collection<DboProduct>('dbo.Product', 'SqlServer').
      doc()
      .insert({
        ProductCode: this.productModel.ProductCode,
        ProductName: this.productModel.ProductName,
        Sku: this.productModel.Sku,
        IsActive: true,
        CreatedDate: this.productModel.CreatedDate,
        CurrentStock: this.productModel.CurrentStock,
        ProductPrice : this.productModel.ProductPrice
      });

    alert("Product Inserted.");
  }
}
