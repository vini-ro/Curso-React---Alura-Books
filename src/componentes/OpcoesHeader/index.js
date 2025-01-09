import './estilo.css';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];


function OpcoesHeader() {
  return (
    <ul className="opcoes">
      {textoOpcoes.map((texto) => (
        <li className="opcao">{texto}</li>
      ))}
    </ul>
  );
}

export default OpcoesHeader;