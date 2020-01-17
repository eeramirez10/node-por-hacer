const fs = require('fs');

let listadoPorHacer = [];

const guardarDb = ()=>{
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err)=>{ 
        if (err) throw new Error('No se pudo grabar', err );   
    })
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json')
    } catch (error) {
        listadoPorHacer = []
    }
}  

const crear = ( descripcion) =>{
    cargarDB();
    let id = getId();
        id++
    let porHacer = { id , descripcion, completado: false };
    listadoPorHacer.push(porHacer);
    guardarDb();
    return listadoPorHacer; 
}

const getId = () =>{
    let tareas = getListado();
    let ultimaPosicion = tareas.length;
    if (tareas == '') return 0;
    return tareas[ultimaPosicion -1].id;
}

const getListado = (estado='') =>{
    cargarDB();
    if(!estado == ''){

       return listadoPorHacer.filter( tareas => tareas.completado === estado );
    }
    return listadoPorHacer;
}

const actualizar = ( descripcion, completado ) =>{
    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );
    if (index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDb()
        return true;
    }else{
        return false;
    }
}

const borrar = ( descripcion )=>{

    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );

    if(index >= 0){
        listadoPorHacer.splice(index,1)
        guardarDb()
        return true
    }else{
        return false;
    }


}



module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}

