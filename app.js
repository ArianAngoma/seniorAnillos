function Jugador(nombre) {
    this.nombre = nombre;
    this.pv = 100;
    this.sp = 100;

    this.curar = function (jugadorObjetivo) {
        if (this.sp >= 40) {
            this.sp -= 40;
            jugadorObjetivo.pv += 20;
        } else {
            console.info(`${this.nombre} no tiene sp`)
        }
        this.estado(jugadorObjetivo)
    }

    this.curarMana = function (jugadorObjetivo) {
        if (this.sp >= 20) {
            jugadorObjetivo.sp += 20;
            this.sp -= 20;
        } else {
            console.warn(`${this.nombre} no tiene mana`)
        }
        this.estado(jugadorObjetivo)
    }

    this.tirarFlecha = function (jugadorObjetivo) {
        if (jugadorObjetivo.pv > 40) {
            jugadorObjetivo.pv -= 40;
        } else {
            jugadorObjetivo.pv = 0;
            console.error(`${jugadorObjetivo.nombre} murió`)
        }

        this.estado(jugadorObjetivo)
    }

    this.estado = function (jugardorObjetivo) {
        console.log(this);
        console.log(jugardorObjetivo)
    }
}

let gandalf = new Jugador("Gandalf");
let legolas = new Jugador("Legolas");



