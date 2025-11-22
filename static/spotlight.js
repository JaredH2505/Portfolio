
let items = []
let itemIndex =0;
let intervalID = null;

function initSpotlight()
{
    items = document.querySelectorAll(".projectSpotlight div");
    if(items.length >= 1)
    {
        for(i =0;i<items.length;i++)
        {
            items[i].classList.add("spotlightItem");
        }
        showSpotLight(0);
        intervalId = setInterval(nextSpotLight, 10000);
    }
}

function showSpotLight(index){

    if(index >= items.length){

        itemIndex = 0;

    }

    else if(index < 0){

        itemIndex = items.length - 1;

    }

    items.forEach(item => {

        item.classList.remove("spotLightDisplay");

    });

    items[itemIndex].classList.add("spotLightDisplay");

}



function nextSpotLight(){

    itemIndex++;

    showSpotLight(itemIndex);

}



function checkReadyState() {
if (document.readyState === 'complete') {
console.log('Fully loaded');
initSpotlight();
} else {
setTimeout(checkReadyState, 100);
}
}
checkReadyState();