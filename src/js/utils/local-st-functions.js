function saveDataToLocalSt(key, value) {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function loadDataFromLocalSt(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

function removeDataFromLocalSt(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

export { saveDataToLocalSt, loadDataFromLocalSt, removeDataFromLocalSt };
