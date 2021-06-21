import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, EMPTY } from 'rxjs';
import { concatMap } from 'rxjs/operators';

interface ToasterMessage {
  type: string;
  message: string;
  // action: string | null;
  // config: MatSnackBarConfig | null;
}

@Injectable({
  providedIn: 'root'
})
export class SnackbarService implements OnDestroy {

  private toastStream: BehaviorSubject<ToasterMessage | {}> = new BehaviorSubject<ToasterMessage | {}>({});
  private toastStream$ = this.toastStream.asObservable();

  constructor(
    public snackBar: MatSnackBar,
    private zone: NgZone,
  ) {
    this.toastStream$.pipe(
      concatMap((toast: ToasterMessage | {}) => {
        if (!('type' in toast)) {
          return EMPTY;
        }
        return this.handleToastMessage(toast).afterDismissed();
      })
    ).subscribe((_) => {
    });
  }

  openSnackBar(
    message: string,
    action: string | undefined,
    color: string = 'green-snackbar'
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this.zone.run(() => {
      const snackBarRef = this.snackBar.open(message, action, {
        duration: 5000,
        panelClass: color,
        horizontalPosition: 'center',
      });
      snackBarRef.onAction().subscribe(() => snackBarRef.dismiss());
      return snackBarRef;
    });
  }

  handleToastMessage(toast: ToasterMessage): MatSnackBarRef<TextOnlySnackBar> {
    return this.openSnackBar(toast.message, 'x', `${toast.type}-snackbar`);
  }

  addToast(toast: ToasterMessage): void {
    this.toastStream.next(toast);
  }

  success(message: string) {
    this.addToast({ type: 'green', message: message });
  }

  danger(message: string) {
    this.addToast({ type: 'red', message: message });
  }

  warning(message: string) {
    this.addToast({ type: 'warning', message: message });
  }

  create(StatusCode: number) {
    if (StatusCode == 0) {
      // 新增成功
      this.success('新增成功');
    } else {
      // 新增失敗
      this.danger('新增失敗');
    }
  }

  update(StatusCode: number) {
    if (StatusCode == 0) {
      // 編輯成功
      this.success('編輯成功');
    } else {
      // 編輯失敗
      this.danger('編輯失敗');
    }
  }

  delete(StatusCode: number) {
    if (StatusCode == 0) {
      // 刪除成功
      this.success('刪除成功');
    } else {
      // 刪除失敗
      this.danger('刪除失敗');
    }
  }

  ngOnDestroy(): void {
    this.toastStream.next({});
    this.toastStream.complete();
  }
}
