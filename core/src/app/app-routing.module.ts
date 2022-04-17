import { HomeComponent } from './features/home/home.component';
import { LayoutComponent } from './core/layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'app1',
        loadChildren: () =>
          loadRemoteModule({
            remoteName: 'app1',
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            exposedModule: 'PrinterModule',
          }).then((m) => m.PrinterModule),
      },
      {
        path: 'app2',
        loadChildren: () =>
          loadRemoteModule({
            remoteName: 'app2',
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            exposedModule: 'AppModule',
          }).then((m) => m.AppModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
