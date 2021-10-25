import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, NG_ASYNC_VALIDATORS, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { DataService } from '../services/data.service';
// import { FileCheck } from 'angular-file-validator';


// @Component({
//   selector: 'app-user-dashboard',
//   templateUrl: './user-dashboard.component.html',
//   styleUrls: ['./user-dashboard.component.css']
// })
// export class UserDashboardComponent implements OnInit {
   
//   uploadForm = this.fb.group({

//     userid: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4)]],
//     pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
//     filename: ['', [Validators.required]],
//     file: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
//   })

//   userName:any
//   userid:any

//   constructor(private ds: DataService, private fb: FormBuilder, private router:Router) {
//     this.userName = localStorage.getItem("userName")
//    }

//   ngOnInit(): void {
//   }
//   upload() {

//     if (this.uploadForm.valid) {
//       var userid = this.uploadForm.value.userid;
//       var pswd = this.uploadForm.value.pswd;
//       var filename = this.uploadForm.value.filename;
//       var file = this.uploadForm.value.file;

//       this.ds.upload(userid, pswd, filename, file)
//       .subscribe((result:any)=>{
//         if(result){
//           alert(result.message)
//         }
//       },
//       (result)=>{
//         alert(result.error.message)
//       }
//       )
//     }
//     else {
//       alert("invalid form")
//     }
//   }
// }

