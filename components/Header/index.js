// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    //create elements
    const headerDiv = document.createElement('div'),
          dateSpan = document.createElement('span'),
          headerH1 = document.createElement('h1'),
          tempSpan = document.createElement('span');

    //add content
    dateSpan.textContent = "March 25, 2019";
    headerH1.textContent = "Lambda Times";
    tempSpan.textContent = "98°";

    //add classes 
    headerDiv.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    //append where needed 
    headerDiv.append(dateSpan);
    headerDiv.append(headerH1);
    headerDiv.append(tempSpan);

    return headerDiv;
}

//grab parent element and append 

const parentHeader = document.querySelector('.header-container');

parentHeader.append(Header());