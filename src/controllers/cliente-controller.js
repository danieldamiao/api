'use strict';

const repository = require('../repositories/cliente-repository');
const md5 = require('md5');

exports.get = async(req, res, next) => {
    const codigo = req.params.id
    console.log(codigo)
    try {
        var data = await repository.get(codigo);
        res.status(200).send(data);
    } catch (e) { 
        res.status(400).send(e);
    }
}

exports.post = async(req, res, next) => {
    try {
         var data = await repository.create({
             USR_EMAIL:   req.body.USR_EMAIL   ,
            USR_SENHA:   md5(req.body.USR_SENHA) 
         });
        res.status(201).send({
            message: 'Inserido com sucesso'
        });
    } catch (e) {
        res.status(400).send({
            message: 'Falha na inserção',
            data: e
        });
    }
}
//update 
    exports.update = async(req, res, next) => {
        try {
             var data = ({
                 USR_EMAIL:   req.body.USR_EMAIL   ,
                USR_SENHA:   md5(req.body.USR_SENHA) 
             });
             var update = await repository.put(req.body.USR_ID, data )
            res.status(200).send({
                message: 'Atualizado com sucesso'
            });
        } catch (e) {
            res.status(400).send({
                message: 'Falha na atualização',
                data: e
            });
        }
    }

//delete
exports.delete = async (req, res, next) => {
    try {
        console.log(req.body.USR_ID)
        var data = await repository.delete(req.body.USR_ID)
        res.status(200).send({
            message: 'Deletado com sucesso'
        });;
    } catch (e) {
        res.status(400).send({
            message: 'Falha na remoção',
            data: e
        });
    }
}

