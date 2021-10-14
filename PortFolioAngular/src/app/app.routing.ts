import { ModuleWithProviders } from "@angular/compiler/src/core";
import { Routes,RouterModule } from "@angular/router";

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { ModuleWithComponentFactories } from "@angular/core";

const appRoutes: Routes =[

    {path:'',component:AboutComponent},
    {path:'sobre-mi',component:AboutComponent},
    {path:'proyectos',component:ProjectsComponent},
    {path:'crear-proyecto',component:CreateComponent},
    {path:'contacto',component:ContactComponent},
    {path:'**',component:ErrorComponent}



];

export const appRoutingProviders: any[] =[];
export const routing: ModuleWithProviders=RouterModule.forRoot(appRoutes);