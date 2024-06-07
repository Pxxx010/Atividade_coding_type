export class Televisao {
    private canal: number;
    private volume: number;
    private ligada: boolean;

    constructor() {
        this.canal = 1;
        this.volume = 10;
        this.ligada = false;
    }

    ligarDesligar(): void {
        this.ligada = !this.ligada;
    }

    mudarCanal(novoCanal: number): void {
        if (this.ligada && novoCanal >= 1 && novoCanal <= 100) {
            this.canal = novoCanal;
        } else {
            console.log("A TV está desligada ou o canal informado é inválido.");
        }
    }

    aumentarVolume(): void {
        if (this.ligada && this.volume < 100) {
            this.volume++;
        }
    }

    diminuirVolume(): void {
        if (this.ligada && this.volume > 0) {
            this.volume--;
        }
    }

    getStatus(): string {
        console.clear()
        const status = `
    TV Status:
    --------------------------
    TV:      ${this.ligada ? 'Ligada' : 'Desligada'}
    Canal:   ${this.canal}
    Volume:  ${this.volume}
    --------------------------
        `;
        return status;
    }
}
