import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Account/home/home.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterbuyerComponent } from './Account/registerbuyer/registerbuyer.component';


const routes: Routes = [
  {path:'home',component:HomeComponent,children:[
    // {path:'contact',component:ContactComponent},
       {path:'login',component:LoginComponent},
      
       {path:'register-buyer',component:RegisterbuyerComponent},
       
    
      ]},
      {path:'',component:HomeComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
