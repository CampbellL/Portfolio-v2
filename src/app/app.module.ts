import { BrowserModule } from '@angular/platform-browser';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeSectionComponent } from './landing-page/home-section/home-section.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { CareerSectionComponent } from './landing-page/career-section/career-section.component';
import { SkillsSectionComponent } from './landing-page/skills-section/skills-section.component';
import { ProjectsSectionComponent } from './landing-page/projects-section/projects-section.component';
import { ProjectComponent } from './landing-page/projects-section/project/project.component';
import { ContactSectionComponent } from './landing-page/contact-section/contact-section.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppRoutingModule } from './app-routing.module';
import { GraphQLModule } from './graphql.module';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeSectionComponent,
    NavigationComponent,
    CareerSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    ProjectComponent,
    ContactSectionComponent,
    ProjectDetailComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    GraphQLModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
