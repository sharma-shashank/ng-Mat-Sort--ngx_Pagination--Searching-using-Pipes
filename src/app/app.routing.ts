import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { TableViewComponent } from './table-view/table-view.component';
import { TableDetailComponent } from './table-detail/table-detail.component';
const appRoutes: Routes = [
    {
        path: "",
        component: TableViewComponent,
    },
    {
        path: 'users/:id',
        component: TableDetailComponent,
    }

];
@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
