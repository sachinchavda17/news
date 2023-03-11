let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  // menu.classList.remove('active');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('fa-times');
  // navbar.classList.remove('active');
}

// navbar.onclick = ()  =>{
//   navbar.classList.toggle("active")
// }

// let navLinks = document.querySelectorAll('header .navbar a');

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}


const  genralBtn  = document.getElementById("genral")
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sport");
const technologyBtn = document.getElementById("technology");
const entertainmentBtn = document.getElementById("entertainment");
const searchBtn = document.getElementById("newsQuery");
const signInBtn = document.getElementById("sign-in");

const newsQuery = document.getElementById("search-form");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

// Array
var newsDataArr = [];

// apis 
const API_KEY = "a72388c8cf0b4cfda52ae93316344f93";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

window.onload = function() {
  newsType.innerHTML="<h4>Headlines</h4>";
  fetchHeadlines();

};

genralBtn.addEventListener("click",function(){
  newsType.innerHTML="<h4>General news</h4>";
  fetchGeneralNews();
});

businessBtn.addEventListener("click",function(){
  newsType.innerHTML="<h4>Business</h4>";
  fetchBusinessNews();
});

sportsBtn.addEventListener("click",function(){
  newsType.innerHTML="<h4>Sports</h4>";
  fetchSportsNews();
});


technologyBtn.addEventListener("click",function(){
  newsType.innerHTML="<h4>Technology</h4>";
  fetchTechnologyNews();
});

searchBtn.addEventListener("click",function(){
  newsType.innerHTML="<h4>Search : "+newsQuery.value+"</h4>";
  fetchQueryNews();
});

const fetchHeadlines = async () => {
  const response = await fetch(HEADLINES_NEWS+API_KEY);
  newsDataArr = [];
  if(response.status >=200 && response.status < 300) {
      const myJson = await response.json();
      newsDataArr = myJson.articles;
  } else {
      // handle errors
      console.log(response.status, response.statusText);
      newsdetails.innerHTML = "<h5>No data found.</h5>"
      return;
  }

  displayNews();
}

const fetchGeneralNews = async () => {
  const response = await fetch(GENERAL_NEWS+API_KEY);
  newsDataArr = [];
  if(response.status >=200 && response.status < 300) {
      const myJson = await response.json();
      newsDataArr = myJson.articles;
  } else {
      // handle errors
      console.log(response.status, response.statusText);
      newsdetails.innerHTML = "<h5>No data found.</h5>"
      return;
  }

  displayNews();
}

const fetchBusinessNews = async () => {
  const response = await fetch(BUSINESS_NEWS+API_KEY);
  newsDataArr = [];
  if(response.status >=200 && response.status < 300) {
      const myJson = await response.json();
      newsDataArr = myJson.articles;
  } else {
      // handle errors
      console.log(response.status, response.statusText);
      newsdetails.innerHTML = "<h5>No data found.</h5>"
      return;
  }

  displayNews();
}


const fetchSportsNews = async () => {
  const response = await fetch(SPORTS_NEWS+API_KEY);
  newsDataArr = [];
  if(response.status >=200 && response.status < 300) {
      const myJson = await response.json();
      newsDataArr = myJson.articles;
  } else {
      // handle errors
      console.log(response.status, response.statusText);
      newsdetails.innerHTML = "<h5>No data found.</h5>"
      return;
  }

  displayNews();
}

const fetchTechnologyNews = async () => {
  const response = await fetch(TECHNOLOGY_NEWS+API_KEY);
  newsDataArr = [];
  if(response.status >=200 && response.status < 300) {
      const myJson = await response.json();
      newsDataArr = myJson.articles;
  } else {
      // handle errors
      console.log(response.status, response.statusText);
      newsdetails.innerHTML = "<h5>No data found.</h5>"
      return;
  }

  displayNews();
}


const fetchQueryNews = async () => {

  if(newsQuery.value == null)
      return;

  const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+API_KEY);
  newsDataArr = [];
  if(response.status >= 200 && response.status < 300) {
      const myJson = await response.json();
      newsDataArr = myJson.articles;
  } else {
      //error handle
      console.log(response.status, response.statusText);
      newsdetails.innerHTML = "<h5>No data found.</h5>"
      return;
  }

  displayNews();
}

function displayNews() {

  newsdetails.innerHTML = "";

  // if(newsDataArr.length == 0) {
  //     newsdetails.innerHTML = "<h5>No data found.</h5>"
  //     return;
  // }

  newsDataArr.forEach(news => {

      var date = news.publishedAt.split("T");
      
      var col = document.createElement('div');
      col.className=" card";

      var card = document.createElement('div');
      card.className = "para";

      var image = document.createElement('img');
      // image.className = "NewsImg"
      image.setAttribute("height","matchparent");
      image.setAttribute("width","100%");
      image.src=news.urlToImage;

      var cardBody = document.createElement('div');
      
      var newsHeading = document.createElement('h5');
      newsHeading.className = "card-title";
      newsHeading.innerHTML = news.title;

      var dateHeading = document.createElement('h6');
      dateHeading.className = "date";
      dateHeading.innerHTML = date[0];

      var discription = document.createElement('p');
      discription.className="descript";
      discription.innerHTML = news.description;

      var link = document.createElement('a');
      link.className="btn";
      link.setAttribute("target", "_blank");
      link.href = news.url;
      link.innerHTML="Read more";

      // var  imglink = 

      cardBody.appendChild(newsHeading);
      cardBody.appendChild(dateHeading);
      cardBody.appendChild(discription);
      cardBody.appendChild(link);

      card.appendChild(image);
      card.appendChild(cardBody);

      col.appendChild(card);

      newsdetails.appendChild(col);
  });

}

