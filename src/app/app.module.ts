import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FindSolutionComponent } from './find-solution/find-solution.component';
import { SearchComponent } from './search/search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { KyProductModule } from './ky-product/ky-product.module';


const routes: Routes = [
  { path: '', component: FindSolutionComponent},
  { path: 'fas', component: FindSolutionComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    FindSolutionComponent,
    SearchComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    KyProductModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
