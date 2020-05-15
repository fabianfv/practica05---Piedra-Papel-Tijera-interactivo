const PIEDRA = 0
const PAPEL = 1
const TIJERA = 2

const JUGADOR = 0
const ORDENADOR = 1
const EMPATE = 2

function quien_gana(jugador, ordenador) {
  if (jugador === ordenador) return EMPATE

  if (
    (jugador === PIEDRA && ordenador === TIJERA) ||
    (jugador === PAPEL && ordenador === PIEDRA) ||
    (jugador === TIJERA && ordenador === PAPEL)
  )
    return JUGADOR

  return ORDENADOR
}

function crear_mensaje() {}

function opcion_al_azar() {}

function informar_ganador() {}

function despedirse() {}

function jugar() {}

jugar()
