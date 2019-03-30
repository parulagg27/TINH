import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImageCaptureComponent } from './image-capture/image-capture.component';

const routes: Routes = [{
  path: "", component: DashboardComponent
}, {
  path: "camera", component: ImageCaptureComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
