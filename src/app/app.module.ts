import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmailsComponent } from './emails/emails.component';
import { SearchComponent } from './search/search.component';
import { EndComponent } from './end/end.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmailsComponent,
    SearchComponent,
    EndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
