# Neme | Ropa Deportiva
<div align="center">

### **Fluye, fortalécete, disfruta**

Una tienda web interactiva y moderna de ropa y accesorios deportivos diseñada en México.

</div>

***

## ¿Qué es Neme?

**Neme** es una tienda web interactiva y moderna de **ropa y accesorios deportivos**. Su objetivo principal es ofrecer una experiencia de usuario limpia, atractiva y fluida para explorar diferentes colecciones (como correr, fuerza, natación y otros deportes), ver imágenes detalladas de los productos con nombres optimizados y gestionar un carrito de compras funcional.

La plataforma está pensada para entusiastas del movimiento físico y cualquier persona que busque ropa deportiva con comodidad y calidad, todo en una experiencia de navegación intuitiva y visualmente atractiva.

***

## Características técnicas principales

### Generador automático de catálogo

Cuenta con un script interno (`generador.js`) que escanea de forma automatizada las carpetas de imágenes del servidor, limpia y formatea los nombres de los archivos para convertirlos en títulos legibles y atractivos (ej. *"Conjunto playera manga corta blanca y short naranja"*), asigna precios aleatorios por rango y genera un archivo centralizado llamado `productos.json`.

### Diseño modular (HTML5 & Bootstrap)

La interfaz utiliza modales interactivos para cada categoría de deporte, lo que permite desplegar las colecciones de manera limpia sin recargar la página principal y manteniendo un diseño responsivo.

**Tecnologías:**
- HTML5 semántico
- Bootstrap 5.3.8 para grid system y componentes
- CSS personalizado con variables
- JavaScript con módulos

### Estética Personalizada

Diseñado bajo una paleta de colores armónica basada en tonos suaves y acentos vibrantes que le dan un toque profesional y estético a la marca.

**Paleta de colores:**

| Color | Hex | Uso |
|-------|-----|-----|
| Rosa Magenta | `#a80660` | Brand primary, CTAs |
| Rosa Claro | `#d30c7b` | Hover states |
| Nude/Rosa Pastel | `#ffe3dc` | Fondos |
| Blanco | `#ffffff` | Superficies |
| Marrón Oscuro | `#3a2d32` | Texto principal |
| Sage Green | `#a2ad91` | Acentos secundarios |

### Carrito de compras con persistencia (`localStorage`)

Los usuarios pueden agregar productos a su carrito desde cualquier categoría, ver el total en tiempo real y eliminar artículos. Gracias al uso de almacenamiento local del navegador, los productos seleccionados **no se pierden** aunque el usuario recargue o cierre la página.

**Funcionalidades del carrito:**
- ✅ Agregar productos desde cualquier colección
- ✅ Contador en tiempo real
- ✅ Cálculo automático del total
- ✅ Eliminar artículos individuales
- ✅ Persistencia de datos entre sesiones

***

## 📁 Estructura del Proyecto

```
neme/
├── index.html                 # Página principal
├── css/
│   └── style.css             # Estilos personalizados
├── js/
│   ├── main.js               # Lógica de la aplicación
│   ├── script-generador.js   # Generador automático de catálogo
│   └── productos.json        # Catálogo generado (auto-generated)
├── images/stock-ropa-deportiva/
│   ├── fuerza/               # Productos de fuerza
│   ├── accesorios-fuerza/    # Accesorios gym
│   ├── nadar/                # Trajes de baño
│   │   ├── tipo-short/
│   │   └── tipo-traje-completo/
│   ├── correr/               # Ropa para correr
│   ├── accesorios-correr/    # Accesorios running
│   ├── otros-deportes/       # Basket, box, fútbol, yoga, etc.
│   └── sudaderas/            # Colección de sudaderas  
└── README.md                 # Este archivo
```

***

## 🚀 Instalación y uso

### Requisitos previos

- Node.js (v14 o superior)
- Navegador moderno (Chrome, Firefox, Edge, Safari)

### Pasos de instalación

1. **Clona o descarga el repositorio**

```bash
git clone https://github.com/tu-usuario/neme.git
cd neme
```

2. **Instala dependencias (solo para el generador)**

```bash
npm init -y
```

3. **Genera el catálogo de productos**

```bash
node js/script-generador.js
```

Esto escaneará todas las carpetas de imágenes y creará automáticamente el archivo `productos.json` con:
- Títulos formateados
- Precios aleatorios por rango
- Descripciones variadas
- Rutas de imágenes relativas

4. **Abre el proyecto en tu navegador**

Opción A: Usa Live Server en VS Code (recomendado)
- Instala la extensión "Live Server"
- Click derecho en `index.html` → "Open with Live Server"

