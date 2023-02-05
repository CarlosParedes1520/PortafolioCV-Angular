import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

@Input() valor = ''
  
constructor(private router: Router) {

  }


  navegaropcion1(){
    this.router.navigateByUrl('/page/inicio');
    // this.router.navigate(['/', '/page/inicio']);
    // console.log( this.router.navigate(['/', '/page/inicio']));
    // this.valor = '#inicio'
  }
  navegaropcion2(){
    this.router.navigate(['/', '/page/informacion']);
    // console.log(this.router.navigateByUrl('/page/informacion'));
    // this.valor = '#informacion'
  }
  navegaropcion3(){
    this.router.navigate(['/', '/page/portafolio']);
    // console.log(this.router.navigate(['/', 'page/portafolio']));
    // this.valor = '#portafolio'
  }
  navegaropcion4(){
    this.router.navigate(['/', '/page/contacto']);
    // console.log(this.router.navigate(['/', 'page/contacto']));
    // this.valor = '#contacto'
  }


  scroll(el:HTMLElement){
    el.scrollIntoView()
    console.log(el.id);
    this.valor = '#'+el.id
    console.log(this.valor);
    
  }
}
