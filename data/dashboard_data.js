export const json = {
  completedHtml: "<p style='font-size:24px;'>¡Gracias por completar la encuesta! (espere a que se carguen los análisis...)<p>",
  pages: [{
    name: "page_info",
    elements: [{
      type: "radiogroup",
      name: "organization_type",
      title: "¿Cuál de las siguientes opciones le describe mejor a usted o a su organización?",
      hasOther: true,
      choices: [{
        value: "ISV",
        text: "ISV (creación de software comercial)"
      }, {
        value: "Consulting",
        text: "Empresa de consultoría de software (que brinda servicios de desarrollo a otras organizaciones)"
      }, {
        value: "Custom",
        text: "Desarrollo de software a medida (como autónomo/contratista)"
      }, {
        value: "In-house",
        text: "Desarrollo de software interno"
      }, {
        value: "Hobbyist",
        text: "Hobbyist (desarrollo de aplicaciones para uso personal)"
      }],
      colCount: 2
    }, {
      type: "radiogroup",
      name: "developer_count",
      visibleIf: "{organization_type} != 'Hobbyist'",
      title: "¿Cuántos desarrolladores de software hay en su organización?",
      choices: ["1", "2", "3-5", "6-10", "> 10"]
    }, {
      type: "radiogroup",
      name: "vertical_market",
      visibleIf: "{organization_type} != 'Hobbyist'",
      title: "¿A qué mercado vertical sirve su producto?",
      hasOther: true,
      choices: [
        "Automotriz",
        "Banca",
        "Consumo",
        "Educación",
        "Ingeniería",
        "Energía",
        "Bienes de consumo de rápido movimiento",
        "Financiero",
        "FinTech",
        "Alimentos y bebidas",
        "Gobierno (federal, estatal, local)",
        "Salud",
        "Seguros",
        "Legal",
        "Manufactura",
        "Medios",
        "En línea",
        "Materias primas",
        "Bienes raíces",
        "Religión",
        "Venta al por menor",
        "Joyería",
        "Tecnología",
        "Telecomunicaciones",
        "Transporte (Viajes)",
        "Electrónica",
        "Sin fines de lucro"
      ],
      colCount: 4
    }, {
      type: "radiogroup",
      name: "product_discovering",
      title: "¿Cómo descubrió nuestro producto?",
      hasOther: true,
      choices: [
        "Motor de búsqueda",
        "GitHub",
        "Amigo o colega",
        "Reddit",
        "Medium",
        "Twitter",
        "Facebook"
      ],
      otherText: "Otro",
      colCount: 3
    }]
  }, {
    name: "page_libraries_usage",
    elements: [{
      type: "checkbox",
      name: "javascript_frameworks",
      title: "¿Qué marcos de JavaScript utilizas?",
      hasOther: true,
      choices: [
        "React",
        "Angular",
        "jQuery",
        "Vue",
        "Meteor",
        "Ember",
        "Backbone",
        "Knockout",
        "Aurelia",
        "Polymer",
        "Mithril",
      ],
      choicesOrder: "asc",
      otherText: "Otro",
      colCount: 3
    }, {
      type: "checkbox",
      name: "backend_language",
      title: "¿Qué lenguajes de programación web backend utilizas?",
      hasOther: true,
      choices: [
        "Java",
        "Python",
        "Node.js",
        "Go",
        "Django",
        "C#",
        "Ruby",
      ],
      choicesOrder: "asc",
      otherText: "Otro",
      colCount: 3
    }],
  }, {
    name: "page_product_usage",
    elements: [{
      type: "radiogroup",
      name: "useproduct",
      title: "¿Utiliza actualmente nuestros componentes?",
      isRequired: true,
      choices: ["Sí", "No"],
    }, {
      type: "checkbox",
      name: "usecomponents",
      visibleIf: '{useproduct} = "Yes"',
      title: "¿Cuál de nuestros componentes utilizas?",
      isRequired: true,
      choices: ["Survey Library (Runner)", "Survey Creator", "Export to PDF", "SurveyJS Analytics"]
    }, {
      type: "checkbox",
      name: "supported_devices",
      title: "¿Qué tipos de dispositivos necesita?",
      isRequired: true,
      choices: [ "Desktop", "Tablet", "Mobile" ],
    }, {
      type: "radiogroup",
      name: "native_mobile_support",
      visibleIf: '{supported_devices} contains "Mobile"',
      title: "¿Qué importancia tiene para usted el soporte móvil nativo?",
      isRequired: true,
      choices: [{
        value: 1,
        text: "Estoy contento con el renderizado HTML adaptativo"
      }, {
        value: 2,
        text: "Algo importante, pero el renderizado HTML adaptativo está bien"
      }, {
        value: 3,
        text: "Muy importante"
      }, {
        value: 4,
        text: "No puede utilizar sus componentes sin él"
      }]
    }, {
      type: "radiogroup",
      name: "native_framework",
      visibleIf: "{native_mobile_support} >= 3",
      title: "¿Qué framework utilizas o vas a utilizar para el desarrollo móvil nativo?",
      hasOther: true,
      choices: [
        "React Native",
        "NativeScript",
        "Ionic",
        "Xamarin",
        "Native iOS y Android apps",
      ],
      otherText: "Otro",
      colCount: 2
    }],
  }, {
      name: "page_alternative",
      elements: [{
        type: "radiogroup",
        name: "product_alternative",
        title: "¿Qué utilizarías como alternativa si nuestro producto no existiera?",
        isRequired: true,
        hasOther: true,
        choices: [
          "Plataformas populares basadas en la nube",
          "Solución desarrollada internamente"
        ],      
        otherText: "Otro"
      }, {
        type: "text",
        name: "survey_cloud_platform",
        visibleIf: '{product_alternative} = "Popular cloud-based platforms"',
        title: "¿Qué plataforma basada en la nube elegirías?"
      }, {
        type: "radiogroup",
        name: "product_recommend",
        title: "¿Ha recomendado nuestro producto a alguien?",
        choices: ["Sí", "No"]
      }]
    }, {
      name: "page_recommend",
      elements: [{
        type: "rating",
        name: "nps_score",
        title: "¿Qué probabilidades hay de que recomiende nuestro producto a un amigo o colega?",
        isRequired: true,
        rateMin: 0,
        rateMax: 10,
        minRateDescription: "Lo más improbable",
        maxRateDescription: "Lo más probable"
      }, {
        type: "comment",
        name: "favorite_functionality",
        title: "¿Qué función le parece más útil de nuestro producto?"
      }, {
        type: "comment",
        name: "product_improvement",
        title: "¿Cómo podrían mejorarse nuestros componentes para satisfacer mejor sus necesidades?"
      }]
    }
  ]
};

