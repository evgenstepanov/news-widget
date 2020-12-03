const makeNewsSeen = e => {
  let target = e.target.closest('.single-post');
  let status = target.querySelector('.status');
  status.classList.remove('post__new');
  status.innerText = 'Прочитано';
};

export default makeNewsSeen;
