import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { StartComponent } from './pages/start/start.component';
import { BookListComponent } from './pages/employee/book-list/book-list.component';
import { EmployeeComponent } from './pages/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StartComponent,
    EmployeeComponent,
    BookListComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ 
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy 
  }],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
