var squirSelctor = document.querySelectorAll(".squir");
var imgContainer = [
    /*'<i class="far fa-angry"></i>',
    '<i class="fas fa-kaaba"></i>',
    '<i class="fas fa-bicycle"></i>',
    '<i class="fas fa-car-side"></i>',
    '<i class="fas fa-cat"></i>',
    '<i class="fas fa-child"></i>',
    '<i class="fas fa-dollar-sign"></i>',
    '<i class="far fa-grin-beam-sweat"></i>',
    '<i class="far fa-heart"></i>',*/
    '<i class="fas fa-horse"></i>'
];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

imgContainer = imgContainer.concat(imgContainer);
number = number.concat(number);
for (let i = 0; i < 2; i++) {

    let boxImge = Math.floor(Math.random() * imgContainer.length);

    let s = (squirSelctor[i].innerHTML = imgContainer[boxImge]);
    console.log(s);
    //squirSelctor[i].innerHTML = imgContainer[boxImge];
    imgContainer.splice(boxImge, 1);
    number.splice(boxImge, 1);
}


var f;
var s;
var clickNo = 1;
squirSelctor.forEach(function (selectedBox1) {
    selectedBox1.addEventListener("click", function () {
        if (clickNo === 1) {
            f = this;
            f.style.color = "#fff";
            clickNo = 2;
        } else {
            s = this;
            s.style.color = "red";
            clickNo = 1;
            if (f == s) {
                f.style.color = "pink";
                s.style.color = "pink";
            } else {
                f.style.color = "rgb(24, 24, 24)";
                s.style.color = "rgb(24, 24, 24)";
            }
            /*console.log(f + "  ---  " + s);
            جاري تجربه 
            document.querySelectorAll
            */
        }

    });

});


/*
<i class="fas fa-bicycle"></i>
<i class="fas fa-kaaba"></i>
<i class="far fa-angry"></i>
<i class="fas fa-car-side"></i>
<i class="fas fa-cat"></i>
<i class="fas fa-child"></i>
<i class="fas fa-dollar-sign"></i>
<i class="far fa-grin-beam-sweat"></i>
<i class="far fa-heart"></i>
<i class="fas fa-horse"></i>
*/