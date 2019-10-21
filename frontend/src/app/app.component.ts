import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

// // export class AppComponent implements OnInit{
// //   ngOnInit(){
// //     this.initializedLoadScript();
// //   }

//   /** โหลดสคริป */
//   private initializedLoadScript() {
//     // Activate tooltip
//     $('[data-toggle="tooltip"]').tooltip();

//     // Select/Deselect checkboxes
//     var checkbox = $('table tbody input[type="checkbox"]');
//     $("#selectAll").click(function () {
//       if (this.checked) {
//         checkbox.each(function () {
//           this.checked = true;
//         });
//       } else {
//         checkbox.each(function () {
//           this.checked = false;
//         });
//       }
//     });
//     checkbox.click(function () {
//       if (!this.checked) {
//         $("#selectAll").prop("checked", false);
//       }
//     });
//   }

}
