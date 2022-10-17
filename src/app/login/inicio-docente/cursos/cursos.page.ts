import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.page.html',
  styleUrls: ['./cursos.page.scss'],
})
export class CursosPage implements OnInit {
  cursos =[]
  titulo = "CURSOS"
  constructor(private servicio:CursosService) { }
  

  ngOnInit() {
    this.cursos = this.servicio.obtenercursos()
  }

}
