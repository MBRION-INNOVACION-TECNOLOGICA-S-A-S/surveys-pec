'use client'

import { useState } from "react";
import { ICreatorOptions } from "survey-creator-core";
import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";
import { surveyLocalization } from "survey-core"; // Importar la localización desde survey-core
import "survey-core/survey.i18n"; // Importar todos los idiomas disponibles
import "survey-creator-core/survey-creator-core.i18n"; // Asegurarse de importar la localización del Survey Creator


import { editorLocalization } from "survey-creator-core"; 

// Importar los archivos de localización
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";
import "survey-creator-core/survey-creator-core.i18n"; // Importar todos los idiomas
import "survey-creator-core/i18n/spanish"; // Im

import { json as defaultJson } from "../../data/survey_json";

// Configuración de las opciones predeterminadas del creador
const defaultCreatorOptions: ICreatorOptions = {
  showLogicTab: true,
  showTranslationTab: false,
};

export default function SurveyCreatorWidget(props: { json?: Object, options?: ICreatorOptions }) {
  let [creator, setCreator] = useState<SurveyCreator>();

  if (!creator) {
    creator = new SurveyCreator(props.options || defaultCreatorOptions);

    creator.locale = "es"; 
    const surveyCreator = new SurveyCreator();
    surveyCreator.locale = "es"; // Establecer el idioma en español
    editorLocalization.currentLocale = "es"; // Asegurar que la configuración esté en español

    setCreator(surveyCreator);
/*
    // Personalizar los labels individualmente
    const radioGroupItem = creator.toolbox.getItemByName("radiogroup");
    if (radioGroupItem) radioGroupItem.title = "Grupo de opciones personalizado";

    const ratingItem = creator.toolbox.getItemByName("rating");
    if (ratingItem) ratingItem.title = "Escala de calificación personalizada";

    const checkboxItem = creator.toolbox.getItemByName("checkbox");
    if (checkboxItem) checkboxItem.title = "Casillas de verificación personalizada";

    const dropdownItem = creator.toolbox.getItemByName("dropdown");
    if (dropdownItem) dropdownItem.title = "Lista desplegable personalizada";

    const imagePickerItem = creator.toolbox.getItemByName("imagepicker");
    if (imagePickerItem) imagePickerItem.title = "Selector de imágenes personalizado";

    const booleanItem = creator.toolbox.getItemByName("boolean");
    if (booleanItem) booleanItem.title = "Sí/No personalizado (Booleano)";

    const textItem = creator.toolbox.getItemByName("text");
    if (textItem) textItem.title = "Entrada de una sola línea personalizada";

    const commentItem = creator.toolbox.getItemByName("comment");
    if (commentItem) commentItem.title = "Texto largo personalizado";

    const fileItem = creator.toolbox.getItemByName("file");
    if (fileItem) fileItem.title = "Subir archivo personalizado";

    const panelDynamicItem = creator.toolbox.getItemByName("paneldynamic");
    if (panelDynamicItem) panelDynamicItem.title = "Panel dinámico personalizado";
*/
    // Remover elementos no deseados
    creator.toolbox.removeItem("matrixdynamic");
    creator.toolbox.removeItem("ranking");
    creator.toolbox.removeItem("multipletext");
    creator.toolbox.removeItem("panel");

    creator.saveSurveyFunc = (no: number, callback: (num: number, status: boolean) => void) => {
      console.log(JSON.stringify(creator?.JSON));
      callback(no, true);
    };

    setCreator(creator);
  }

  creator.JSON = props.json || defaultJson;

  return (
    <div style={{ height: "80vh", width: "100%" }}>
      <SurveyCreatorComponent creator={creator} />
    </div>
  );
}