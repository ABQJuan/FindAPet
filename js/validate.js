export function isValidZip(zip) {
  return /^\d{5}(-\d{4})?$/.test(zip);
}

export function showAlert(message, className) {
  // Create div
  const div = document.createElement("div");
  // Add Classes
  div.className = `alert alert-${className}`;
  // Add Text
  div.appendChild(document.createTextNode(message));
  // Get Container class
  const container = document.querySelector(".container");
  // Get Form
  const form = document.querySelector("#pet-form");
  // Insert alert before form
  container.insertBefore(div, form);
  // Remove alert
  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}
