import db from './firebase/config';

const usuario = {
    nombre: 'leidy',
    activo: true,
    fechaNaci: 0
}

// insert into usuarios ....

db.collection('usuarios')
.add(usuario)  