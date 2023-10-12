const http = require('http')

//Enviaod un archivo CSV, esto es una sola ruta. 

http.createServer ((req, res) => {
    
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv') 
    res.writeHead (200, {'Content-Type': 'application/csv'})

    res.write('id, nombre\n') 
    res.write('1, William\n')
    res.write('2, Dennis\n')
    res.write('3, Fernando\n')
    res.write('4, Chiroy\n')
    res.end();

})
.listen(8080)

console.log('Escuchando el puerto', 8080);