// Survey results
const firstResult = {
  organization_type: "In-house",
  developer_count: "1",
  vertical_market: "Education",
  product_discovering: "GitHub",
  javascript_frameworks: ["jQuery"],
  backend_language: ["Ruby"],
  useproduct: "Yes",
  usecomponents: ["Survey Library (Runner)"],
  supported_devices: ["Desktop", "Tablet", "Mobile"],
  native_mobile_support: 2,
  product_alternative: "Self-developed solution",
  product_recommend: "Yes",
  nps_score: 6,
  product_improvement: "The lack of accessibility is a huge disadvantage. That's one reason why I cannot use it in all my projects.",
  native_framework: "",
  survey_cloud_platform: "",
  favorite_functionality: "",
};

const secondResult = {
  organization_type: "Consulting",
  developer_count: "3-5",
  vertical_market: "Government (federal, state, local)",
  product_discovering: "Search engine",
  javascript_frameworks: ["Vue", "jQuery", "Otro"],
  backend_language: ["Python", "Node.js"],
  useproduct: "Yes",
  usecomponents: ["Survey Library (Runner)"],
  supported_devices: ["Desktop"],
  product_alternative: "Develop ourselves",
  product_recommend: "Yes",
  nps_score: 8,
  native_mobile_support: "",
  native_framework: "",
  survey_cloud_platform: "",
  favorite_functionality: "",
  product_improvement: "",
};

export const data = [firstResult, secondResult];