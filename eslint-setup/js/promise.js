let getBooks = new Promise((resolve, reject) => {
    resolve('book details');
});

getBooks()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
