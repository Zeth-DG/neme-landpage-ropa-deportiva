const fs = require('fs');
const path = require('path');

const baseDir = '../images/'; 

// 1. Asegúrate de incluir 'stock-ropa-deportiva/otros-deportes' tal como está en tus carpetas
const folders = [
    'stock-ropa-deportiva/accesorios-correr',
    'stock-ropa-deportiva/accesorios-fuerza',
    'stock-ropa-deportiva/accesorios-nadar',
    'stock-ropa-deportiva/correr',
    'stock-ropa-deportiva/fuerza',
    'stock-ropa-deportiva/nadar/tipo-short',
    'stock-ropa-deportiva/nadar/tipo-traje-completo',
    'stock-ropa-deportiva/otros-deportes', // <-- Debe estar presente
    'stock-ropa-deportiva/sudaderas'
];

function formatTitle(filename) {
    let nameWithoutExt = path.basename(filename, path.extname(filename));
    let cleanStr = nameWithoutExt.replace(/[-_]/g, ' ');
    cleanStr = cleanStr.replace(/([a-z])([A-Z])/g, '$1 $2');
    
    let formatted = cleanStr.toLowerCase().replace(/\s+/g, ' ').trim();
    
    if (formatted.length > 0) {
        formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);
    }

    return formatted;
}

function getRandomPrice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) * 10;
}

function generateCatalog() {
    let catalog = [];
    let idCounter = 1;

    folders.forEach(folder => {
        const fullPath = path.join(baseDir, folder);
        
        if (fs.existsSync(fullPath)) {
            const files = fs.readdirSync(fullPath);

            files.forEach(file => {
                const filePath = path.join(fullPath, file);
                if (fs.statSync(filePath).isFile() && (file.endsWith('.jpg') || file.endsWith('.png'))) {
                    
                    let attractiveName = formatTitle(file);
                    
                    let lowerFolder = folder.toLowerCase();
                    let categoriaAsignada = "OTROS DEPORTES"; // Por defecto
                    
                    // 2. Condición explícita para capturar 'otros-deportes'
                    if (lowerFolder.includes('correr')) {
                        categoriaAsignada = "CORRER";
                    } else if (lowerFolder.includes('fuerza')) {
                        categoriaAsignada = "FUERZA";
                    } else if (lowerFolder.includes('nadar')) {
                        categoriaAsignada = "NADAR";
                    } else if (lowerFolder.includes('sudaderas')) {
                        categoriaAsignada = "SUDADERAS";
                    } else if (lowerFolder.includes('otros-deportes')) {
                        categoriaAsignada = "OTROS DEPORTES";
                    }

                    catalog.push({
                        id: idCounter++,
                        nombre: attractiveName,
                        precio: getRandomPrice(25, 65),
                        categoria: categoriaAsignada,
                        imagen: `images/${folder}/${file}`.replace(/\\/g, '/')
                    });
                }
            });
        }
    });

    fs.writeFileSync('./catalogo.json', JSON.stringify(catalog, null, 2), 'utf-8');
    console.log('¡Catálogo JSON generado con éxito!');
}

generateCatalog();