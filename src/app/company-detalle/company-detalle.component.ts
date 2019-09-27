import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../services/company.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-company-detalle',
  templateUrl: './company-detalle.component.html',
  styleUrls: ['./company-detalle.component.scss']
})
export class CompanyDetalleComponent implements OnInit {
  public id=null;
  public url_imagen='https://image.tmdb.org/t/p/w200/';
  public company:object;
  constructor(public companyservice:CompanyService,public _router:ActivatedRoute) { }

  ngOnInit() {
    this.id=this._router.snapshot.paramMap.get('company');
    this.companyservice.buscarCompany(this.id)
    .subscribe(resultado=>{
      this.company=resultado;
    })
  }

}
