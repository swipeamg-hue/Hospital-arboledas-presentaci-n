/**
 * Base de datos de productos químicos especializados por área
 * para el Hospital Arboledas.
 */
const PRODUCTS_DATA = {
  alberca: {
    title: "Quirófanos & UCI",
    accentColor: "var(--color-alberca)",
    slogan: "Desinfección de grado quirúrgico, esterilización en frío y control de infecciones nosocomiales en áreas de alto riesgo.",
    products: [
      {
        id: "alguicida_max",
        name: "Swipol (Desinfectante Quirúrgico)",
        tagline: "Desinfectante viricida y bactericida de grado quirúrgico en 30 segundos",
        description: "Swipol es la herramienta definitiva para la desinfección de contacto de superficies críticas en quirófanos, UCI y urgencias. Su fórmula con cuaternario de amonio de quinta generación elimina virus envueltos, bacterias multirresistentes y hongos sin dejar residuos corrosivos ni generar vapores irritantes.",
        benefits: [
          "Eliminación de virus y bacterias en 30 segundos, ideal para tiempos de rotación rápidos entre cirugías.",
          "Cero vapores o aromas químicos irritantes: seguro para el personal médico y pacientes bajo anestesia.",
          "Alta compatibilidad con plásticos técnicos, acrílicos y pantallas de monitores y ventiladores.",
          "Acción germicida residual que evita la proliferación de patógenos intrahospitalarios comunes."
        ],
        usage: "Desinfección de equipos médicos, lámparas, mesas quirúrgicas, camillas, monitores y superficies de contacto frecuente.",
        dosage: "Normal (1:200) para superficies generales | Grado quirúrgico (1:100) para áreas de alta carga biológica.",
        dilution: "Dilución en agua. Aplicar con atomizador o paño limpio, frotar y dejar secar. No requiere enjuague.",
        phImpact: "Neutro y estable en superficies.",
        safety: "Totalmente seguro en dilución. No mezclar con jabones aniónicos o cloro.",
        badge: "Viricida en 30 Segundos",
        image: "images/swipol.png"
      },
      {
        id: "shock_cloro",
        name: "Peracetic (Esterilizante en Frío)",
        tagline: "Ácido peracético estabilizado para desinfección de nivel esterilizante",
        description: "Desinfectante esporicida y esterilizante químico a base de ácido peracético. Diseñado especialmente para la esterilización en frío de instrumental termosensible y desinfección de alto nivel en áreas críticas de cirugía y terapia intensiva, eliminando bacterias, micobacterias, hongos y esporas.",
        benefits: [
          "Acción esporicida garantizada: elimina bacterias formadoras de esporas como Clostridium difficile.",
          "Esterilización rápida por inmersión de instrumental quirúrgico no autoclavable.",
          "Fórmula biodegradable: se descompone en agua, oxígeno y ácido acético sin dejar residuos tóxicos.",
          "Evita la corrosión del acero inoxidable y juntas plásticas bajo los protocolos recomendados."
        ],
        usage: "Esterilización de endoscopios, instrumental quirúrgico termosensible y desinfección de alto nivel en superficies quirúrgicas.",
        dosage: "Inmersión (según manual de instrumental) | Desinfección profunda (1:50) en superficies clínicas.",
        dilution: "Dilución en agua desmineralizada para inmersión de instrumental o rociado directo en quirófanos.",
        phImpact: "Ácido activo desinfectante.",
        safety: "Utilizar equipo de protección personal (guantes, lentes). Evitar contacto con la piel. Usar en áreas ventiladas.",
        badge: "Esterilizante Esporicida"
      }
    ]
  },
  spa: {
    title: "Lavandería Clínica",
    accentColor: "var(--color-spa)",
    slogan: "Manejo higiénico y desinfección profunda de blancos y campos quirúrgicos expuestos a fluidos biológicos.",
    products: [
      {
        id: "hldh",
        name: "HLDH",
        tagline: "Detergente en polvo concentrado para desinfección terminal de textiles",
        description: "Detergente en polvo concentrado diseñado específicamente para la limpieza profunda, blanqueo y desinfección terminal de textiles en entornos críticos.",
        benefits: [
          "Poder Desinfectante a Base de Cloro: Integrado en la fórmula para garantizar la eliminación de patógenos comunes en sábanas, toallas y batas de pacientes.",
          "Control de Espuma y Alta Eficiencia: Fórmula de baja espumación que protege las lavadoras industriales y optimiza el consumo de agua.",
          "Agentes Antirredepositantes y Anticorrosivos: Previene que la suciedad disuelta se fije de nuevo en la tela y protege los componentes de acero inoxidable de los equipos.",
          "Seguridad para Ropa Blanca y Colores Firmes: Su poder blanqueador es seguro para textiles hospitalarios que requieran desinfección sin decoloración."
        ],
        usage: "Limpieza profunda, blanqueo y desinfección terminal de textiles en entornos críticos.",
        dosage: "Solo una medida dosificadora de 40 gramos es suficiente para lavar 4 kilogramos de ropa.",
        dilution: "Funciona en agua fría, pero logra su máximo rendimiento a temperaturas entre 40° y 60°C para la activación óptima del cloro.",
        phImpact: "Alcalino clorado activo.",
        safety: "No mezclar con ácidos o productos de amonio. Almacenar en lugar seco y fresco. Usar guantes.",
        badge: "Desinfección Terminal",
        image: "images/HLDH.png"
      },
      {
        id: "hldh_system_3",
        name: "HLDH System 3 Mezcla Clorada",
        tagline: "Blanqueador líquido y desinfectante de alto poder para lavandería institucional",
        description: "Es un blanqueador líquido y desinfectante de alto poder, formulado como un sistema de lavado enérgico para su uso exclusivo en lavanderías institucionales que manejan altos volúmenes de ropa blanca.",
        benefits: [
          "Eliminación Especializada de Manchas de Sangre: Diseñado específicamente para erradicar las manchas de sangre, incluyendo el 'mapa' residual que a menudo queda en los textiles clínicos, garantizando la recuperación de la prenda.",
          "Aseguramiento de Desinfección Total: Su potente acción clorada garantiza la desinfección completa de las prendas, un requisito crítico para romper la cadena de transmisión de infecciones en hospitales.",
          "Blanqueo de Alto Rendimiento: Restaura y mantiene la blancura de sábanas, batas y toallas, proporcionando una apariencia de limpieza impecable y profesional."
        ],
        usage: "Recomendado exclusivamente para prendas blancas.",
        dosage: "La dosis debe ajustarse según la clasificación de la ropa y el nivel de suciedad (consulte a su representante Swipe para optimizar el programa de lavado).",
        dilution: "Dosificación automática controlada según las necesidades específicas de la lavandería.",
        phImpact: "Altamente alcalino (pH 11-14).",
        safety: "Producto corrosivo. Requiere uso de guantes y gafas de seguridad para su manipulación. No combinar con otros productos químicos.",
        badge: "Blanqueador Clorado",
        image: "images/HLDH System 3 mezcla clorada.png"
      },
      {
        id: "emulsigraz",
        name: "Emulsigraz",
        tagline: "Detergente reforzador líquido concentrado booster para eliminar grasas y aceites",
        description: "Es un poderoso detergente líquido concentrado, diseñado específicamente como un refuerzo (booster) para emulsificar, dispersar y eliminar eficazmente grasas y aceites de origen vegetal, animal y mineral en textiles, evitando que la suciedad se vuelva a depositar en las prendas.",
        benefits: [
          "Eliminación de Manchas Difíciles: Ideal para tratar ropa de cama, uniformes y mantelería de áreas de nutrición contaminados con aceites, pomadas, cremas medicinales u otro tipo de residuos oleosos.",
          "Potenciador de Lavado: Incrementa significativamente la efectividad del detergente principal en cargas con suciedad pesada, asegurando una limpieza profunda desde el primer ciclo.",
          "Alta Eficiencia Térmica: Formulado para funcionar óptimamente a altas temperaturas (80°C - 90°C), rango comúnmente utilizado en lavanderías hospitalarias para procesos de sanitización."
        ],
        usage: "Utilizar en el ciclo de lavado principal como refuerzo del detergente.",
        dosage: "De 1.5 a 7 ml por kilogramo de ropa seca, dependiendo del nivel de grasa.",
        dilution: "Operar a temperaturas de 80°C a 90°C por un lapso de 8 minutos para maximizar resultados.",
        phImpact: "Detergente emulsionante.",
        safety: "Utilizar protección básica. Consultar ficha técnica para dosificación automática.",
        badge: "Refuerzo Emulsificante",
        image: "images/Emulsigraz.png"
      },
      {
        id: "soft",
        name: "Soft",
        tagline: "Suavizante líquido altamente concentrado y biodegradable para todo tipo de textiles",
        description: "Es un suavizante líquido altamente concentrado de aspecto cremoso y agradable aroma, formulado para ser biodegradable y dar el acabado final de suavidad a todo tipo de textiles.",
        benefits: [
          "Confort Superior para el Paciente: Imparte tersura y una sensación suave y esponjosa a sábanas, toallas y batas, mejorando significativamente la experiencia de comodidad durante la estancia hospitalaria.",
          "Percepción de Higiene Elevada: Deja un delicado y exquisito perfume en las prendas, reforzando la percepción de limpieza e higiene impecable tanto para pacientes como para el personal.",
          "Eficiencia Operativa: Elimina la electricidad estática de la ropa, facilitando los procesos posteriores de planchado industrial, doblado y manipulación de blancos.",
          "Cuidado del Equipo y Textiles: No deja residuos en la lavadora, protegiendo la maquinaria. Su fórmula fina es segura para todo tipo de fibras (algodón, poliéster, lana, seda) y ropa delicada."
        ],
        usage: "Agregar únicamente durante el último ciclo de enjuague.",
        dosage: "Dosificar en el último enjuague según el tamaño de la carga.",
        dilution: "Ideal tanto para ropa de cama y toallas estándar como para prendas finas y delicadas.",
        phImpact: "Ligeramente ácido a neutro en dilución.",
        safety: "Seguro en uso directo en el último enjuague.",
        badge: "Suavidad y Confort",
        image: "images/Soft.png"
      }
    ]
  },
  gimnasio: {
    title: "Habitaciones de Pacientes y Áreas Comunes",
    accentColor: "var(--color-gimnasio)",
    slogan: "Higiene, desinfección profunda de superficies y control ambiental en habitaciones de pacientes, pasillos y áreas comunes.",
    products: [
      {
        id: "swipol_gym",
        name: "Swipol",
        tagline: "Desinfectante germicida y limpiador líquido concentrado biodegradable",
        description: "SWIPOL es un desinfectante germicida y limpiador líquido concentrado, clasificado con grado alimenticio y quirúrgico. Su avanzada formulación a base de cuaternario de amonio de última generación está diseñada para eliminar bacterias, hongos y levaduras, manteniendo una alta efectividad incluso ante la presencia de tierra orgánica. Además, es un producto certificado como biodegradable con un 95.70% de eficiencia, alineándose con los más altos estándares de sustentabilidad clínica.",
        benefits: [
          "Seguridad Hospitalaria de Amplio Espectro: Rigurosamente probado contra patógenos críticos como E. coli, Staphylococcus spp y Pseudomona aeroginosa, asegurando la desinfección total de los cuartos de enfermos (camas, pisos, persianas, gabinetes, teléfonos, almohadas y sábanas).",
          "Confort Absoluto para el Paciente: Líquido incoloro e inodoro, permitiendo cumplir con las más estrictas normas de higiene internacional sin generar molestias respiratorias en áreas de recuperación y siendo totalmente seguro al no ser irritante para la piel.",
          "Alta Rentabilidad Operativa: Su alta tolerancia a las cargas de proteínas y su nivel de concentración permiten tasas de dilución sumamente altas, lo que se traduce directamente en importantes ahorros financieros y eficiencia logística de limpieza diaria."
        ],
        usage: "Desinfección de superficies de alto contacto, trapeado de pisos y nebulización ambiental profunda.",
        dosage: "Superficies 1:20 (25 ml en medio litro de agua) | Pisos 1:120 (83.3 ml en 10 litros de agua) | Nebulización 1:60.",
        dilution: "Dilución en agua. Para superficies rociar y dejar actuar 30 segundos sin enjuagar. Trapear pisos regularmente.",
        phImpact: "Estable y no corrosivo.",
        safety: "Biodegradable (95.70% de eficiencia). No es irritante para la piel. Almacenar en lugar fresco.",
        badge: "Desinfectante Germicida",
        image: "images/swipol.png"
      },
      {
        id: "magic_gym",
        name: "Swipe Magic",
        tagline: "Limpiador, aromatizante y desinfectante de pisos biodegradable",
        description: "SWIPE Magic es un versátil limpiador, aromatizante y desinfectante altamente concentrado y de fórmula biodegradable. Ha sido diseñado específicamente para el cuidado integral de los pisos, logrando eliminar la grasa, el polvo y la suciedad sin dejar residuos opacos. Su acción triple renueva la apariencia de las superficies, dándoles vida mientras desinfecta el área tratada.",
        benefits: [
          "Ambiente Confortable y Acogedor: Con propiedades de aromatización en 5 opciones (Lavender, Ocean Breeze, Lemon Lime, Flower Garden y Green Apple), ideal para mejorar la percepción de limpieza en recepciones, pasillos y salas de espera.",
          "Higiene Confiable y Sustentable: Su coeficiente fenólico le otorga propiedades germicidas, asegurando la desinfección efectiva de los pisos en las áreas de tránsito y recuperación, apoyando a la vez las normativas ecológicas del hospital.",
          "Máxima Eficiencia y Ahorro Financiero: Su alta eficiencia de dilución optimiza drásticamente los recursos materiales del hospital, garantizando ahorros financieros de entre el 35% y el 50% en el presupuesto de mantenimiento de pisos."
        ],
        usage: "Limpieza diaria, desinfección y aromatización de pisos clínicos en áreas de tránsito y recuperación.",
        dosage: "Mantenimiento Diario 60 a 80 ml en 10 litros de agua | Limpieza Profunda Localizada directo.",
        dilution: "Diluir para trapeado regular. Para zonas de suciedad pesada, rociar concentrado directo y trapear con agua limpia.",
        phImpact: "Neutro, libre de residuos opacos.",
        safety: "Biodegradable. Evitar el contacto directo. Mantener cerrado en lugar fresco.",
        badge: "Limpiador y Aromatizante",
        image: "images/Magic.png"
      },
      {
        id: "swipe_gym",
        name: "Swipe",
        tagline: "Limpiador y desengrasante líquido de uso general biodegradable",
        description: "SWIPE es un limpiador y desengrasante líquido de uso general, formulado para ser altamente concentrado y versátil. Cuenta con una biodegradabilidad superior al 99% (avalada por la U.A.N.L.) y posee registro ante la NSF como producto grado alimenticio. Es el limpiador base ideal para la clínica, ya que no contiene cáusticos libres, no es tóxico, no es corrosivo y no es inflamable, garantizando la máxima seguridad para el usuario y el medio ambiente.",
        benefits: [
          "Limpieza Segura Multisuperficie: Emulsiona rápidamente la mugre y grasa corporal sin dañar, rayar ni decolorar materiales. Es perfectamente seguro para camillas o sillas de vinil, plásticos, paredes, vidrios, espejos y cromo.",
          "Preparación Óptima para Desinfección: Actúa como el primer paso esencial en el protocolo de higiene hospitalaria, removiendo la capa de suciedad para permitir que los desinfectantes posteriores actúen con el 100% de eficacia.",
          "Sustentabilidad y Ahorro Financiero: Su extrema concentración permite diluciones muy altas con agua, lo que se traduce en ahorros financieros tangibles de entre un 35% y un 50% en el presupuesto de insumos de limpieza del hospital."
        ],
        usage: "Limpieza de polvo, grasa corporal y mugre en camillas, mobiliario, pisos, paredes, vidrios y espejos.",
        dosage: "Mantenimiento General (Solución Liviana 1:100) | Limpieza de polvo y suciedad ligera en superficies.",
        dilution: "Dilución 1:100 (1 parte de producto por 100 partes de agua). Se recomienda aplicar con la Pistola Rociadora SWIPE para optimizar la aplicación.",
        phImpact: "Neutro y libre de cáusticos libres.",
        safety: "Biodegradabilidad superior al 99% (U.A.N.L.). Registro NSF grado alimenticio. No es tóxico, corrosivo ni inflamable.",
        badge: "Limpiador Multiusos",
        image: "images/swipe_concentrado.png"
      },
      {
        id: "sure_thing_gym",
        name: "Swipe Sure Thing",
        tagline: "Neutralizador químico de olores y desodorante biodegradable",
        description: "SWIPE Sure Thing es un avanzado neutralizador de aromas, desodorante y desinfectante de ambiente en formato líquido, con una fórmula biodegradable y altamente concentrada. Su composición integra agentes degradadores de materia orgánica y emulsificantes con poder germicida, diseñados no solo para enmascarar, sino para eliminar de raíz los olores del medio ambiente.",
        benefits: [
          "Confort Olfativo y Ambiente de Recuperación: Hace desaparecer olores clínicos, biológicos o de alimentos en cuartos de enfermos, baños, pasillos y salas de espera, generando una atmósfera más cálida y reconfortante.",
          "Acción Dual de Higiene y Aroma: Aporta un coeficiente levemente germicida al entorno mientras aromatiza, adaptándose a las preferencias del hospital gracias a sus distintas notas olfativas (floral, menta, canela, vainilla).",
          "Rendimiento Sorprendente: Su formulación de ultra-concentración permite una dilución por gotas, logrando ahorros financieros de entre el 35% y el 50% frente a los típicos aerosoles comerciales de bajo rendimiento."
        ],
        usage: "Aromatización de áreas grandes, tratamiento de botes de basura y desodorización continua de espacios pequeños.",
        dosage: "Áreas grandes (30 a 60 gotas en 1/2 litro de agua) | Puntos críticos directo (unas cuantas gotas) | Espacios pequeños destapado.",
        dilution: "Dilución en agua para atomizador, uso directo por goteo o exposición permanente del envase destapado.",
        phImpact: "Compatible con desinfectantes como Swipol.",
        safety: "Fórmula biodegradable con poder germicida. Evitar la ingestión. Mantener cerrado en lugar fresco.",
        badge: "Neutralizador de Olores",
        image: "images/sure_thing.png"
      }
    ]
  },
  gastronomia: {
    title: "Dietología & Cocina",
    accentColor: "var(--color-gastronomia)",
    slogan: "Inocuidad microbiológica total en dietas y desengrase de cocinas hospitalarias.",
    products: [
      {
        id: "swipe_concentrado_gastronomia",
        name: "SWIPE original (Grado Alimenticio)",
        tagline: "Desengrasante industrial de grado alimenticio certificado por NSF A1",
        description: "SWIPE original es el limpiador desengrasante multiusos de grado alimenticio definitivo para cocinas hospitalarias y servicios de dietología. Certificado por NSF (Categoría A1), remueve con eficacia aceites, grasas y residuos biológicos en campanas, mesas de preparación, charolas de distribución y pisos, manteniendo los estándares del Distintivo H.",
        benefits: [
          "Certificación NSF A1: Seguro para usar en superficies de contacto con alimentos sin riesgo químico.",
          "Desengrase profundo de campanas extractoras, planchas, freidoras y superficies de acero inoxidable.",
          "Fórmula biodegradable, libre de cáusticos libres y humos tóxicos (segura para el personal).",
          "Alta economía: dilución liviana (1:100) para mesas y vidrios, y pesada (1:4) para grasa carbonizada."
        ],
        usage: "Lavado y desengrase de planchas, campanas, mesas de trabajo, pisos de cocina, charolas y azulejos.",
        dosage: "Diario (1:100) para mesas y áreas generales | Pesado (1:4) para cochambre y campanas extractoras.",
        dilution: "Diluir en agua según la carga de suciedad. Aplicar, tallar y enjuagar con agua potable.",
        phImpact: "pH Neutro (pH 7.0) disponible para salvaguardar drenajes.",
        safety: "Grado alimenticio. No inflamable, biodegradable, libre de fosfatos.",
        badge: "Certificación NSF A1",
        image: "images/swipe_concentrado.png"
      },
      {
        id: "veggiefruit_wash",
        name: "Veggiefruit Wash",
        tagline: "Jabón sanitizante biodegradable para lavado y desinfección de dietas",
        description: "Jabón líquido desinfectante biodegradable de grado alimenticio altamente concentrado, diseñado específicamente para lavar y sanitizar frutas, verduras y vegetales que componen las dietas de pacientes. Asegura la eliminación de bacterias y parásitos sin alterar las propiedades de los alimentos.",
        benefits: [
          "Desinfección garantizada de dietas para pacientes inmunodeprimidos o pediátricos.",
          "Libre de aroma y sabor: no altera el sabor, color ni frescura natural de las verduras y frutas.",
          "Gran economía de uso: dilución 1:100 (10 ml por litro de agua), rindiendo hasta 100 litros de solución.",
          "Fórmula dermatológicamente segura para el personal operativo, no mancha fregaderos de acero inoxidable."
        ],
        usage: "Lavado y desinfección de lechugas, verduras de hoja, tubérculos, frutas y hortalizas en dietología.",
        dosage: "Mezclar 10 ml de producto por cada litro de agua. Tiempo de contacto de 1 minuto.",
        dilution: "Inmersión para verduras de hoja y hierbas, o cepillado suave con la solución para frutas de cáscara dura.",
        phImpact: "pH Neutro (6.0 a 8.0) seguro y estable.",
        safety: "Grado alimenticio y biodegradable. Enjuagar con agua purificada después de lavar.",
        badge: "Desinfección de Alimentos",
        image: "images/veggiefruit_wash.png"
      },
      {
        id: "hand_soap_gastronomia",
        name: "Swipe Hand Soap (Inodoro)",
        tagline: "Jabón líquido germicida y antibacterial inodoro para cocinas",
        description: "Jabón antiséptico de manos 100% libre de fragancias y colorantes, formulado especialmente para el personal de dietología y cocinas hospitalarias. Garantiza la eliminación de patógenos sin transferir olores a los alimentos preparados.",
        benefits: [
          "Inocuidad alimentaria total: libre de perfumes que alteren el sabor de las dietas de los pacientes.",
          "Elimina eficazmente Salmonella, E. coli y S. aureus de las manos del personal manipulador.",
          "pH balanceado con emolientes que previenen la resequedad por lavado frecuente en cocina.",
          "Compatible con dispensadores manuales y automáticos para un lavado aséptico controlado."
        ],
        usage: "Lavado y desinfección de manos de chefs, dietistas, meseros y personal en contacto con alimentos.",
        dosage: "Dosificar 1.5 ml por lavado directo en las manos, frotar y enjuagar con agua potable.",
        dilution: "Uso concentrado directo sin diluir. Frotar uñas, dedos y antebrazo durante 40-60 segundos.",
        phImpact: "pH balanceado de 5.0 a 6.0 compatible con la piel.",
        safety: "Dermatológicamente seguro. Evitar contacto con los ojos. Uso externo.",
        badge: "Inodoro / Grado Alimenticio",
        image: "images/hand_soap.png"
      },
      {
        id: "crystal_dwm",
        name: "Crystal DWM",
        tagline: "Detergente de baja espuma desincrustante para lavavajillas industriales",
        description: "Detergente líquido de espuma controlada diseñado para lavadoras automáticas de charolas y loza hospitalaria. Asegura un lavado impecable a temperaturas reguladas, desincrustando al mismo tiempo el interior del equipo.",
        benefits: [
          "Limpieza profunda y abrillantado de vajillas, vasos y charolas de pacientes en un solo ciclo.",
          "Fórmula de baja espuma que optimiza la presión mecánica de lavado de la máquina.",
          "Doble acción: limpia la vajilla y desincrusta tuberías y resistencias de la lavadora.",
          "Actúa eficazmente a menos de 50 °C, reduciendo el consumo de energía en calderas."
        ],
        usage: "Lavado mecánico de vajillas, charolas térmicas, cubiertos e instrumental de comedor en lavavajillas automáticas.",
        dosage: "Dosificación automática de 8 ml a 12 ml por ciclo de lavado mediante inyector.",
        dilution: "Inyección automática directa al ciclo de lavado de la máquina.",
        phImpact: "Alcalino controlado desincrustante.",
        safety: "Producto corrosivo en estado concentrado. Manejar con precaución. Diseñado para uso mecánico.",
        badge: "Acción Desincrustante",
        image: "images/crystal_dwm.png"
      }
    ]
  },
  mantenimiento: {
    title: "Sanitarios & Baños",
    accentColor: "var(--color-mantenimiento)",
    slogan: "Protocolos de desinfección agresiva para baños comunes e institucionales y control ambiental de olores.",
    products: [
      {
        id: "swipe_concentrate",
        name: "Brite (Desincrustante Ácido)",
        tagline: "Limpiador ácido desincrustante, desinfectante y desodorizante de sanitarios",
        description: "Brite es un limpiador desincrustante ácido biodegradable de alto rendimiento para inodoros y mingitorios. Elimina de raíz las calcificaciones de sarro, manchas de óxido de agua dura y destruye las bacterias que generan malos olores en la porcelana.",
        benefits: [
          "Remoción de sarro, óxido y depósitos minerales en inodoros y mingitorios de manera instantánea.",
          "Acción germicida que elimina bacterias causantes de infecciones en sanitarios de alto tráfico público.",
          "Evita los malos olores al atacar la flora bacteriana causante de la descomposición orgánica.",
          "Fórmula biodegradable segura para tuberías de PVC, conexiones metálicas y fosas sépticas."
        ],
        usage: "Desincrustación profunda, desinfección y limpieza de inodoros, mingitorios y mamparas en baños públicos.",
        dosage: "Aplicar directo para sarro incrustado | Diluir hasta 1:5 en agua para limpieza de azulejos sanitarios.",
        dilution: "Directo sobre las paredes de la taza con aplicador de fibra, dejar actuar de 3 a 5 minutos, tallar y enjuagar.",
        phImpact: "Ácido activo desincrustante.",
        safety: "NUNCA mezclar con cloro u otros limpiadores químicos. Usar guantes y lentes de protección.",
        badge: "Desincrustante Ácido",
        image: "images/swipe_brite.png"
      },
      {
        id: "sure_thing",
        name: "Swipe Sure Thing",
        tagline: "Neutralizador químico y desodorante biodegradable de olores ambientales",
        description: "Swipe Sure Thing es el neutralizador de olores concentrado premium. Su tecnología descompone activamente las moléculas orgánicas causantes de la humedad, sudor y encierro en baños públicos y salas de espera, liberando un agradable aroma de larga duración.",
        benefits: [
          "Neutralización real de raíz: descompone compuestos orgánicos volátiles en vez de solo perfumar.",
          "Compatible con Swipol: puede mezclarse directamente con el desinfectante para limpiar y aromatizar en un paso.",
          "Aromas premium disponibles (menta, floral, canela, vainilla) para ambientar salas de espera hospitalarias.",
          "Alta concentración: unas gotas puras desodorizan áreas pequeñas, rindiendo ampliamente por aspersión."
        ],
        usage: "Desodorización y aromatización de salas de espera, sanitarios, vestidores, oficinas y pasillos hospitalarios.",
        dosage: "Gotas puras en áreas localizadas | Aspersión (30-60 gotas por 500 ml de agua en atomizador).",
        dilution: "Directo en gotas, o diluido en agua en atomizador. Combinable con Swipol.",
        phImpact: "Ligeramente alcalino.",
        safety: "Líquido inflamable. Almacenar adecuadamente alejado de fuentes de calor. Mantener cerrado.",
        badge: "Neutralizador de Olores",
        image: "images/sure_thing.png"
      },
      {
        id: "swipol_mantenimiento",
        name: "Swipol (Sanitarios y Pisos)",
        tagline: "Desinfectante germicida multiusos para pisos y paredes en baños",
        description: "Desinfectante con cuaternarios de amonio de quinta generación formulado para el lavado y sanitización diaria de pisos, paredes, lavabos y grifos en baños comunes. Asegura la bioseguridad contra bacterias causantes de gastroenteritis e infecciones de piel.",
        benefits: [
          "Desinfección profunda de mamparas, griferías, cambiadores de bebés y pisos de baños públicos.",
          "Elimina bacterias como Escherichia coli y levaduras causantes de infecciones cutáneas.",
          "Totalmente inoloro e incoloro, ideal para áreas donde no se desean fragancias cargadas.",
          "pH neutro que no daña los recubrimientos cerámicos, juntas de azulejos ni el brillo natural de pisos."
        ],
        usage: "Desinfección diaria de pisos de baño, mamparas, grifos, lavabos, cambiadores y botes de basura.",
        dosage: "Lavado de pisos (1:200) | Desinfección profunda de alto contacto (1:100) en mamparas y manijas.",
        dilution: "Diluir en agua. Rociar o trapear, dejar actuar por 2 minutos. No requiere enjuague.",
        phImpact: "Completamente neutro (pH 7.0), no mancha ni corroe.",
        safety: "Seguro para la piel en dilución recomendada. No inflamable.",
        badge: "Desinfectante Multiusos",
        image: "images/swipol.png"
      },
      {
        id: "hand_soap",
        name: "Swipe Hand Soap (Baños)",
        tagline: "Jabón líquido germicida antibacterial y suavizante para baños públicos",
        description: "Jabón líquido antiséptico de manos con aroma agradable, formulado para la higiene diaria en los sanitarios públicos del hospital. Limpia y elimina bacterias eficazmente mientras cuida la piel de visitantes y familiares.",
        benefits: [
          "Acción germicida que previene la transmisión cruzada de patógenos en áreas públicas.",
          "Aroma agradable y espuma cremosa que brinda una excelente experiencia de aseo.",
          "pH balanceado con glicerina que protege la piel del usuario, evitando la resequedad.",
          "Economía de uso: ideal para despachadores rellenables de alto tráfico."
        ],
        usage: "Lavado e higiene de manos de pacientes, familiares y visitantes en baños públicos y consultorios.",
        dosage: "Dosificar 1.5 ml por descarga directa en las manos, frotar y enjuagar con agua.",
        dilution: "Uso concentrado directo sin diluir. Frotar firmemente y retirar con agua.",
        phImpact: "pH balanceado de 5.0 a 6.0 compatible con la piel.",
        safety: "Uso externo exclusivamente. Evitar contacto directo con los ojos.",
        badge: "Higiene Pública Aséptica",
        image: "images/hand_soap.png"
      }
    ]
  },
  ahorro: {
    title: "Ahorro & Ecología",
    accentColor: "var(--color-ahorro)",
    slogan: "Sustentabilidad financiera y bioseguridad para el Hospital Arboledas con sistemas de alta concentración.",
    products: [
      {
        id: "audit_service",
        name: "Ingeniería de Ahorro",
        tagline: "Estudio técnico personalizado de optimización de presupuesto de bioseguridad en sitio",
        description: "Analizamos detalladamente tus consumos y procesos de desinfección actuales para diseñar el sistema de dosificación y dilución Swipe óptimo, reduciendo costos operativos drásticamente mientras se elevan los estándares higiénicos.",
        benefits: [
          "Reducción directa de costos operativos de limpieza y desinfección.",
          "Capacitación presencial certificada al personal de intendencia del hospital.",
          "Entrega de manuales visuales de dosificación y carpetas técnicas de bioseguridad."
        ],
        usage: "Visita y diagnóstico operativo en las instalaciones del hospital sin costo ni compromiso.",
        dosage: "Evaluación técnica en sitio con duración de 2 a 3 horas.",
        dilution: "Personalizado por nuestro Ingeniero de Ventas Swipe según la infraestructura hospitalaria.",
        phImpact: "No aplica.",
        safety: "Protocolo de visitas bajo las normas de ingreso del Hospital Arboledas.",
        badge: "Servicio Sin Costo"
      }
    ]
  },
  demo: {
    title: "Demos & Pruebas en Sitio",
    accentColor: "var(--color-demo)",
    slogan: "Comprueba el rendimiento y resultados espectaculares de Swipe directamente en tus instalaciones sanitarias.",
    products: [
      {
        id: "demo_cocina",
        name: "Demo: Desinfección y Desengrase",
        tagline: "Prueba biológica de desinfección y remoción extrema de suciedad",
        description: "Llevamos a cabo demostraciones reales de desinfección con luminómetro (ATP) y desengrase de planchas/campanas. Compara el ahorro de tiempo y el nivel de inocuidad microbiológica al instante.",
        benefits: [
          "Prueba presencial con lectura de luminometría para validar bioseguridad.",
          "Demostración de efectividad en áreas de alto contacto o grasas carbonizadas.",
          "Muestras físicas y asesoría técnica para el departamento de compras y control infeccioso."
        ],
        usage: "Cocinas, habitaciones, sanitarios o salas de espera del Hospital Arboledas.",
        dosage: "Aplicación y muestreo de control biológico en cuadrante de prueba.",
        dilution: "Preparado en sitio por nuestro personal de ingeniería con dilución certificada.",
        phImpact: "Controlado según el producto a demostrar.",
        safety: "Aplicado por personal capacitado con equipo de bioseguridad adecuado.",
        badge: "Prueba Sin Costo"
      }
    ]
  }
};
