function ToggleMode() {
  const c = document.documentElement
  c.classList.toggle("light")
  const a = document.querySelector("#profile img")
  c.classList.contains("light")
    ? a.setAttribute("src", "./assets/avatar-lightzero.png")
    : a.setAttribute("src", "./assets/zertwoavatar.png")
}