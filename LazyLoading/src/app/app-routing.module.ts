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
        component:PageComponent
      },
      {
        path: 'other-page',
        component:OtherPageComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
