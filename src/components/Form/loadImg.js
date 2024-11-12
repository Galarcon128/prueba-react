import ineFront from '../../static/images/docs/ineFront.jpg'
import ineBack from '../../static/images/docs/ineBack.jpg'
import ineSelfie from '../../static/images/docs/ineSelfie.jpg'
import compCFE from '../../static/images/docs/compCFE.jpg'
import comIZ from '../../static/images/docs/compIZZI.png'
import noIMG from '../../static/images/docs/noDisp.jpg'
import dom1 from '../../static/images/docs/dom1.jpg'
import dom2 from '../../static/images/docs/dom2.jpg'
import dom3 from '../../static/images/docs/dom3.jpg'
import con1 from '../../static/images/docs/contacto1.png'
import con2 from '../../static/images/docs/contacto2.jpg'
import con3 from '../../static/images/docs/contacto.png'
import cot1 from '../../static/images/docs/contrato.jpg'
import cot2 from '../../static/images/docs/contrato2.jpg'
import fot1 from '../../static/images/docs/foto1.png'
import fot2 from '../../static/images/docs/foto2.png'
import fot3 from '../../static/images/docs/foto3.png'





/*Simulacion de consumo de un servicio para obtener Imagenes */
export default function API_IMAGES(docId) {
    return new Promise((resolve, reject) => {
        if (docId) {
            setTimeout(() => {
                switch (docId) {
                    case 'doc01':
                        resolve([
                            {image: ineFront, alt: "ID_frente", name: "Identificacion Frente"},
                            {image: ineBack, alt: "ID_Reverso", name: "Identificacion Reverso"},
                            {image: ineSelfie, alt: "ID_Selfie", name: "Identificacion con Selfie"}
                        ]);
                        break;
                    case 'doc02':
                        resolve([
                            {image: compCFE, alt: "Comprobante CFE", name: "comprobante Domicilio"},
                            {image: comIZ, alt: "Comprobante Izzi", name: ""},
                            {image: noIMG, alt: "img_no_disponible", name: ""}
                        ]);
                        break;
                    case 'doc03':
                        resolve([
                            {image: dom1, alt: "dom1", name: ""},
                            {image: dom2, alt: "dom2", name: ""},
                            {image: dom3, alt: "dom3", name: ""},
                        ]);
                        break;
                    case 'doc04':
                        resolve([
                            {image: cot1, alt: "cot1", name: ""},
                            {image: cot2, alt: "cot2", name: ""},
                            {image: noIMG, alt: "cot3", name: ""},
                        ]);
                        break;
                    case 'doc05':
                        resolve([
                            {image: con1, alt: "com1", name: ""},
                            {image: con2, alt: "com2", name: ""},
                            {image: con3, alt: "com3", name: ""},
                        ]);
                        break;
                    case 'doc06':
                        resolve([
                            {image: fot1, alt: "foto1", name: ""},
                            {image: fot2, alt: "foto2", name: ""},
                            {image: fot3, alt: "foto3", name: ""}
                        ]);
                        break;
                    default:
                        resolve([
                            {image: ineFront, alt: "ID_frente", name: ""},
                            {image: ineFront, alt: "ID_frente", name: ""},
                            {image: ineFront, alt: "ID_frente", name: ""}
                        ]);
                        break;
                }
            }, 552);
        } else {
            reject([]);
        }
    });
}