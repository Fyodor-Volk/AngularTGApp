import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

interface tgButton{
  show(): void;
  hide(): void;
  setText(text: string): void;
}


@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private window;
  tg;
  constructor(@Inject(DOCUMENT) private _document) {
    this.window = this._document.defaultView;
    this.tg = this.window.Telegram.WebApp;
   }

   get MainButton(): tgButton{
     return this.tg.MainButton;
   }
}
