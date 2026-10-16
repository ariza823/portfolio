import { token } from '../lib/tokens'

// Se genera en el build como /favicon.svg con los colores de primitives.css.
export function GET() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="${token('navy-900')}"/><text x="16" y="21.5" font-family="system-ui,sans-serif" font-size="14" font-weight="800" fill="${token('blue-400')}" text-anchor="middle">NA</text></svg>`
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } })
}
