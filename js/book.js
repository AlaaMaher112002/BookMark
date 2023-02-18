var bookNameInput = document.getElementById('name');
var bookUrLInput = document.getElementById('url');

var books = [];

if (JSON.parse(localStorage.getItem('bookList')) != null) {
    books = JSON.parse(localStorage.getItem('bookList'));
    display()
}

addBtn.onclick = function () {
    addProduct();
    display();
    clearForm();
}


function addProduct() {
    var book = {
        name: bookNameInput.value,
        url: bookUrLInput.value,

    }
    books.push(book);
    localStorage.setItem('bookList', JSON.stringify(books));
}


function display() {
    var cartona = '';
    for (var i = 0; i < books.length; i++) {
        cartona += `<tr>
                            <td> <h4 id="h4">${books[i].name}</h4></td><br>       
                             
                                                  
                            <td><a href='${books[i].url}'> <button class='btn vist btn-info'>visit</button>  </a></td>
                            <td><button class='btn btn-danger' onclick="deletebook(${i})">delete</button></td>
                           
                    </tr>`;
    }
    document.getElementById('tableBody').innerHTML = cartona;
}


function deletebook(index) {
    books.splice(index, 1)
    display();
}


bookNameInput.onkeyup=function(){
    var nameRegex=/^[A-z a-z 0-9 \s]{1,}$/
    if(nameRegex.test(bookNameInput.value)){
        addBtn.removeAttribute('disabled');
        bookNameInput.classList.add('is-valid');
        bookNameInput.classList.remove('is-invalid');
        // nameAlert.classList.add('d-none');
    }else{
        addBtn.disabled='true';
        bookNameInput.classList.add('is-invalid');
        bookNameInput.classList.add('is-valid');
        // nameAlert.classList.remove('d-none');
    }
}



bookUrLInput.onkeyup=function(){

    var nameRegex=/[A-z a-z \s]/;
    if(urlRegex.test(bookUrLInput.value)){
        addBtn.removeAttribute('disabled');
        bookUrLInput.classList.add('is-valid');
        bookUrLInput.classList.remove('is-invalid');
        // nameAlert.classList.add('d-none');
    }else{
        addBtn.disabled='true';
        bookUrLInput.classList.add('is-invalid');
        bookUrLInput.classList.add('is-valid');
        // nameAlert.classList.remove('d-none');
    }
}