Opción B: Abre directamente el archivo (puede tener limitaciones con módulos ES6)

```bash
open index.html
```

***

## 📦 Uso del generador de catálogo

El script `script-generador.js` es el corazón del sistema de productos. Para usarlo:

### Ejecución

```bash
node js/script-generador.js
```

### Qué hace automáticamente:

1. **Escanea carpetas**: Busca en todas las subcarpetas de `images/`
2. **Limpia nombres**: Convierte `conjunto-playeraMangaCortaBlanca-shortNaranja.jpg` → `"Conjunto playera manga corta blanca short naranja"`
3. **Asigna precios**: Genera precios aleatorios dentro de rangos por categoría
4. **Crea descripciones**: Añade descripciones variadas y atractivas
5. **Genera JSON**: Crea `productos.json` con toda la información estructurada

### Salida esperada:

```
Buscando en: /ruta/proyecto/images/fuerza
  ✅ Encontrados 14 archivos en fuerza
Buscando en: /ruta/proyecto/images/accesorios-fuerza
  ✅ Encontrados 16 archivos en accesorios-fuerza
...

✅ productos.json generado con éxito
📁 Guardado en: /ruta/proyecto/js/productos.json
📦 Total de categorías: 4
   - fuerza: 30 productos
   - nadar: 25 productos
   - correr: 22 productos
   - otros: 18 productos

💰 Ejemplos de precios generados:
   FUERZA:
     - Top Pantalon Negro: $420
     - Playera Sin Mangas Azul: $280
   NADAR:
     - Traje Completo Azul Rey: $580
```

***

## 🎯 Características de UX/UI

### ✨ Interfaz Limpia y minimalista

- Header sticky con navegación simplificada
- Hero section a pantalla completa
- Tarjetas de producto con hover effects suaves
- Animaciones de entrada escalonadas
- Badges de "Nuevo" para productos destacados

### 📱 Totalmente responsivo

- Mobile-first approach
- Grid adaptable (1-2-3-4 columnas según dispositivo)
- Menú hamburguesa en móviles
- Imágenes optimizadas con `loading="lazy"`

### 🎨 Microinteracciones

- Hover en tarjetas con elevación y zoom de imagen
- Overlay con botón "Ver rápido" al pasar el mouse
- Transiciones suaves en botones y enlaces
- Spinner de carga mientras se renderizan productos

***

## 🛠️ Tecnologías Utilizadas

| Tecnología | Propósito |
|---------|-----------|
| HTML5 | Estructura semántica |
| CSS3 | Estilos y animaciones |
| JavaScript | Lógica y módulos |
| Bootstrap | Grid system y componentes |
| Node.js | Generador de catálogo |
| Font Awesome | Iconos |
| Google Fonts | Tipografías (Nunito, Manrope, Bebas Neue) |

***

## 🔧 Comandos útiles

```bash
# Generar catálogo de productos
node js/script-generador.js

# Iniciar con Live Server (desde VS Code)
# Click derecho en index.html → Open with Live Server
```

***

## 📝 Próximas mejoras (Roadmap)

- [ ] Integrar pasarela de pagos (Stripe, PayPal)
- [ ] Panel de administración para gestionar productos
- [ ] Filtros avanzados (talla, color, precio)
- [ ] Búsqueda de productos
- [ ] Sistema de reseñas y calificaciones
- [ ] Integración con WhatsApp Business API
- [ ] Modo oscuro
- [ ] PWA (Progressive Web App) para instalar en móviles
- [ ] Optimización de imágenes con WebP
- [ ] SEO mejorado con meta tags dinámicos

***

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si quieres mejorar algo:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Committea tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

***

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

***

## 👩‍💻 Autora

**Lizeth Dorantes G**

- 📍 Toluca, Estado de México
- 💼 Biotech / Fullstack Developer in progress
- 📧 [lzethdg@gmail.com]
- 🔗 [https://www.linkedin.com/in/lizeth-dorantes/]

***

## 🙏 Agradecimientos

- Imágenes de productos: https://www.pexels.com/es-es/
- Iconos: [Font Awesome](https://fontawesome.com/)
- Fuentes: [Google Fonts](https://fonts.google.com/)
- Inspiración de diseño: [Land-book](https://land-book.com/)

***

<div align="center">

**Hecho con 💖 y mucho código por Lizeth**

`neme | fluye, fortalécete, disfruta`

</div>


- Guía de cómo agregar nuevos productos manualmente

¡Dime y lo integro! 🧵✨
