import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthorListComponent } from './pages/employee/author-list/author-list.component';
import { BookListComponent } from './pages/employee/book-list/book-list.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { StartComponent } from './pages/start/start.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  { path: '',  component: StartComponent, pathMatch: 'full' },
  { path: 'EmpleadoAñadirLibro',  component: BookListComponent, pathMatch: 'full' },
  { path: 'EmpleadoAñadirAutor',  component: AuthorListComponent, pathMatch: 'full' },
  { path: 'Employee',  component: EmployeeComponent/*, pathMatch: 'full' */},
  { path: 'Login',  component: LoginComponent, pathMatch: 'full' },
  { path: 'Start',  component: StartComponent, pathMatch: 'full' },
  { path: 'Search',  component: SearchComponent, pathMatch: 'full' },
  { path: 'User',  component: UserComponent, pathMatch: 'full' },
  { path: 'Contact',  component: ContactComponent, pathMatch: 'full' },
  { path: 'Admin',  component: AdminComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
