import "./../scss/main.scss";







// Shop
// let shop = document.getElementById("shop");

// console.log(shop);

// let generateShop = () => {
//   return (shop.innerHTML = `
//   <div class="row text-center">
//   <div class="col-md-6 col-lg-4 col-xl-3 chocolate-bar-container">
//     <a href="#" class="i">
//       <img
//        srcset="./src/assets/Tonys-ch-13.png"
//         width="325px"
//         class="chocolate-bar img-fluid mt-3"
//       > </a
//     ><br>
//     <p class="chocolate-text">milk chocolate 32%</p>
//     <div class="ratings-container mb-4"></div>
//     <p class="chocolate-info">
//       Smooth milk chocolate for a classic treat
//     </p>
//     <div class="float-center price">$5.95</div>
//     <div class="float-end">
//       <a href="#" class="">
//         <img class=" add-to-cart" src="./src/assets/Tony's-cart–white.svg"
//         alt="cart" width="50px" height="50px">
//       </a>
//     </div>
//   </div>
//   <div class="col-md-6 col-lg-4 col-xl-3 chocolate-bar-container">
//     <a href="#" class="">
//       <img
//         src="./src/assets/Tonys-ch-9.png"
//         width="325px"
//         class="chocolate-bar img-fluid mt-3"
//         alt=""
//       /> </a
//     ><br>
//     <p class="chocolate-text">milk chocolate sea salt 32%</p>
//     <div class="ratings-container mb-4"></div>
//     <p class="chocolate-info">
//       Caramel dances with Sea Salt in our milk chocolate for sweet and
//       salty perfection.
//     </p>
//     <div class="float-center price">$5.95</div>

//     <div class="float-end">
//       <a href="#">
//         <img class="add-to-cart" src="./src/assets/Tony's-cart–white.svg"
//         alt="cart" width=50px " height="50px">
//       </a>
//     </div>
//   </div>

//   <div class="col-md-6 col-lg-4 col-xl-3 chocolate-bar-container">
//     <a href="#" class="">
//       <img
//         src="./src/assets/Tonys-ch-4.png"
//         width="325px"
//         class="chocolate-bar img-fluid mt-3"
//         alt=""
//       /> </a
//     ><br>
//     <p class="chocolate-text">dark milk chocolate 42%</p>
//     <div class="ratings-container mb-4"></div>
//     <p class="chocolate-info">
//       Smooth and <b>Bold</b>, a modern take on dark chocolate with a
//       creamy layered of milk.
//     </p>
//     <div class="float-center price">$5.95</div>

//     <div class="float-end">
//       <a href="#">
//         <img class="add-to-cart" src="./src/assets/Tony's-cart–white.svg"
//         alt="cart" width=50px " height="50px">
//       </a>
//     </div>
//   </div>
//   <div class="col-md-6 col-lg-4 col-xl-3 chocolate-bar-container">
//     <a href="#" class="">
//       <img
//         src="./src/assets/Tonys-ch-7.png"
//         width="325px"
//         class="chocolate-bar img-fluid mt-3"
//         alt=""
//       /> </a
//     ><br>
//     <p class="chocolate-text">white raspberry 28%</p>
//     <div class="ratings-container mb-4"></div>
//     <p class="chocolate-info">
//       White chocolate infused with juicy raspberries for a wondrous bite.
//     </p>
//     <div class="float-center price">$5.95</div>

//     <div class="float-end">
//       <a href="#">
//         <img class="add-to-cart" src="./src/assets/Tony's-cart–white.svg"
//         alt="cart" width=50px " height="50px">
//       </a>
//     </div>
//   </div>
//   <div class="col-md-6 col-lg-4 col-xl-3 chocolate-bar-container">
//     <a href="#" class="">
//       <img
//         src="./src/assets/Tonys-ch-1.png"
//         width="325px"
//         class="chocolate-bar img-fluid mt-3"
//         alt=""
//       /> </a
//     ><br>
//     <p class="chocolate-text">
//       dark chocolate cocoa cookie citrusy caramel 51%
//     </p>
//     <div class="ratings-container mb-4"></div>
//     <p class="chocolate-info">
//       <em>Fruity</em>, Crunchy, cistrus-spiked cameral and crispy dark
//       chocolate.
//     </p>
//     <div class="float-center price">$5.95</div>

//     <div class="float-end">
//       <a href="#">
//         <img class="add-to-cart" src="./src/assets/Tony's-cart–white.svg"
//         alt="cart" width=50px " height="50px">
//       </a>
//     </div>
//   </div>
//   <div class="col-md-6 col-lg-4 col-xl-3 chocolate-bar-container">
//     <a href="#" class="">
//       <img
//         src="./src/assets/Tonys-ch-5.png"
//         width="325px"
//         class="chocolate-bar img-fluid mt-3"
//         alt=""
//       /> </a
//     ><br>
//     <p class="chocolate-text">milk honey almond nougat 32%</p>
//     <div class="ratings-container mb-4"></div>
//     <p class="chocolate-info">
//       Crunchy almond nougat warped in soft honey and milk chocolate.
//     </p>
//     <div class="float-center price">$5.95</div>

//     <div class="float-end">
//       <a href="#">
//         <img class="add-to-cart" src="./src/assets/Tony's-cart–white.svg"
//         alt="cart" width=50px " height="50px">
//       </a>
//     </div>
//   </div>
//   <div class="col-md-6 col-lg-4 col-xl-3 chocolate-bar-container">
//     <a href="#" class="">
//       <img
//         src="./src/assets/Tonys-ch-3.png"
//         width="325px"
//         class="chocolate-bar img-fluid mt-3"
//         alt=""
//       /> </a
//     ><br>
//     <p class="chocolate-text">milk hazelnut cookie 32%</p>
//     <div class="ratings-container mb-4"></div>
//     <p class="chocolate-info">
//       Hazelnut cookie paired with a our classic milk chocolate.
//     </p>
//     <div class="float-center price">$5.95</div>

