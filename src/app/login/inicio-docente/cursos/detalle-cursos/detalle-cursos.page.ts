import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-detalle-cursos',
  templateUrl: './detalle-cursos.page.html',
  styleUrls: ['./detalle-cursos.page.scss'],
})
export class DetalleCursosPage implements OnInit {
  curso: Object

  constructor(private activateRoute: ActivatedRoute, private servicio: CursosService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe( paramMap => {
      this.curso = this.servicio.obtenercurso(paramMap.get('id'))
      console.log(paramMap.get('id'))
    })
  }

}
