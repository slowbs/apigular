import { Component, OnInit, Input } from '@angular/core';
import { GetComponent } from '../get/get.component';
import { MemberService } from '../member.service';
declare const $:any

@Component({
  selector: 'app-delete-all',
  templateUrl: './delete-all.component.html',
  styleUrls: ['./delete-all.component.css']
})
export class DeleteAllComponent implements OnInit {

  @Input('getComp') getComp: GetComponent;

  constructor(public memberService: MemberService) { }

  ngOnInit() {

  }

  public onSubmit() {
    //console.log(this.memberService.deleteAllModel)
    this.memberService
    .deleteAllItem(this.memberService.deleteAllModel)
    .subscribe(
      //result => {console.log(result)},
      result => {
        this.getComp.ngOnInit()
        $('#deleteAllEmployeeModal').modal('hide');
      },
      excep => alert(excep.error.message)
    );
  }

}
