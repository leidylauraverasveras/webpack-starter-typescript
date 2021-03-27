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

// delete from usuarios where id ='xx'
usuariosRef 
.doc('hISANn4LaqJZoCfLdCYL')
.delete()
.then( () => console.log('Borrado'))
.catch ( e => console.log('error', e))

// select * from usuarios;
usuariosRef
.onSnapshot( snap => {

    const usuarios:  any[] = [];
   snap.forEach( snapHijo => { 
       usuarios.push({
           id: snapHijo.id
            ,snapHijo,data()
        })
});

console.log(usuarios)
})



})