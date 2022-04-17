import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { LayoutComponent } from './core/layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';

const materialModules = [
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
];

@NgModule({
  declarations: [AppComponent, LayoutComponent, HomeComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule, AppRoutingModule, ...materialModules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
