import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Apollo } from 'apollo-angular';

import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';

//Services 
import { PlanetsService } from './services/planets.service';
import { PeopleService } from './services/people.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpLinkModule,
    GraphQLModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatIconModule,
    MatProgressBarModule
    
  ],
  providers: [PlanetsService, PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
