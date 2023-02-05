import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  ngOnInit(): void {
    AOS.init();
  }
  title = 'portafolio'; 
  valorx = ''

  navegaropcion1(){
    // this.router.navigateByUrl('/page/inicio');
    // this.router.navigate(['/', '/page/inicio']);
    // console.log( this.router.navigate(['/', '/page/inicio']));
    this.valorx = 'inicio'
  }
  navegaropcion2(){
    // this.router.navigate(['/', '/page/informacion']);
    // console.log(this.router.navigateByUrl('/page/informacion'));
    this.valorx = 'informacion'
  }
  navegaropcion3(){
    // this.router.navigate(['/', '/page/portafolio']);
    // console.log(this.router.navigate(['/', 'page/portafolio']));
    this.valorx = 'portafolio'
  }
  navegaropcion4(){
    // this.router.navigate(['/', '/page/contacto']);
    // console.log(this.router.navigate(['/', 'page/contacto']));
    this.valorx = 'contacto'
  }

}
