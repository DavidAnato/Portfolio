export function toSlug(value: string) {
  return value
    .replace(/ɔ/gi, 'o')
    .replace(/ɛ/gi, 'e')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
