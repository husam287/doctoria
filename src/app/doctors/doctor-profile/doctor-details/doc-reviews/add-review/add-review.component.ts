import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit,OnDestroy {

  @ViewChild('f1') reviewform:NgForm;
  submitted = false;
  rate:number;



  @ViewChild('closeButton') closeButton:ElementRef;
  choosedRate:boolean=false;

  constructor(private route:Router,private http: HttpClient, private route1: ActivatedRoute) { this.route1.params
  .subscribe(params => console.log(params) );}

  ngOnInit(): void {
  }
  ngOnDestroy(){
    this.closeButton.nativeElement.click();
  }

  changeRate(review:number){
    if(this.choosedRate) return;
    for (let index = 0; index <= review; index++) {
      document.getElementById('star'+index).classList.add("text-warning")
    }
  }

  removeRate(){
    if(this.choosedRate) return;

    for (let index = 0; index <= 4; index++) {
      document.getElementById('star'+index).classList.remove("text-warning")
    }

  }
  giveRate(n){
    this.choosedRate =! this.choosedRate;
    this.rate = n;
  }

  onSubmit(){
    const id = this.route1.parent.snapshot.params['id'];
    this.submitted=true;
    const post=this.reviewform.value.comment;
    const review={comment: post, rate:this.rate}
    this.http.post(environment.API_URL+'/patients/make-review/'+id, review).toPromise()
    .then((data) =>{
      console.log('succ:',data);
      this.closeButton.nativeElement.click();

    })
    .catch(err =>{
      console.log('error:',err);
    })
  }



}
