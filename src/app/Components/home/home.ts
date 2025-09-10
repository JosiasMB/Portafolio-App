import { Component } from '@angular/core';
import { Experience } from '../experience/experience';
import { Education } from '../education/education';
import { Skills } from '../skills/skills';
import { Hobbies } from '../hobbies/hobbies';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Experience, Education, Skills, Hobbies],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
