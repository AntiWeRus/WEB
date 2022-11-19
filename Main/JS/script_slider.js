var slidePictures = document.getElementsByClassName("picture");
var slideButtons = document.getElementsByClassName("nav_button");

var currentElementIndex = 0; // A
var maxNumberOfElements = 5; // MAX


function correctIndex(index)
{ 
    if(index<0){return maxNumberOfElements+index;} else
    if(index>maxNumberOfElements-1){return maxNumberOfElements-index;}
    else return index;
}

function showNextElement(){ showElement(currentElementIndex+1);}
function showPrevElement(){ showElement(currentElementIndex-1);}


function hideElement(index)
{
    slidePictures[index].classList.toggle("hidden");
    slideButtons[index].classList.toggle("active");
}

function showElement(index)
{
    console.log("SHOW",correctIndex(index),"HIDE",correctIndex(currentElementIndex));

    hideElement(correctIndex(currentElementIndex));
    index=correctIndex(index);
    
    slidePictures[index].classList.toggle("hidden");
    slideButtons[index].classList.toggle("active");

    currentElementIndex=index;
}

