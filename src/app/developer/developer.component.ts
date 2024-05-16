import { Component } from '@angular/core';
import { Skill } from '../models/skill';
import { Developer } from '../models/developer';
import { SkillComponent } from '../skill/skill.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [SkillComponent, CommonModule, FormsModule],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css'
})
export class DeveloperComponent {

  skills : Skill[] = [
    new Skill('Angular','../../assets/img/angularjs.png', 'https://angular.io/'),
    new Skill('React','../../assets/img/react-logo.png', 'https://fr.legacy.reactjs.org/')
  ];
  
  newDev : Developer = new Developer("Dupont","George",35,"Dév", this.skills);


}
