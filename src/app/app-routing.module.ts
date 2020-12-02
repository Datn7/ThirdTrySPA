import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContextComponent } from './context/context.component';
import { HomeComponent } from './home/home.component';
import { RepositoryComponent } from './repository/repository.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'shop',
    loadChildren: () =>
      import('./shop/shop.module').then((mod) => mod.ShopModule),
  },
  { path: 'context', component: ContextComponent },
  { path: 'repository', component: RepositoryComponent },
  { path: 'weather', component: WeatherComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
