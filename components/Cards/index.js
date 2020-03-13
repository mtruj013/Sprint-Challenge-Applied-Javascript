// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response =>{
    //console.log(response);
    let articles = Object.values(response.data);
    console.log(response);
    console.log(articles);

    // articles.forEach(element => {
        
    // });
})
.catch(error =>{
    console.log("teh data was not recieved", error);
})

//grab parent element
const cardsContainer = document.querySelector('.cards-container');

function cardMaker (data){

    //create elements
    const contianerDiv = document.createElement('div'),
          headline = document.createElement('div'),
          authorDiv = document.createElement('div'),
          imgContainer =  document.createElement('div'),
          img = document.createElement('img'),
          authorSpan = document.createElement('span');


    //add content
    headline.textContent = data;
    img.src = data.authorPhoto;
    authorSpan.textContent =`By: ${authorName}`;

    //add classes
    contianerDiv.classList.add('card');
    headline.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container');

    //append 
    contianerDiv.append(headline);
    contianerDiv.append(authorDiv);
    authorDiv.append(imgContainer);
    imgContainer.append(img);
    authorDiv.append(authorSpan);
    
    cardsContainer.append(contianerDiv);


    return contianerDiv;
}