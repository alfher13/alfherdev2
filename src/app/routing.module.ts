import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TwitchComponent } from './twitch/twitch.component';
import { ArtComponent } from './art/art.component';
import { WebdevComponent } from './webdev/webdev.component';

const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'webdev', component:WebdevComponent},
    {path: 'art', component:ArtComponent},
    {path: 'twitch', component:TwitchComponent},
    {path: 'contact', component:ContactComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  export const ArrayOfComponents = [HomeComponent, ContactComponent, TwitchComponent, ArtComponent, WebdevComponent]