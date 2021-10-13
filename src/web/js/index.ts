import '../scss/style.scss';

class Teste {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  printText(): void {
    console.log(this.text);
  }
}

const teste = new Teste('Oi, sou um teste');
teste.printText();
