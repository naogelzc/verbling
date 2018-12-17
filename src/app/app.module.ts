import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { AdComponent } from './ad/ad.component';
import { ScrollComponent } from './scroll/scroll.component';
import { SelectComponent } from './select/select.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    AdComponent,
    ScrollComponent,
    SelectComponent,
    EnterpriseComponent,
    TestimonialsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
