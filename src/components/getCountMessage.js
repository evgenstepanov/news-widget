import data from '../data/data';
import getNews from './getNews';

let news = data;

const getCountMessage = () => {
  if (news.length) {
    let message = document.createElement('div');
    message.classList.add('message');
    message.innerHTML = `Количество актуальных новостей: ${news.length} шт.`;
    message.addEventListener('click', getNews, { once: true });
    document.body.append(message);
  }
  news = [];
};

export default getCountMessage;
