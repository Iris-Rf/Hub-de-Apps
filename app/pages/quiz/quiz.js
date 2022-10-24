import "./quiz.css";

export const quiz = async () => {
    const container = document.querySelector("#app");
    app.innerHTML = `
    <div>
        <p class="saludo">QUIZ GAMES</p>
        <div class="test"></div>
    </div>
    `;
    
    quiz();
    // printTest();
  };


// const container = document.querySelector("test");
  
const question = [
    {
        question: "1. ¿Qué significa CSS?",
        answer: {
            a: "Code of Style Sheets (Código de Hojas de Estilo)",
            b: "Cross-browser Style Sheets (Hojas de Estilo Multi-navegador)",
            c: "Color Style Sheets (Hojas de Estilo de Color)",
            d: "Coded Style Sheets (Hojas de Estilo Codificadas)",

        },
        result: "a",

    },
    {
        question: "2. ¿Cómo podemos añadir un comentario en una hoja de estilo CSS?",
        answer: {
            a: "Entre los caracteresult /* y */ . Ej: /* esto es un comentario CSS */",
            b: "No se puede",
            c: "Entre las etiquetas <!-- y -->. Ej: <!-- Esto es un comentario CSS -->",
            d: "Después de los caracteresult //. Ej: // Este es un comentario CSS",

        },
        result: "c",

    },
    {
        question: "3. ¿En qué sección de la página HTML podemos definir una hoja de estilo interna CSS?",
        answer: {
            a: "Se puede definir en cualquier sección de la página",
            b: "En la sección <footer>",
            c: "En la sección <head>",
            d: "En al sección <body>",

        },
        result: "a",

    },
    {
        question: "4. ¿Qué es la propiedad margin?",
        answer: {
            a: "Establece el margen para los cuatro lados de la página",
            b: "Establece el margen para los cuatro lados alrededor del texto",
            c: "No es una propiedad de CSS",
            d: "Estable el margen superior de la pàgina ",

        },
        result: "a",

    },
    {
        question: "5. ¿Qué hace la propiedad background?",
        answer: {
            a: "Define una imagen en la página de estilos",
            b: "Define los valoresult individuales del fondo de un elemento",
            c: "Define el color de un objecto",
            d: "Define la transparencia de un texto",

        },
        result: "b",

    },
    {
        question: "6. ¿Qué es hover? ",
        answer: {
            a: "Un color muy bonito y utilizado en CSS",
            b: "Permite establecer un texto en una hoja de estilos",
            c: "Permite establecer un segundo estado a cualquier elemento",
            d: "No es una propiedad de CSS",

        },
        result: "c",

    },
    {
        question: "7. ¿Qué es la propiedad float?",
        answer: {
            a: "Ubica un elemento al lado izquierdo o derecho de su contenedor, permitiendo a los elementos de texto y en línea aparecer a su costado",
            b: "Ubica un elemento al lado superior de su contenedor, permitiendo a los elementos de texto y en línea aparecer a su costado",
            c: "Ubica un elemento al lado inferior de su contenedor, permitiendo a los elementos de texto y en línea aparecer a su costado",
            d: "No ubica un elemento al lado inferior de su contenedor, permitiendo a los elementos de bloque aparecer a su alrededor",

        },
        result: "a",

    },
    {
        question: "8. ¿Qué hace la propiedad transition?",
        answer: {
            a: "Proporcionan una forma de animar los cambios de las propiedades CSS, en lugar de que los cambios surtan efecto de manera instantània",
            b: "No es una propiedad de CSS",
            c: "Proporciona una transparecia al elemento",
            d: "Es una palabra de diez letras que no hace nada",

        },
        result: "a",

    },
    {
        question: "9. ¿Qué hace la propiedad font-size? ",
        answer: {
            a: "La propiedad font-size especifica la dimensión de la letra",
            b: "La propiedad font-size especifica el color de la letra",
            c: "La propiedad font-size especifica el borde de la letra",
            d: "La propiedad font-size especifica ángulo de la letra",

        },
        result: "a",

    },
    {
        question: "10. ¿Qué hace la propiedad aling-items?",
        answer: {
            a: "La propiedad CSS align-items establece el valor align-self sobre todos los descendientes directos de un grupo",
            b: "No es una propiedad de CSS",
            c: "Define el borde superior del contendor",
            d: "Es una etiqueta de HTML",

        },
        result: "a",

    }
]


    function printTest () {
    const questionsAnswers = [];

    questions.forEach((questionCurrent, numQuestions) => {
        
        for (answerLetter in questionCurrent.result){
            result.push(`
            <label>
                <input type="radio" name="${numQuestions}" value="${answerLetter}"/> 
                ${answerLetter} : ${questionCurrent.result[answerLetter]}
            </label>
            `
            );
        }
        questionsAnswers.push(`
        <div class="question">${questionCurrent.question}</div>
        <div class="result">${result.join("")}</div>
        `

        );
    })
    container.innerHTML = questionsAnswers.join("");
}
