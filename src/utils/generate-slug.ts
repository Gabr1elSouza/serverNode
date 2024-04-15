export function generateSlug(text: string): string{
  return text
  .normalize('NFD')
  
  .replace(/[^\w\s-]/g, "").toLocaleLowerCase()

  .replace(/\s+/g, "-");
}