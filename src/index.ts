import db from './firebase/config';
import { retornaDocumentos } from './helpers/mostrar-documentos'
import  firestore   from 'firebase';

const usuariosRef = db.collection('usuarios');

// select * from usuarios order by nombre asc, salario asc
usuariosRef
.orderBy('nombre')
.get().then( retornaDocumentos )