//     <div class="float-end">
//       <a href="#">
//         <img class="add-to-cart" src="./src/assets/Tony's-cart–white.svg"
//         alt="cart" width=50px " height="50px">
//       </a>
//     </div>
//   </div>
//   <div class="col-md-6 col-lg-4 col-xl-3 chocolate-bar-container">
//     <a href="#" class="">
//       <img
//         src="./src/assets/Tonys-ch-6.png"
//         width="325px"
//         class="chocolate-bar img-fluid mt-3"
//         alt=""
//       /> </a
//     ><br>
//     <p class="chocolate-text">dark milk pretzel 42%</p>
//     <div class="ratings-container mb-4"></div>
//     <p class="chocolate-info">
//       Dark milk chocolate with crispy of salted pretzel.
//     </p>
//     <div class="float-center price">$5.95</div>

//     <div class="float-end">
//       <a href="#">
//         <img class="add-to-cart" src="./src/assets/Tony's-cart–white.svg"
//         alt="cart" width=50px " height="50px">
//       </a>
//     </div>
//   </div>
//   <div class="col-md-6 col-lg-4 col-xl-3 chocolate-bar-container">
//     <a href="#" class="">
//       <img
//         src="./src/assets/Tonys-ch-14.png"
//         width="325px"
//         class="chocolate-bar img-fluid mt-3"
//         alt=""
//       /> </a
//     ><br>
//     <p class="chocolate-text">milk wafer cookie 32%</p>
//     <div class="ratings-container mb-4"></div>
//     <p class="chocolate-info">
//       <em>Thin</em> crispy wafer covered in our classic milk chocolate.
//     </p>
//     <div class="float-center price">$5.95</div>

//     <div class="float-end">
//       <a href="#">
//         <img class="add-to-cart" src="./src/assets/Tony's-cart–white.svg"
//         alt="cart" width=50px " height="50px">
//       </a>
//     </div>
//   </div>
//   <div class="col-md-6 col-lg-4 col-xl-3 chocolate-bar-container">
//     <a href="#" class="">
//       <img
//         src="./src/assets/Tonys-ch-12.png"
//         width="325px"
//         class="chocolate-bar img-fluid mt-3"
//         alt=""
//       /> </a
//     ><br>
//     <p class="chocolate-text">milk hazelnut 32%</p>
//     <div class="ratings-container mb-4"></div>
//     <p class="chocolate-info">
//       Milk chocolate with luscious pockets of hazelnut.
//     </p>
//     <div class="float-center price">$5.95</div>
//     <div class="float-end">
//       <a href="#">
//         <img class="add-to-cart" src="./src/assets/Tony's-cart–white.svg"
//         alt="cart" width=50px " height="50px">
//       </a>
//     </div>
//   </div>
//   <div class="col-md-6 col-lg-4 col-xl-3 chocolate-bar-container">
//     <a href="#" class="">
//       <img
//         src="./src/assets/Tonys-ch-2.png"
//         width="325px"
//         class="chocolate-bar img-fluid mt-3"
//         alt=""
//       /> </a
//     ><br>
//     <p class="chocolate-text">milk caramel cookie 32%</p>
//     <div class="ratings-container mb-4"></div>
//     <p class="chocolate-info">
//       Velvet milk chocolate with caramel cookie.
//     </p>
//     <div class="float-center price">$5.95</div>
//     <div class="float-end">
//       <a href="#">
//         <img class="add-to-cart" src="./src/assets/Tony's-cart–white.svg"
//         alt="cart" width=50px " height="50px">
//       </a>
//     </div>
//   </div>
//   <div class="col-md-6 col-lg-4 col-xl-3 chocolate-bar-container">
//     <a href="#" class="">
//       <img
//         src="./src/assets/Tonys-ch-8.png"
//         width="325px"
//         class="chocolate-bar img-fluid mt-3"
//         alt=""
//       /> </a
//     ><br>
//     <p class="chocolate-text">dark almond sea salt 51%</p>

//     <div class="ratings-container mb-4"></div>
//     <p class="chocolate-info">
//       Dark chocolate takes on a satisfying taste with sea salt
//     </p>
//     <div class="float-center price">$5.95</div>

//     <div class="float-end">
//       <a href="#">
//         <img class="add-to-cart" src="./src/assets/Tony's-cart–white.svg"
//         alt="cart" width=50px " height="50px">
//       </a>
//     </div>
//   </div>
// </div>
//   `);
// };

// generateShop();

const starSystem = document.getElementsByClassName("ratings-container");

Array.from(starSystem).forEach((el) => {
  el.innerHTML +=`
<div class="star-widget">

<input type="radio" id="star1" name="rate" value="1" />
<label for="star1" class="fa-solid fa-star"></label>
<input type="radio" id="star2" name="rate" value="2" />
<label for="star2" class="fa-solid fa-star"></label>
<input type="radio" id="star3" name="rate" value="3" />
<label for="star3" class="fa-solid fa-star"></label>
<input type="radio" id="star4" name="rate" value="4" />
<label for="star4" class="fa-solid fa-star"></label>
<input type="radio" id="star5" name="rate" value="5" />
<label for="star5" class="fa-solid fa-star"></label>
</div>
`;
});
