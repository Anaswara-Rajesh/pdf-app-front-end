import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-viewupload',
  templateUrl: './viewupload.component.html',
  styleUrls: ['./viewupload.component.css']
})
export class ViewuploadComponent implements OnInit {

//   pdfs:any
//   userid:any

//   constructor(private ds:DataService) {
//     this.userid = localStorage.getItem("currentAcc")
//     this.ds.getPdf(this.userid)
//     .subscribe((result:any)=>{
//       if(result){
//         console.log(result)
//         this.pdfs = result.Pdf
//       }
//     },
//     (result)=>{
//       alert(result.error.message)
//     })    
//     // console.log(this.pdfs);
//    }  
//   ngOnInit(): void {
//   }
// }


  userid:any
  pdfs: any
 
  constructor(public ds: DataService) {
   this.userid= localStorage.getItem("currentAcc")
    this.ds.getPdf(this.userid).subscribe((result: any) => {
      if (result) {
        console.log(result.pdf)

        this.pdfs = result.pdf
      }
    }, (result) => {
      alert(result.error.message)

    })
  }

    ngOnInit(): void {
    }
}
