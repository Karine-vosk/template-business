import { MatCardModule } from '@angular/material/card';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {IconComponent} from '../icon/icon.component';
import {InfoCardComponent} from '../info-card/info-card.component';
import {InfoFrameComponent} from '../info-frame/info-frame.component';

interface IInfo {
  icon: string,
  title: string,
  description: string,
  color: string
}

interface IInfoColor extends IInfo {
  icon: string,
  title: string,
  description: string,
  color: string,
  cardColor: string;
  className: string
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatGridListModule, IconComponent, InfoCardComponent, InfoFrameComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isBox: boolean = true;
  iconName: string = 'home';
  projects: IInfo[] = [
   {
      icon: 'home',
      title: 'css components',
      description: 'Notus Angular comes with a huge number of Fully Coded CSS components.',
      color: 'red'
    },
    {
      icon: 'account_circle',
      title: 'Pages',
      description: 'This extension also comes with 3 sample pages. They are fully coded so you can start working instantly.',
      color: 'red'
    },
    {
      icon: 'inbox',
      title: 'JavaScript Components',
      description: 'We also feature many dynamic components for React, NextJS, Vue and Angular.',
      color: 'red'
    },
    {
      icon: 'insert_comment',
      title: 'Documentation',
      description: 'Built by developers for developers. You will love how easy is to to work with Notus Angular.',
      color: 'red'
    }
  ];

  cardInfo: IInfo[] = [
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

  section3: IInfoColor[] = [
    {
      icon: 'home',
      title: 'Excelent services',
      description: 'some quick example text to build on the card titlw and make up the bulk of the card\'s content.',
      color: '#fff235',
      cardColor: 'white',
      className: 'first'
    },
    {
      icon: 'home',
      title: 'Free Revisions',
      description: 'keep you user engaged by providing  meaningful information. Remember that by this time, the user is curious.',
      color: 'red',
      cardColor: 'black',
      className: 'second'
    },
    {
      icon: 'home',
      title: 'Romina',
      description: 'Developer',
      color: 'red',
      cardColor: 'white',
      className: 'third'
    },
  ];

  componentsName :string[] = ['Buttons', 'Inputs', 'Menus', 'Labels', 'Tabs', 'Pagination']

  ngOnInit(): void {

  }
}
