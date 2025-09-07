import { Component } from '@angular/core';
import { Experience } from '../experience/experience';
import { Education } from '../education/education';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Experience, Education],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
