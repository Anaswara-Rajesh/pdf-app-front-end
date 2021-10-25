import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminid = ""
  pswd = ""
  aloginForm = this.fb.group({

    adminid: ['', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(4)]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  alogin() {
    if (this.aloginForm.valid) {
      var adminid = this.aloginForm.value.adminid;
      var pswd = this.aloginForm.value.pswd;
      this.ds.alogin(adminid, pswd)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          localStorage.setItem("adminName",result.adminName)
          localStorage.setItem("currentAdAcc",result.currentAdAcc)
          this.router.navigateByUrl("/adashboard")
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
