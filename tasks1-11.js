/**
 * Returns the Fibonacci series up to a certain number.
 *
 * @param {number} n
 * @return {Array}
 *
 * @example
 *   8 => [0, 1, 1, 2, 3, 5]
 *   610   => [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377 ]
 */
function fibonacci(n) {
    if (n < 1) {
        return [];
    }
    const result = [0, 1];
    let i = 0;
    do {
        result.push(result[i] + result[i + 1]); 
        i += 1;      
    } while (result[i] + result[i + 1] < n)

    return result;
};

/**
 * Returns the unique elements from two arrays.
 *
 * @param {Array} array1
 * @param {Array} array2
 * @return {Array}
 *
 * @example
 *   [1, 2, 3], [100, 2, 1, 10] => [1, 2, 3, 10, 100]
 *   [1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]   => [1, 2, 3, 4, 5, 6]
 */
function difference(array1, array2) {
    array1 = array1.concat(array2).flat(Infinity);
    return Array.from(new Set(array1));
}

/**
 * Returns "Mached" if fragment the string contains a fragment, othewise "Not Mached".
 *
 * @param {string} string
 * @param {string} fragment
 * @return {string}
 *
 * @example
 *   'JavaScript Exercises', 'exercises' => "Matched"
 *   'JavaScript Exercises', 'Exercises' => "Matched"
 *   'JavaScript Exercises', 'Exercisess' => "Not Matched"
 */
function caseInsensitiveSearch(string, fragment) {
    string = string.toLowerCase();
    fragment = fragment.toLowerCase();
    if (string.includes(fragment))
        return "Mached";
    else
        return "Not Mached";
}

/**
 * Returns a copy of the object where the keys have become the values and the values the keys.
 *
 * @param {Object} obj
 * @return {Object}
 *
 * @example
 *   {a: "b", c: "d"} => { b: 'a', d: 'c' }
 *   {1: "b", 2: "d"} => { b: '1', d: '2' }
 *   [5,6,7,8] => { '4': 'length', '5': '0', '6': '1', '7': '2', '8': '3' }
 */
function swapKeysValues(obj) {
    const result = new Object();
    const keys = Object.getOwnPropertyNames(obj);
    keys.forEach(key => {
        result[obj[key]] = key;
    });

    return result;
}

/**
 * Converts an object into a list of `[key, value]` pairs
 *
 * @param {Object} obj
 * @return {Array}
 *
 * @example
 *   {a: "b", c: "d"} => [[a, b], [c, d]]
 *   {1: "b", 2: "d"} => [[1, b], [2, d]]
 */
function convertObjIntoKeyValuePairs(obj) {
    return Object.entries(obj);
}

/**
 * Converts an object into a list of `[key, value]` pairs
 *
 * @param {String} string
 * @param {String} symbol
 * @return {String}
 *
 * @example
 *   'helloWorld' => hello world
 *   'helloWorld','-' => hello-world
 *   'helloWorld','_' => hello_world 
 */
function uncamelize(string, symbol) {
    if (symbol === undefined) {
        symbol = ' ';
    }        
    return string.replace(/[A-Z]/, letter => symbol + letter.toLowerCase());
}

/**
 * Returns a count of the occurrence of a substring in a string.
 *
 * @param {String} string
 * @param {String} symbol
 * @return {String}
 *
 * @example
 *   'hello hello world world', 'hello' => 2
 *   'hello hello world world', ' ' => 3
 *   '','_' => 0
 */
function countSubst(string, substr) {
    if (substr === '')
        return 0;

    let index = 0;
    let count = 0;
    while (index !== -1) {
        index = string.indexOf(substr, index);
        if (index !== -1) {
            count += 1;
            index += 1;
        }
    }
    return count;
}

/**
 * Flats an array and sorts it ( by ascending ).
 *
 * @param {Array} array
 * @return {Array}
 *
 * @example
 *   [1, 2, 1000, 300, [400, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6]] => [ 1, 1, 2, 2, 3, 3, 4, 5, 6, 10, 11, 12, 300, 400, 1000 ]
 */
function flatAndSort(array) {

    function flat(arr) {
        return arr.reduce((acc, value) => {
            if (Array.isArray(value)) {
                return acc.concat(flat(value));
            }
            return acc.concat(value);
        }, []);
    }

    return flat(array).sort((a, b) => a - b);
}

/**
 * Deletes null and undefined values from the array.
 *
 * @param {Array} array
 * @param {Function} callback
 *
 * @example
 *   [1, null, 2, undefined], (data) => console.log(data) => [1, 2]
 */
function deleteNullAndUndefined(array, callback) {
    const del = new Promise(function(resolve, reject) {
        setTimeout(function(){
            let result;
            try {
                result = array.filter(value => typeof value !== 'undefined' && value !== null);
            } 
            catch(e) {
              reject(e);
            }
            resolve(result);
        }, 5000);
    });

    del.then(arr => callback(arr)).catch(error => callback(error));
}

/**
 * Returns Promise, which is resolved after 6 seconds.
*/
function resolveAfter6Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 6000);
    });
  }

/**
 * Runs a given array of promises in series.
 * @param {Array} array
 */
function series(array) {
    array.reduce((prev, value) => {
        return prev.then(value.then());
    });
}