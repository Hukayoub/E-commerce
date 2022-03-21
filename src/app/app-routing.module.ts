import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { MenuComponent } from './component/menu/menu.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path : 'about', component : AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'menu', component:MenuComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
