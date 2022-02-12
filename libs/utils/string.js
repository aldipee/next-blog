export function capitalizeFirstLetter(string) {
  if (string) {
    return string && string.charAt(0) && string.charAt(0).toUpperCase() + string.slice(1);
  }
  return string;
}

export function generateUniqueId() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );
}
