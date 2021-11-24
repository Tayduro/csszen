import { selectorFind, selectorNext, selectorPrev, check, parent, firstChild, previousNeighbor, nextNeighbor } from './modul/itemSearch';

document.querySelector('.selector-find').addEventListener('click', selectorFind);
document.querySelector('.selector-next').addEventListener('click', selectorNext);
document.querySelector('.selector-prev').addEventListener('click', selectorPrev);
document.querySelector('.selector').addEventListener('input', check);

document.querySelector('.nav-top').addEventListener('click', parent);
document.querySelector('.nav-bottom').addEventListener('click', firstChild);
document.querySelector('.nav-left').addEventListener('click', previousNeighbor);
document.querySelector('.nav-right').addEventListener('click', nextNeighbor);
