function quien_gana(jugador, ordenador) {
  const OPCIONES = ["PIEDRA", "PAPEL", "TIJERA"]
  const JUGADA = OPCIONES[jugador] + " vs " + OPCIONES[ordenador]

  switch (JUGADA) {
    case "PIEDRA vs PIEDRA":
    case "TIJERA vs TIJERA":
    case "PAPEL vs PAPEL":
      return EMPATE
    case "PIEDRA vs TIJERA":
    case "PAPEL vs PIEDRA":
    case "TIJERA vs PAPEL":
      return JUGADOR
    default:
      return ORDENADOR
  }
}

function crear_mensaje(eleccion_jugador, eleccion_ordenador, ganador) {
  const OPCIONES = ["PIEDRA", "PAPEL", "TIJERA"]

  switch (ganador) {
    case EMPATE:
      return `¡¡¡EMPATE!!! Ambos jugadores eligieron: ${OPCIONES[eleccion_jugador]}`
    case JUGADOR:
      return `GANA JUGADOR, porque ${OPCIONES[eleccion_jugador]} vence a ${OPCIONES[eleccion_ordenador]}`
    case ORDENADOR:
      return `GANA ORDENADOR, porque ${OPCIONES[eleccion_ordenador]} vence a ${OPCIONES[eleccion_jugador]}`
  }
}

function opcion_al_azar() {
  const MAX = 2
  const MIN = 0
  return Math.round(Math.random() * (MAX - MIN) + MIN)
}

function informar_ganador(mensaje) {
  console.log(mensaje)
  MENSAJES_AREA.value += mensaje + "\n"
}

function despedirse() {
  const mensaje = "Gracias por jugar a PIEDRA PAPEL TIJERA. Vuelve pronto."
  console.clear()
  console.log(mensaje)
  MENSAJES_AREA.value += mensaje + "\n"
}

function jugar() {
  let eleccion_jugador, eleccion_ordenador, ganador, mensaje
  const MENU =
    "Elige una opción\n\n1- PIEDRA\n2- PAPEL\n3- TIJERA\n\nPulsa la tecla ESC o el botón Cancelar para terminar\n\n"

  while (true) {
    eleccion_jugador = prompt(MENU)

    if (!eleccion_jugador) break

    eleccion_jugador = Number(eleccion_jugador)

    if (![PIEDRA, PAPEL, TIJERA].includes(--eleccion_jugador)) continue

    eleccion_ordenador = opcion_al_azar()

    ganador = quien_gana(eleccion_jugador, eleccion_ordenador)
    mensaje = crear_mensaje(eleccion_jugador, eleccion_ordenador, ganador)
    informar_ganador(mensaje)
  }

  despedirse()
}

jugar()
