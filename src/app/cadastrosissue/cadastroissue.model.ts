export class CadastroIssue {
    usuario: string;
    issue: string;
    fonte: string;
    versao: number;
    data: Date;


    constructor(usuario?: string, issue?: string, fonte?: string,
                versao?: number, data?: Date) {
        this.usuario = usuario;
        this.issue = issue;
        this.fonte = fonte;
        this.versao = versao;
        this.data = data;

    }
}