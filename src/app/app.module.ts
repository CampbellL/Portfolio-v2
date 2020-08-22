import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { CareerSectionComponent } from './career-section/career-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeSectionComponent,
    NavigationComponent,
    CareerSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
