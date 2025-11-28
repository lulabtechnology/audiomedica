// lib/siteConfig.ts
export const siteConfig = {
  name: "AudioMédica",
  shortName: "AudioMédica",
  tagline: "Escucha la vida con claridad.",
  description:
    "Centro especializado en salud auditiva: venta y adaptación de audífonos, evaluaciones auditivas completas y equipamiento médico para profesionales.",
  contact: {
    // WhatsApp configurado a 6876-9677 (formato internacional para wa.me)
    whatsappNumber: "50768769677",
    whatsappMessage:
      "Hola AudioMédica, me gustaría agendar una cita de evaluación auditiva.",
    phoneDisplay: "+507 262-8224",
    email: "info@audiomedica.com.pa",
    address:
      "Av Balboa con Av Italia, PH Plaza Comercial Paitilla, Piso 2, Ofic. 78, Paitilla. San Francisco. Ciudad de Panamá."
  },

  // SERVICIOS DE SALUD AUDITIVA
  services: [
    {
      id: "audiometria",
      name: "Examen de audiometría",
      description:
        "Evaluación del nivel de audición mediante sonidos de diferentes frecuencias e intensidades para conocer tu umbral auditivo.",
      image: "/images/servicio-audiometria.jpg"
    },
    {
      id: "examen-impedanciometria",
      name: "Examen de impedanciometría",
      description:
        "Prueba que evalúa el funcionamiento del oído medio ante cambios de presión y su respuesta a sonidos de alta intensidad. Recomendada en la evaluación de niños de 0 a 6 años y en quienes han tenido infecciones de oído.",
      // 🔹 NUEVA IMAGEN QUE EL CLIENTE QUIERE PARA ESTE EXAMEN
      // Sube el archivo que te enviaron a esta ruta:
      // public/images/servicio-examen-impedanciometria.jpg
      image: "/images/servicio-examen-impedanciometria.jpg"
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
      id: "sistema-conduccion-osea",
      name: "Sistema de conducción ósea",
      description:
        "Sistema auditivo de alta gama basado en conducción ósea, ideal como alternativa a la cirugía en casos seleccionados. Diadema ósea integrada, sin cableado externo, resistente al agua y con conexión inalámbrica vía Bluetooth.",
      image: "/images/servicio-sistema-conduccion-osea.jpg"
    }
  ],

  highlights: [
    "Equipo profesional especializado en salud auditiva.",
    "Tecnología de vanguardia en diagnóstico y audífonos.",
    "Acompañamiento cercano antes, durante y después de la adaptación."
  ]
};
