import { createNote } from './notes'
import { setFilters } from './filters'
import { renderNotes } from './views'



renderNotes();

document.querySelector("#createNote").addEventListener("click", (e) => {
  const id = createNote()
  location.assign(`/edit.html#${id}`);
});

// On remplit l'objet search avec la valeur recherchée
document.querySelector("#search-text").addEventListener("input", e => {
  setFilters({
    searchText: e.target.value
  })
  renderNotes(); // On rappelle la fonction dans le search pour le mettre à jour avec les données entrées dans le search car l'appel initial de la fonction renderNotes n'affiche que les données initiales
});

// ------------------- FILTRER dans un search input

document.querySelector("#filter-by").addEventListener("change", e => {
  setFilters({
    sortBy: e.target.value
  })
  renderNotes();
});

window.addEventListener("storage", e => {
  if (e.key === "notes") {
    renderNotes();
  }
});
