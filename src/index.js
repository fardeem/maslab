import './styles/index.scss';


import { el, mount } from 'redom';

fetch('/api/posts')
  .then(res => res.json())
  .then(data => {
    return data.map( ({ title, date, link }) => {
      const dateInst = new Date(date);
      const dateFormat = `${dateInst.toLocaleString('en-us', { month: 'long' })} ${dateInst.getDay()} ${dateInst.getYear() + 1900}`;
      
      return el('div.item', [
        el('date', dateFormat),
        el('h1', title.rendered),
        el('a', { href: link }, [
          el('button', 'Read More')
        ]),
      ]);
    });
  })
  .then((updates) => {
    mount(document.getElementById('updates'), el('div.updates', updates))
  });

