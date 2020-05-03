import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class SchemasService {
    private http;
    constructor(http: HttpClient);
    static newlineToBr(message: string): string;
    static formatYang(message: string): string;
    getSchemaNames(): Observable<string[]>;
    getSchema(schemaName: string): Observable<string>;
}
