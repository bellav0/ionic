import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

comentario:Object ={
	nomeDoUsuario:'Carlos',
	texto:'Ótimo filme',
	horario:'12:03',
	episodio:5,
	likes:{
		nLikes:'7',
		estadoDoLike:false,
	}

}

likeOrUnlike(comentario)  {
	if(this.comentario.likes.estadoDoLike == false){
		this.comentario.likes.nLikes++;	
		this.comentario.likes.estadoDoLike=true;
	} 
	else{
		this.comentario.likes.nLikes--;
		this.comentario.likes.estadoDoLike=false;	
	} 
}

}

