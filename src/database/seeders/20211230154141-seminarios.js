'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert("Seminarios",[{
      name: "Transgeneracional",
      description: "Trabajaremos con los secretos familiares desde la astrogenealogía, una herramienta muy últil, sobre todo cuando contamos con pocos datos sobre la historia familiar.",
      img:"seminario-arbol-genealogico.png",
      link:"https://sentirelser.mitiendanube.com/productos/seminario-online-arbol-genealogico/",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: "Astrogenealogía",
      description: "Clase Online de 2 horas de duración + manual de ejercicios. La clase está grabada y podrás verla todas las veces que quieras. No es necesario tener conocimientos previos.",
      img:"seminario-astrogenealogia.png",
      link:"https://sentirelser.mitiendanube.com/productos/seminario-de-astrogenealogia-unico-pago/",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: "Astrogenealogía intensivo",
      description: "Clase Online de 2 horas de duración + manual de ejercicios.No es necesario tener conocimientos previos ni haber armado el árbol genealógico.",
      img:"seminario-astrogenealogia.png",
      link:"https://sentirelser.mitiendanube.com/productos/masterclass-integracion-de-suenos/",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: "Inteligencia Emocional",
      description: "3 clases grabadas + material extra para reconocer e integral las emociones, liberar bloqueos y vivir en plenitud y armonía.",
      img:"ìnteligencia-emocional.png",
      link:"https://sentirelser.mitiendanube.com/productos/seminario-de-inteligencia-emocional/",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]
    )
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('Seminarios', null, {});
    
  }
};
