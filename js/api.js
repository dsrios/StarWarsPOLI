// API CREADA EN JAVASCRIPT PARA QUE CONSUMA Y EXTRAIGA LA IFNORMACION DE LA PAGINA https://swapi.co/api/

$('.modal').modal();

$.ajax({
  dataType : "json",
  url: "https://swapi.co/api/films/"
}).done(getData).fail(function (status) {
  console.log("error");
});


function getData(data) {
  const arr = data.results;
  // console.log(arr);
  let  templeteCharacter = ``;
  $.each(arr, function(i,value){
      let imagesArray = ["./images/a-new-hope.jpg", "./images/attack-of-the-clones.jpg","./images/the-phantom-menace.jpg", "./images/revenge-of-the-sith.jpg", "./images/return-of-the-jedi.jpg", "./images/the-empire-strikes-back.jpg", "./images/the-force-awakens.jpg", "./images/the-last-jedi.jpg", "./images/the-rise-of-skywalker.jpg"]
      let imgMovie = imagesArray[i];
      let infoMovie = value;
      // console.log(infoMovie);
      let titleMovie= infoMovie.title;
      // console.log(titleMovie);
     let idEpisode = infoMovie.episode_id;
      // console.log(idEpisode);
      let charactersMovie = infoMovie.characters
      $.each(charactersMovie, function (key,value) {
        templeteCharacter += `<a href="#modal1"><li class="characters" data-url="${value}"> ${value} </li></a> `
		/*templete2Character += `<a href="#modal1"><li class="characters" data-url="${value}"> ${value} </li></a> `
		templete3Character += `<a href="#modal1"><li class="characters" data-url="${value}"> ${value} </li></a> ` */

      });
      paintMovie(imgMovie, titleMovie, idEpisode, templeteCharacter);
    })
};

function charactersMovie () {
    $.ajax({
      dataType : "json",
      url: "https://swapi.co/api/people/"
    }).done(function(json){
        const characters = json;
        const nameCharacter = characters.name;

      console.log(characters);
    })
}

function paintMovie(imgMovie,titleMovie, idEpisode,templeteCharacter){
  const movieContainer = document.getElementById('movi_Container');

  let templete = `<div class="col s12 m4">
        <div class="card"
          <div class="card-image">
            <img class= "responsive-img movie-img" src="${imgMovie}">
            <span class="card-title grey lighten-4">${titleMovie} Episode ${idEpisode}</span>
          </div>
          <div class="card-content">
            <ul>${templeteCharacter}<ul>
          </div>
        </div>
      </div>`  
	  
	   /* let templete2 = `<div class="col s12 m4">
        <div class="card"
          <div class="card-image">
            <img class= "responsive-img movie-img" src="./images/the-last-jedi.jpg">
			<span class="card-title grey lighten-4">The Last Jedi Episode 8 </span>
          </div>
          <div class="card-content">
            <ul>${templeteCharacter}<ul>
          </div>
        </div>
      </div>`
	  
	     let templete3 = `<div class="col s12 m4">
        <div class="card"
          <div class="card-image">
            <img class= "responsive-img movie-img" src="./images/the-rise-of-skywalker.jpg">
			<span class="card-title grey lighten-4">The Rise of Skywalker Episode 9 </span>
          </div>
          <div class="card-content">
            <ul>${templeteCharacter}<ul>
          </div>
        </div>
      </div>` */
	  
      movieContainer.innerHTML += templete;
      let collectionHTML = document.getElementsByClassName('characters');
      givenEventLis(collectionHTML);

/*movieContainer.innerHTML += templete2;
      let collectionHTML = document.getElementsByClassName('characters');
      givenEventLis(collectionHTML);
	  
	   movieContainer.innerHTML += templete3;
      let collectionHTML = document.getElementsByClassName('characters');
      givenEventLis(collectionHTML); */
};

function givenEventLis(collectionHTML) {
  let listCharc= Array.from(collectionHTML);
  // console.log(listCharc);
  $.each(listCharc, function (li) {
  })
  $('.characters').click(getDetailsCharacter);
};

function getDetailsCharacter(e) {
  e.preventDefault;
  let theUrl = e.target.getAttribute('data-url');
  $.ajax({
    url: theUrl
  }).done(paintInfoCharacters);
};



function paintInfoCharacters(json) {
  console.log(json);
  const namePersons = json.name ;

  $('#character-name').html(json.name);
  $('#birth-year').html(json.birth_year);
  $('#hair-color').html(json.hair_color);
  $('#height').html(json.height);
  $('#mass').html(json.mass)
  $('#skin-color').html(json.skin_color);
  $('#eye-color').html(json.eye_color);

};

function loadpage() {
  paintMovie(titleMovie, idEpisode);
  paintInfoCharacters(json)
};

$(document).ready(loadpage);