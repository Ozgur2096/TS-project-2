import dotenv from 'dotenv';
dotenv.config();

console.log(process.env);

const form = document.querySelector('form')!;
// const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  // const enteredAddress = addressInput.value;

  // send address to Google API
}

form.addEventListener('submit', e => {
  searchAddressHandler(e);
});

// console.log(process.env.GOOGLE_API_KEY);
