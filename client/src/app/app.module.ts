import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UserService } from './user.service';
import { UserCardComponent } from './dashboard/user-card/user-card.component';
import { UserMedicinesService } from './user-medicines.service';
import { FormsModule } from '@angular/forms';
import { ImageCaptureComponent } from './image-capture/image-capture.component';
import { PrescriptionCardComponent } from './dashboard/prescription-card/prescription-card.component';
import { PostComponent } from './dashboard/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    NavigationComponent,
    UserCardComponent,
    ImageCaptureComponent,
    PrescriptionCardComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [UserService, UserMedicinesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
