import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Alert {
  message: string;
  type: 'error' | 'success' | 'alert';
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new BehaviorSubject<Alert | null>(null);
  public alert$ = this.alertSubject.asObservable();

  showAlert(message: string, type: 'error' | 'success' | 'alert') {
    this.alertSubject.next({ message, type });
  }

  clearAlert() {
    this.alertSubject.next(null);
  }
}
