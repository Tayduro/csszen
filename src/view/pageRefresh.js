import { LockingTheFirstPanel } from '../modul/itemSearch';
 const pageState = {
  pastPageElement: undefined,
  currentPageElement: undefined,
  selectorNext: true,
  selectorPrev: true,
  navTop: true,
  navBottom: true,
  navLeft: true,
  navRight: true,
};
export { pageState };

export function pageRefresh() {
  if (pageState.currentPageElement) {
    pageState.currentPageElement.classList.add('excretion');
  }
  if (pageState.pastPageElement) {
    pageState.pastPageElement.classList.remove('excretion');
  }
  if (pageState.selectorNext === false && LockingTheFirstPanel.value === false) {
    document.querySelector('.selector-next').disabled = false;
  }
  if (pageState.selectorNext === true || LockingTheFirstPanel.value === true) {
    document.querySelector('.selector-next').disabled = true;
  }

  if (pageState.selectorPrev === false && LockingTheFirstPanel.value === false) {
    document.querySelector('.selector-prev').disabled = false;
  } else if (pageState.selectorPrev === true || LockingTheFirstPanel.value === true) {
    document.querySelector('.selector-prev').disabled = true;
  }

  if (pageState.navTop === false) {
    document.querySelector('.nav-top').disabled = false;
  } else if (pageState.navTop === true) {
    document.querySelector('.nav-top').disabled = true;
  }

  if (pageState.navBottom === false) {
    document.querySelector('.nav-bottom').disabled = false;
  } else if (pageState.navBottom === true) {
    document.querySelector('.nav-bottom').disabled = true;
  }

  if (pageState.navLeft === false) {
    document.querySelector('.nav-left').disabled = false;
  } else if (pageState.navLeft === true) {
    document.querySelector('.nav-left').disabled = true;
  }

  if (pageState.navRight === false) {
    document.querySelector('.nav-right').disabled = false;
  } else if (pageState.navRight === true) {
    document.querySelector('.nav-right').disabled = true;
  }
}
