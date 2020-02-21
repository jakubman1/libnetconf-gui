import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Device} from "../classes/Device";


@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    constructor(
        private http: HttpClient
    ) {}


    exampleDevices: Device[] = [
        {
            name: "Example device",
            hostname: "localhost",
            port: 123,
            username: "admin",
        },
        {
            name: "Example device 2",
            hostname: "localhost",
            port: 124,
            username: "admin",
        },
    ];

    /**
     * Get all devices from profile, that uses sets as a default profile
     */
    public getOnLoginProfile(): Observable<Device[]> {
        return this.getProfileDevices("default");
    }

    public getProfileDevices(profileName: string): Observable<Device[]> {
        return of(this.exampleDevices);
    }
}