'use strict';

function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then((responseJson) => {
      console.warn(responseJson);
      if (responseJson.code === 404) {
        throw Error(responseJson.message);
      } 
      displayResults(responseJson);
    })
    .catch((error) => {
      alert(error.message)
    });
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage($('#breed').val());
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});