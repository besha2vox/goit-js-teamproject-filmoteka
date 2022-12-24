let funcOnswithLang = () => {};

function renderOnSwithLang() {
  funcOnswithLang();
}

function getCurrentFunc(func) {
  funcOnswithLang = func;
}

export { renderOnSwithLang, getCurrentFunc };
