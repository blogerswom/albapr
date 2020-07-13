var new_lang =   {

"lt0": "Magnet Lashes",

"lt1": "Pestañas postizas magnéticas",

"lt2": "secreto de la belleza <span>de sus ojos </span>",

"lt3": "se mantienen con firmeza ",

"lt4": "sin pegamento, sin pinzas",

"lt5": "mirada encantadora ",

"lt7": "Pedir con un descuento",

"lt8": "Magnet Lashes",

"lt11": "Las pestañas postizas magnéticas se venden en una bonita cajita negra que cabe perfectamente hasta en el bolso más pequeño.",

"lt12": "Se fijan en 1 minuto",

"lt13": "En cualquier momento, con tan solo un par de movimientos, Usted puede volverse bella y romper corazones de los hombres ",

"lt14": "¿Cómo se mantienen?",

"lt15": "<b>Se fijan</b>encima y por debajo de sus pestañas.",

"lt16": "<b>Las rayas se atrayen </b>, y las pestañas postizas abarcan las suyas por dos lados como un sandwich.",

"lt17": "<b>Los imanes garantizan una fijación segura</b>y las pestañas no se sueltan hasta si Usted practica el deporte.",

"lt18": "<b>Para sacar las mitades</b>, frótelas entre los dedos y tire por el hacecillo en sentidos opuestos.",

"lt19": "El paquete contiene un juego de pestañas de uso múltiple",

"lt20": "Sin pinzas",

"lt21": "Sin aguja",

"lt22": "Sin pegamento",

"lt23": "Hacer el pedido ahora",

"lt24": "Ventajas",

"lt25": "Magnet Lashes",

"lt26": "pestañas colocadas en un salón",

"lt27": "magnet lashes",

"lt28": "Este placer no es de los baratos. La duración del efecto es de 15-20 días. Sin una necesidad especial es mejor no quitarlas, sino habrá que ir al salón de nuevo.",

"lt29": "Un precio adecuado. ¡Quite y póngaselas hasta 5 veces!",

"lt30": "Requieren un cuidado intensivo. Sin mucha atención y procedimientos especiales Usted arreisga perder las pestañas colocadas en unos días ya.",

"lt31": "No requieren un cuidado – simplemente úselas a gusto y deje pasmados a los hombres con una pestañada.",

"lt32": "La extensión muy frecuente amenaza de la pérdida de las pestañas ",

"lt33": "No perjudican las pestañas. Usted puede no preocuparse.",

"lt34": "Comentarios de los compradores ",

"lt38": "Ximena Castro",

"lt39": "La novedad me ha despertado mucho interés y he decidido comprar 2 juegos de una vez, el primero ha sido para probar, por supuesto. ¡He probado rizar y acortar unas pestañas, en general, todos los experimentos han sido exitosos y estoy muy contenta de mi compra!",

"lt40": "Olaya Naranjo",

"lt41": "He pedido la novedad en su sitio web, primero estaba muy escéptica. ¡Pero estas pestañas han sobrepasado mis expectativas! He aprendido rápido a usarlas, y lucen simplemente estupendo y a la vez natural.",

"lt42": "Elizabeth Salazar",

"lt43": "Es un nuevo invento genial, hecho por una mujer para las mujeres. Las pestañas son muy hermosas. ¡Recomiendo a todas!",

"lt47": "¿Cómo hacer el pedido?",

"lt48": "Complete el formulario del pedido",

"lt49": "Espere la llamada del operador",

"lt50": "Espere la entrega (de 2 a 5 días)",

"lt51": "Page el envío a la hora de recibir",

"lt52": "Magnet Lashes",

"lt53": "Las pestañas postizas magnéticas",

"lt54": "secreto de la belleza<span>de sus ojos</span>",

"lt55": "se mantienen con firmeza",

"lt56": "sin pegamento, sin pinzas",

"lt57": "mirada encantadora ",

"lt59": "Hacer el pedido",


};
function Translater () {
               for (class_name in new_lang) {
                var elements = document.getElementsByClassName(class_name);
                if (elements.length) {
                 for (key in elements) {
                  elements[key].innerHTML = new_lang[class_name];
                 }
              }
            }
          };