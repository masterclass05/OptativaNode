const express = require('express') 
const router = express.Router();

router.get('/', (req, res) => {
    res.render("escuela", { //pokemon será el próximo fichero que creemos, AÚN NO EXISTE
        arrayEscuela: [ //Esta información, posteriormente, VENDRÁ DE LA BASE DE DATOS
            {Nombre: 'Escuela1', Ubicacion: 'Algaba', Descripcion: 'Mediana', Grados:'3'},
            {Nombre: 'Escuela2', Ubicacion: 'Villaverde del rio', Descripcion: 'Chica', Grados:'1'},
            {Nombre: 'Escuela3', Ubicacion: 'Dos hermanas', Descripcion: 'Grande', Grados:'5'}
        ]
    })
})

module.exports = router;