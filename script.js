function ToggleMode() {
  const a = document.documentElement
  a.classList.toggle("light")
  const b = document.querySelector("#profile img")
  a.classList.contains("light")
    ? b.setAttribute("src", "./assets/avatar-lightzero.png")
    : b.setAttribute("src", "./assets/zertwoavatar.png")
}