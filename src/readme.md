api.post('/login', { username, password }).then((response) => {
    console.log(response.data);
}).catch((err) => {
    console.log("Deu merda!")
})