$(document).ready(function(){
    imageSlider();
});

$(window).resize(function() {
    imageSlider();
});

const sliderImg = $(".event-slider-img img");
const prevBtn = $("#prevBtn");
const nextBtn = $("#nextBtn");

let currentIndex = 0;

function imageSlider(){
    $.each(sliderImg, function(index, image){
        $(image).css({"display": "none", "opactiy": "0"})
    });

    sliderImg.eq(currentIndex).css({"display": "block", "opactiy": "1"})

    prevBtnClicked();
    nextBtnClicked();
}

function prevBtnClicked(){
    prevBtn.on("click", function(){
        const prevIndex = currentIndex;
        currentIndex--;

        if(currentIndex < 0){
            currentIndex = sliderImg.length -1;
        }

        transistionImgSlider(prevIndex, currentIndex);
    });
}

function nextBtnClicked(){
    nextBtn.on("click", function(){
        const prevIndex = currentIndex;
        currentIndex++;

        if(currentIndex >= sliderImg.length){
            currentIndex = 0;
        }

        transistionImgSlider(prevIndex, currentIndex);
    });
}

function transistionImgSlider(prevIndex, currentIndex){
    const prevElement = sliderImg.eq(prevIndex);
    const nextElement = sliderImg.eq(currentIndex);

    prevElement.animate({opacity: 0}, 
                        {   
                            duration: 500,
                            complete: function() {
                            prevElement.css("display", "none");
                            nextElement.css("display", "block");
                            nextElement.animate({opacity: 1});
                        }
                    });
}