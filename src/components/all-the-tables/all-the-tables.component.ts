import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { TableService } from '../../services/table.service';
import { MassageService } from '../../services/massage.service';
import { TableComponent } from "../table/table.component";

@Component({
  selector: 'app-all-the-tables',
  imports: [TableComponent],
  templateUrl: './all-the-tables.component.html',
  styleUrl: './all-the-tables.component.css'
})
export class AllTheTablesComponent {
  constructor(public dataTables:TableService,
    public dataUsers:UserService,
    public dataMassage:MassageService){}

    
}
