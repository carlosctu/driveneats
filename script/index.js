let dish;
let mainDish;
let drink;
let chosedDishPrice;
let chosedMainDish;
let chosedMainDishPrice;
let chosedDrink;
let chosedDrinkPrice;
let checkOutValue;
let costumerName;
let adress;

function chosedOption(element) {
  dish = document.querySelector(".menu .chosed");
  mainDish = document.querySelector(".menu-main .chosed");
  drink = document.querySelector(".menu-drink .chosed");

  dish = document.querySelector(".menu .chosed");
  mainDish = document.querySelector(".menu-main .chosed");
  drink = document.querySelector(".menu-drink .chosed");

  if (dish !== null && element.classList.contains("dish")) {
    document.querySelector(".menu .chosed .check").classList.add("hidden")
    dish.classList.remove("chosed");
  } else if (mainDish !== null && element.classList.contains("main-dish")) {
    document.querySelector(".menu-main .chosed .check").classList.add("hidden")
    mainDish.classList.remove("chosed");
  } else if (drink !== null && element.classList.contains("drink")) {
    document.querySelector(".menu-drink .chosed .check").classList.add("hidden")
    drink.classList.remove("chosed");
  }
  
  element.classList.add("chosed");
  document.querySelector(".chosed .hidden").classList.remove("hidden")
  closeOrder();
}

function closeOrder() {
  dish = document.querySelector(".menu .chosed");
  mainDish = document.querySelector(".menu-main .chosed");
  drink = document.querySelector(".menu-drink .chosed");
  
  let closeOrder = document.querySelector(".button button");
  
  if (dish && mainDish && drink) {
    closeOrder.classList.add("done");
    closeOrder.innerHTML = "Finalizar Pedido";
    closeOrder.disabled = false;
  }
}

function checkOut() {
  document.querySelector(".main").classList.add("blur");
  document.querySelector("body").classList.add("noScroll");
  costumerName = prompt("Qual é seu nome?");
  while (costumerName == "") {
    costumerName = prompt("Qual é seu nome?");
  }
  if (costumerName !== null) {
    adress = prompt("Qual é seu endereço?");
    while (adress == "") {
      adress = prompt("Qual é seu endereço?");
    }
  }else if(costumerName == null){
    cancel()
  }
  
  if (costumerName == null || adress == null) {
    cancel();
  } else {
    document.querySelector(".checkOut").classList.remove("hidden");
    chosedDish = document.querySelector(".menu .chosed .chosedDish").innerHTML;
    chosedDishPrice = Number(
      document.querySelector(".menu .chosed .value").innerHTML
      );
    chosedMainDish = document.querySelector(
      ".menu-main .chosed .chosedDish"
      ).innerHTML;
    chosedMainDishPrice = Number(
      document.querySelector(".menu-main .chosed .value").innerHTML
      );
      chosedDrink = document.querySelector(
        ".menu-drink .chosed .chosedDish"
        ).innerHTML;
        chosedDrinkPrice = Number(
          document.querySelector(".menu-drink .chosed .value").innerHTML
          );
          checkOutValue = Number(
            (chosedDrinkPrice + chosedMainDishPrice + chosedDishPrice).toFixed(2)
    );
    document.querySelector(".dishOrder .dishName").innerHTML = chosedDish;
    document.querySelector(".dishOrder .dishValue").innerHTML =
    chosedDishPrice.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    document.querySelector(".mainDishOrder .dishName").innerHTML =
    chosedMainDish;
    document.querySelector(".mainDishOrder .dishValue").innerHTML =
    chosedMainDishPrice.toLocaleString("pt-br", {
      style: "currency",
        currency: "BRL",
      });
      document.querySelector(".drinkOrder .dishName").innerHTML = chosedDrink;
      document.querySelector(".drinkOrder .dishValue").innerHTML =
      chosedDrinkPrice.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
      document.querySelector(".checkOut .totalValue").innerHTML =
      checkOutValue.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    }
  }
  
  function makeOrder() {
    let url = "https://wa.me/+5547988608094";
    let message = `?text=Olá, gostaria de fazer o pedido:%0a%0a- Entrada: ${chosedDish}%0a- Prato Principal: ${chosedMainDish}%0a- Bebida: ${chosedDrink}%0a%0aTotal: ${checkOutValue.toLocaleString(
    "pt-br",
    {
      style: "currency",
      currency: "BRL",
    }
    )}%0a%0aNome: ${costumerName}%0aEndereço: ${adress}`;
    document.querySelector(".link").href = `${url}${message}`;
  }
  function cancel() {
    let removeDone = document.querySelector(".button button");
    document.querySelector(".menu .chosed .check").classList.add("hidden")
    document.querySelector(".menu-main .chosed .check").classList.add("hidden")
    document.querySelector(".menu-drink .chosed .check").classList.add("hidden")
    
    document.querySelector(".checkOut").classList.add("hidden");
    document.querySelector(".main").classList.remove("blur");
    
    dish.classList.remove("chosed");
    mainDish.classList.remove("chosed");
    drink.classList.remove("chosed");
    
    removeDone.classList.remove("done");
    removeDone.innerHTML = "Escolha 3 itens para fechar o pedido";
    removeDone.disabled = true;
    
    document.querySelector("body").classList.remove("noScroll");
  }
  