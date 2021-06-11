import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrginazationService {

  constructor() { }

  setOrginazationId(id: string) {
    localStorage.setItem('orginazationId', id);
  }

  getOrginazationId() {
    return localStorage.getItem('orginazationId');
  }

}
