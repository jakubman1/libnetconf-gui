import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenericServerResponse } from '../classes/GenericServerResponse';
export declare class SchemasService {
    private http;
    constructor(http: HttpClient);
    static newlineToBr(message: string): string;
    static formatYang(message: string): string;
    getSchemaNames(): Observable<string[]>;
    getSchema(schemaName: string): Observable<string>;
    removeSchema(schemaName: string): Observable<GenericServerResponse>;
}
