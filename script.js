// Expand or collapse each fruit category.
document.querySelectorAll(".type-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const contentId = button.getAttribute("aria-controls");
    const content = document.getElementById(contentId);
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isExpanded));
    content.hidden = isExpanded;
  });
});

// Show a friendly placeholder if an image file is missing.
document.querySelectorAll(".fruit-card img").forEach((image) => {
  image.addEventListener("error", () => {
    image.style.display = "none";
    const placeholder = document.createElement("div");
    placeholder.className = "image-placeholder";
    placeholder.textContent = "🍃";
    placeholder.setAttribute("aria-label", "Fruit image unavailable");
    image.insertAdjacentElement("afterend", placeholder);
  }, { once: true });
});
