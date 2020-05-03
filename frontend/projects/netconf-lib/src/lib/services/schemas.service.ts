import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchemasService {

  constructor(private http: HttpClient) { }

  static newlineToBr(message: string) {
    const entityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&#39;',
      '/': '&#x2F;'
    };
    return message.replace(/[&<>"'\/]/g, s => entityMap[s]).replace(/\n/g, '<br>');
  }

  getSchemaNames(): Observable<string[]> {
    return this.http.get<string[]>('/netconf/schemas');
  }

  getSchema(schemaName: string): Observable<string> {
    return this.http.get<string>('/netconf/schema/' + schemaName);
  }


}
