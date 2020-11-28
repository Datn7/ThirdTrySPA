import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContextComponent } from './context/context.component';
import { RepositoryComponent } from './repository/repository.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: 'context', component: ContextComponent },
  { path: 'repository', component: RepositoryComponent },
  { path: 'weather', component: WeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
