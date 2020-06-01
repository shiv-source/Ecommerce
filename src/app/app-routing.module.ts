import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  {
    path:'',
    component:ContentComponent
    },
    {
      path:'content',
      component:ContentComponent
    },
    {
      path:'ourstory',
      component:OurstoryComponent
    },
    {
      path:'blog',
      component:BlogComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
