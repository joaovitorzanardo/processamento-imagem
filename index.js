function converter() {
    let fromSelect = document.getElementById("from-select");
    let toSelect = document.getElementById("to-select");

    let fromSelectValue = fromSelect.options[fromSelect.selectedIndex].value;
    let toSelectValue = toSelect.options[toSelect.selectedIndex].value;
    
    setColor(fromSelectValue);

    if (fromSelectValue == 'rgb' && toSelectValue == 'hsv') {
        rgbToHsv();
        return;
    }
    
    if (fromSelectValue == 'hsv' && toSelectValue == 'rgb') {
        hsvToRgb();
        return;
    }

    if (fromSelectValue == 'rgb' && toSelectValue == 'cmyk') {
        rgbToCmyk();
        return;
    }

    if (fromSelectValue == 'cmyk' && toSelectValue == 'rgb') {
        cmykToRgb();
        return;
    }

    alert("Não foi possível realizar a conversão de " + fromSelectValue + " para " + toSelectValue + "!");
}

function setColor(fromSelectValue) {

}


function rgbToHsv() {
    let red = parseInt(document.getElementById("input-red").value);
    let green = parseInt(document.getElementById("input-green").value);
    let blue = parseInt(document.getElementById("input-blue").value);

    let arr = [red, green, blue].sort(function (a,b) {return a - b})

    let max = arr[2]
    let min = arr[0]

    console.log(max)
    console.log(min)

    let v = max;
    let s = (max - min) / max;

    let h = 0;

    if (max == red && green >= blue) {
        h = 60 * (green - blue) / (max - min)
    } else if (max == red && green < blue) {
        h = 60 * (green - blue) / (max - min) + 360
    } else if (max == green) {
        h = 60 * (blue - red) / (max - min) + 120
    } else if (max == blue) {
        h = 60 * (red - green) / (max - min) + 240
    }

    document.getElementById('input-hue').value = Math.round(h);
    document.getElementById('input-sat').value = Math.round(s * 100);
    document.getElementById('input-val').value = Math.round(v);
}

function hsvToRgb() {
    
}

function rgbToCmyk() {
    
}

function cmykToRgb() {
    
}

