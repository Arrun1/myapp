import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rpg-games',
  templateUrl: './rpg-games.component.html',
  styleUrls: ['./rpg-games.component.css']
})
export class RpgGamesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  rpg=[
    {'id':1,'name':'Genshin Impact','description':'Genshin Impact is an open-world action role-playing game that allows the player to control one of four interchangeable characters in a party. Switching between characters can be done quickly during combat, allowing the player to use several different combinations of skills and attacks.','image':'../../assets/genshin.jpg'},
    {'id':2,'name':'Monster Hunter: World','description':'Monster Hunter: World is an action role-playing game developed and published by Capcom and the fifth mainline installment in the Monster Hunter series. In the game, the player takes the role of a Hunter, tasked to hunt down and either kill or trap monsters that roam in one of several environmental spaces.','image':'../../assets/monster.jpg'},
    {'id':3,'name':'Final Fantasy 7 Remake','description':"Final Fantasy VII Remake is a 2020 action role-playing game developed and published by Square Enix. Set in the dystopian cyberpunk metropolis of Midgar, players control mercenary Cloud Strife. He joins AVALANCHE, an eco-terrorist group trying to stop the powerful megacorporation Shinra from using the planet's life essence as an energy source. The gameplay combines real-time action with strategic and role-playing elements.",'image':'../../assets/final.jpg'},
    {'id':4,'name':'Nier Automata','description':'NieR: Automata tells the story of androids 2B, 9S and A2 and their battle to reclaim the machine-driven dystopia overrun by powerful machines. Humanity has been driven from the Earth by mechanical beings from another world. ','image':'../../assets/nier.jpg'},
    {'id':5,'name':"Demon's Souls Remake",'description':"The premise of Demon's Souls has you wade into the demonically infested country of Boletaria. Its greedy King has awoken the Old One through excessive use of the Soul Arts and now Boletaria and its neighboring provinces are a wasteland of death.",'image':'../../assets/demon.jpg'},
    {'id':6,'name':'Legend of Zelda: Breath of the Wild','description':'Breath of the Wild is an action-adventure game set in an open world where players are tasked with exploring the kingdom of Hyrule while controlling Link. Link can procure items from the environment, including weapons, food, and other resources. Unlike previous Zelda games, weapons and shields degrade through use.','image':'../../assets/zelda.jpg'},
  ]
}
