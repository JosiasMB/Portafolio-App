import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  standalone: true
})
export class Projects implements OnInit {
  ngOnInit() { }
  projectsList: {
    title: string;
    description: string;
    link: string;
    snapshot: string;
    technology: string[];
  }[] = [
      {
        title: 'Aventuras Tainas',
        description:
          'Created a landing page for a local tour company to showcase their services. The website was created using Angular, HTML, CSS, and JavaScript.',
        snapshot: 'assets/img/projects/aventuras_tainas.png',
        link: '',
        technology: ['angular', 'html', 'css', 'javascript', 'typescript'],
      },
      {
        title: 'Egresados UASD',
        description:
          'Created a FrontEnd App as my final project of my career. The website was created using Angular, HTML, CSS, and JavaScript.',
        snapshot: 'assets/img/projects/egresados_uasd.png',
        link: 'http://localhost:8100/',
        technology: ['angular', 'html', 'css', 'javascript', 'typescript'],
      },
      {
        title: 'Pokemon API',
        description:
          'Created a FrontEnd App as my final project of my career. The website was created using Angular, HTML, CSS, and JavaScript.',
        snapshot: 'assets/img/projects/pokemon.png',
        link: 'http://localhost:8100/',
        technology: ['angular', 'html', 'css', 'javascript', 'typescript'],
      },
      {
        title: 'Quote Generator',
        description:
          'Created a FrontEnd App as my final project of my career. The website was created using Angular, HTML, CSS, and JavaScript.',
        snapshot: 'assets/img/projects/Quote.png',
        link: 'http://localhost:8100/',
        technology: ['angular', 'html', 'css', 'javascript', 'typescript'],
      },
      {
        title: 'Joke Teller',
        description:
          'Created a FrontEnd App as my final project of my career. The website was created using Angular, HTML, CSS, and JavaScript.',
        snapshot: 'assets/img/projects/joke.png',
        link: 'http://localhost:8100/',
        technology: ['angular', 'html', 'css', 'javascript', 'typescript'],
      },
      {
        title: 'Infinity Roll',
        description:
          'Created a FrontEnd App as my final project of my career. The website was created using Angular, HTML, CSS, and JavaScript.',
        snapshot: 'assets/img/projects/infinity_rol.png',
        link: 'http://localhost:8100/',
        technology: ['angular', 'html', 'css', 'javascript', 'typescript'],
      },
      {
        title: 'Click Counter',
        description:
          'Created a FrontEnd App as my final project of my career. The website was created using Angular, HTML, CSS, and JavaScript.',
        snapshot: 'assets/img/projects/contador.png',
        link: 'http://localhost:8100/',
        technology: ['angular', 'html', 'css', 'javascript', 'typescript'],
      },
      {
        title: 'Simple Calculator',
        description:
          'Created a FrontEnd App as my final project of my career. The website was created using Angular, HTML, CSS, and JavaScript.',
        snapshot: 'assets/img/projects/calculadora.png',
        link: 'http://localhost:8100/',
        technology: ['angular', 'html', 'css', 'javascript', 'typescript'],
      },
      {
        title: 'Task Manager',
        description:
          'Created a FrontEnd App as my final project of my career. The website was created using Angular, HTML, CSS, and JavaScript.',
        snapshot: 'assets/img/projects/task.png',
        link: 'http://localhost:8100/',
        technology: ['angular', 'html', 'css', 'javascript', 'typescript'],
      },
    ];

}
