
import { cerveceriasChilenas } from './view/templateCerveceriaschilenas.js';
import { menu } from './view/templateMenu.js';
import { abastecete } from './view/templateAbastecete.js';
import { eventos} from './view/templateEventos.js';
import { dondebeber } from './view/templateDondeBeber.js';
import { iniciarSesion } from './view/templateIniciarSesion.js';

export const changeRouter = (hash) => {
    if (hash === '#home') {
        return showTemplate (hash)
    } else if (hash === '#cerveceriasChilenas') {
        return showTemplate (hash) 
    } else if (hash === '#eventos') {
        return showTemplate (hash)
    } else if (hash === '#abastecete') {
        return showTemplate (hash)
    } else if (hash === '#dondebeber') {
        return showTemplate (hash)
    } else if (hash === '#iniciarsesion') {
        return showTemplate (hash)
    } else {
        return showTemplate (hash)
    }
} 

const showTemplate = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML= menu();

    switch (hash) {
        case '#':
            containerRoot.appendChild(home());
            break;
        case '#cerveceriasChilenas':    
            containerRoot.appendChild(cerveceriasChilenas());
            break;
        case '#abastecete':
            containerRoot.appendChild(abastecete());
            break;   
        case '#eventos':
            containerRoot.appendChild(eventos());
            break;
        case '#dondebeber':
            containerRoot.appendChild(dondebeber());
            break;    
        case '#iniciarsesion':
            containerRoot.appendChild(iniciarSesion());
            break;
        default:
            containerRoot.innerHTML = `<h2>No existe</h2>`    
         
    }
}