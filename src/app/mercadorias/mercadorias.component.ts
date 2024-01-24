import { Component, OnInit } from '@angular/core';
import { MercadoriaService } from '../mercadoria.service';
import { Mercadoria } from '../mercadoria';

@Component({
  selector: 'app-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrl: './mercadorias.component.css'
})
export class MercadoriasComponent implements OnInit{

  title="Lista de Compras";
  mercadorias:Mercadoria[]


novaMercadoria={
  id:4,
  descricao:"sal",
  quantidadeEstoque:2,
  quantidadeMinima:1
}

adicionarMercadoria(){
  this.mercadorias.push({
    id:this.novaMercadoria.id,
    descricao:this.novaMercadoria.descricao,
    quantidadeEstoque:this.novaMercadoria.quantidadeEstoque,
    quantidadeMinima:this.novaMercadoria.quantidadeMinima
  })

}
constructor(private mercadoriaService: MercadoriaService) {}

ngOnInit(){
  this.getMercadorias();
}

getMercadorias():void{
  this.mercadorias= this.mercadoriaService.getMercadorias();
}


}