'use strict'
const controller_post = require('../../Controlllers/POST/controller_post')
module.exports = [
    {
        method: 'POST',
        path: '/product',
        config: {
            auth: false
        },
        handler: controller_post.handleProduct
    }
    // {
    //     method: 'POST',
    //     path: '/account',
    //     config: {
    //         auth: false
    //     }, handler: controller_post.handleAccount
    // },
    // {
    //     method: 'POST',
    //     path: '/detail',
    //     config: {
    //         auth: false
    //     }, handler: controller_post.handleDetail
    // },
    // {
    //     method: 'POST',
    //     path: '/jurnal_umum',
    //     config: {
    //         auth: false
    //     }, handler: controller_post.handleJurnalUmum
    // },
]