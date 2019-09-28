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
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
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
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' }, // permite importar arquivos css. Vai pegar e transferir os arquivos .css para dentro de uma tag style no index.hmtl 
          { loader: 'css-loader' } // permite interpretar importações dentro do CSS (importar imagens etc.)
        ]
      }, {
        test: /.*\.(gif|png|jpe?g)$/i, // importa arquivos de imagem. 'i' -> case insensitive
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }
};