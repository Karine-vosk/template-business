import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {IconComponent} from '../icon/icon.component';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, IconComponent],
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
  @Input() cardIcon: string = '';
  @Input() cardIconColor: string = '';
  @Input() cardTitle: string = '';
  @Input() cardDescription: string = '';
  @Input() cardColor: string = '';
}
