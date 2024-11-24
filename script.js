class Smoothie {
  constructor(name, base, fruits, addons, size) {
    this.name = name;
    this.base = base;
    this.fruits = fruits;
    this.addons = addons;
    this.size = size;
  }

  displaySmoothie() {
    return `
          <p><strong>Name:</strong> ${this.name}</p>
          <p><strong>Base:</strong> ${this.base}</p>
          <p><strong>Fruits:</strong> ${this.fruits.join(", ") || "None"}</p>
          <p><strong>Add-ons:</strong> ${this.addons.join(", ") || "None"}</p>
          <p><strong>Size:</strong> ${this.size}</p>
      `;
  }
}

document.getElementById("order-button").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const base = document.querySelector('input[name="base"]:checked')?.value;
  const fruits = Array.from(
    document.querySelectorAll('input[name="fruit"]:checked')
  ).map((fruit) => fruit.value);
  const addons = Array.from(
    document.querySelectorAll('input[name="addon"]:checked')
  ).map((addon) => addon.value);
  const size = document.getElementById("size").value;

  if (!name || !base) {
    alert("Please complete all required fields.");
    return;
  }

  const smoothie = new Smoothie(name, base, fruits, addons, size);

  // Display the smoothie details
  document.getElementById("smoothie-details").innerHTML =
    smoothie.displaySmoothie();
});
