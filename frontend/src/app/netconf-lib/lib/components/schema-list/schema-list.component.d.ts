import { OnInit } from '@angular/core';
import { SchemasService } from '../../services/schemas.service';
export declare class SchemaListComponent implements OnInit {
    schemasService: SchemasService;
    constructor(schemasService: SchemasService);
    loading: boolean;
    error: string;
    schemas: string[];
    ngOnInit(): void;
}
