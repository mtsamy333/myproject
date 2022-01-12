import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { DevelopmentComponent } from './development/development.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { PracticesComponent } from './practices/practices.component';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'practices',
    component: PracticesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  // {
  //   path: 'service',
  //   component: ServiceComponent,
  // },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  // },
  // {
  //   path: 'register',
  //   component: RegisterComponent,
  // },
  // {
  //   path: 'errorpage',
  //   component: ErrorpageComponent,
  // },
  // {
  //   path: 'service',
  //   children: [
  //     {
  //       path: 'service', component: ServiceComponent
  //     },
  //     {
  //       path: 'dev', component: DevelopmentComponent 
  //     },
  //     {
  //       path: 'service', component: ServiceComponent
  //     },
  //     {
  //       path: 'test', component: TestingComponent
  //     },
  //     {
  //       path: 'service', component: ServiceComponent
  //     },
  //     {
  //       path: 'deploy', component: DeploymentComponent
  //     },
  //   ]
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
