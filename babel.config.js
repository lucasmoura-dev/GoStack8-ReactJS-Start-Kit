/**
 * "@babel/preset-env": responsável por alterar as funcionalidades do JS que
 * os navegadores ainda não entem, ex: import/export, arrow functions, classes etc.
 * "@babel/preset-react": transformar as coisas que o navegador não entem do 
 * React, como: JSX (html/css no javascript), e outras funcionalidades.
 */
module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
};