import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userid = "User ID Please"
  pswd = ""
  uloginForm = this.fb.group({

    userid: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4)]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  ulogin() {
    if (this.uloginForm.valid) {
      var userid = this.uloginForm.value.userid;
      var pswd = this.uloginForm.value.pswd;
      this.ds.ulogin(userid, pswd)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          localStorage.setItem("userName",result.userName)
          localStorage.setItem("currentAcc",result.currentAcc)
          this.router.navigateByUrl("/udashboard")
        }
      },
      (result)=>{
        alert(result.error.message)
      }
      )
    }
    else {
      alert("invalid form")
    }
  }
}

