import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // now can inject http service into any class that needs it
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';


import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot([ // only slash away paths related to product views
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'}, // default path
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'} // often used for 404 page
      
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
