/**
 * BASE DE DATOS ESTÁTICA DE FRUTAS
 * Contiene información sobre diferentes frutas
 */

const frutasDB = {
    mango: {
        nombre: "Mango",
        tipo: "Dulces",
        origen: "El mango es originario del sur de Asia, especialmente de la India y Birmania.",
        proceso: "El mango crece en árboles, florece y luego da frutos. Tarda entre 3 a 6 meses en madurar.",
        cuidados: "Requiere clima cálido, riego moderado y poda regular para un buen crecimiento.",
        historia: "El mango se cultiva desde hace más de 4,000 años y se difundió por todo el mundo."
    },
    manzana: {
        nombre: "Manzana",
        tipo: "Frutas Rojas",
        origen: "La manzana es originaria de Asia Central, particularmente de las montañas del Tian Shan en Kazajistán.",
        proceso: "Crece en árboles de tamaño medio, florece en primavera y los frutos maduran en otoño. Tarda aproximadamente 5 meses.",
        cuidados: "Necesita clima templado, poda anual para controlar forma y producción, riego regular pero no excesivo.",
        historia: "Cultivada desde hace más de 5,000 años, es una de las frutas más consumidas a nivel mundial. Símbolo de salud y conocimiento."
    },
    platano: {
        nombre: "Plátano",
        tipo: "Tropicales",
        origen: "El plátano es originario del Sudeste Asiático, principalmente de Malasia e Indonesia.",
        proceso: "Crece en plantas herbáceas grandes, no en árboles. Produce frutos en racimos. Tarda de 9 a 12 meses en madurar desde la floración.",
        cuidados: "Requiere clima tropical o subtropical cálido, abundante agua, suelo rico en nutrientes y protección del viento fuerte.",
        historia: "Es una de las frutas más antiguas cultivadas. Llegó a América en el siglo XVI y ahora es uno de los cultivos más importantes globalmente."
    },
    naranja: {
        nombre: "Naranja",
        tipo: "Cítricos",
        origen: "La naranja es originaria del sureste de China y otras regiones de Asia Oriental.",
        proceso: "Crece en árboles de tamaño medio, florece en primavera con flores blancas fragantes. Los frutos maduran entre 7-12 meses.",
        cuidados: "Necesita clima subtropical o tropical, riego regular, buen drenaje del suelo, poda para mantener forma y control de plagas.",
        historia: "Introducida en Europa durante la Edad Media. Es una de las frutas cítricas más producidas y consumidas en el mundo."
    },
    fresa: {
        nombre: "Fresa",
        tipo: "Bayas Rojas",
        origen: "La fresa es originaria de Chile y otros países de América del Sur, aunque existen variedades de diferentes orígenes.",
        proceso: "Crece en plantas herbáceas bajas. Florece en primavera y los frutos maduran en pocas semanas. Producción continua según variedad.",
        cuidados: "Requiere suelo bien drenado, riego consistente, abundante luz solar, temperatura moderada y control de plagas y enfermedades.",
        historia: "Domesticada hace apenas 300 años. Es una fruta popular por su sabor dulce y su versatilidad en la cocina y postres."
    },
    pina: {
        nombre: "Piña",
        tipo: "Tropicales",
        origen: "La piña es originaria de América del Sur, particularmente de la región entre el sur de Brasil y Paraguay.",
        proceso: "Crece en plantas sin tronco con hojas puntiagudas. Produce una sola piña por planta. Tarda de 18 a 24 meses en madurar.",
        cuidados: "Necesita clima tropical cálido, suelo bien drenado, riego moderado, luz solar directa y protección contra temperaturas bajas.",
        historia: "Llevada a Europa por Colón. Se expandió por tropicales africanos y asiáticos. Símbolo de exotismo y tropicalidad."
    },
    pera: {
        nombre: "Pera",
        tipo: "Frutas Dulces",
        origen: "La pera es originaria de la región entre el sur de China y el norte de Asia Central.",
        proceso: "Crece en árboles perennes que viven muchos años. Florece en primavera. Los frutos maduran en verano-otoño, entre 4-6 meses.",
        cuidados: "Requiere clima templado, invierno frío para producción óptima, suelo fértil, poda regular y protección contra enfermedades.",
        historia: "Cultivada desde hace más de 3,000 años en Asia. Los antiguos griegos y romanos la valoraban altamente. Segunda fruta de árbol más cultivada."
    },
    uva: {
        nombre: "Uva",
        tipo: "Bayas",
        origen: "La uva es originaria de la región del Cáucaso y Oriente Medio, domesticada hace más de 8,000 años.",
        proceso: "Crece en vides leñosas. Florece en primavera con flores pequeñas. Los frutos se agrupan en racimos que maduran en 4-5 meses.",
        cuidados: "Necesita clima cálido a templado, suelo bien drenado, poda sistemática anual, riego moderado y apoyo para que trepen las vides.",
        historia: "Una de las frutas más antiguas cultivadas. Fundamental para la producción de vino. Símbolo de abundancia en muchas culturas."
    },
    kiwi: {
        nombre: "Kiwi",
        tipo: "Frutas Tropicales",
        origen: "El kiwi es originario de China, aunque fue popularizado en Nueva Zelanda donde se le dio su nombre actual.",
        proceso: "Crece en enredaderas leñosas con flores pequeñas y fragantes. Los frutos se desarrollan durante varios meses. Tarda de 5 a 7 meses en madurar.",
        cuidados: "Requiere clima templado a subtropical, suelo bien drenado, riego regular, protección contra vientos fuertes y poda anual para mantener vigor.",
        historia: "Originalmente llamado 'grosellas chinas', fue renombrado 'kiwi' en Nueva Zelanda en los años 50. Ahora es cultivado en muchos países templados."
    },
    limon: {
        nombre: "Limón",
        tipo: "Cítricos",
        origen: "El limón es originario del Sudeste Asiático, particularmente de India e Indochina.",
        proceso: "Crece en árboles pequeños y espinosos que florecen durante todo el año. Los frutos maduran entre 4 a 6 meses después de la floración.",
        cuidados: "Necesita clima subtropical a tropical, abundante luz solar, riego regular, buen drenaje y protección contra heladas.",
        historia: "Introducido en el Mediterráneo por los árabes. Fue esencial en la prevención del escorbuto en los marineros. Ahora es un cultivo importante mundial."
    },
    sandia: {
        nombre: "Sandía",
        tipo: "Frutas Jugosas",
        origen: "La sandía es originaria de África, especialmente de la región del Kalahari.",
        proceso: "Crece en plantas rastreras anuales con flores amarillas. Los frutos se desarrollan rápidamente durante 2 a 3 meses en clima cálido.",
        cuidados: "Requiere clima muy cálido, suelo arenoso bien drenado, riego abundante, espaciamiento amplio entre plantas y protección de plagas.",
        historia: "Cultivada desde hace 5,000 años en Egipto. Se difundió por el Mediterráneo y Asia. Símbolo del verano en muchas culturas."
    },
    melon: {
        nombre: "Melón",
        tipo: "Frutas Dulces",
        origen: "El melón es originario de Persia (Irán) aunque algunas variedades proceden de África y Asia.",
        proceso: "Crece en plantas rastreras anuales. Las flores se abren al atardecer. Los frutos maduran en 3 a 4 meses en clima cálido.",
        cuidados: "Necesita clima cálido, suelo rico y bien drenado, riego regular pero sin encharcamiento, y espaciamiento para buena circulación de aire.",
        historia: "Mencionado en textos antiguos de Mesopotamia. Popular en la cocina persa y mediterránea. Símbolo de lujo en épocas medievales."
    },
    cereza: {
        nombre: "Cereza",
        tipo: "Frutas Rojas",
        origen: "La cereza es originaria de la región del Cáucaso y Asia Menor.",
        proceso: "Crece en árboles medianos que florecen abundantemente en primavera con flores blancas. Los frutos maduran en 2 a 3 meses.",
        cuidados: "Requiere clima templado con invierno frío, suelo bien drenado, poda para mantener forma, protección de pájaros y control de enfermedades.",
        historia: "Cultivada desde hace 2,000 años. Símbolo de primavera en muchas culturas. Importante en la cocina y repostería europeas."
    },
    durazno: {
        nombre: "Durazno",
        tipo: "Frutas Dulces",
        origen: "El durazno es originario de China, particularmente de la región del valle Yangtsé.",
        proceso: "Crece en árboles medianos que florecen en primavera con flores rosadas. Los frutos maduran en 3 a 4 meses en climas cálidos.",
        cuidados: "Necesita clima templado a subtropical con invierno frío, suelo bien drenado, poda regular, riego durante sequías y control de plagas.",
        historia: "Cultivado en China desde hace 4,000 años. Introducido en Europa por comerciantes. Símbolo de juventud y belleza en la mitología china."
    },
    pomelo: {
        nombre: "Pomelo",
        tipo: "Cítricos",
        origen: "El pomelo es originario del Sudeste Asiático, específicamente de las islas Malasia e Indonesia.",
        proceso: "Crece en árboles grandes que florecen en primavera. Los frutos son muy grandes y tardan 5 a 7 meses en madurar completamente.",
        cuidados: "Requiere clima tropical a subtropical, abundante luz solar, riego regular, suelo bien drenado y protección contra temperaturas bajas.",
        historia: "Es un cruce natural entre la naranja dulce y el pummelo. Introducido en Europa y América en tiempos modernos. Apreciado por su sabor amargo-dulce."
    },
    coco: {
        nombre: "Coco",
        tipo: "Frutas Tropicales",
        origen: "El coco es originario de las costas tropicales de América Central o el Sudeste Asiático, aunque esto aún se debate.",
        proceso: "Crece en palmeras altas que pueden vivir 80 años. Las flores son pequeñas. Los cocos tardan 12 meses en madurar después de la polinización.",
        cuidados: "Necesita clima tropical cálido, suelo arenoso bien drenado, alta humedad, luz solar directa abundante y protección del viento fuerte.",
        historia: "Conocido como el 'árbol de la vida' en culturas tropicales. Fundamental para la economía de muchas islas. Cada parte tiene múltiples usos."
    },
    arandano: {
        nombre: "Arándano",
        tipo: "Bayas Azules",
        origen: "El arándano es originario de América del Norte, donde crecía silvestramente.",
        proceso: "Crece en arbustos pequeños que viven muchos años. Flores blancas o rosadas aparecen en primavera. Frutos maduran en verano.",
        cuidados: "Requiere suelo ácido, bien drenado y rico en materia orgánica. Riego consistente, luz solar directa y poda regular para mantener productividad.",
        historia: "Alimento importante para pueblos indígenas. Domesticado en el siglo XX. Ahora valorado por sus propiedades antioxidantes y beneficios para la salud."
    },
    mora: {
        nombre: "Mora",
        tipo: "Bayas Negras",
        origen: "La mora es originaria de Europa, Asia y América, con múltiples especies distribuidas globalmente.",
        proceso: "Crece en arbustos o enredaderas espinosas. Flores rosadas o blancas en primavera. Frutos maduran en verano, de rojo a negro completamente maduro.",
        cuidados: "Requiere suelo bien drenado, luz solar parcial o completa, riego regular, poda para controlar crecimiento y protección contra plagas.",
        historia: "Mencionada en textos griegos y romanos antiguos. Creció silvestre durante siglos. Ahora cultivada comercialmente por sus frutos dulces y saludables."
    },
    frambuesa: {
        nombre: "Frambuesa",
        tipo: "Bayas Rojas",
        origen: "La frambuesa es originaria de Asia Menor y el este europeo.",
        proceso: "Crece en arbustos caducos que viven varios años. Flores blancas en primavera. Frutos maduran rápidamente en verano, listos para cosechar cuando están suaves.",
        cuidados: "Requiere suelo rico bien drenado, luz solar directa, riego regular, deshierbe cuidadoso y poda anual para eliminar tallos improductivos.",
        historia: "Domesticada en la Edad Media en Europa. Valorada por su sabor delicado y aroma. Importante en confitería y licores europeos."
    },
    granada: {
        nombre: "Granada",
        tipo: "Frutas Especiales",
        origen: "La granada es originaria de la región entre Irán y el norte de India.",
        proceso: "Crece en arbustos o árboles pequeños con flores rojo-anaranjadas llamativas. Frutos tardan 6 a 7 meses desde floración en madurar.",
        cuidados: "Necesita clima cálido y seco, suelo bien drenado, luz solar abundante, riego moderado y poda para mantener forma y producción.",
        historia: "Símbolo de fertilidad en muchas culturas antiguas. Mencionada en la Biblia y textos griegos. Cultivada desde hace 3,000 años."
    },
    papaya: {
        nombre: "Papaya",
        tipo: "Frutas Tropicales",
        origen: "La papaya es originaria de Centroamérica, particularmente de México.",
        proceso: "Crece en plantas herbáceas grandes que pueden vivir 5-10 años. Flores pequeñas amarillas. Frutos maduran rápidamente en 9-12 meses.",
        cuidados: "Requiere clima tropical, suelo bien drenado y profundo, abundante luz solar, riego regular y protección contra vientos fuertes.",
        historia: "Cultivada por civilizaciones precolombinas. Introducida en Asia y África por exploradores. Ahora cultivada en muchas regiones tropicales."
    },
    moras: {
        nombre: "Mora",
        tipo: "Bayas Oscuras",
        origen: "Las moras son originarias de regiones templadas de Asia, Europa y América.",
        proceso: "Crecen en arbustos silvestres que producen flores pequeñas. Frutos se desarrollan durante el verano y maduran cuando adquieren color negro profundo.",
        cuidados: "Requieren suelo bien drenado, luz solar parcial a completa, riego durante sequías, poda ocasional y control de plagas y malezas.",
        historia: "Recolectadas desde tiempos antiguos en estado silvestre. Ahora también se cultivan comercialmente. Populares en mermeladas y vinos."
    }
};

/**
 * FUNCIÓN: Obtener fruta por nombre
 * @param {string} fruitName - Nombre de la fruta
 * @returns {object|null} - Objeto fruta o null si no existe
 */
function getFruitData(fruitName) {
    if (!fruitName) return null;
    
    const key = fruitName.toLowerCase().trim();
    return frutasDB[key] || null;
}

/**
 * FUNCIÓN: Obtener lista de todas las frutas disponibles
 * @returns {array} - Array con nombres de todas las frutas
 */
function getAllFruits() {
    return Object.keys(frutasDB);
}

/**
 * FUNCIÓN: Verificar si una fruta existe
 * @param {string} fruitName - Nombre de la fruta
 * @returns {boolean} - true si existe, false si no
 */
function fruitExists(fruitName) {
    return frutasDB.hasOwnProperty(fruitName.toLowerCase());
}
