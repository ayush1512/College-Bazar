var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

$(document).ready(function () {
  $(SmallImg[0]).click(function () {
    ProductImg.src = SmallImg[0].src;
  });
  $(SmallImg[1]).click(function () {
    ProductImg.src = SmallImg[1].src;
  });
  $(SmallImg[2]).click(function () {
    ProductImg.src = SmallImg[2].src;
  });
  $(SmallImg[3]).click(function () {
    ProductImg.src = SmallImg[3].src;
  });
  $(".product-inf a").click(function () {
    $(".product-inf li").removeClass("active");
    $(this).parent().addClass("active");

    let currentTab = $(this).attr("href");
    $(".tabs-content div").hide();
    $(currentTab).show();

    return false;
  });
});
