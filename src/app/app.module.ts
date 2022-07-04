import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FriendComponent } from './friend/friend.component';
import {HttpClientModule} from '@angular/common/http';
import { IntervaltimerComponent } from './intervaltimer/intervaltimer.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendComponent,
    IntervaltimerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
