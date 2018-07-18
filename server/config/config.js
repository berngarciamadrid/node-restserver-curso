'use strict'

// ======================
// Puerto
// ======================

process.env.PORT = process.env.PORT || 3000;

// ======================
// Entorno
// ======================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// ======================
// Base de Datos
// ======================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/supercafe'
} else {
    urlDB = 'mongodb://cafe-user:A123456789@ds121575.mlab.com:21575/supercafe'
}

process.env.URLDB = urlDB;