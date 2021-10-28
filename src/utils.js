const getDisplayedSlidesQuantity = (slidesToShow, responsive, currentWidth) => {
  if (!responsive) {
    return slidesToShow;
  }
  const sortedResposiveOptions = Object.entries(responsive)
    .map(([res, num]) => [Number(res), num])
    .sort((a, b) => a[0] - b[0]);
  const [maxResponsiveRes] = sortedResposiveOptions[sortedResposiveOptions.length - 1];
  if (maxResponsiveRes < currentWidth) {
    return slidesToShow;
  }
  return sortedResposiveOptions.find(([res]) => res >= currentWidth)[1];
};

const prepareSlidesToCarusel = (slides, slidesToShow) => {
  if (slides.length > slidesToShow) {
    return slides.map((slide, key) => ({ ...slide, key }));
  }

  let preparedSlides = [];
  while (preparedSlides.length <= slidesToShow) {
    preparedSlides = [...preparedSlides, ...slides].map((slide, key) => ({ ...slide, key }));
  }
  return preparedSlides;
};

export { getDisplayedSlidesQuantity, prepareSlidesToCarusel };
