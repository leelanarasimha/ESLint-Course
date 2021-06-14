let getBooks = new Promise((resolve) => {
    resolve('Books Git');
});

getBooks()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });
