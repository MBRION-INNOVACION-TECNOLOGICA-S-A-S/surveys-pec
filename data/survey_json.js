export const json = {
  title: "Encuesta de comentarios sobre productos",
  showProgressBar: "top",
  pages: [{
    elements: [{
      type: "matrix",
      name: "Quality",
      title: "Por favor indique si está de acuerdo o en desacuerdo con las siguientes afirmaciones",
      columns: [{
        value: 1,
        text: "Totalmente en desacuerdo"
      }, {
        value: 2,
        text: "En desacuerdo"
      }, {
        value: 3,
        text: "Neutro"
      }, {
        value: 4,
        text: "De acuerdo"
      }, {
        value: 5,
        text: "Totalmente de acuerdo"
      }],
      rows: [{
        value: "affordable",
        text: "El producto es económico"
      }, {
        value: "does what it claims",
        text: "El producto hace lo que dice"
      }, {
        value: "better then others",
        text: "El producto es mejor que otros productos en el mercado."
      }, {
        value: "easy to use",
        text: "El producto es fácil de usar."
      }]
    }, {
      type: "rating",
      name: "satisfaction",
      title: "¿Qué tan satisfecho está con el producto?",
      mininumRateDescription: "Insatisfecho",
      maximumRateDescription: "Totalmente satisfecho"
    }, {
      type: "rating",
      name: "recommend friends",
      visibleIf: "{satisfaction} > 3",
      title: "¿Qué probabilidades hay de que recomiende el producto a un amigo o compañero?",
      mininumRateDescription: "No recomendaría",
      maximumRateDescription: "Recomendado"
    }, {
      type: "comment",
      name: "suggestions",
      title: "¿Qué le haría estar más satisfecho con el producto?"
    }]
  }, {
    elements: [{
      type: "radiogroup",
      name: "price to competitors",
      title: "En comparación con nuestros competidores, ¿cree que el producto es",
      choices: [
        "Menos costoso",
        "Precio más o menos igual",
        "Más caro",
        "No estoy seguro"
      ]
    }, {
      type: "radiogroup",
      name: "price",
      title: "¿Cree que nuestro producto merece nuestro precio actual?",
      choices: [
        "correct|Sí, el precio es correcto",
        "low|No, el precio es demasiado bajo",
        "high|No, el precio es demasiado alto"
      ]
    }, {
      type: "multipletext",
      name: "pricelimit",
      title: "¿Cuál es el...?",
      items: [{
        name: "mostamount",
        title: "La mayor cantidad que pagaría por un producto como el nuestro"
      }, {
        name: "leastamount",
        title: "La menor cantidad que se sienta cómodo pagando"
      }]
    }]
  }, {
    elements: [{
      type: "text",
      name: "email",
      title: 'Gracias por responder a nuestra encuesta. Introduzca su dirección de correo electrónico y pulse el botón "Enviar".'
    }]
  }]
};