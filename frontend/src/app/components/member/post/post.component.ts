import { Component, OnInit, Input } from '@angular/core';
import { MemberService, IMember } from '../member.service';
import { GetComponent } from '../get/get.component';
declare const $: any;

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('getComp') getComp: GetComponent;

  /** สร้าง model เอาไว้เก็บที่อยู่ใน input */
  public model:IMember = {
    mem_name: '',
    mem_email: '',
    mem_address: '',
    mem_phone: ''
  };

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  /** submit ส่งข้อมูล */
  public onSubmit(){
    //console.log(this.model);
    this.memberService
    .postItem(this.model)
    .subscribe(
      result => {
        //console.log(result);
        this.getComp.ngOnInit();
        $('#addEmployeeModal').modal('hide');
        this.onResetModel();
      },
      excep => alert(excep.error.message)
      // {
      //   console.log(excep);
      // }
    );
  }

  /** เคลียค่า modal form */
  public onResetModel(){
    this.model  = {
      mem_name: '',
      mem_email: '',
      mem_address: '',
      mem_phone: ''
    };
  }

}
