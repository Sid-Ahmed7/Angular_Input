import { Component, Input } from '@angular/core';
import { Skill } from '../models/skill';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  @Input() skills!: Skill;

}
