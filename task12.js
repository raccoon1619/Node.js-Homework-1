const authCode = '713343203575424550183x70959';

/**
 * Display the information about Minsk, Madrid, Rome in format: city - country.
 *
 * @returns {Promise}
 */
function getCityAndCountry() {
  return Promise.all(
    ['Minsk', 'Madrid', 'Rome'].map((city) => fetch(`http://geocode.xyz/${city}?json=1&auth=${authCode}`))
 )
 .then((responses) => responses.forEach((response) => response.json().then((data) => console.log(`${data.standard.city} - ${data.standard.countryname}`))))
 .catch((error) => console.log(error))
}

/**
 * Displays the country of Paris, Nice.
 *
 * @returns {Promise}
 */
 function getCountry() {
   return Promise.race(
    ['Paris', 'Nice'].map((city) => fetch(`http://geocode.xyz/${city}?json=1&auth=${authCode}`))
  )
  .then(response => response.json().then((data) => console.log(`${data.standard.countryname}`)))
  .catch((error) => console.log(error))
 }

/**
 * Returns a promise that resolves any cities' names after 3 second.
 *
 * @param {Array} names
 * @returns {Promise}
 */
function namesAfter3Sec(names) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(names), 3000);
  });
}

/**
 * Displays the countries of the giving cities.
 *
 * @param {Array} names
 * @returns {Promise}
 */
function getCountries(names) {
    return namesAfter3Sec(names).then((cities) => Promise.all(
      cities.map((city) => fetch(`http://geocode.xyz/${city}?json=1&auth=${authCode}`))
    ))
    .then((responses) => responses.forEach((response) => response.json().then((data) => console.log(`${data.standard.countryname}`))))
    .catch((error) => console.log(error))
   }

getCityAndCountry();
getCountry();
getCountries(['Moscow', 'Kiev', 'Mogilev']);

