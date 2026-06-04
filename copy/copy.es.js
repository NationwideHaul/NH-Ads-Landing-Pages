// ============================================================================
//  COPY EN ESPAÑOL — versión derivada del master en inglés (copy.js).
//  Las CLAVES son idénticas a copy.js; solo se traducen los VALORES.
//  La usa app/mac-lightweight-spanish/page.js.
//
//  REGLAS DE MARCA (estrictas):
//   - Siempre escribir "f!nanciamiento" / "f!nanciamos" (con el !).
//   - Sin hashtags. Prosa continua. Sin guiones largos (—).
//   - Tono cálido, directo, profesional. Público = gerentes de flota y
//     operaciones grandes en Florida. NUNCA owner-operators.
// ============================================================================

export const copy = {
  // ---- <head> / SEO -------------------------------------------------------
  meta: {
    title:
      "Remolque de Volteo MAC FL Lightweight Spec | Nationwide Haul (Florida)",
    description:
      "El nuevo volteo MAC FL Lightweight carga más payload legal por viaje que el spec estándar. Mira tus números y habla con nuestro equipo en Florida sobre f!nanciamiento en casa.",
  },

  // ---- Franja de anuncio superior ----------------------------------------
  announcement: "F!NANCIAMOS TODO EL EQUIPO EN CASA",

  // ---- Nav ----------------------------------------------------------------
  nav: {
    brand: "Nationwide Haul",
    logoAlt: "Nationwide Haul",
    primaryCta: "Conoce más con nuestro equipo",
    callLabel: "Llamar",
  },

  // ---- 1. HERO ------------------------------------------------------------
  hero: {
    eyebrow: "MAC FL Lightweight Spec Dump",
    switchingBadge: "Los contratistas de Florida se están cambiando",
    h1Options: [
      "Mueve más toneladas por viaje, sin comprar otro camión.",
      "Las mismas rutas, las mismas horas, más payload en cada viaje.",
      "El volteo lightweight que convierte tu peso vacío en margen.",
    ],
    subheadStart: "El nuevo MAC FL Lightweight Spec ",
    subheadHighlight: "pesa menos que el volteo estándar",
    subheadEnd:
      ", así que cada viaje carga más payload legal. A lo largo de una temporada de acarreo en Florida, ese payload extra se convierte directo en margen que te quedas.",
    primaryCta: "Conoce más con nuestro equipo",
    helperMicrocopy: "¡Respuestas el mismo día!",
    // Video VSL del español (anula el default de inglés).
    videoUrl: "https://www.youtube.com/watch?v=js0-fyrKGO8",
    videoLabel: "Mira: el MAC FL Lightweight en acción",
    presenterImageAlt:
      "Especialista de Nationwide Haul listo para responder tus preguntas",
  },

  // ---- DISTRIBUIDOR AUTORIZADO + CARRUSEL DE LOGOS OEM -------------------
  oem: {
    authorizedBadge: "Distribuidor autorizado MAC",
    heading: "Distribuidor autorizado de MAC Trailer",
    subheading:
      "Vendemos, especificamos y damos servicio a las marcas en que confían las flotas de Florida, con f!nanciamiento en casa para todo.",
  },

  // ---- 2. CALCULADORA COMPARATIVA ----------------------------------------
  calculator: {
    sectionEyebrow: "Corre tus propios números",
    heading: "¿Cuánto te está costando el volteo estándar cada mes?",
    subheading:
      "Pon cómo operas de verdad. Los números de abajo son tuyos, ajústalos hasta que reflejen tu operación.",
    inputs: {
      loadsPerWeekLabel: "Viajes (cargas) por semana",
      loadsPerWeekHelp: "Por camión, en una semana normal.",
      revenuePerLoadLabel: "Ingreso por viaje",
      revenuePerLoadHelp: "Tu promedio. Cámbialo según tus rutas.",
    },
    outputs: {
      extraPayloadLabel: "Payload legal extra por viaje",
      extraTonsLabel: "Toneladas extra al mes",
      extraRevenueLabel: "Ingreso extra al año",
      perMonthNote: "≈ {amount}/mes",
      paybackLabel: "Periodo de recuperación de la inversión",
      paybackUnit: "meses",
      paybackNever:
        "Agrega tus viajes e ingreso arriba para ver el periodo de recuperación.",
    },
    lossHeadline:
      "Estás dejando unos {amount}/año en la carretera con un volteo estándar.",
    lossSubline:
      "Son las mismas horas y el mismo diésel, solo que con menos payload en cada viaje.",
    formulaToggle: "¿Cómo se calcula?",
    formula: {
      intro: "Matemática honesta, sin letras chiquitas:",
      lines: [
        "Payload extra por viaje = Payload máx. Lightweight − Payload máx. Estándar.",
        "Toneladas extra al mes = payload extra × viajes por semana × 4.3 semanas ÷ 2,000 lbs.",
        "Ingreso extra al mes = esas toneladas extra, convertidas a viajes estándar, × tu ingreso por viaje.",
        "Recuperación = (Precio Lightweight − Precio Estándar) ÷ ingreso extra al mes.",
      ],
      disclaimer:
        "Estimados solo para planeación. Tus rutas, tickets de báscula y densidad del material definen el número real. Repasamos tus cifras reales en la llamada.",
    },
    cta: "Conoce más con nuestro equipo",
    ctaHelper: "Trae estas cifras y las revisamos contigo.",
  },

  // ---- GALERÍA / CARRUSEL ------------------------------------------------
  gallery: {
    eyebrow: "Míralo por ti mismo",
    heading: "El MAC FL Lightweight, de cerca",
    subheading:
      "Unidades reales en nuestro lote de Florida. Desliza y ven a ver una en persona en el yard de Lakeland.",
    slideAlts: [
      "Remolque volteo MAC FL Lightweight, perfil lateral completo",
      "Remolque volteo MAC FL Lightweight, parte trasera y compuerta",
      "Remolque volteo MAC FL Lightweight, detalle de la caja",
      "Remolque volteo MAC FL Lightweight, vista tres cuartos",
      "Remolque volteo MAC FL Lightweight, suspensión y ejes",
      "Remolque volteo MAC FL Lightweight, detalle frontal",
      "Remolque volteo MAC FL Lightweight, en el lote",
    ],
  },

  // ---- 3. LA VENTAJA NATIONWIDE HAUL -------------------------------------
  edge: {
    heading: "Por qué las flotas compran su equipo con Nationwide Haul",
    subheading:
      "El remolque es solo el principio. Lo que viene con él es la razón por la que las flotas regresan.",
    items: [
      {
        icon: "finance",
        title: "F!nanciamiento en casa para todo el equipo",
        body:
          "F!nanciamos cada pieza de equipo que vendemos, y también equipo que ya tienes o compras en otro lado. Un solo equipo, decisiones que entienden cómo opera una flota.",
      },
      {
        icon: "shield",
        title: "Cotización gratis de seguro de camiones y revisión de póliza",
        body:
          "Nuestro equipo revisa tu cobertura actual y la cotiza lado a lado, para que sepas que no estás pagando de más por mantener tu flota en la carretera.",
      },
      {
        icon: "wrench",
        title: "Inspección DOT gratis de por vida",
        body:
          "Cada unidad recibe una inspección DOT sin costo, y la respaldamos por el tiempo que la tengas. Mantén tu flota en regla y rodando.",
      },
      {
        icon: "badge",
        title: "Garantía extendida, GAP y asistencia en carretera",
        body:
          "Protege la inversión con garantía extendida, GAP y asistencia en carretera, para que un día inesperado fuera de la carretera no se convierta en una semana perdida.",
      },
    ],
  },

  // ---- 4. PRUEBA SOCIAL ---------------------------------------------------
  socialProof: {
    heading: "Lo que dicen de nosotros las flotas de Florida",
    subheading: "Reseñas reales de Google de clientes de Nationwide Haul.",
    image: "/testimonial.jpg",
    imageAlt:
      "Reseñas de cinco estrellas en Google para Nationwide Haul de compradores de remolques MAC",
  },

  // ---- 5. ESPECIFICACIONES / CREDIBILIDAD --------------------------------
  specs: {
    eyebrow: "Los números, lado a lado",
    heading: "MAC FL Estándar vs. Lightweight",
    subheading:
      "La misma calidad de construcción MAC, ambos con 80,000 lbs de GVWR. El spec lightweight te devuelve más de cada viaje como payload.",
    modelHeading: "Volteo MAC FL 24' Tri-Axle",
    columnRegular: "Estándar",
    columnLightweight: "Lightweight",
    table: [
      { label: "Precio", regular: "$61,719", lightweight: "$67,719", highlight: false },
      { label: "GVWR", regular: "80,000 lbs", lightweight: "80,000 lbs", highlight: false },
      { label: "Chasis", regular: "Chasis de acero", lightweight: "Chasis todo de aluminio", highlight: true },
      { label: "Rines", regular: "Acero", lightweight: "Aluminio", highlight: true },
      { label: "Peso vacío (est.)", regular: "≈ 15,000 lbs", lightweight: "≈ 12,500 lbs", highlight: true },
      { label: "Carga legal máxima (est.)", regular: "≈ 65,000 lbs", lightweight: "≈ 67,500 lbs", highlight: true },
      { label: "Altura de pared", regular: "60 in", lightweight: "52 in", highlight: false },
      { label: "Suspensión", regular: "Resorte (Hendrickson)", lightweight: "Resorte (Hendrickson)", highlight: false },
      { label: "Config. de ejes", regular: "Tri-eje (2 + 1 lift)", lightweight: "Tri-eje (2 + 1 lift)", highlight: false },
      { label: "Llantas", regular: "11R22.5", lightweight: "11R22.5", highlight: false },
      { label: "Largo / ancho", regular: "24 ft / 96 in", lightweight: "24 ft / 96 in", highlight: false },
    ],
    footnote:
      "El peso vacío y el payload máximo son estimados a falta de la hoja final de MAC; tus cifras exactas se confirman en la cotización. Ambas unidades con 80,000 lbs de GVWR. FET no incluido.",
  },

  // ---- 6. PREGUNTAS FRECUENTES -------------------------------------------
  faq: {
    heading: "Respuestas directas a lo que preguntan las flotas",
    items: [
      {
        q: "¿De verdad vale la pena el lightweight sobre el spec estándar?",
        a: "Para la mayoría de las flotas que corren millas constantes, sí, y normalmente no está cerca. El precio extra es una sola vez; el payload extra te paga en cada viaje, por todo el tiempo que tengas el remolque. Corre tus viajes en la calculadora de arriba y verás la recuperación en meses, no en años. Si tus rutas son ligeras o de temporada, te diremos con honestidad cuándo conviene más el estándar.",
      },
      {
        q: "¿Qué pasa con el Impuesto Federal Especial (FET)?",
        a: "El FET aplica igual que en cualquier remolque pesado nuevo, y lo incluimos en el precio final para que no haya sorpresas. Te explicamos exactamente cómo entra en tu cotización y tu f!nanciamiento.",
      },
      {
        q: "¿Tienen unidades disponibles o es una espera larga?",
        a: "La disponibilidad cambia semana a semana, y las unidades spec de Florida se van rápido. La forma más rápida de apartar un lugar de producción y un precio es hablar con nuestro equipo ahora, y te decimos qué hay en piso y qué viene en camino.",
      },
      {
        q: "¿Cómo funciona el f!nanciamiento en casa?",
        a: "F!nanciamos en casa, lo que significa que nosotros tomamos la decisión en vez de andar paseando tu expediente. Eso cubre este remolque, toda tu flota, y equipo que ni siquiera nos compraste. Trae tus números y armamos términos que se ajusten a tu flujo de efectivo.",
      },
      {
        q: "¿Puedo verlo antes de comprometerme?",
        a: "Claro. Ven a verlo a nuestro yard de Lakeland, o te mandamos fotos detalladas, la hoja de especificaciones completa, y te lo explicamos por llamada. Sin compromiso por ver.",
      },
    ],
  },

  // ---- 7. CTA DE DOS NIVELES ---------------------------------------------
  twoTierCta: {
    heading: "Listos cuando tú lo estés",
    subheading:
      "Platícalo con alguien que conoce el acarreo en Florida, o ve directo a una cotización.",
    primaryLabel: "Conoce más con nuestro equipo",
    primaryHelper: "Velo en el yard de Lakeland",
    secondaryLabel: "Quiero mi cotización",
    secondaryHelper: "Para quien ya está listo para avanzar",
  },

  // ---- 8. CIERRE ----------------------------------------------------------
  ending: {
    heading: "Corre las mismas horas, mueve más toneladas, quédate con más margen.",
    body:
      "De eso se trata el spec lightweight. Cuéntanos cómo operas y te mostramos, con tus números, exactamente qué cambia. El siguiente paso es una conversación corta.",
    primaryCta: "Conoce más con nuestro equipo",
    helper: "Respuestas el mismo día sobre especificaciones y f!nanciamiento en casa.",
    presenterImageAlt: "Especialista de Nationwide Haul listo para ayudar",
  },

  // ---- FORMULARIO ---------------------------------------------------------
  form: {
    heading: "Conoce más con nuestro equipo",
    subheading:
      "Cuéntanos un poco de tu operación y te contactamos rápido, normalmente el mismo día.",
    fields: {
      firstNameLabel: "Nombre",
      firstNamePlaceholder: "Jordan",
      lastNameLabel: "Apellido",
      lastNamePlaceholder: "Álvarez",
      phoneLabel: "Teléfono",
      phonePlaceholder: "(863) 329-5542",
      emailLabel: "Correo de trabajo",
      emailPlaceholder: "tu@tuflota.com",

      fleetSizeLabel: "¿De qué tamaño es tu flota?",
      fleetSizePlaceholder: "Selecciona el tamaño",
      // Los VALUES deben ser idénticos al inglés para mapear igual en GHL.
      fleetSizeOptions: [
        { value: "1-2", label: "1 a 2 camiones" },
        { value: "3-9", label: "3 a 9 camiones" },
        { value: "10-24", label: "10 a 24 camiones" },
        { value: "25-49", label: "25 a 49 camiones" },
        { value: "50+", label: "50+ camiones" },
      ],

      timelineLabel: "¿Cuándo lo necesitas?",
      timelineOptions: [
        { value: "ready_now", label: "Listo ahora" },
        { value: "1_3_months", label: "En los próximos 1 a 3 meses" },
        { value: "researching", label: "Solo estoy investigando por ahora" },
      ],

      financingLabel: "¿Quieres f!nanciamiento en casa?",
      financingOptions: [
        { value: "yes", label: "Sí, cuéntame del f!nanciamiento" },
        { value: "cash", label: "No, pago en efectivo" },
        { value: "explore", label: "Me gustaría explorar mis opciones" },
      ],

      consentLabel:
        "Acepto que Nationwide Haul me contacte sobre mi solicitud, y los términos y condiciones.",
    },
    submitLabel: "Conoce más con nuestro equipo",
    submittingLabel: "Enviando…",
    consentNote:
      "Respetamos tu tiempo y tu correo. Sin spam, solo respuestas directas.",
    success: {
      heading: "Listo. ¡Gracias!",
      body:
        "Tus datos ya entraron. Un especialista de Nationwide Haul te contactará en breve, normalmente el mismo día. ¿Prefieres hablar ahora? Llámanos.",
    },
    error:
      "Algo salió mal al enviar tus datos. Inténtalo de nuevo, o llámanos directo y te atendemos.",
  },

  // ---- PIE ----------------------------------------------------------------
  footer: {
    tagline: "Equipo, f!nanciamiento en casa y soporte para las flotas de Florida.",
    rightsTemplate: "© {year} Nationwide Haul. Todos los derechos reservados.",
  },
};

export default copy;
