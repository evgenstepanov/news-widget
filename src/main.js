import getCountMessage from './components/getCountMessage';

const downloadBtn = document.getElementById('download');
downloadBtn.addEventListener('click', () => getCountMessage());
