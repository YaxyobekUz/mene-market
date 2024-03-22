export const getElement = (e, name) => {
  if (e.target.querySelector(name)) {
    return e.target.querySelector(name);
  } else {
    return e.querySelector(name);
  }
};

export const getElements = (e, name) => {
  if (e.target.querySelectorAll(name)) {
    return e.target.querySelectorAll(name);
  } else {
    return e.querySelector(name);
  }
};

export const validateInput = (pattern, input, className) => {
  if (pattern.test(input.value)) {
    input.classList.remove(className);
    return true;
  } else {
    input.classList.add(className);
    input.focus();
    return false;
  }
};
