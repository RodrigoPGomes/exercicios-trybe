
let processoSeletivo = 'amanha';

switch (processoSeletivo) {
 
    case 'aprovado':
        console.log('candidato aprovado(a)');
        break;

    case 'reprovado':
        console.log('candidato reprovado(a)');
        break;

    case 'lista':
        console.log('candidato em lista');
        break;
 
    default: 
    console.log('Não se aplica');
}