import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BasicToastComponent } from './basic-toast/basic-toast.component';
import { ToastHtmlComponent } from './toast-html/toast-html.component';
import { ToastPositionComponent } from './toast-position/toast-position.component';




@NgModule({

  imports: [
    RouterModule.forRoot([
      { path: 'basic', component: BasicToastComponent },
      { path: 'other', component: ToastHtmlComponent },
      { path: 'position', component: ToastPositionComponent }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}