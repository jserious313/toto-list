import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    constructor() {}

    getItem(key: string): string {
        return sessionStorage.get(key);
    }
    setItem(key: string, value: string): void {
        sessionStorage.setItem(key, value);
    }
}
