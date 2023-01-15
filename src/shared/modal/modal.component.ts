import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent{

  action:string;
  // local_data:any;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    // this.local_data = {...data};
    console.log("Data==>",data)
    this.action = this.data.action;
  }

  doAction(){
    this.dialogRef.close({event:this.action,data:this.data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
}
