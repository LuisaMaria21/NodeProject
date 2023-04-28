const express = require('express');
const Usuario = require('../models/usuario');
const { json } = require('body-parser');
const bcrypt = require('bcryptjs')

const loginUsuario = async (req, res = express.request) => {
    const { email, password } = req.body

    try {
        let usuario = await Usuario.findOne({ email: email })
        if(!usuario){
            return res.status(400).json({
                ok: false,
                msg: 'El usuario NO existe',
            })
        }

        const passwordValid = bcrypt.compareSync(password, usuario.password);
        if ( !passwordValid ){
            return res.status(400),json({
                ok: false,
                msg: 'El password NO es válido',
            })
        }

        res.status(200).json({
            ok: true,
            usuario,
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            error,
        })
    }
    
}
