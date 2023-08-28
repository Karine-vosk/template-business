import { NzCardModule } from 'ng-zorro-antd/card';
import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconComponent} from '../icon/icon.component';
import {NzSpaceModule} from 'ng-zorro-antd/space';
import {NzGridModule} from 'ng-zorro-antd/grid';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule, IconComponent, NzCardModule, NzSpaceModule, NzGridModule],
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
  @Input() cardIcon: string = '';
  @Input() cardIconColor: string = '';
  @Input() cardTitle: string = '';
  @Input() cardDescription?: string = '';
  @Input() cardColor: string = 'transparent';
  @Input() className: string = '';
}
