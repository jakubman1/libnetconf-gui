import {Component, Input, OnInit} from '@angular/core';
import {SchemasService} from '../../services/schemas.service';

@Component({
  selector: 'lib-schema-list',
  templateUrl: './schema-list.component.html',
  styleUrls: ['./schema-list.component.scss']
})
export class SchemaListComponent implements OnInit {

  constructor(public schemasService: SchemasService) { }

  @Input() selected = '';

  loading = false;
  error = '';
  schemas: string[] = [];

  ngOnInit() {
    this.loading = true;
    this.schemasService.getSchemaNames().subscribe(
    names => {
      this.schemas = names;
      this.loading = false;
    },
    err => {
        this.error = err.message;
        this.loading = false;
      });
  }

}
