const fs = require ('fs'); 

const path = '../../1-Node'; 

const nmeFile = 'misegundofileconcodigodevisualcodeynode.txt';

const contenidodearcivo = 'Éste documento se creó con la tecnología de visualStudioCode con node.';
//Path absoluto: C:\Users\Olivia\Documents\Profesional en Coding\Módulo4\CarpetaOliMarSieLo\js-avanzado-OliMarSieLo\1-Node\1.2-crear-archivo\index.js

//Path Relativa: Módulo4\CarpetaOliMarSieLo\js-avanzado-OliMarSieLo\1-Node\1.2-crear-archivo\index.js
//const filePath = path + '/' + nmeFile;
const filePath = `${path}/${nmeFile}`;

fs.writeFile(filePath, contenidodearcivo, (error) => {
if (error) {
    throw error 
}
else {
    console.log('Válido.')
}
}
);
