// $(".back-to-top").click(function () {
//   $("html, body").animate({scrollTop: 0}, 1000);
// });

//PODACI??
let template = document.querySelector('#myTemp').innerHTML;
let productRow = document.querySelector('#productRow');
let femaleLink = document.querySelector('#femaleLink');
let maleLink = document.querySelector('#maleLink');
let newCollectionLink = document.querySelector('#newCollectionLink');
let popularLink = document.querySelector('#popularLink');
let actionLink = document.querySelector('#actionLink');

femaleLink.addEventListener('click',displayFemales);
maleLink.addEventListener('click',displayMales);
newCollectionLink.addEventListener('click',displayNewCol);
popularLink.addEventListener('click',popularCol);
actionLink.addEventListener('click',actionCol);

function actionCol(e) {
  e.preventDefault();
  actionLink.className = 'active';
  newCollectionLink.classList.remove('active');
  popularLink.classList.remove('active');
  let xml = new XMLHttpRequest();

  xml.open('GET','https://raw.githubusercontent.com/Danilovesovic/shop/master/shop.json')
  xml.onreadystatechange = function () {
    if (xml.readyState == 4 && xml.status == 200) {
      let data = JSON.parse(xml.responseText)
      let action = data.filter(function (el) {
        return el.action == true;
      })
      let xxx = '';
      for (var i = 0; i < action.length; i++) {
        xxx += template.replace('{{imgSrc}}',action[i].imgSrc)
                        .replace('{{productTitle}}',action[i].productTitle)
                        .replace('{{productTitle}}',action[i].productTitle)
                        .replace('{{model}}',action[i].model)
                        .replace('{{price}}',action[i].price);
      }
      productRow.innerHTML = xxx;
    }
  }
  xml.send();
}

function popularCol(e) {
  e.preventDefault();
  popularLink.className = 'active';
  newCollectionLink.classList.remove('active');
  actionLink.classList.remove('active');
  let xml = new XMLHttpRequest();

  xml.open('GET','https://raw.githubusercontent.com/Danilovesovic/shop/master/shop.json')
  xml.onreadystatechange = function () {
    if (xml.readyState == 4 && xml.status == 200) {
      let data = JSON.parse(xml.responseText)
      let popular = data.filter(function (el) {
        return el.popular == true;
      })
      let xxx = '';
      for (var i = 0; i < popular.length; i++) {
        xxx += template.replace('{{imgSrc}}',popular[i].imgSrc)
                        .replace('{{productTitle}}',popular[i].productTitle)
                        .replace('{{productTitle}}',popular[i].productTitle)
                        .replace('{{model}}',popular[i].model)
                        .replace('{{price}}',popular[i].price);
      }
      productRow.innerHTML = xxx;
    }
  }
  xml.send();
}

function displayNewCol(e) {
  e.preventDefault();
  newCollectionLink.className = 'active';
  actionLink.classList.remove('active');
  popularLink.classList.remove('active');
  let xml = new XMLHttpRequest();

  xml.open('GET','https://raw.githubusercontent.com/Danilovesovic/shop/master/shop.json')
  xml.onreadystatechange = function () {
    if (xml.readyState == 4 && xml.status == 200) {
      let data = JSON.parse(xml.responseText)
      let newColl = data.filter(function (el) {
        return el.newCol == true;
      })
      let xxx = '';
      for (var i = 0; i < newColl.length; i++) {
        xxx += template.replace('{{imgSrc}}',newColl[i].imgSrc)
                        .replace('{{productTitle}}',newColl[i].productTitle)
                        .replace('{{productTitle}}',newColl[i].productTitle)
                        .replace('{{model}}',newColl[i].model)
                        .replace('{{price}}',newColl[i].price);
      }
      productRow.innerHTML = xxx;
    }
  }
  xml.send();
}

function displayMales(e) {
  e.preventDefault();
  actionLink.classList.remove('active');
  popularLink.classList.remove('active');
  newCollectionLink.classList.remove('active');
  let xml = new XMLHttpRequest();

  xml.open('GET','https://raw.githubusercontent.com/Danilovesovic/shop/master/shop.json')
  xml.onreadystatechange = function () {
    if (xml.readyState == 4 && xml.status == 200) {
      let data = JSON.parse(xml.responseText)
      let males = data.filter(function (el) {
        return el.colection == 'male';
      })
      let xxx = '';
      for (var i = 0; i < males.length; i++) {
        xxx += template.replace('{{imgSrc}}',males[i].imgSrc)
                        .replace('{{productTitle}}',males[i].productTitle)
                        .replace('{{productTitle}}',males[i].productTitle)
                        .replace('{{model}}',males[i].model)
                        .replace('{{price}}',males[i].price);
      }
      productRow.innerHTML = xxx;
    }
  }
  xml.send();
}

function displayFemales(e) {
  e.preventDefault();
  actionLink.classList.remove('active');
  popularLink.classList.remove('active');
  newCollectionLink.classList.remove('active');
  let xml = new XMLHttpRequest();

  xml.open('GET','https://raw.githubusercontent.com/Danilovesovic/shop/master/shop.json')
  xml.onreadystatechange = function () {
    if (xml.readyState == 4 && xml.status == 200) {
      let data = JSON.parse(xml.responseText)
      let females = data.filter(function (el) {
        return el.colection == 'female';
      })
      let xxx = '';
      for (var i = 0; i < females.length; i++) {
        xxx += template.replace('{{imgSrc}}',females[i].imgSrc)
                        .replace('{{productTitle}}',females[i].productTitle)
                        .replace('{{productTitle}}',females[i].productTitle)
                        .replace('{{model}}',females[i].model)
                        .replace('{{price}}',females[i].price);
      }
      productRow.innerHTML = xxx;
    }
  }
  xml.send();
}


let xml = new XMLHttpRequest();

xml.open('GET','https://raw.githubusercontent.com/Danilovesovic/shop/master/shop.json')
xml.onreadystatechange = function () {
  if (xml.readyState == 4 && xml.status == 200) {
    data = JSON.parse(xml.responseText)
    display(JSON.parse(xml.responseText))
  }
}
xml.send();

function display(data) {
  console.log(data);
  let xxx = '';
  for (var i = 0; i < data.length; i++) {
    xxx += template.replace('{{imgSrc}}',data[i].imgSrc)
                    .replace('{{productTitle}}',data[i].productTitle)
                    .replace('{{productTitle}}',data[i].productTitle)
                    .replace('{{model}}',data[i].model)
                    .replace('{{price}}',data[i].price);
  }
  productRow.innerHTML = xxx;
}
