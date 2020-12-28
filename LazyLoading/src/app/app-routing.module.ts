import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { OtherPageComponent } from './other-page/other-page.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/page',
        pathMatch: 'full',
      },
      {
        path: 'page',
        loadChildren:() => import('./page/page.module').then((m) => m.PageModule),
      },
      {
        path: 'other-page',
        loadChildren:() => import('./other-page/other-page.module').then((m) => m.OtherPageModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
