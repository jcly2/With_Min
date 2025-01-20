function SmartPhoneUsage(sliderId, valueId, iconId) { 
    const slider = document.getElementById(sliderId); 
    const sliderValue = document.getElementById(valueId);
    const icon = document.getElementById(iconId);

    sliderValue.textContent = `${slider.value} hour${slider.value > 1 ? 's' : ''}`; 
    if(slider.value > 1)
        icon.src = '../img/angry.png';
    else 
        icon.src = '../img/hmm.png';  
}

const sliders = [ 
    { slider: "usage-slider1", value: "slider-value1", icon: "icon1" }, 
    { slider: "usage-slider2", value: "slider-value2", icon: "icon2" }, 
    { slider: "usage-slider3", value: "slider-value3", icon: "icon3" } 
]

for (let i = 0; i < sliders.length; i++) { 
    const slider = document.getElementById(sliders[i].slider); 
    slider.addEventListener("input", 
        function() { 
            SmartPhoneUsage(sliders[i].slider, sliders[i].value, sliders[i].icon); 
        }
    ); 
}
