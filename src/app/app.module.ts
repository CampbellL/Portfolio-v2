import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSectionComponent } from './home-section/home-section.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { CareerSectionComponent } from './career-section/career-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ProjectComponent } from './projects-section/project/project.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactSectionComponent } from './contact-section/contact-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeSectionComponent,
    NavigationComponent,
    CareerSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    ProjectComponent,
    ContactSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
