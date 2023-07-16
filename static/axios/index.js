// ⛔️ Uncaught TypeError: Failed to resolve module specifier "axios". Relative references must start with either "/", "./", or "../".
import axios from 'axios';

async function getUser() {
  console.log('start fetching')
  try {
    const response = await axios.get(
      'https://randomuser.me/api/',
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
}

console.log(getUser());