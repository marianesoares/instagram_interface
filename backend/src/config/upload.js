const multer = require('multer');
const path = require('path'); // unix e windows

module.exports = { 
    storage: new multer.diskStorage({ //salva as imagens no disco
        destination: path.resolve(__dirname, '..', '..', 'uploads'), //o diretorio para salvar
        filename: function(req, file, cb) {
            cb(null, file.originalname); //nome original do arquivo
        }
    })
};