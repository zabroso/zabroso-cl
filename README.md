# zabroso-cl

## Pendientes

- [ ] **Conectar el formulario de cotización de páginas web** (sección `#cotizar` en `/`) a Zapier u otra herramienta de CRM/captura de leads. Falta configurar la variable de entorno `VITE_ZAPIER_WEBHOOK_URL` (local en `.env.local` y en el entorno de build de Cloudflare Pages). Ver `src/components/Contacto.tsx`.
- [ ] **Conectar el formulario de `/ecommerce/`** a Zapier u otra herramienta de CRM/captura de leads. Usa una variable de entorno distinta a la anterior: `VITE_ZAPIER_WEBHOOK_ECOMMERCE_URL`. Ver `src/ecommerce/components/Contacto.tsx`.
- [ ] **Mejorar el diseño de `/ecommerce/`.** Quedó como prototipo inicial (reutiliza el sistema visual del sitio principal sin trabajarlo a fondo) — hay que subirle el nivel de diseño, sobre todo considerando que el servicio que se vende incluye diseño.
- [ ] **Auditoría SEO** con la skill [`claude-seo-ai`](https://github.com/Hainrixz/claude-seo-ai). Dejar para el final, cuando el resto de los pendientes esté resuelto y el sitio ya no vaya a cambiar de estructura.
