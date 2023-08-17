function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  // if(html.classList.contains('light')){
  //  html.classList.remove('light')
  //}else{
  //html.classList.add("light")
  //  }
  html.classList.toggle("light")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando oculos escuros e jaqueta preta , sem  barba e fundo azul"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando oculos e camisa preta, com barba e fundo amarelo"
    )
  }
}
