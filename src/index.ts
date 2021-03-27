import db from './firebase/config';
import { retornaDocumentos } from './helpers/mostrar-documentos'

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
.onSnapshot( retornaDocumentos )

usuariosRef.get().then( retornaDocumentos );
/*
select * from usuarios 
where activo = true 
*/

usuariosRef.where('activo','==',true).get().then( retornaDocumentos );

/*
select * from usuarios 
 where salario > 1800
 */
 usuariosRef.where('salario','>','1800') 
 .get().then( retornaDocumentos );

 /*
select * from usuarios 
 --where salario > 1800 and salario < 2300
 */
 usuariosRef.where('salario','>','1800') 
 .where('salario','<','2300')
 .get().then( retornaDocumentos );

  /*
select * from usuarios 
 --where salario > 1800 
 and activo == true 
 */
 usuariosRef.where('salario','>=','1800') 
 .where('activo','==','true')   
 .get().then( retornaDocumentos );
 