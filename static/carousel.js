

let c1, c2,c3 =null

class CarouselData{
    constructor() {
        this.text = "";
        this.imgSrc = "";
    }
}


class CarouselItem {
    constructor(rawElement) {
        this.rawElement = rawElement;
        rawElement.style.animationP
        this.img = rawElement.children.item(0);
        this.p = rawElement.children.item(1);
        this.rawElement.addEventListener("click", this.onClick);

    }
    setText(text) {
        this.p.textContent = text;
    }
    getText()
    {
        return this.p.textContent;
    }
    setImg(URL){
        this.img.src=URL;
    }
    change(time, newData)
    {
        this.rawElement.style.animation = "none";
        var raw = this.rawElement;
        setTimeout(function() {
        raw.style.animation = 'fadeOut 2s';
        console.log("style change on " +raw);
    }, 10);
        raw.addEventListener("animationend", this.onFadeOut);
    }
    onFadeOut()
    {
        console.log("fade out complete");
        this.style.animation = "none";
        var raw = this;
        setTimeout(function() {
        raw.style.animation = 'fadeIn 2s';
        raw.removeEventListener("animationend", this.onFadeOut);
        console.log("style change on " +this);
    }, 10);
    }
    onClick()
    {
        console.log("click reg");
        let me = this;
        this.style.animation = 'none';
        setTimeout(function() {
        me.style.animation = 'fadeIn 2s';
    }, 10);
    }
}


function setup()
{
    c1 = new CarouselItem(document.getElementById("cItem1"));
    c2 = document.getElementById("cItem2");
    c3 = document.getElementById("cItem3");
    c1.setText(c1.getText()+" C1");
    c1.setImg("/static/images/briefcase.svg");
    console.log("C1: " + c1 + "\nC2: " + c2+ "\nC3: " + c3);

}

function checkReadyState() {
if (document.readyState === 'complete') {
console.log('Fully loaded');
setup();
} else {
setTimeout(checkReadyState, 100);
}
}
checkReadyState();