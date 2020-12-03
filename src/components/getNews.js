import data from '../data/data';
import Post from './Post';

let news = data;

const getNews = () => {
  let container = document.querySelector('.widget-container');

  // перебираем новости в цикле и формируем в классе Post, наполняя container
  for (let item of news) {
    let post = new Post(item);
    post.render(container);
  }
  news = []; // обнуляем список новостей после рендера всего массива

  let message = document.querySelector('.message');
  message.remove();
};

export default getNews;
