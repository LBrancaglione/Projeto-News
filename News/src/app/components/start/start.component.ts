import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {

  //Declaração do Router esponsavel por executar a navegação entre as paginas
  constructor(private router: Router) { }

  ngOnInit() {}
  //função que executa a navegação até a pagina login
  navigateToLoginPage(){
    this.router.navigate(['login'])
  }

}
