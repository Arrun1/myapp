import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fps-games',
  templateUrl: './fps-games.component.html',
  styleUrls: ['./fps-games.component.css']
})
export class FpsGamesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fps=[
    {'id':1,'name':'Call of Duty: Warzone','description':'Call of Duty: Warzone is a free to play battle royale.Where you fight to the last team standing. Collecting loot on the ground,eliminating enemy players and survivng the gas till you are the last man left','image':'../../assets/wz.jpg'},
    {'id':2,'name':'Battlefield','description':'Battlefield 2042 is set in a world that is on the brink of destruction, with food, energy and water creating a refugee crisis. Users play as the “Non-Patriated”, a faction made up of soldiers, farmers and engineers who secretly join remaining superpowers the US and Russia for a chance at survival.','image':'../../assets/battlefield.jpg'},
    {'id':3,'name':'Apex Legends','description':'Apex Legends is a free-to-play battle royale-hero shooter game developed by Respawn Entertainment and published by Electronic Arts.n "Battle Royale", up to 20 three-person squads or 30 two-person duos land on an island and search for weapons and supplies before attempting to defeat all other players in combat.','image':'../../assets/apexlegends.jpg'},
    {'id':4,'name':'Tom Clancys Rainbow Six Seige','description':'Rainbow Six Siege is a high-precision, tactical shooter that prioritises careful planning teamwork and finely tuned tactical play. ','image':'../../assets/rainbow.jpg'},
    {'id':5,'name':'Doom Eternal','description':'Doom Eternal is a first-person shooter game developed by id Software and published by Bethesda Softworks. Set some time after the events of the 2016 game, the story follows the Doomguy once again, on a mission to end Hells consumption of Earth and foil the alien Maykrs plans to exterminate humanity.','image':'../../assets/doom.jpg'},
    {'id':6,'name':'Titanfall 2','description':'Titanfall 2 is a first-person shooter video game, developed by Respawn Entertainment and published by Electronic Arts. A sequel to 2014s Titanfall.In Titanfall 2, players control Titans, mecha-style exoskeletons and their pilots, who are agile and equipped with a variety of skills ranging from wall-running to cloaking','image':'../../assets/titan.jpg'},
  ]
}
