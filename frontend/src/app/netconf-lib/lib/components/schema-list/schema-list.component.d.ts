import { OnInit } from '@angular/core';
import { SchemasService } from '../../services/schemas.service';
export declare class SchemaListComponent implements OnInit {
    schemasService: SchemasService;
    constructor(schemasService: SchemasService);
    selected: string;
    loading: boolean;
    error: string;
    schemas: string[];
    ngOnInit(): void;
    removeSchema(name: string): void;
}
