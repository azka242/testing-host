  window.addEventListener("load", () => {
    document.body.classList.remove("not-loaded");

    const titles = ('for you').split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      }
    }

    appendTitle();
};
