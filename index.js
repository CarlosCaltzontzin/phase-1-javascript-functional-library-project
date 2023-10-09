function myEach(collection, callback){
  if (Array.isArray(collection)){
    for (let i = 0; i < collection.length; i++){
      callback(collection[i]);
    }
  } 
  else if (typeof collection === 'object' && collection !== null){
    for (const key in collection){
      if (collection.hasOwnProperty(key)){
        callback(collection[key]);
      }
    }
  }
  return collection;
}

function myMap(collection, callback){
  const result = [];

  if (Array.isArray(collection)){
    for (let i = 0; i < collection.length; i++){
      result.push(callback(collection[i]));
    }
  } 
  else if (typeof collection === 'object' && collection !== null){
    for (const key in collection){
      if (collection.hasOwnProperty(key)){
        result.push(callback(collection[key], key));
      }
    }
  }
  return result;
}

function myReduce(collection, callback, acc) {
  let initialValueSet = arguments.length === 3;
  let accumulator = initialValueSet ? acc : undefined;

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (!initialValueSet) {
        accumulator = collection[i];
        initialValueSet = true;
      } 
      else {
        accumulator = callback(accumulator, collection[i], collection);
      }
    }
  } 
  else if (typeof collection === 'object' && collection !== null) {
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        if (!initialValueSet) {
          accumulator = collection[key];
          initialValueSet = true;
        } 
        else {
          accumulator = callback(accumulator, collection[key], collection);
        }
      }
    }
  }
  return accumulator;
}

function myFind(collection, predicate) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  } else if (typeof collection === 'object' && collection !== null) {
    for (const key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key])) {
        return collection[key];
      }
    }
  }

  // If no matching element is found, return undefined
  return undefined;
}

function myFilter(collection, predicate) {
  const result = [];

  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        result.push(collection[i]);
      }
    }
  } else if (typeof collection === 'object' && collection !== null) {
    for (const key in collection) {
      if (collection.hasOwnProperty(key) && predicate(collection[key])) {
        result.push(collection[key]);
      }
    }
  }

  return result;
}

function mySize(collection) {
  if (Array.isArray(collection) || typeof collection === 'string') {
    return collection.length;
  } else if (typeof collection === 'object' && collection !== null) {
    let count = 0;
    for (const key in collection) {
      if (collection.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  }

  return 0; // Return 0 for unsupported types or empty collection
}

function myFirst(array, n) {
  if (!Array.isArray(array)) {
    return undefined; // Return undefined for non-array inputs
  }

  if (typeof n === 'number') {
    return array.slice(0, Math.max(0, n));
  } else {
    return array.length > 0 ? array[0] : undefined;
  }
}

function myLast(array, n) {
  if (!Array.isArray(array)) {
    return undefined; // Return undefined for non-array inputs
  }

  if (typeof n === 'number') {
    return array.slice(-Math.max(0, n));
  } else {
    return array.length > 0 ? array[array.length - 1] : undefined;
  }
}

function myKeys(object) {
  if (typeof object !== 'object' || object === null) {
    return []; // Return an empty array for non-object inputs or null
  }

  return Object.keys(object);
}

function myValues(object) {
  if (typeof object !== 'object' || object === null) {
    throw new Error('Input is not a valid object.');
  }

  return Object.values(object);
}