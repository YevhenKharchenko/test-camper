export function formatString(str) {
  const spacedStr = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return spacedStr.charAt(0).toUpperCase() + spacedStr.slice(1);
}
