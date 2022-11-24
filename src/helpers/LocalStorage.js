const LocalStorage = (function (){

  const getData = () => {
    return JSON.parse(localStorage.getItem('VidenEmailSignature')) || {} ;
  }

  const getItem = (id) => {
    const data = getData();
    return data[id] ? data[id] : '';
  }

  const setItem = (id, value) => {
    let data = getData();
    data[id] = value;
    localStorage.setItem('VidenEmailSignature', JSON.stringify(data));
  }

  return {
    getData: getData,
    getItem: getItem,
    setItem: setItem,
  }

})();

export default LocalStorage;