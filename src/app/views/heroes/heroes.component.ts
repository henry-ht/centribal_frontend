import { RequestsService } from './../../core/services/request.service';
import { Component, OnInit } from '@angular/core';
import { faArrowRight, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  loadPage:boolean = false;
  heroes:any = [];
  textSearch:string = '';
  page: number = 1;
  total:number = 10;
  faArrowRight = faArrowRight;
  faPaperPlane = faPaperPlane;
  flyHero:string = 'all';
  constructor(private http:RequestsService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.http.get('hero')
    .subscribe((data:any)=>{
      this.heroes = data.data;
    },(error:any)=>{ },()=>{this.loadPage = false;});
  }

  pageChange($event:any){
    this.page = $event;
  }

}
