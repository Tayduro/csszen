import {pageRefresh, pageState} from "../view/pageRefresh";

const LockingTheFirstPanel = {
  value: false,
} ;
export { LockingTheFirstPanel };

export function check() {
  const { value } = document.querySelector('.selector');

  if (!value) {
    return;
  }
  if (!document.querySelector(value)) {
    return;
  }
  if (!pageState.currentPageElement) {
    if (document.querySelector(value).nextElementSibling) {
      pageState.selectorNext = false;
    }
    if (document.querySelector(value).previousElementSibling) {
      pageState.selectorPrev = false;
    }
    if (document.querySelector(value).parentElement) {
      pageState.navTop = false;
    }
    if (document.querySelector(value).firstElementChild) {
      pageState.navBottom = false;
    }
    if (document.querySelector(value).previousElementSibling) {
      pageState.navLeft = false;
    }
    if (document.querySelector(value).nextElementSibling) {
      pageState.navRight = false;
    }
    pageRefresh();
    return;
  }

  if (pageState.currentPageElement) {
    if (pageState.currentPageElement.nextElementSibling) {
      pageState.selectorNext = false;
    } else {
      pageState.selectorNext = true;
    }
    if (pageState.currentPageElement.previousElementSibling) {
      pageState.selectorPrev = false;
    } else {
      pageState.selectorPrev = true;
    }
    if (pageState.currentPageElement.parentElement && pageState.currentPageElement.parentElement !== document.body) {
      pageState.navTop = false;
    } else {
      pageState.navTop = true;
    }
    if (pageState.currentPageElement.firstElementChild) {
      pageState.navBottom = false;
    } else {
      pageState.navBottom = true;
    }
    if (pageState.currentPageElement.previousElementSibling) {
      pageState.navLeft = false;
    } else {
      pageState.navLeft = true;
    }
    if (pageState.currentPageElement.nextElementSibling) {
      pageState.navRight = false;
    } else {
      pageState.navRight = true;
    }
    pageRefresh();
  }
}

export function selectorFind() {
  const { value } = document.querySelector('.selector');
  if (pageState.currentPageElement && value !== pageState.currentPageElement) {
    pageState.pastPageElement = pageState.currentPageElement;
    pageState.currentPageElement = undefined;
  }
  LockingTheFirstPanel.value = false;

  let object = '';
  if (pageState.currentPageElement === undefined) {
    object = document.querySelector(value);
    pageState.currentPageElement = object;
  } else {
    object = pageState.currentPageElement;
  }
  check();
  pageRefresh();
}

export function selectorNext() {
  const { value } = document.querySelector('.selector');
  let object = '';
  if (pageState.currentPageElement === undefined) {
    object = document.querySelector(value).nextElementSibling;
    pageState.currentPageElement = document.querySelector(value);
  } else {
    object = pageState.currentPageElement.nextElementSibling;
  }
  pageState.pastPageElement = pageState.currentPageElement;
  pageState.currentPageElement = object;

  check();
  pageRefresh();
}

export function selectorPrev() {
  const { value } = document.querySelector('.selector');
  let object = '';
  if (pageState.currentPageElement === undefined) {
    object = document.querySelector(value).previousElementSibling;
    pageState.currentPageElement = document.querySelector(value);
  } else {
    object = pageState.currentPageElement.previousElementSibling;
  }
  pageState.pastPageElement = pageState.currentPageElement;
  pageState.currentPageElement = object;

  check();
  pageRefresh();
}

export function parent() {
  LockingTheFirstPanel.value = true;
  const { value } = document.querySelector('.selector');
  let object = '';
  if (pageState.currentPageElement === undefined) {
    object = document.querySelector(value).parentElement;
    pageState.currentPageElement = document.querySelector(value);
  } else {
    object = pageState.currentPageElement.parentElement;
  }
  pageState.pastPageElement = pageState.currentPageElement;
  pageState.currentPageElement = object;
  check();
  pageRefresh();
}

export function firstChild() {
  LockingTheFirstPanel.value = true;
  const { value } = document.querySelector('.selector');
  let object = '';
  if (pageState.currentPageElement === undefined) {
    object = document.querySelector(value).firstElementChild;
    pageState.currentPageElement = document.querySelector(value);
  } else {
    object = pageState.currentPageElement.firstElementChild;
  }
  pageState.pastPageElement = pageState.currentPageElement;
  pageState.currentPageElement = object;
  check();
  pageRefresh();
}

export function previousNeighbor() {
  LockingTheFirstPanel.value = true;
  const { value } = document.querySelector('.selector');
  let object = '';
  if (pageState.currentPageElement === undefined) {
    object = document.querySelector(value).previousElementSibling;
    pageState.currentPageElement = document.querySelector(value);
  } else {
    object = pageState.currentPageElement.previousElementSibling;
  }
  pageState.pastPageElement = pageState.currentPageElement;
  pageState.currentPageElement = object;
  check();
  pageRefresh();
}

export function nextNeighbor() {
  LockingTheFirstPanel.value = true;
  const { value } = document.querySelector('.selector');
  let object = '';
  if (pageState.currentPageElement === undefined) {
    object = document.querySelector(value).nextElementSibling;
    pageState.currentPageElement = document.querySelector(value);
  } else {
    object = pageState.currentPageElement.nextElementSibling;
  }
  pageState.pastPageElement = pageState.currentPageElement;
  pageState.currentPageElement = object;
  check();
  pageRefresh();
}
