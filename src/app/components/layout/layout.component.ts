import { MatCardModule } from '@angular/material/card';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {IconComponent} from '../icon/icon.component';
import {InfoCardComponent} from '../info-card/info-card.component';

interface IProjects {
  icon: string,
  title: string,
  description: string,
  color: string
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatGridListModule, IconComponent, InfoCardComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isBox: boolean = true;
  iconName: string = 'home';
  projects: IProjects[] = [
   {
      icon: 'home',
      title: 'css components',
      description: 'Notus Angular comes with a huge number of Fully Coded CSS components.',
      color: 'red'
    },
    {
      icon: 'user',
      title: 'Pages',
      description: 'This extension also comes with 3 sample pages. They are fully coded so you can start working instantly.',
      color: 'red'
    },
    {
      icon: '',
      title: 'JavaScript Components',
      description: 'We also feature many dynamic components for React, NextJS, Vue and Angular.',
      color: 'red'
    },
    {
      icon: '',
      title: 'Documentation',
      description: 'Built by developers for developers. You will love how easy is to to work with Notus Angular.',
      color: 'red'
    }
  ];

  ngOnInit(): void {

  }
}
