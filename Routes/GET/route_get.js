'use strict'
const controller_get = require('../../Controlllers/GET/controller_get')
/**
 *     const alertLevel = request.params.alertLevel
    const startDate = reqest.params.startDate
    const endDate = request.params.endDate
    const maxDepth = request.params.maxDepth
    const minDepth = request.params.minDepth
    const maxMagnitude = request.params.maxMagnitude
    const minMagnitude = request.params.minMagnitude
 */
module.exports = [
    {
        method: 'GET',
        path: '/products',
        config: {
            auth: false
        },
        handler: controller_get.handleGetProducts
    }
    // {
    //     method: 'GET',
    //     path: '/earth_quake_history/{startDate}/{endDate}/{maxDepth}/{minDepth}/{maxMagnitude}/{minMagnitude}/{alertLevel}',
    //     config: {
    //         auth: false
    //     },
    //     handler: controller_get.handleEarthQuakeHistory
    // },
    
    // {
    //     method: 'GET',
    //     path: '/accounts',
    //     config: {
    //         auth: false
    //     }, handler: controller_get.handleAccounts
    // },
    // {
    //     method: 'GET',
    //     path: '/accounts/table',
    //     config: {
    //         auth: false
    //     }, handler: controller_get.handleAccountsTable
    // },
    // {
    //     method: 'GET',
    //     path: '/account',
    //     config: {
    //         auth: false,
    //     }, handler: controller_get.handleAccountByNamaRekening
    // },
    // {
    //     method: 'GET',
    //     path: '/details',
    //     config: {
    //         auth: false,
    //     }, handler: controller_get.handleDetails
    // },
    // {
    //     method: 'GET',
    //     path: '/details/table',
    //     config: {
    //         auth: false,
    //     }, handler: controller_get.handleDetailsTable
    // },
    // {
    //     method: 'GET',
    //     path: '/jurnal_umum/table',
    //     config: {
    //         auth: false,
    //     }, handler: controller_get.handleJurnalUmumTable
    // },
    // {
    //     method: 'GET',
    //     path: '/jurnal_umum/table/{id_rekening}',
    //     config: {
    //         auth: false,
    //     }, handler: controller_get.handleJurnalUmumTableWithIDRekening
    // },
    // {
    //     method: 'GET',
    //     path: '/neraca_saldo/debet',
    //     config: {
    //         auth: false,
    //     }, handler: controller_get.handleNeracaSaldoDebet
    // },
    // {
    //     method: 'GET',
    //     path: '/neraca_saldo/kredit',
    //     config: {
    //         auth: false,
    //     }, handler: controller_get.handleNeracaSaldoKredit
    // }
]