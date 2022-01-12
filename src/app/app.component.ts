import { Component } from '@angular/core';
import { Card } from './models/Card';
import { Order } from './models/Order';
import { CardService } from './services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jeu-de-cartes-front';
  sortingOrder = new Order();
  unsortedCards : Card[] = [];
  sortedCards : Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

  updateSortOrder(order : Order){
    if(this.unsortedCards.length > 0){
      this.sortingOrder = order;
      this.sortCards()
    }
  }

  getRandomCards(){
    this.cardService.getRandomCards().subscribe(data=>{
      this.unsortedCards = data;
      this.sortedCards = [];
    },err=>{
      console.error(err);
    })
  }

  sortCards(){
    this.cardService.sortCards(this.sortingOrder).subscribe(data=>{
      this.sortedCards = data;
    },err=>{
      console.error(err);
    })
  }

}
