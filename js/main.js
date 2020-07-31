const if_radio = document.getElementById("if")
const switch_radio = document.getElementById("switch")

const PIEDRA = 0
const PAPEL = 1
const TIJERA = 2

const JUGADOR = 0
const ORDENADOR = 1
const EMPATE = 2

const MENSAJES_AREA = document.getElementById("mensajes_area")
MENSAJES_AREA.value = ""

if_radio.addEventListener("click", jugar)
switch_radio.addEventListener("click", jugar)

if_radio.checked = false
switch_radio.checked = false

function jugar() {
  const script = document.createElement("script")

  if (this.id === "if") {
    script.src = "js/if.js"
    switch_radio.checked = false
  } else if (this.id === "switch") {
    script.src = "js/switch.js"
    if_radio.checked = false
  }

  document.body.appendChild(script)
}