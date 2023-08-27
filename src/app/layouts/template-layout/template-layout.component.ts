import { MatCardModule } from '@angular/material/card';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {IconComponent} from '../../components/icon/icon.component';
import {InfoCardComponent} from '../../components/info-card/info-card.component';
import {InfoFrameComponent} from '../../components/info-frame/info-frame.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ItemListComponent } from '../../components/item-list/item-list.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';


interface IInfo {
  icon: string,
  title: string,
  description?: string,
  color: string
}

interface IInfoColor extends IInfo {
  cardColor: string;
  className: string
}

@Component({
  selector: 'app-template-layout',
  standalone: true,
  imports: [CommonModule, NzLayoutModule, MatButtonModule, MatCardModule, MatGridListModule, IconComponent, InfoCardComponent, InfoFrameComponent, NzButtonModule, IconComponent, NzGridModule, NzSpaceModule, NzButtonModule, NzCardModule, ItemListComponent, NzDividerModule],
  templateUrl: './template-layout.component.html',
  styleUrls: ['./template-layout.component.scss']
})
export class TemplateLayoutComponent {
  isBox: boolean = true;
  iconName: string = 'home';
  section2Info: IInfo[] = [
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

  section4: IInfoColor[] = [
    {
      icon: 'home',
      title: 'Svelte',
      color: 'white',
      cardColor: 'red',
      className: 'first'
    },
    {
      icon: 'home',
      title: 'Javascript',
      color: 'white',
      cardColor: 'yellow',
      className: 'second'
    },
    {
      icon: 'home',
      title: 'ReactJs',
      color: 'white',
      cardColor: 'blue',
      className: 'third'
    },
    {
      icon: 'home',
      title: 'Angular',
      color: 'white',
      cardColor: 'red',
      className: 'four'
    },
    {
      icon: 'home',
      title: 'NextJs',
      color: 'white',
      cardColor: 'nav',
      className: 'five'
    },
    {
      icon: 'home',
      title: 'Vuejs',
      color: 'white',
      cardColor: 'blue',
      className: 'six'
    },
  ];

  projectsInfo: any = [
    {
      title: "Login page",
      img: 'login'
    },
    {
      title: "Profile page",
      img: 'profile'
    },
    {
      title: "Landing page",
      img: 'landing'
    }
  ]

  cssComponentsName :string[] = ['Buttons', 'Inputs', 'Menus', 'Labels', 'Tabs', 'Pagination'];
  jsComponentsName :string[] = ['Alerts', 'Dropdowns', 'Menus', 'Modals', 'Navbars', 'Popovers', 'Tabs', 'Tooltips'];  

  ngOnInit(): void {

  }
}
