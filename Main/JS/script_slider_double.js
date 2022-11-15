var slidePictures = document.getElementsByClassName("picture");
var slideButtons = document.getElementsByClassName("nav_button");

var currentElementIndex = 0; // A
var maxNumberOfElements = 5; // MAX*

// * 5+1 "IMITATOR" ELEMEN

function correctIndex(index)
{ 
    if(index<0){return maxNumberOfElements+index;} else
    if(index>maxNumberOfElements-1){return maxNumberOfElements-index;}
    else return index;
}

function showNextElement(){ showElement(currentElementIndex+1);}
function showPrevElement(){ showElement(currentElementIndex-1);}


function showElement(index)
{
    index=correctIndex(index);

    // Hide Current
    slidePictures[currentElementIndex].classList.toggle("hidden");
    slideButtons[currentElementIndex].classList.toggle("active");

    slidePictures[currentElementIndex+1].classList.toggle("hidden");
    slideButtons[correctIndex(currentElementIndex+1)].classList.toggle("active");

    // Show Next Pair
    slidePictures[index].classList.toggle("hidden");
    slideButtons[index].classList.toggle("active");

    slidePictures[index+1].classList.toggle("hidden");
    slideButtons[correctIndex(index+1)].classList.toggle("active");

    currentElementIndex=index;
}
