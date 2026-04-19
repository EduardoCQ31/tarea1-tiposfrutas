/**
 * LÓGICA PRINCIPAL - Conoce tu Fruta
 * Maneja upload de imágenes y detección de frutas
 */

// ===== ELEMENTOS DEL DOM =====
const fileInput = document.getElementById('fileInput');
const uploadArea = document.getElementById('uploadArea');
const resultArea = document.getElementById('resultArea');
const fruitImage = document.getElementById('fruitImage');
const analyzeBtn = document.getElementById('analyzeBtn');
const infoSection = document.getElementById('infoSection');
const errorMessage = document.getElementById('errorMessage');
const newSearchBtn = document.getElementById('newSearchBtn');
const quickInfoPanel = document.getElementById('quickInfoPanel');

// Variables globales
let selectedFile = null;
let detectedFruitName = null;

// ===== EVENT LISTENERS =====

/**
 * Click en el área de upload
 */
fileInput.addEventListener('change', handleFileSelect);

/**
 * Drag and Drop
 */
uploadArea.addEventListener('dragover', handleDragOver);
uploadArea.addEventListener('dragleave', handleDragLeave);
uploadArea.addEventListener('drop', handleDrop);

/**
 * Botón Analizar
 */
analyzeBtn.addEventListener('click', analyzeFruit);

/**
 * Botón Nueva Búsqueda
 */
newSearchBtn.addEventListener('click', resetSearch);

// ===== FUNCIONES DE UPLOAD =====

/**
 * Maneja la selección de archivo
 */
function handleFileSelect(event) {
    const file = event.target.files[0];
    processFile(file);
}

/**
 * Maneja drag over
 */
function handleDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    uploadArea.classList.add('drag-over');
}

/**
 * Maneja drag leave
 */
function handleDragLeave(event) {
    event.preventDefault();
    event.stopPropagation();
    uploadArea.classList.remove('drag-over');
}

/**
 * Maneja drop de archivos
 */
function handleDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    uploadArea.classList.remove('drag-over');

    const files = event.dataTransfer.files;
    if (files.length > 0) {
        const file = files[0];
        processFile(file);
    }
}

/**
 * Procesa el archivo seleccionado
 */
function processFile(file) {
    // Validar que sea una imagen
    if (!file.type.startsWith('image/')) {
        showError('Por favor selecciona un archivo de imagen válido.');
        return;
    }

    // Validar tamaño (máximo 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
        showError('El archivo es muy grande. Máximo 5MB permitido.');
        return;
    }

    selectedFile = file;
    clearError();
    displayImagePreview(file);
}

/**
 * Muestra preview de la imagen
 */
function displayImagePreview(file) {
    const reader = new FileReader();

    reader.onerror = function() {
        showError('❌ Error al leer la imagen. Por favor intenta de nuevo.');
        console.error('FileReader error:', reader.error);
    };

    reader.onload = function(event) {
        try {
            const imageData = event.target.result;
            
            if (!imageData) {
                showError('❌ No se pudo cargar la imagen.');
                return;
            }
            
            // Limpiar atributos anteriores
            fruitImage.onerror = null;
            fruitImage.onload = null;
            
            // Establecer la imagen
            fruitImage.src = imageData;
            fruitImage.style.display = 'block';
            
            // Validar que la imagen se cargue correctamente
            fruitImage.onload = function() {
                uploadArea.style.display = 'none';
                resultArea.style.display = 'flex';
                analyzeBtn.style.display = 'block';
                clearError();
                
                // Analizar automáticamente
                setTimeout(function() {
                    analyzeFruit();
                }, 300);
            };
            
            fruitImage.onerror = function() {
                showError('❌ No se pudo cargar la imagen. Verifica el formato.');
            };
        } catch (error) {
            showError('❌ Error: ' + error.message);
            console.error('Error:', error);
        }
    };

    reader.readAsDataURL(file);
}

// ===== FUNCIONES DE DETECCIÓN =====

/**
 * Detecta la fruta por nombre del archivo
 */
