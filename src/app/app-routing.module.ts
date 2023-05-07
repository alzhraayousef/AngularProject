import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from '../productmodule/restaurant/restaurant.component';
import { LandingComponent } from '../landing/landing/landing.component';
import { MainProductPageComponent } from 'src/productmodule/main-product-page/main-product-page.component';
import { InfoResturantComponent } from 'src/productmodule/Info/info-resturant/info-resturant.component';
import { ScrollspyComponent } from 'src/productmodule/scrollspy/scrollspy.component';
import { ProducttabsComponent } from 'src/productmodule/producttabs/producttabs/producttabs.component';
import { RetaurantDetailsComponent } from 'src/productmodule/RestaurantDetails/retaurant-details/retaurant-details.component';
import { AuthGuardService } from 'src/auth/Services/auth-guard.service';
import { AddNewProductComponent } from 'src/resturantprofile/add-new-product/add-new-product.component';
import { RestaurantCityComponent } from 'src/landing/restaurant-city/restaurant-city.component';

const routes: Routes = [
   {path:'',component:LandingComponent},
   {path:'addProduct',component:AddNewProductComponent},
   {path:'landing',loadChildren:()=>import("../landing/landing.module").then(m=>m.LandingModule)},
   {path:'auth',loadChildren:()=>import("../auth/auth.module").then(m=>m.AuthModule)},
   {path:'Restaurants', component:RestaurantCityComponent},
   {path:'productmodule',loadChildren:()=>import("../productmodule/productmodule.module").then(m=>m.ProductmoduleModule)},
    {path:'customer',loadChildren:()=>import("../customerprofile/customerprofile.module").then(m=>m.CustomerprofileModule)},
   {path:'resturant',loadChildren:()=>import("../resturantprofile/resturantprofile.module").then(m=>m.ResturantprofileModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
