import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IconComponent} from '../icon/icon.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@Component({
  selector: 'app-info-frame',
  standalone: true,
  imports: [CommonModule, NzSpaceModule, IconComponent, NzTypographyModule],
  templateUrl: './info-frame.component.html',
  styleUrls: ['./info-frame.component.scss']
})
export class InfoFrameComponent {
  @Input() frameIcon: string = '';
  @Input() frameIconColor: string = '';
  @Input() frameTitle?: string = '';
  @Input() frameDescription?: string = '';
  @Input() frameColor: string = '';
}
