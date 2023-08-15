import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MarksComponent } from './marks/marks.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'',component:AppComponent},
  {path:'marks',component:MarksComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
