import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  adminid = ""
  pswd = ""
  adminname = ""
  aregisterForm = this.fb.group({
    adminid: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    adminname: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  aregister() {

    if (this.aregisterForm.valid) {
      var adminid = this.aregisterForm.value.adminid;
      var pswd = this.aregisterForm.value.pswd;
      var adminname = this.aregisterForm.value.adminname;



      this.ds.aregister(adminid, adminname, pswd)
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
