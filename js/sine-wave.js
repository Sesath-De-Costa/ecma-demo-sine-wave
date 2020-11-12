var button = document.getElementById('button');
button.addEventListener('click', function () {
    var showArea = document.getElementById('wave-scope');
    var divWidth = showArea.offsetWidth;

    var input = document.getElementById('text-input');
    var inputValue = input.value;
    var xchange = divWidth / inputValue.length;

    var radius = 100;
    var angleIncrement = 2 * Math.PI / (inputValue.length / 2);
    var angle = 0;
    var yposition = showArea.offsetHeight / 2;
    console.log(yposition);
    var xposition = -1 * (radius * Math.cos(angle));
    var x = radius * Math.cos(angle);

    for (var i = 0; i < inputValue.length; i++) {
        var spanElement = document.createElement('span');
        spanElement.className = 'char';
        spanElement.innerText = inputValue.charAt(i);
        var stage = document.querySelector('#wave-scope');
        stage.append(spanElement);

        var y = radius * Math.sin(angle);
        if (4 * Math.PI > angle > 2 * Math.PI) {
            xposition = -1 * (radius * Math.cos(angle));
        }
        spanElement.style.left = xposition + x + "px";
        spanElement.style.top = yposition + y + "px";

        if (x + xposition == 0) {
            angle = Math.PI;
        }
        angle += angleIncrement;
        x = x + xchange;
    }
})

