import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { HeaderComponent } from './header/header.component';
import { HumanBodyComponent } from './human-body/human-body.component';
import { BeforeAfterComponent } from './before-after/before-after.component';
import { CovidWarningComponent } from './covid-warning/covid-warning.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { CountdownModule } from 'ngx-countdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExpertsComponent } from './experts/experts.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBannerComponent,
    HeaderComponent,
    HumanBodyComponent,
    BeforeAfterComponent,
    CovidWarningComponent,
    OrderFormComponent,
    ExpertsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
