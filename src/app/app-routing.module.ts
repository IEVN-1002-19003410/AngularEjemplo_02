import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { MenuComponent } from "./menu/menu/menu.component";
import { Suma2Component } from "./formularios/suma2/suma2.component";
import { OperasBasComponent } from "./formularios/operas-bas/operas-bas.component";
import { HomeComponent } from "./home/home.component";
import { ProductListComponent } from "./product/product-list/product-list.component";



const routes: Routes=[
{path:'', redirectTo:'/menu',pathMatch:'full'},
{path:'Menu', component:MenuComponent},
{path:'Suma2', component:Suma2Component},
{path:'OperasBas', component:OperasBasComponent},
{path:'Home', component:HomeComponent},
{path:'ProductList', component:ProductListComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}