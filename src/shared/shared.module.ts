import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { GridComponent } from './grid/grid.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';

//custom
import { DynamicGridComponent } from './dynamic-grid/dynamic-grid.component';
import { ModalComponent } from './modal/modal.component';

const MaterialModules = [
  MatMenuModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatDialogModule
];

@NgModule({
  declarations: [
    NavbarComponent,
    SideNavigationComponent,
    DragDropComponent,
    GridComponent,
    DynamicGridComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    DragDropModule,
    MaterialModules,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [
    NavbarComponent,
    SideNavigationComponent,
    DragDropComponent,
    GridComponent,
    DynamicGridComponent,
    MaterialModules,
  ],
})
export class SharedModule {}
