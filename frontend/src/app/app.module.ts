import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { StartComponent } from './pages/start/start.component';
import { BookListComponent } from './pages/employee/book-list/book-list.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LoginComponent } from './pages/login/login.component';
import { EncrDecrService } from './services/EncrDecrService';
import { SearchComponent } from './pages/search/search.component';
import { UserComponent } from './pages/user/user.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminComponent } from './pages/admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StartComponent,
    EmployeeComponent,
    BookListComponent,
    LoginComponent,
    SearchComponent,
    UserComponent,
    ContactComponent,
    AdminComponent
    // JwPaginationComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    //IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    EncrDecrService,
    NativeStorage
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
