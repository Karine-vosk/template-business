import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {IconComponent} from '../icon/icon.component';

@Component({
  selector: 'app-info-frame',
  standalone: true,
  imports: [CommonModule, MatCardModule, IconComponent],
  templateUrl: './info-frame.component.html',
  styleUrls: ['./info-frame.component.scss']
})
export class InfoFrameComponent {
  @Input() frameIcon: string = '';
  @Input() frameIconColor: string = '';
  @Input() frameTitle: string = '';
  @Input() frameDescription: string = '';
  @Input() frameColor: string = '';
}
