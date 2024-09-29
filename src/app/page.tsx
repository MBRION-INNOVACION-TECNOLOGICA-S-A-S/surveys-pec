export default function Homepage() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-12 text-3xl font-bold tracking-tight md:text-xl xl:text-2xl">Plantilla de inicio rápido de SurveyJS + NextJS</h1>
      <div className="text-lg text-neutral-500 dark:text-neutral-300">
        <p>
        SurveyJS es un conjunto de componentes JavaScript que le permiten a usted y a sus usuarios crear encuestas/formularios, almacenarlos en su base de datos y visualizar los resultados de las encuestas para el análisis de datos. Esta plantilla de inicio rápido utiliza los siguientes componentes SurveyJS:
        </p>
        <ul>
          <li><a style={{ textDecoration: "underline" }} href="https://surveyjs.io/Documentation/Library?id=LibraryOverview" target="_blank">Biblioteca de formularios SurveyJS</a></li>
          <li><a style={{ textDecoration: "underline" }} href="https://surveyjs.io/Documentation/Survey-Creator?id=Survey-Creator-Overview" target="_blank">Creador de encuestas y formularios</a></li>
          <li><a style={{ textDecoration: "underline" }} href="https://surveyjs.io/Documentation/Analytics?id=AnalyticsOverview" target="_blank">Dashboard</a></li>
          <li><a style={{ textDecoration: "underline" }} href="https://surveyjs.io/Documentation/Pdf-Export?id=PdfExportOverview" target="_blank">Generador PDF</a></li>
        </ul>
      </div>
    </div>
  );
}
