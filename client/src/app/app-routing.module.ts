import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BlogComponentComponent } from './components/blog-component/blog-component.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { PageNotFoundComponent } from './components/errors/page-not-found/page-not-found.component';
import { TableHerosComponent } from './components/table-heros/table-heros.component';

const routes: Routes = [
  { path: 'Table', component: TableHerosComponent },
  { path: 'Document', component: DocumentationComponent },
  { path: 'Blog', component: BlogComponentComponent },

  { path: '**', component: PageNotFoundComponent }
];

/* page not found in path ** used in routes */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