function detectFruitFromFileName(fileName) {
    if (!fileName) return null;
    
    // Remover extensión
    const nameWithoutExt = fileName.split('.')[0].toLowerCase();
    
    // Remover caracteres especiales y espacios
    const cleanName = nameWithoutExt
        .replace(/[^a-záéíóúñ\s]/gi, '')
        .trim();

    if (!cleanName) return null;

    // Buscar la fruta en la base de datos
    const allFruits = getAllFruits();
    
    // Búsqueda exacta primero
    if (allFruits.includes(cleanName)) {
        return cleanName;
    }
    
    // Búsqueda de coincidencia parcial
    for (let fruit of allFruits) {
        if (cleanName.includes(fruit) || fruit.includes(cleanName)) {
            return fruit;
        }
    }

    // Búsqueda por similitud de palabras
    for (let fruit of allFruits) {
        if (cleanName.startsWith(fruit) || fruit.startsWith(cleanName)) {
            return fruit;
        }
    }

    return null;
}

/**
 * Analiza la fruta seleccionada
 */
function analyzeFruit() {
    if (!selectedFile) {
        showError('Por favor selecciona una imagen primero.');
        return;
    }

    console.log('📋 Analizando archivo:', selectedFile.name);

    // Detectar fruta del nombre del archivo
    detectedFruitName = detectFruitFromFileName(selectedFile.name);
    
    console.log('🔍 Fruta detectada:', detectedFruitName);

    if (!detectedFruitName) {
        const availableFruits = getAllFruits().join(', ');
        showError('⚠️ No identificado. Frutas: ' + availableFruits);
        analyzeBtn.style.display = 'none';
        console.error('❌ No se detectó fruta');
        return;
    }

    // Obtener datos de la fruta
    const fruitData = getFruitData(detectedFruitName);
    
    console.log('📊 Datos:', fruitData);

    if (!fruitData) {
        showError('⚠️ No hay datos para: ' + detectedFruitName);
        analyzeBtn.style.display = 'none';
        console.error('❌ No hay datos para:', detectedFruitName);
        return;
    }

    // Mostrar información
    displayFruitInfo(fruitData);
    clearError();
    console.log('✅ Análisis completado');
}

// ===== FUNCIONES DE VISUALIZACIÓN =====

/**
 * Muestra la información de la fruta
 */
function displayFruitInfo(fruitData) {
    // Mostrar información rápida en el panel derecho
    document.getElementById('fruitName').textContent = fruitData.nombre;
    document.getElementById('fruitType').innerHTML = '<strong>Tipo:</strong> ' + fruitData.tipo;
    quickInfoPanel.style.display = 'block';

    // Llenar datos de los cards
    document.getElementById('fruitOrigen').textContent = fruitData.origen;
    document.getElementById('fruitProceso').textContent = fruitData.proceso;
    document.getElementById('fruitCuidados').textContent = fruitData.cuidados;
    document.getElementById('fruitHistoria').textContent = fruitData.historia;

    // Mostrar sección de información
    infoSection.style.display = 'block';
    analyzeBtn.style.display = 'none';

    // Scroll suave a la información
    setTimeout(function() {
        infoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

/**
 * Muestra mensaje de error
 */
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'flex';
}

/**
 * Limpia el mensaje de error
 */
function clearError() {
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';
}

/**
 * Reinicia la búsqueda
 */
function resetSearch() {
    // Limpiar variables
    selectedFile = null;
    detectedFruitName = null;

    // Limpiar UI completamente
    fileInput.value = '';
    fruitImage.src = '';
    fruitImage.style.display = 'block';
    fruitImage.onerror = null;
    fruitImage.onload = null;
    
    uploadArea.style.display = 'flex';
    resultArea.style.display = 'none';
    analyzeBtn.style.display = 'none';
    infoSection.style.display = 'none';
    quickInfoPanel.style.display = 'none';
    
    // Limpiar contenido de información
    document.getElementById('fruitName').textContent = 'Fruta';
    document.getElementById('fruitType').textContent = 'Tipo: -';
    document.getElementById('fruitOrigen').textContent = '';
    document.getElementById('fruitProceso').textContent = '';
    document.getElementById('fruitCuidados').textContent = '';
    document.getElementById('fruitHistoria').textContent = '';
    
    clearError();

    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    console.log('🔄 Búsqueda reiniciada');
}

// ===== ESTILOS DINÁMICOS PARA DRAG & DROP =====
var style = document.createElement('style');
style.textContent = '.upload-area.drag-over { border-color: var(--primary-color) !important; } .upload-area.drag-over .upload-label { border-color: var(--primary-color); background-color: #FFF8F0; color: var(--primary-color); }';
document.head.appendChild(style);

// ===== INICIALIZACIÓN =====
console.log('🍎 Frutas disponibles:', getAllFruits());
