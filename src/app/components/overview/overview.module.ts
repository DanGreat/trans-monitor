import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview.component';
import { ListFilterPipe } from 'src/app/list-filter.pipe';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent
  }
]

@NgModule({
  declarations: [ListFilterPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class OverviewModule { }
