// @ts-ignore
import { Injectable } from '@angular/core';
// @ts-ignore
import { HttpClient, HttpParams } from '@angular/common/http';
// @ts-ignore
import { Observable, of } from 'rxjs';
import { ProfileDevice } from "../classes/ProfileDevice";

// TODO: Caching to prevent multiple unnecessary HTTP requests

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    constructor(
        private http: HttpClient
    ) {}

    /**
     * Get all devices from profile, that uses sets as a default profile
     */
    public getOnLoginProfile(): Observable<{devices: ProfileDevice[], name: string}> {
        return this.http.get<{devices: ProfileDevice[], name: string}>('/netconf/profileOnLogin');
    }

    public getProfileDevices(profileName: string): Observable<ProfileDevice[]> {
        return this.http.get<ProfileDevice[]>('/netconf/profile/' + profileName);

    }

    public getAllProfileNames(): Observable<string[]> {
        return this.http.get<string[]>('/netconf/profiles');
    }

    public addProfile(name: string): Observable<object> {
        return this.http.post<object>('/netconf/profile', {profile: name});
    }

    public removeProfile(name: string): Observable<object> {
        return this.http.post<object>('/netconf/removeProfile', {profile: name});
    }

    setActiveProfile(profileName: string): Observable<object> {
        return this.http.post<object>('/netconf/activateProfile', {profile: profileName});
    }
}
