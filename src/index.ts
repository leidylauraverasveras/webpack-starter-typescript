import db from './firebase/config';

const usuario = {
    nombre: 'leidy',
    activo: true,
    fechaNaci: 0
}

const usuariosRef = db.collection('usuarios');

// insert into usuarios ....

db.collection('usuarios')
.add( usuario )  
.then( docRef => {
    console.log( docRef )
})
.catch( e => console.log('error', e))

// update usuarios set activo = false where....
usuariosRef
.doc('hISANn4LaqJZoCfLdCYL')
    .update({
        activo: true 
    });
// Destructivoa
usuariosRef 
.doc('hISANn4LaqJZoCfLdCYL')
.set({
    activo: true, 
    edad: 17,
});

