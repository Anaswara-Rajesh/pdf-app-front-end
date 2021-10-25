import { transition } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const options = {
  withCredentials: true
}
@Injectable({
  providedIn: 'root'
})

export class DataService {

  currentUser = ""

  currentAdmin = ""

  currentAcc = " "

  currentAdAcc = ""

  users: any = {
    1000: { userid: 1000, username: "Aahil", password: "userone", filename:"abab",file:"abab",pdf: [] },
    1001: { userid: 1001, username: "Bahit", password: "usertwo",filename:"abab",file:"abab", pdf: [] },
    1002: { userid: 1002, username: "Cahit", password: "userthree",filename:"abab",file:"abab", pdf: [] },
    1003: { userid: 1003, username: "Dahit", password: "userfour",filename:"abab",file:"abab", pdf: [] }
  }

  admins: any = {
    1000: { adminid: 1000, adminname: "Aahil", password: "userone",filename:"abab",file:"abab", pdf:[] },
    1001: { adminid: 1001, adminname: "Bahit", password: "usertwo",filename:"abab",file:"abab", pdf:[] },
    1002: { adminid: 1002, adminname: "Cahit", password: "userthree",filename:"abab",file:"abab", pdf:[] },
    1003: { adminid: 1003, adminname: "Dahit", password: "userfour",filename:"abab",file:"abab", pdf:[]}
  }

  constructor(private http: HttpClient) {
    //this.getDetails()
  }

  saveDetails() {
    localStorage.setItem("users", JSON.stringify(this.users))

    if (this.currentUser) {

      localStorage.setItem("currentUser", JSON.stringify(this.currentUser))

    }
    if (this.currentAcc) {

      localStorage.setItem("currentAcc", JSON.stringify(this.currentAcc))

    }

  }

  saveAdminDetails() {
    localStorage.setItem("admins", JSON.stringify(this.admins))

    if (this.currentAdmin) {

      localStorage.setItem("currentAdmin", JSON.stringify(this.currentAdmin))

    }
    if (this.currentAdAcc) {

      localStorage.setItem("currentAdAcc", JSON.stringify(this.currentAdAcc))

    }

  }

  getDetails() {
    if (localStorage.getItem("users")) {
      this.users = JSON.parse(localStorage.getItem("users") || '')
    }
    if (localStorage.getItem("currentUser")) {
      this.currentUser = JSON.parse(localStorage.getItem("currentUser") || '')
    }
    if (localStorage.getItem("currentAcc")) {
      this.currentAcc = JSON.parse(localStorage.getItem("currentAcc") || '')
    }

  }

  getAdminDetails() {
    if (localStorage.getItem("admins")) {
      this.admins = JSON.parse(localStorage.getItem("admins") || '')
    }
    if (localStorage.getItem("currentAdmin")) {
      this.currentAdmin = JSON.parse(localStorage.getItem("currentAdmin") || '')
    }
    if (localStorage.getItem("currentAdAcc")) {
      this.currentAdAcc = JSON.parse(localStorage.getItem("currentAdAcc") || '')
    }

  }

  uregister(userid: any, username: any, password: any) {

    const data = {
      userid,
      username,
      password
    }

    return this.http.post("http://localhost:3000/uregister", data)

  }
  ulogin(userid: any, pswd: any) {

    const data = {
      userid,
      pswd
    }

    return this.http.post("http://localhost:3000/ulogin", data, options)
  }

  aregister(adminid: any, adminname: any, password: any) {

    const data = {
      adminid,
      adminname,
      password
    }

    return this.http.post("http://localhost:3000/aregister", data)
  }
  
  alogin(adminid: any, pswd: any) {

    const data = {
      adminid,
      pswd
    }

    return this.http.post("http://localhost:3000/alogin", data, options)
  }
    upload(userid:any,pswd:any,filename:any,file:any){

      const data ={
        userid,
        pswd,
        filename,
        file
      }
  
      return  this.http.post("http://localhost:3000/upload",data,options)
  }
  // getPdf(userid:any){
  //   const data ={
  //     userid
  //   }
  //   return  this.http.post("http://localhost:3000/getPdf/",data,options)
  // }
  getPdf(userid:any) {
    const data={userid}
    return this.http.post('http://localhost:3000/getPdf/',data,options)
   // return this.users[this.currentAcc].transaction
  }
}

