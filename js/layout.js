function setToViewportWidth(element)
{

    
    var width = window.innerWidth;
    document.getElementById("vpw").textContent = "View Port Width: " + width;
    document.body.style.width = width + "px";
}

function setWidth(element, width)
{
    console.log("Attempt to set width of " + element + " to " + width)
    element.style.width = width + "px";
}