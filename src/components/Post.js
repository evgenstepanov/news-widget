import makeNewsSeen from './makeNewsSeen';

export default class Post {
  constructor(post) {
    this.post = post;
    this.template = ` 
                <h2 class="post__title">${this.post.title}</h2>
                <p class="post__author">${this.post.author}</p>
                <p class="post__date">${new Date(
                  this.post.date
                ).toLocaleString()}</p>
                <a class="post__link" href="${
                  this.post.link
                }">...Читайте подробности</a>
                <div class="status${this.post.seen ? '' : ' post__new'}">${
      this.post.seen ? 'Прочитано' : 'Новое'
    }</div>     
 `;
  }
  render(container = {}) {
    let wrapper = document.createElement('div');
    wrapper.classList.add('single-post');
    wrapper.innerHTML += this.template;
    wrapper.addEventListener('mouseover', makeNewsSeen);
    container.append(wrapper);
  }
}
