var squirSelctor = document.querySelectorAll(".squir");
var imgContainer1 = [
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
var imgContainer2 = [
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

var number1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var number2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// imgContainer = imgContainer.concat(imgContainer);
//number = number.concat(number);


function imgContainer1Call(i) {
    let boxImge = Math.floor(Math.random() * imgContainer1.length);
    squirSelctor[i].innerHTML = imgContainer1[boxImge];
    squirSelctor[i].value = boxImge;
    imgContainer1.splice(boxImge, 1);
    number1.splice(boxImge, 1);
}
function imgContainer2Call(i) {
    let boxImge = Math.floor(Math.random() * imgContainer2.length);
    squirSelctor[i].innerHTML = imgContainer2[boxImge];
    squirSelctor[i].value = boxImge;
    imgContainer2.splice(boxImge, 1);
    number2.splice(boxImge, 1);
}


for (let i = 0; i < 2; i++) {
    //let rand = 0;//Math.floor(Math.random() * 2);
    //if (rand === 1) {
    if (imgContainer1.length) {
        imgContainer1Call(i);
        console.log("error1");
    }  else {
        console.log("error3");

    }

    //     } else {
    //         if (!imgContainer2.length) {
    //             imgContainer2Call(i);
    //         }else{
    //             imgContainer1Call(i);
    //         }
    //     }
    }

    var f;
    var s;
    var clickNo = 1;
    squirSelctor.forEach(function (selectedBox1) {
        selectedBox1.addEventListener("click", function () {
            if (clickNo === 1) {
                f = this.value;
                //f.style.color = "#fff";
                clickNo = 2;
            } else {
                s = this.value;
                //s.style.color = "red";
                clickNo = 1;
                if (f === s) {
                    console.log(f + "  -1-  " + s);
                    // f.style.color = "pink";
                    // s.style.color = "pink";
                } else {
                    console.log(f + "  -2-  " + s);
                    // f.style.color = "rgb(24, 24, 24)";
                    // s.style.color = "rgb(24, 24, 24)";
                }
                /* جاري تجربه 
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