$('.portfolio-slider-center').slick({
  dots: true,
  centerMode: true,
  centerPadding: '30%',
  slidesToShow: 1,
  infinite: true,
  speed: 300,
  height: '500px',
  responsive: [
    {
      breakpoint: 1170,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '15%',
        slidesToShow: 1,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '10%',
        slidesToShow: 1,
        dots: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '15px',
        slidesToShow: 1,
        dots: true,
      }
    }
  ],
  customPaging : function(slider, i) {
    return '<span class="portfolio-slider__dot-link"></span>';
  },
  prevArrow:"<button type='button' class='slick-prev slick-arrow'><svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "<circle cx=\"30\" cy=\"30\" r=\"30\" transform=\"rotate(-180 30 30)\" fill=\"#7C01C7\"/>\n" +
    "<path d=\"M33.8579 15.7158L21.4835 28.0902C20.5072 29.0665 20.5072 30.6494 21.4835 31.6257L33.8579 44.0001\" stroke=\"black\" stroke-opacity=\"0.5\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n" +
    "</svg>\n</button>",
  nextArrow:"<button type='button' class='slick-next slick-arrow'><svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
    "<circle cx=\"30\" cy=\"30\" r=\"30\" transform=\"rotate(-180 30 30)\" fill=\"#7C01C7\"/>\n" +
    "<path d=\"M33.8579 15.7158L21.4835 28.0902C20.5072 29.0665 20.5072 30.6494 21.4835 31.6257L33.8579 44.0001\" stroke=\"black\" stroke-opacity=\"0.5\" stroke-width=\"5\" stroke-linecap=\"round\"/>\n" +
    "</svg>\n</button>"
});