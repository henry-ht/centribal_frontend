import { RequestsService } from './../../core/services/request.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroInterface } from 'src/app/core/interfaces/hero-interface';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  hero!:HeroInterface;
  loadPage:boolean = false;
  faPaperPlane = faPaperPlane;
  constructor(private route:ActivatedRoute, private http:RequestsService) {

    this.route.params.subscribe(params => {
      this.getHero(params['id']);
    });

   }

  ngOnInit(): void {
  }

  getHero(id:number){
    this.http.get('hero/'+id)
    .subscribe((data:any)=>{
      this.hero = data.data;
    },(error:any)=>{ },()=>{this.loadPage = false;});
  }

}
