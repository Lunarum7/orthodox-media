document.addEventListener("DOMContentLoaded", () => {
    const notes = document.querySelectorAll(".footnote");

    // создаём popup один раз
    let popup = document.createElement("div");
    popup.classList.add("fn-popup");
    document.body.appendChild(popup);

    let activeNote = null;

    notes.forEach(note => {
        note.addEventListener("click", (event) => {
            event.stopPropagation();  // важно!

            if (activeNote === note) {
                popup.style.display = "none";
                activeNote = null;
                return;
            }

            activeNote = note;
            popup.textContent = note.dataset.note;

            const rect = note.getBoundingClientRect();
            popup.style.left = rect.left + "px";
            popup.style.top = (rect.bottom + window.scrollY + 8) + "px";

            popup.style.display = "block";
        });
    });

    // закрытие по клику мимо
    document.addEventListener("click", () => {
        popup.style.display = "none";
        activeNote = null;
    });
});
