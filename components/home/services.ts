// src/components/home/services.ts

export const servicesContent = {
  eyebrow: "Servicios",
  title: "Servicios de lavandería en Tepic",
  subtitle: "Lavado y planchado por encargo, para que disfrutes de tu tiempo y tengas tu ropa limpia y bien planchada por ti.",
  services: [
    { 
      title: "Lavado de ropa", 
      description: "Lavado profesional con productos de alta calidad para el cuidado de tus prendas.", 
      badge: "Popular",
      image: "/images/lavado-express.webp" 
    },
    { 
      title: "Planchado", 
      description: "Planchado cuidadoso para que tus prendas luzcan impecables y listas para usar.",
      image: "/images/planchado.webp" 
    },
    { 
      title: "Edredones", 
      description: "Contamos con lavadora Industrial para la limpieza profunda y secado de sus edredones.", 
      badge: "Especialidad",
      image: "/images/edredones.webp" 
    },
    { 
      title: "Servicio Express", 
      // Texto exacto pedido por el cliente
      description: "Servicio rápido y prioritario para entrega el mismo día.",
      badge: "Mismo día",
      image: "/images/secado-pro.webp" 
    },
    { 
      title: "Servicio a domicilio", 
      // Acotado a zonas específicas para evitar Xalisco/Cantera
      description: "Recogemos y entregamos tu ropa en tu casa o negocio. En la zona centro, Cd del Valle y Libramiento.",
      badge: "Zona Local",
      // 👇 ¡ACTUALIZADO CON LA FOTO QUE ME DISTE! 👇
      image: "/images/delivery-van.png" 
    },
    {
      title: "Facturación",
      description: "Facturamos todos tus servicios de manera rápida para tu control administrativo.",
      badge: "Disponible",
      image: "/images/especial.webp" 
    }
  ]
};

// Nueva data para la sección de "Única Sucursal"
export const alertContent = {
  title: "¡Atención! Única Sucursal",
  description: "Para garantizar la calidad que nos distingue desde hace 20 años, te recordamos que NO contamos con sucursales. No te dejes confundir por imitaciones; visítanos únicamente en nuestro local oficial de la Av. Juárez.",
  buttonLabel: "Ver ubicación oficial"
};