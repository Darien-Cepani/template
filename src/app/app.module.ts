import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { HeaderComponent } from './header/header.component';
import { HumanBodyComponent } from './human-body/human-body.component';
import { TimeForEffectComponent } from './time-for-effect/time-for-effect.component';
import { BeforeAfterComponent } from './before-after/before-after.component';
import { CovidWarningComponent } from './covid-warning/covid-warning.component';
import { OrderFormComponent } from './order-form/order-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    HeaderComponent,
    HumanBodyComponent,
    TimeForEffectComponent,
    BeforeAfterComponent,
    CovidWarningComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
