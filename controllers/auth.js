const { response } = require('express');
const {} = require('express')

const login = (req,res)=>{
    res.json({
        ok:true,
        msg:"login"
    })
}

const register = (req,res= response)=>{

    const {name, topics} = req.body;

    res.status(201).json({
        ok:true,
        msg:"nuevo registro",
        name,
        topics
    })
}

const renewToken = (req,res)=>{
    res.json({
        ok:true,
        msg:"renew token"
    })
}


module.exports = {
    login,
    register,
    renewToken
}