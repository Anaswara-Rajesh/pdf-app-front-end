import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  userid = ""
  pswd = ""
  uname = ""
  uregisterForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    userid: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  uregister() {

    if (this.uregisterForm.valid) {
      var userid = this.uregisterForm.value.userid;
      var pswd = this.uregisterForm.value.pswd;
      var uname = this.uregisterForm.value.uname;



      this.ds.uregister(userid, uname, pswd)
        .subscribe((result: any) => {
          if (result) {
            alert("succesfilly registerd")
            this.router.navigateByUrl("")
          }
        }, (result: any) => {
          alert(result.error.message)
          this.router.navigateByUrl("")
        })
    }
    else {
      alert(" form invalid")
    }
  }
}

