/** Permite definir o caminho no projeto com a compatibilidade para todos os SO */
const path = require('path');

module.exports = {
  // Define o arquivo inicial da aplicação
  entry: path.resolve(__dirname, 'src', 'index.js'),
  /* Diretório aonde será jogado o arquivo bundle, código com as funciondades
     que o JavaScrip já entende*/
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    /* Regras para usar outros loaders que não fazem parte do Webpack (JS), 
       os arquivos CSS e imagens são importados usando outros loaders */
    rules: [
      {
        // Expressão regular para encontrar arquivos que terminam($) com .js
        test: /\.js$/,
        // Excluir tudo que vem da pasta node_modules
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // depois serão adicionados os loaders de CSS, imagens etc.
        }
      }
    ]
  }
};