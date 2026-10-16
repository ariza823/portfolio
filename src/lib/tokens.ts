import primitives from '../styles/primitives.css?raw'

// Lee un color de primitives.css para los sitios que no aceptan var() (favicon, <meta>).
// Así primitives.css sigue siendo la única fuente de los colores.
export function token(name: string): string {
  const value = primitives.match(new RegExp(`--color-${name}:\\s*([^;]+);`))?.[1]
  if (!value) throw new Error(`Token de color inexistente: ${name}`)
  return value.trim()
}
