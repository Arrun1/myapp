import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { FpsGamesComponent } from './fps-games/fps-games.component';
import { HomeComponent } from './home/home.component';
import { RpgGamesComponent } from './rpg-games/rpg-games.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'FPS Games',component:FpsGamesComponent},
  {path:'RPG Games',component:RpgGamesComponent},
  {path:'About Us',component:AboutUsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
