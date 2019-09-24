// window.onload = function ()
// {
//       Javascript code goes here
//   } 
window.onload = function () {
    var surCon = document.querySelectorAll(".surCon");
    var squirSelctor = document.querySelectorAll(".squir");


    var imgContainer1 = [
        '<i class="far fa-angry" value = 1></i>',
        '<i class="fas fa-kaaba" value = 2></i>',
        '<i class="fas fa-bicycle" value = 3></i>',
        '<i class="fas fa-car-side" value = 4></i>',
        '<i class="fas fa-cat" value = 5></i>',
        '<i class="fas fa-child" value = 6></i>',
        '<i class="fas fa-dollar-sign" value = 7></i>',
        '<i class="far fa-grin-beam-sweat" value = 8></i>',
        '<i class="far fa-heart" value = 9></i>',
        '<i class="fas fa-horse" value = 0></i>'
    ];
    var imgContainer2 = [
        '<i class="far fa-angry" value = 1></i>',
        '<i class="fas fa-kaaba" value = 2></i>',
        '<i class="fas fa-bicycle" value = 3></i>',
        '<i class="fas fa-car-side" value = 4></i>',
        '<i class="fas fa-cat" value = 5></i>',
        '<i class="fas fa-child" value = 6></i>',
        '<i class="fas fa-dollar-sign" value = 7></i>',
        '<i class="far fa-grin-beam-sweat" value = 8></i>',
        '<i class="far fa-heart" value = 9></i>',
        '<i class="fas fa-horse" value = 0></i>'
    ];

    var number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // imgContainer = imgContainer.concat(imgContainer);
    //number = number.concat(number);


    function imgContainer1Call(i) {
        let boxImge = Math.floor(Math.random() * imgContainer1.length);
        squirSelctor[i].innerHTML = imgContainer1[boxImge];
        //squirSelctor[i].value = boxImge;
        //squirSelctor[i].style.color = "black";
        imgContainer1.splice(boxImge, 1);
        number1.splice(boxImge, 1);
    }
    function imgContainer2Call(i) {
        let boxImge = Math.floor(Math.random() * imgContainer2.length);
        squirSelctor[i].innerHTML = imgContainer2[boxImge];
        //squirSelctor[i].value = boxImge;
        //squirSelctor[i].style.color = "black";
        imgContainer2.splice(boxImge, 1);
        number2.splice(boxImge, 1);
    }


    for (let i = 0; i < 20; i++) {
        let rand = Math.floor(Math.random() * 2);
        if (rand === 1) {
            if (imgContainer1.length) {
                imgContainer1Call(i);
            } else {
                imgContainer2Call(i);
            }
        } else {
            if (imgContainer2.length) {
                imgContainer2Call(i);

            } else {
                imgContainer1Call(i);
            }
        }
    }

    var f;
    var ff = [];
    var s;
    var clickNo = 1;

    var fontawesome = document.querySelectorAll("i");
    //console.log(fontawesome[1].value);
    //squirSelctor.forEach(function (selectedBox) {
    for (let i = 0; i < squirSelctor.length; i++) {
        squirSelctor[i].addEventListener("click", function () {
            if (clickNo === 1) {
                f = fontawesome[i].className;
                ff.push(this);
                console.log(f);
                clickNo = 2;
            } else {
                s = fontawesome[i].className;
                ff.push(this);
                console.log(s);
                clickNo = 1;

                if (f === s) {
                    ff[0].style.background = "red";
                    ff[1].style.background = "red";
                    ff = [];
                } else {
                    console.log(f + "  -Wrong-  " + s);
                    ff = [];
                }
            }

        });
    };


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
}