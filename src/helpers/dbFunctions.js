const databaseURL =
  'https://auth-development-9bd72-default-rtdb.europe-west1.firebasedatabase.app';

export function loadTextFromDB(uid) {
  return fetch(`${databaseURL}/users/${uid}.json`).then((response) =>
    response.json()
  );
}

export function insertNewField(uid) {
  fetch(`${databaseURL}/users/${uid}.json`, {
    method: 'POST',
    body: JSON.stringify('lead'),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Data added successfully. Auto-generated ID:', data.name);
    })
    .catch((error) => {
      console.error('Error adding data:', error);
    });
}
