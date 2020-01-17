const argv = require('yargs')
            .command('crear',' Crear un elemento por hacer',{
                descripcion:{
                    alias: 'd',
                    demand: true
                }
            })
            .command('actualizar','Actualiza el estado completado de una tarea',{
                descripcion:{
                    alias: 'd',
                    demand: true,
                    desc:'Descripcion de la tarea por hacer'
                },
                completado:{
                    alias: 'c',
                    default: true,
                    desc: 'Marca como completado o pendiente la tarea'
                }
            })
            .command('borrar','Borra una tarea',{
                descripcion:{
                    alias:'d',
                    demand:true
                }
            })
            .command('listar', 'lista las tareas completadas o incompletas',{
                estado:{
                    alias:'e'
                }
            })
            .help()
            .argv;


module.exports = {
    argv
}            