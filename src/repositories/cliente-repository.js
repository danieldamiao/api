'use strict';

const mydb = require('../shared/connections');
const Usuario = mydb.Usuario;

//pega dados do banco
exports.get = async(codigo) => {
    var res;
    if(codigo == -1){
        res = await Usuario.findAll();
    }else {
        res = await Usuario.findOne({
            where: {
                USR_ID: codigo
            }
        });
    }
    return res;
}

//insere dados do banco
exports.create = async(data) =>{
    console.log(data);
    return await Usuario.create(data);
}

exports.put = async(id, data) =>{
    var res = await Usuario.update(
        data,
        {
            where: {
                USR_ID: id
            }
        });
    return res;
}

//delete
exports.delete = async (codigo) => {
    var res;
    res = await Usuario.destroy(
        {
            where: {
                USR_ID: codigo
            }

        })

}