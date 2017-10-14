import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChromedeviceComponent } from './chromedevice/chromedevice.component';
import { PhonesComponent } from './phones/phones.component';
import { RefrigeratorsComponent } from './refrigerators/refrigerators.component';
import { TabletsComponent } from './tablets/tablets.component';
import { TvsComponent } from './tvs/tvs.component';
import { WashersComponent } from './washers/washers.component';
import { RouterModule, Routes } from '@angular/router';
import { KyProductComponent } from './ky-product.component';
import { ProductsComponent } from './products/products.component';
const routes: Routes = [
  { path: 'search',
    component: KyProductComponent,
    children: [
      { path: '', component: ProductsComponent },
      { path: 'chromedevice', component: ChromedeviceComponent},
      { path: 'phones', component: PhonesComponent},
      { path: 'refrigerators', component: RefrigeratorsComponent },
      { path: 'tablets', component: TabletsComponent },
      { path: 'tvs', component: TvsComponent },
      { path: 'washers', component: WashersComponent}
    ]
  }];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    KyProductComponent,
    ChromedeviceComponent,
    PhonesComponent,
    RefrigeratorsComponent,
    TabletsComponent,
    TvsComponent,
    WashersComponent,
    ProductsComponent
  ],
  exports: [
    RouterModule
  ]
})
export class KyProductModule { }
