import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './pages/employee/book-list/book-list.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LoginComponent } from './pages/login/login.component';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  { path: '',  component: StartComponent, pathMatch: 'full' },
  { path: 'EmpleadoAñadirLibro',  component: BookListComponent, pathMatch: 'full' },
  { path: 'Employee',  component: EmployeeComponent, pathMatch: 'full' },
  { path: 'Login',  component: LoginComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
