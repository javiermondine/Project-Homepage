# Habilitar GitHub Pages - Guía Paso a Paso

Ahora que tu código está en GitHub, necesitas habilitar GitHub Pages para que el sitio sea accesible en línea.

## Pasos para Habilitar GitHub Pages

### 1. Ir a la Configuración del Repositorio

```
https://github.com/javiermondine/Project-Homepage
```

1. Haz clic en la pestaña **"Settings"** (Configuración)
2. Busca **"Pages"** en el menú lateral izquierdo

### 2. Configurar Build and Deployment

En la sección "Build and deployment":

1. **Source**: Selecciona **"Deploy from a branch"**
2. **Branch**: Selecciona **"main"**
3. **Folder**: Selecciona **"/ (root)"**
4. Haz clic en **"Save"**

### 3. Esperar a que se Publique

GitHub tardará 1-2 minutos en procesar y publicar tu sitio.

Verás un mensaje que dice:
```
Your site is live at https://javiermondine.github.io/Project-Homepage/
```

## Verificar que Funciona

Una vez publicado, abre tu navegador y visita:

```
https://javiermondine.github.io/Project-Homepage/
```

Deberías ver tu sitio en vivo con:
- Tu About section con información real
- Tus 6 proyectos destacados
- Tus skills técnicos
- Tu información de contacto

## Captura de Pantalla de Referencia

1. En Settings > Pages, veras algo como esto:
   - Build and deployment
     - Source: Deploy from a branch ✓
     - Branch: main / (root) ✓

2. GitHub mostrará:
   ```
   Your site is published at https://javiermondine.github.io/Project-Homepage/
   ```

## Próximos Pasos (Opcional)

Si quieres hacer cambios en el futuro:

1. Edita los archivos localmente
2. Haz commit: `git add . && git commit -m "Mensaje"`
3. Haz push: `git push`
4. GitHub Pages se actualiza automáticamente en 1-2 minutos

## Crear un Custom Domain (Opcional)

Si tienes tu propio dominio y quieres usarlo:

1. En Settings > Pages
2. Bajo "Custom domain", ingresa tu dominio
3. GitHub te dirá qué DNS records configurar

## Solución de Problemas

### El sitio no aparece después de 5 minutos
- Espera 5 minutos más
- Recarga la página (Ctrl+F5 para borrar caché)
- Verifica que no haya errores en el "Deployments"

### Veo "404 Page not found"
- Verifica que Source sea "Deploy from a branch"
- Verifica que la Branch sea "main"
- Verifica que el Folder sea "/ (root)"
- Vuelve a hacer Save

### El sitio se ve diferente
- Borra el caché del navegador (Ctrl+Shift+Delete)
- Usa una ventana de incógnito para ver el sitio sin caché
- Espera a que se complete la compilación

---

¡Tu sitio debería estar en vivo ahora! 

Visita: **https://javiermondine.github.io/Project-Homepage/**
