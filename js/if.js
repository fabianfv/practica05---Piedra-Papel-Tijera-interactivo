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

function crear_mensaje(eleccion_jugador, eleccion_ordenador, ganador) {
  const OPCIONES = ["PIEDRA", "PAPEL", "TIJERA"]

  if (ganador === EMPATE) {
    return `¡¡¡EMPATE!!! Ambos jugadores eligieron: ${OPCIONES[eleccion_jugador]}`
  }

  if (ganador === JUGADOR) {
    return `GANA JUGADOR, porque ${OPCIONES[eleccion_jugador]} vence a ${OPCIONES[eleccion_ordenador]}`
  }

  return `GANA ORDENADOR, porque ${OPCIONES[eleccion_ordenador]} vence a ${OPCIONES[eleccion_jugador]}`
}

function opcion_al_azar() {}

function informar_ganador() {}

function despedirse() {}

function jugar() {}

jugar()
