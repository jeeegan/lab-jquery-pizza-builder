// Change default values
$(".crust").removeClass("crust-gluten-free");
$("li:contains($5 gluten-free crust)").toggle();
$(".sauce").removeClass("sauce-white");
$("li:contains($3 white sauce)").toggle();
$(".btn-pepperonni").toggleClass("active");
$(".btn-mushrooms").toggleClass("active");
$(".btn-green-peppers").toggleClass("active");
let totalPrice = 13;

const toppings = [
  {
    name: "pepperonni",
    buttonClass: ".btn-pepperonni",
    toppingClass: ".pep",
    itemDescrip: "$1 pepperonni",
    price: 1,
    base: false
  },
  {
    name: "mushrooms",
    buttonClass: ".btn-mushrooms",
    toppingClass: ".mushroom",
    itemDescrip: "$1 mushrooms",
    price: 1,
    base: false
  },
  {
    name: "green peppers",
    buttonClass: ".btn-green-peppers",
    toppingClass: ".green-pepper",
    itemDescrip: "$1 green peppers",
    price: 1,
    base: false
  }
]

const updateTotalPrice = () => $("aside > strong").html(`$${totalPrice}`);

const toggleTopping = (topping) => {
  $(topping.buttonClass).click(()=> {
    $(topping.toppingClass).toggle();
    $(topping.buttonClass).toggleClass("active");
    $(`li:contains(${topping.itemDescrip})`).toggle();
    if ($(`li:contains(${topping.itemDescrip})`).prop("style")["display"] === "none") {
      totalPrice -= topping.price;
    } else {
      totalPrice += topping.price;
    }
    updateTotalPrice();
  });
};

$(".btn-crust").click(()=> {
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $("li:contains($5 gluten-free crust)").toggle();
  if ($("li:contains($5 gluten-free crust)").prop("style")["display"] === "none") {
    totalPrice -= 5;
  } else {
    totalPrice += 5;
  }
  updateTotalPrice();
});

$(".btn-sauce").click(()=> {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $("li:contains($3 white sauce)").toggle();
  if ($("li:contains($3 white sauce)").prop("style")["display"] === "none") {
    totalPrice -= 3;
  } else {
    totalPrice += 3;
  }
  updateTotalPrice();
});

updateTotalPrice();
toppings.forEach(toggleTopping);
