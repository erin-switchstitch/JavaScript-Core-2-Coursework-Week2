function readingList(books) {

  document.getElementById("content").style.display = `flex`;
  document.getElementById("content").style.justifyContent = `space-around`;

  const targetElement = document.getElementById('content');

  for (let index = 0; index < books.length; index++) {
    const indexedElement = books[index];
    console.log(indexedElement)
    //targetElement.innerHTML += `<div id='bookDivNum${index}' class='allBookDivs'>`
    targetElement.innerHTML += `<div id='bookDivNum${index}' class='allBookDivs'>
                                <p>${indexedElement.title} - ${indexedElement.author}</p>
                                <img src='${indexedElement.imageUrl}'>
                                </div>`;
    //targetElement.innerHTML += `</div>`

    const targetNewClass = document.querySelectorAll(".allBookDivs");
    //console.log(targetNewClass);

    targetNewClass.forEach(function(currentDiv){
      //console.log(currentDiv);
      //currentDiv.style.backgroundColor = 'blue';
      currentDiv.style.height = '230px';
      currentDiv.style.width = '350px';
      currentDiv.style.border = 'black 2px solid';
    })

    const targetNewElement = document.querySelector(`#bookDivNum${index}`);
    //console.log(targetNewElement);

    if (indexedElement.alreadyRead === true){
        targetNewElement.style.backgroundColor = 'green';
    } else {
        targetNewElement.style.backgroundColor = 'red'
    }
  }
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    imageUrl : "https://m.media-amazon.com/images/I/71JoY2BvpzS._AC_SS130_.jpg"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    imageUrl : "https://m.media-amazon.com/images/I/913WsCQUc6L._AC_SS130_.jpg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    imageUrl : "https://m.media-amazon.com/images/I/91V2tZ2Sd2L._AC_SS130_.jpg"
  }
];

readingList(books);