import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService, Alert } from '../../alert.service';

@Component({
  selector: 'app-alert-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent {
  alert: Alert | null = null;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.alert$.subscribe(alert => {
      this.alert = alert;
    });
  }

  close() {
    this.alertService.clearAlert();
  }
}