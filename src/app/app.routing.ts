
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ModuleWithProviders} from "@angular/core";
import {studentRoutes} from "./student/student.routes";

export const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'}, {path:'home', component: HomeComponent}, ...studentRoutes
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
