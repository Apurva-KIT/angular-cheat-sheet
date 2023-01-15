import { AfterViewInit, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ModalComponent } from '@shared/modal/modal.component';
import { GridDataSource, GridItem } from './dynamic-grid-datasource';

@Component({
  selector: 'app-dynamic-grid',
  templateUrl: './dynamic-grid.component.html',
  styleUrls: ['./dynamic-grid.component.scss']
})
export class DynamicGridComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<GridItem>;

  @Output() dataSourceEvt = new EventEmitter<GridDataSource>();
  
  dataSource: GridDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','actions'];

  constructor(public dialog: MatDialog) {
    this.dataSource = new GridDataSource();
  }

  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  editRow(action: any,row: any){
    console.log("Row ===> ",row);
    this.openDialog('edit',row);
  }

  deleteRow(action: any,row: any){
    console.log("Row ===> ",row);
    this.openDialog('delete',row);
  }

  openDialog(action: any ,obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data:obj
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   if(result.event == 'Add'){
    //     this.addRowData(result.data);
    //   }else if(result.event == 'Update'){
    //     this.updateRowData(result.data);
    //   }else if(result.event == 'Delete'){
    //     this.deleteRowData(result.data);
    //   }
    // });
  }
}

