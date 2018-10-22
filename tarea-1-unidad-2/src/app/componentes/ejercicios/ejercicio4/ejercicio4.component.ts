import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio4',
  templateUrl: './ejercicio4.component.html',
  styleUrls: ['./ejercicio4.component.css']
})
export class Ejercicio4Component implements OnInit {
  tweet: string;
  restante: number;
  ultimoTweet: string;
  constructor() { }

  ngOnInit() {
    this.tweet = '';
    this.restante = 140 - this.tweet.length;
  }

  cambioDeTweetHandler(evento) {
    if(this.restante >= 1 && evento.target.value.length <= 140) {
        this.tweet = evento.target.value;
        this.restante = 140 - this.tweet.length;
        this.ultimoTweet = this.tweet;
    } else {
      this.restante = 0;
      this.tweet = this.ultimoTweet;
      return false;
    }



  }
}
