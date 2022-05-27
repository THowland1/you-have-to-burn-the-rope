export function img(src: string | URL) {
  const result = new Image();
  result.src = src instanceof URL ? src.href : src;
  return result;
}
