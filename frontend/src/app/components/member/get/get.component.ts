import { Component, OnInit } from '@angular/core';
import { MemberService, IMember } from '../member.service';
import { PaginationPipe } from '../../../pipe/pagination.pipe';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  public memberItems: IMember[] = [];
  public checkAll: boolean;
  public limitPage: number = 5;
  public startPage: number = 1;
  //public paginations: number[] = [1,2,3,4];
  public paginations: number[] = [];

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.memberService.getItems()
    .subscribe(result => {
      //console.log(result);
      //this.checkAll = false;
      this.memberItems = result;
      this.initializedLoadPagination();
      this.resetCheckAll();
    });
  }

  //วิธีทำ pipe แบ่ง Pagination
  // public getPaginItem(item: IMember[]){
  //     return item.slice(((this.startPage - 1) * this.limitPage), this.startPage * this.limitPage);
  // }

  /** เมื่อมีการ click ปุ่ม edit แสดง modal */
  public onEditModal(item: IMember){
    //console.log(item);
    // this.memberService.updateModel = item;
    // console.log(this.memberService.updateModel);
    // this.memberService.updateModel.mem_id = item.mem_id;
    // this.memberService.updateModอel.mem_name = item.mem_name;
    // this.memberService.updateModel.mem_address = item.mem_address;
    // this.memberService.updateModel.mem_email = item.mem_email;
    // this.memberService.updateModel.mem_phone = item.mem_phone;
    Object.assign(this.memberService.updateModel, item);
  }

  /** เมื่อมีการ click ปุ่ม delete ของแถวนั้น ๆ */
  public onDeleteModal(item: IMember){
    //console.log(item);
    Object.assign(this.memberService.deleteModel, item);
  }

  /** เมื่อมีการ check ช่อง checkAll */
  public oncheckAll(){
    //console.log(this.checkAll)
    this.memberItems.map(item => {
      item.checked = this.checkAll
      return item
    });
    //console.log(this.memberItems)
    this.onStoreMemberDelete()
  }

  /** เมื่อมีการ check ของแต่ละช่องรายการ  */
  public oncheck(){
      //console.log('eiei')
      if (this.memberItems.filter(item => !item.checked).length == 0){
        //console.log('0')
        this.checkAll = true;
      }
      else if (this.memberItems.filter(item => item.checked).length == 0){
        this.checkAll = false;
      }
      this.onStoreMemberDelete()
  }
  
  /** เก็บค่า id ที่จะลบหลายรายการ */
  public onStoreMemberDelete(){
    //const deleteAll = this.memberItems
    this.memberService.deleteAllModel
     = new PaginationPipe().transform(this.memberItems, this.startPage, this.limitPage)
    .filter((item: IMember) => item.checked)
    .map((item: IMember) => item.mem_id)
    //console.log(deleAll)
    //console.log(this.memberService.deleteAllModel)
  }

  /** คำนวณจำนวนหน้า paginations */
  private initializedLoadPagination(){
    const  pagelength = Math.ceil(this.memberItems.length / this.limitPage);
    this.paginations = [];
    for (let index = 1; index <= pagelength; index++){
      this.paginations.push(index)
    }
  }

  /** กดตัวเลขเปลี่ยนหน้าของ Pagination */
  public onChangePage(page: number){
    this.startPage = page
    //this.onStoreMemberDelete();
    this.resetCheckAll();
    this.onStoreMemberDelete();
  }

  /** เมื่อกดหน้าถัดไปของ Pagination */
  public onNextPage(){
    if (this.startPage >= this.paginations.length) return;
    this.startPage = this.startPage + 1;
    //this.onStoreMemberDelete();
    this.resetCheckAll();
    this.onStoreMemberDelete();
  }

  /** เมื่อกดหน้าก่อนหน้าของ Pagination */
  public onPreviousPage(){
    if (this.startPage <= 1) return;
    this.startPage = this.startPage - 1;
    //this.onStoreMemberDelete();
    this.resetCheckAll();
    this.onStoreMemberDelete();
  }

  /** ล้างค่า CheckAll */
  public resetCheckAll(){
    this.checkAll = false;
    this.memberItems.map(item => {
      item.checked = this.checkAll
      return item
    });
    //this.memberService.deleteAllModel = [];
  }
}
