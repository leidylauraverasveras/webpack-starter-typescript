import db from './firebase/config';
import { retornaDocumentos } from './helpers/mostrar-documentos'


const usuariosRef = db.collection('usuarios');

const btnNext = document.createElement('button');
btnNext.innerText = 'Next page';
document.body.append( btnNext )

let lastDocument = null; 
btnNext.addEventListener('click', ()  => { 

    const query = usuariosRef 
     .orderBy('nombre');
        .startAfter ( 'lastDocument' )

query.limit(2).get().then(snap  => { 

    lastDocument = snap.docs[snap.docs.length = 1 ] ||
retornaDocumentos(snap);   


 })  
});
btnNext.click(); 
