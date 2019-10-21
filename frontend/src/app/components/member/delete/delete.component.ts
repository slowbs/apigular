import { Component, OnInit, Input } from '@angular/core';
import { MemberService } from '../member.service';
import { GetComponent } from '../get/get.component';
declare const $:any;

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input('getComp') getComp: GetComponent;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  public onSubmit() {
    //console.log(this.memberService.deleteModel);
    this.memberService
    .deleteItem(this.memberService.deleteModel.mem_id)
    .subscribe(
      result => {
        this.getComp.ngOnInit();
        //console.log(result);
        $('#deleteEmployeeModal').modal('hide');
      },
      excep => alert(excep.error.message)
    );
  }

}
