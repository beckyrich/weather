"use strict";
/**
 * Software Developer test.
 *
 * Doing research and making API calls are an important part of what we do at FreightWise.  This test will
 * demonstrate your abilities to:
 *
 * - Make an API call
 * - Research an API
 * - Do basic DOM manipulation
 * - Parse data
 * - Handle errors
 * - Be creative
 *
 * Feel free to ask any questions you may have.  Use a lot of comments, and explain why you are doing things.
 * Don't spend more than 1-2 hours on it - we aren't expecting a finished product, but it should work and look
 * nice.  Feel free to use any third party libraries, and if you do so, explain why you used them instead of
 * built in browser APIs.
 *
 * Instructions:
 * - Use the axios (https://github.com/axios/axios) request library to make an API call to the OpenWeatherMap
 *   API for Current Weather Data using this API key:  25e989bd41e3e24ce13173d8126e0fd6
 *   We've already imported this library to get you started.
 * - Use either async/await or Promises.
 * - Get the weather for Brentwood, TN, and write it to the DOM using the `setResults` method below.  Be
 *   creative and make it look nice.
 * - Handle errors and use the `setError` method below to display the error.  Also make it look nice.
 * - If you find any mistakes in the test, fix them, and leave a comment about what you fixed and why.
 * - Make sure your code is readable and maintainable.
 * - Use plenty of descriptive comments.
 * - Make sure your code runs in the latest version of Google Chrome and Firefox (ES6 is allowed).
 * - Make your code live (GitHub with GitHub pages works nice).
 * - Send a link to your finished test to dev-team-jobs@freightwisellc.com.
 *
 * Feel free to add your own twist to it (completely optional).  Here are a few ideas:
 * - Sign up for NewsAPI.org and get the Top Headlines and show them along with the weather.
 * - Use the browser location API to get the user's current location, and show that location's weather.
 * - Show a satellite map of the weather in Brentwood.
 * - Request a user's phone number and send them an SMS with the weather.
 */
class Test {
  constructor() {
    this.testResults = document.getElementsByClassName("test-results");
  }

  async run() {
    console.log(new Date().toISOString(), "[Test]", "Running the test");

    // Make the API call and handle the results through axios docs.
    // Created a variable to pass through the axios call.
    // Googled lat & long for Brentwood, then changed api call to zip code and added imperial units at end for Farenheit
    // API Key provided in the instructions had a 401 error, after several attempts I created my own key

    const url =
      "https://api.openweathermap.org/data/2.5/weather?zip=37027&appid=25e989bd41e3e24ce13173d8126e0fd6&units=imperial";

    /* used a promise to call the url and then handle the errors. I'm not as comfortable with async/await yet. I did try a few times and was unsuccessful. This was the cleanest way to call the data and handle the errrors. I am continuing to read documentation on how to use async/await more effeciently since I know it tends to be preferred over promises */
    axios.get(url).catch(this.setError).then(this.setResults);
  }

  setError(error) {
    console.log(error);
    /* unable to currently get this to display to DOM. It is successfully showing in the console.
    The way I tested this was by taking away the API key when running this locally. 
    Still researching answer of how to get this to display correctly  */
    this.testResults.innerHtml = `<p class="error">An error has occurred: ${error}</p>`;
  }

  setResults(response) {
    /* Used getElementById and innerText/innerHTML to populate the city name and temperature and manipulate the DOM.
    This was the way I could populate this quickly when the data was called through axios. I left the original line of code below that I changed*/
    // this.testResults.innerHTML = (message || '').toString();
    console.log(response);
    document.getElementById("city").innerText = `${response.data.name}`;
    document.getElementById(
      "temperature"
    ).innerHTML = `<h3>Current Temperature:</h3> <span class="temp">${Math.floor(
      response.data.main.temp
    )}°F</span>`;
  }
}
