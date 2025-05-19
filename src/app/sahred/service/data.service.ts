import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly logo = 'Vishal Portfolio';
  readonly name = 'Vishal Kukadiya';
  readonly location = 'Surat, Gujarat';
  readonly role = 'Frontend Developer';
  readonly email = 'vishalkukadiya3120@gmail.com';
  readonly contact = '+91 9879958924';
  readonly linkdinUrl = 'https://www.linkedin.com/in/vishal-kukadiya-078392227';
  readonly githubUrl = 'https://github.com/Kukadiya1';

  constructor() { }

  skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'UI/UX Design', level: 70 }
  ];
}
