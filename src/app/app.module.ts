import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KyProductComponent } from './ky-product/ky-product.component';
import { FindSolutionComponent } from './find-solution/find-solution.component';
import { SearchComponent } from './search/search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PhonesComponent } from './ky-product/phones/phones.component';
import { RouterModule, Routes } from '@angular/router';
import { TvsComponent } from './ky-product/tvs/tvs.component';
import { WashersComponent } from './ky-product/washers/washers.component';
import { TabletsComponent } from './ky-product/tablets/tablets.component';
import { ChromedeviceComponent } from './ky-product/chromedevice/chromedevice.component';
import { RefrigeratorsComponent } from './ky-product/refrigerators/refrigerators.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: KyProductComponent},
  { path: 'search', component: KyProductComponent},
  { path: 'fas', component: FindSolutionComponent},
  { path: 'phones', component: PhonesComponent},
  { path: 'tvs', component: TvsComponent},
  { path: 'washers', component: WashersComponent},
  { path: 'tablets', component: TabletsComponent },
  { path: 'chromedevice', component: ChromedeviceComponent },
  { path: 'refrigerators', component: RefrigeratorsComponent},
  { path: 'search/fas', component: FindSolutionComponent},
  { path: 'search/phones', component: PhonesComponent},
  { path: 'search/tvs', component: TvsComponent},
  { path: 'search/washers', component: WashersComponent},
  { path: 'search/tablets', component: TabletsComponent },
  { path: 'search/chromedevice', component: ChromedeviceComponent },
  { path: 'search/refrigerators', component: RefrigeratorsComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    KyProductComponent,
    FindSolutionComponent,
    SearchComponent,
    NavBarComponent,
    PhonesComponent,
    TvsComponent,
    WashersComponent,
    TabletsComponent,
    ChromedeviceComponent,
    RefrigeratorsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
