export function setDarkMode() {
  var element = document.body;
  element.classList.toggle("dark");
}

export function usesDarkMode() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}
