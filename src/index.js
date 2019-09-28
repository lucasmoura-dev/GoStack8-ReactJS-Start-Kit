import React from 'react';
/** Integração do React com a árvore de elementos do frontend.
 * função render -> responsável por renderizar um componente react dentro de um
 *                  conteúdo do html
*/
import { render } from 'react-dom';

import App from './App';

render(<App />, document.getElementById('app'));