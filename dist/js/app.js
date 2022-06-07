document.querySelector(".card-content").addEventListener("click", buy);
document.querySelector(".show-buy").addEventListener("mouseenter", showMenuBuy);
document.querySelector(".show-buy").addEventListener("mouseleave",hiddenMenuBuy);
document.querySelector(".card-content").addEventListener("dblclick", showInfo);
document.querySelector(".btn-change-color-dark").addEventListener("click", changeColorDark);
document.querySelector(".btn-change-color-light").addEventListener("click", changeLightColor);

const body = document.querySelector("body");
const btnColorBuys = document.querySelectorAll(".card-content .card-body div:last-child .btn");
const cardBodys = document.querySelectorAll(".card-content .card-body");
const showInfoForm = document.getElementById("show-info");

function buy(e) {
  e.preventDefault();

  //console.log(e.target.classList.contains("btn"));
  if (e.target.classList.contains("btn")) {

    const cardBody = e.target.parentElement.parentElement;
  
    console.log(cardBody.children)
    //get value child class card for send to menu
    const name = cardBody.children[1].textContent;
    const price = cardBody.children[3].children[1].textContent;
    console.log(name);
    console.log(price);

    //create element
    const li = document.createElement("li");
    const h3Name = document.createElement("h3");
    const h4Price = document.createElement("h4");

    //send value to element
    h3Name.appendChild(document.createTextNode(name));
    h4Price.appendChild(document.createTextNode(price));

    li.appendChild(h3Name);
    li.appendChild(h4Price);

    const shop = document.querySelector(".list-group");
    // console.log(shop);
    shop.appendChild(li);
    alert('خرید با موفقیت انجام شد!!!')
  }
}

function showMenuBuy() {
  
  const ul = document.querySelector("ul");
  // console.log(ul);
  
  // console.log(ul.children)
  if(ul.children.length==0){
    ul.style.display = "none";
  }else{
    ul.style.display = "flex";
  }
  
}

function hiddenMenuBuy(){
  const ul = document.querySelector("ul");
  // console.log(ul);
  ul.style.display = "none";
};

function showInfo(e) {
  e.preventDefault();

 if(e.target.classList.contains("img-show")){
    // console.log(e.target.classList.contains("img-show"));  true
  
  const cardBodyContent = e.target.parentElement;
  // console.log(cardBodyContent.children);
 
  //get data card-body
  const img = cardBodyContent.children[0].src;
  // console.log(img);
  const name = cardBodyContent.children[1].textContent;
  const desc = cardBodyContent.children[2].textContent;
  const price = cardBodyContent.children[3].children[1].textContent;

  //create element for show to modal
  const createImg = document.createElement("img");
  const createName = document.createElement("h3");
  const createDesc = document.createElement("p");
  const createPrice = document.createElement("h3");

  //send data to elememt
  console.log(createImg.setAttribute("src", img));
  createImg.setAttribute("src", img);
   createName.appendChild(document.createTextNode(name));
   createDesc.appendChild(document.createTextNode(desc));
   createPrice.appendChild(document.createTextNode(price));
  // console.log(createPrice)

  //create form
  const card = document.createElement("div");
  card.className = "card";
  card.appendChild(createImg);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  cardBody.appendChild(createName);
  cardBody.appendChild(createDesc);

  const div = document.createElement("div");
  const btn = document.createElement("button");
  btn.className = "btn exit";
  btn.appendChild(document.createTextNode("خروج"));
  div.appendChild(btn);
  div.appendChild(createPrice);

  cardBody.appendChild(div);
  
  card.appendChild(cardBody);
  

  showInfoForm.appendChild(card);

  showInfoForm.style.display = "flex";
  console.log(showInfoForm);
 }else{

console.log('no');
 }

  //exitModal
  document.querySelector("#show-info .exit").addEventListener("click",exitModal);
    function exitModal(){
    // console.log(showInfoForm);
    
    showInfoForm.style.display = "none";
    console.log( showInfoForm.style.display = "none");
  
    // console.log(showInfoForm);
    console.log( showInfoForm.children[0].remove());
    console.log(showInfoForm);
  }
}

//btn-change-color-darkness
function changeColorDark() {
  
  body.style.background = " rgba(20,20,20,0.5) 50%";

  //change color btn buys
  btnColorBuys.forEach((btnBuy) => {
    // console.log(btnBuy);
    btnBuy.style.background = "rgb(121,56,242)";
    btnBuy.style.color = "#ccc";
  });

  //change color card-body
  cardBodys.forEach((cardBody) => {
    // console.log(item);
    cardBody.style.background = "rgba(20,20,20,0.5) 100%";
    cardBody.style.color = "#f4f4f4";
  });
}

//btn-change-lihgt-color
function changeLightColor() {
  
  body.style.background = "#f4f4f4";

  btnColorBuys.forEach((btnBuy) => {
    // console.log(btnBuy);
    btnBuy.style.background = "#5E35B1";
  });

  cardBodys.forEach(function (cardBody) {
    // console.log(cardBody);
    cardBody.style.background = "#FAFAFA";
    cardBody.style.color = "#3E2723";
  });
}
