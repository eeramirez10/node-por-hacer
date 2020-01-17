const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors');

let comando = argv._[0];

if ( comando == 'crear'){

    let tarea = porHacer.crear( argv.descripcion )
    console.log( tarea );

}else if( comando == 'listar'){

   
    let listado = porHacer.getListado(argv.estado);
    for(let tarea of listado){

        console.log('==========Por hacer============'.green)
        console.log("id:",tarea.id)
        console.log(tarea.descripcion)
        console.log('Estado:', tarea.completado)
        console.log('===============================')
    } 


}else if ( comando == 'actualizar'){

  let actualizado =  porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(porHacer.actualizar(argv.descripcion, argv.completado));
   

} else if (comando == 'borrar'){

    let borrado = porHacer.borrar(argv.descripcion);
    
    console.log(borrado)

} else {
    console.log( ` comando "${ comando }" no reconocido `);
}