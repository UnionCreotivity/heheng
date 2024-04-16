function loading(tag) {
  let number = $(tag).html();
  let parse = parseInt(number);

  let test;
  let timeRun = setInterval(() => {
    test = parse++;
    $(tag).text(test);
    $(".box-hr").css("width", `${test}%`);
    if (test == 99) clearInterval(timeRun);
  }, 50);
}
loading(".loading-progress");

$(window).on("load", function () {
  console.log("loading");
  gsap.to(".loading-page", {
    opacity: 1,
  });
});
