// lib/siteConfig.ts
export const siteConfig = {
  name: "AudioMédica",
  shortName: "AudioMédica",
  tagline: "Escucha la vida con claridad.",
  description:
    "Centro especializado en salud auditiva: venta y adaptación de audífonos, evaluaciones auditivas completas y equipamiento médico para profesionales.",
  contact: {
    // IMPORTANTE: mantén aquí el número correcto en formato internacional
    whatsappNumber: "50700000000", // <- cámbialo si aún no lo hiciste
    whatsappMessage:
      "Hola AudioMédica, me gustaría agendar una cita de evaluación auditiva.",
    phoneDisplay: "+507 262-8224",
    email: "info@audiomedica.com.pa",
    address:
      "Av Balboa con Av Italia, PH Plaza Comercial Paitilla, Piso 2, Ofic. 78, Paitilla. San Francisco. Ciudad de Panamá."
  },

  // SERVICIOS PRINCIPALES (ya con las nuevas imágenes y textos)
  services: [
    {
      id: "audiometria",
      name: "Examen de audiometría",
      description:
        "Evaluación del nivel de audición mediante sonidos de diferentes frecuencias e intensidades para conocer tu umbral auditivo.",
      image: "/images/servicio-audiometria.jpg"
    },
    {
      id: "impedanciometria",
      name: "Impedanciometría",
      description:
        "Prueba que evalúa el funcionamiento del oído medio ante cambios de presión y la respuesta a sonidos de alta intensidad. Recomendado en la evaluación de niños de 0 a 6 años y en quienes han tenido infecciones de oído.",
      image: "/images/servicio-impedanciometro.jpg"
    },
    {
      id: "audifonos",
      name: "Venta y adaptación de audífonos",
      description:
        "Audífonos modernos con conectividad Bluetooth, recargables y compatibles con Android y iPhone, adaptados a tu pérdida auditiva y estilo de vida.",
      image: "/images/servicio-audifonos.jpg"
    },
    {
      id: "protectores",
      name: "Protectores auditivos a la medida",
      description:
        "Protectores personalizados contra ruido y agua para trabajo, descanso, práctica musical y actividades deportivas.",
      image: "/images/servicio-protectores.jpg"
    },
    {
      id: "cabinas",
      name: "Cabinas insonorizadas",
      description:
        "Cabinas audiométricas diseñadas para realizar estudios auditivos con el aislamiento acústico y confort que tus pacientes necesitan.",
      image: "/images/servicio-cabina.jpg"
    }
  ],

  highlights: [
    "Equipo profesional especializado en salud auditiva.",
    "Tecnología de vanguardia en diagnóstico y audífonos.",
    "Acompañamiento cercano antes, durante y después de la adaptación."
  ]
};
