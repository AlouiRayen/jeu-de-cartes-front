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
  display = false;
  sortingOrder = new Order();
  unsortedCards : Card[] = [];
  sortedCards : Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }
  
  showOrderPanel(){
    this.display = !this.display;
  }

  updateSortOrder(order : Order){
    this.sortingOrder = order;
    this.display=!this.display
    this.sortCards()
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
