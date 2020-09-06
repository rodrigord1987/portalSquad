import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CadastroIssue } from '../cadastroissue.model';

@Component({
  templateUrl: './cadastroissue-form.component.html',
  styleUrls: ['./cadastroissue-form.component.css']
})
export class CadastroissueFormComponent implements OnInit {
  
  cadastro: CadastroIssue = new CadastroIssue();
  mensagem: string; 
  index: number;

  @ViewChild('f') form: NgForm;

  constructor(private cadastroService,
    private router: Router,
    private route: ActivatedRoute) { }

ngOnInit() {
//this.index = this.route.snapshot.params['id'];
this.route.params.subscribe(
(params: Params) => {
this.index = params['id'];
if(this.index !== undefined) {
this.cadastro = this.cadastroService.getCadastro(this.index);
}
}
);
}
  onSave() {
    console.log('IngressoFormComponent.onSave()', this.form.value);
    if(this.index > -1) {
      this.cadastroService.atualizar(this.index, this.form.value);
      // this.ingressoAtualizado.emit();
      // this.ingressoAtualizado.emit(this.ingresso);
    } else {
      this.cadastroService.adicionar(this.form.value).subscribe(
        (cadastro: CadastroIssue) => {
          this.router.navigate(['admin', 'ingressos']);
        },
        (erro: string) => {
          this.mensagem = erro;
        }
      );
      // this.ingressoSalvo.emit();
      // this.ingressoSalvo.emit(this.ingresso);
    }
  }

}
