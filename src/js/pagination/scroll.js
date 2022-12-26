function scrollOnClick() {
  const { height: headerHeight } = document
    .querySelector('.header')
    .getBoundingClientRect();

  scrollTo(0, headerHeight);
}

export { scrollOnClick };
