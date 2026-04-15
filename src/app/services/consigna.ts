import { Injectable } from '@angular/core';
import { Consigna } from '../models/consigna';
@Injectable({
  providedIn: 'root',
})
export class Consignaservice {

  private todasLasConsignas: Consigna[] = [
    {
      id: 1,
      detalle: "Emprendimiento de alfajores. No poseemos experiencia en confección de alfajores",
      respuesta: "Debilidad" /* "Capacitación básica en repostería, alianzas con reposteros locales experimentados, o contratar personal especializado inicialmente." */,
      mostrarRespuesta: false
    },
    {
      id: 2,
      detalle: "Food truck de hamburguesas artesanales. Falta de conocimiento en normativas sanitarias",
      respuesta: "Debilidad"/* "Curso de manipulación de alimentos, asesoramiento municipal para habilitaciones, implementación de protocolos HACCP básicos." */,
      mostrarRespuesta: false
    },
    {
      id: 3,
      detalle: "Tienda de ropa sustentable. Auge en el uso de ropa vintage.",
      respuesta: "Oportunidad" /* "Ferias de productores sustentables, plataformas como EcoXchange, certificaciones GOTS, networking en eventos green." */,
      mostrarRespuesta: false
    },
    {
      id: 4,
      detalle: "Cafetería specialty coffee. Muchos catadores de café en la zona",
      respuesta: "Amenaza" /* "Curso SCA de catación nivel 1, alianza con tostadores locales, participación en cup of excellence." */,
      mostrarRespuesta: false
    },
    {
      id: 5,
      detalle: "Emprendimiento de delivery de comidas saludables. Disponibilidad para convenio de entregas",
      respuesta: "Fortaleza"/* "Software de optimización de rutas (Route4Me), bicicletas eléctricas, acuerdos con rappitenderos locales." */,
      mostrarRespuesta: false
    },
    {
      id: 6,
      detalle: "Salón de belleza orgánico. Tratamiento de bellza organicos en tendencia.",
      respuesta: "Fortaleza"/* "Certificación Ecocert, laboratorio propio para fórmulas, alianza con herbolarios certificados." */,
      mostrarRespuesta: false
    },
    {
      id: 7,
      detalle: "Agencia de marketing digital. No sabemos usar herramientas de análisis.",
      respuesta: "Debilidad" /* "Google Analytics Academy, certificación Google Ads, HubSpot Academy gratuita." */,
      mostrarRespuesta: false
    },
    {
      id: 8,
      detalle: "Producción de velas aromáticas. Aumento de aranceles a las importaciones.",
      respuesta: "Amenaza"/* "Proveedores locales de cera de soja, aceites esenciales nacionales, diversificación de proveedores." */,
      mostrarRespuesta: false

    },
    {
      id: 9,
      detalle: "Gimnasio boutique. Personal capacitado y numeroso.",
      respuesta:"Fortaleza" /* "Programas de fidelización, clases personalizadas, comunidad online, seguimiento nutricional." */,
      mostrarRespuesta: false
    },
    {
      id: 10,
      detalle: "Emprendimiento de plantas de interior. No sabemos de cuidado de especies exóticas",
      respuesta: "Debilidad"/* "Curso de viverista, viveros especializados, guías de cuidado por especie, servicio postventa." */,
      mostrarRespuesta: false
    },
    {
      id: 11,
      detalle: "Panadería artesanal sin gluten. Clientes reportan sabor diferente.",
      respuesta:"Amenaza" /* "Recetas especializadas sin TACC, catas de mejora continua, harinas certificadas, asesoramiento de nutricionista." */,
      mostrarRespuesta: false
    },
    {
      id: 12,
      detalle: "Estudio de yoga. No hay estudios dedicados a esto en la zona.",
      respuesta: "Oportunidad"/* "Clases introductorias gratuitas, partnerships con gimnasios, redes sociales con contenido educativo." */,
      mostrarRespuesta: false
    },
    {
      id: 13,
      detalle: "Tienda de productos vintage. Falta de proveedores confiables en el pais.",
      respuesta: "Amenaza"/* "Ferias de antigüedades, grupos de Facebook especializados, subastas online, importación controlada." */,
      mostrarRespuesta: false
    },
    {
      id: 14,
      detalle: "Emprendimiento de cosméticos veganos. Curso de cosmetista completo.",
      respuesta: "Fortaleza"/* "Laboratorio cosmético externo, pruebas de estabilidad, conservantes naturales certificados." */,
      mostrarRespuesta: false
    },
    {
      id: 15,
      detalle: "Food truck de poke bowls. Ingredientes frescos y baratos en la zona.",
      respuesta:"Oportunidad" /* "Agricultores locales, pescaderías mayoristas, temporada de ingredientes, menú rotativo." */,
      mostrarRespuesta: false
    },
    {
      id: 16,
      detalle: "Emprendimiento de mantenimiento de PC. No poseemos experiencia publicitaria.",
      respuesta:"Debilidad" ,
      mostrarRespuesta: false
    },
    {
      id: 17,
      detalle: "Clases virtuales informaticas certificadas. Tenemos la capacidad de brindar certificados validos.",
      respuesta:"Fortaleza" ,
      mostrarRespuesta: false
    },
    {
      id: 18,
      detalle: "Empresa de marketing digital. Crece la cantidad de anuncios creados con IA.",
      respuesta:"Amenaza" ,
      mostrarRespuesta: false
    },
    {
      id: 19,
      detalle: "Venta de productos TCG. Hay una reduccion de impuesto a las importaciones.",
      respuesta:"Oportunidad" ,
      mostrarRespuesta: false
    },{
      id: 20,
      detalle: "Libreria y papeleria. Zona cercana a al menos 3 instituciones educativas.",
      respuesta:"Debilidad" ,
      mostrarRespuesta: false
    }
  ];

  private consignasSeleccionadas: Consigna[] = [];

  constructor() {
    this.seleccionarConsignasAleatorias();
  }

  // Actualizar los métodos:
  private seleccionarConsignasAleatorias(): void {
    const shuffled = [...this.todasLasConsignas].sort(() => 0.5 - Math.random());
    // Resetear mostrarRespuesta al seleccionar nuevas
    this.consignasSeleccionadas = shuffled.slice(0, 10).map(c => ({
      ...c,
      mostrarRespuesta: false
    }));
  }

  consignasCorrectas:number = 0

  consignasIncorrectas:Consigna[] = []

    getConsignas(): Consigna[] {
      return this.consignasSeleccionadas;
    }

    getTodasLasConsignas(): Consigna[] {
      return this.todasLasConsignas;
    }

    actualizarConsignas(): void {
      this.seleccionarConsignasAleatorias();
    }
  }
