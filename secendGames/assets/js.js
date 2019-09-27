// window.onload = function ()
// {
//       Javascript code goes here
//   } 
window.onload = function () {
    var surCon = document.querySelectorAll(".surCon");
    var squirSelctor = document.querySelectorAll(".squir");


    var imgContainer1 = [
        '<i class="far fa-angry"></i>',
        '<i class="fas fa-kaaba"></i>',
        '<i class="fas fa-bicycle" ></i>',
        '<i class="fas fa-car-side" ></i>',
        '<i class="fas fa-cat" ></i>',
        '<i class="fas fa-child" ></i>',
        '<i class="fas fa-dollar-sign" ></i>',
        '<i class="far fa-grin-beam-sweat" ></i>',
        '<i class="far fa-heart" ></i>',
        '<i class="fas fa-horse" ></i>'
    ];
    var imgContainer2 = [
        '<i class="far fa-angry" ></i>',
        '<i class="fas fa-kaaba" ></i>',
        '<i class="fas fa-bicycle" ></i>',
        '<i class="fas fa-car-side" ></i>',
        '<i class="fas fa-cat" ></i>',
        '<i class="fas fa-child" ></i>',
        '<i class="fas fa-dollar-sign" ></i>',
        '<i class="far fa-grin-beam-sweat"></i>',
        '<i class="far fa-heart" ></i>',
        '<i class="fas fa-horse" ></i>'
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

    for (let i = 1; i < squirSelctor.length + 1; i++) {
        squirSelctor[i - 1].value = i;

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

    //     var firstValue;
    //     var arrValue = [];
    //     var secondValue;
    //     var clickNo = 1;

    //     var fontawesome = document.querySelectorAll("i");
    //     //console.log(fontawesome[1].value);
    //     //squirSelctor.forEach(function (selectedBox) {
    //     for (let i = 0; i < squirSelctor.length; i++) {
    //         squirSelctor[i].addEventListener("click", function () {
    //             if (clickNo === 1) {
    //                     firstValue = fontawesome[i].className;
    //                     console.log(arrValue);
    //                     arrValue.push(this);
    //                     console.log(arrValue.length + " onw");
    //                     clickNo = 2;
    //             } else {
    //                 if (arrValue[0].valu <=1) {
    //                     secondValue = fontawesome[i].className;
    //                     arrValue.push(this);
    //                     clickNo = 1;

    //                     if (firstValue === secondValue) {
    //                         arrValue[0].style.background = "red";
    //                         arrValue[1].style.background = "red";

    //                     } else {
    //                         console.log(firstValue + "  -Wrong-  " + secondValue);
    //                     }
    //                 }
    //                 else {
    //                     alert("Get onther");
    //                 }
    //                 arrValue = [];
    //             }

    //         });
    //     };


    //     /*
    //     <i class="fas fa-bicycle"></i>
    //     <i class="fas fa-kaaba"></i>
    //     <i class="far fa-angry"></i>
    //     <i class="fas fa-car-side"></i>
    //     <i class="fas fa-cat"></i>
    //     <i class="fas fa-child"></i>
    //     <i class="fas fa-dollar-sign"></i>
    //     <i class="far fa-grin-beam-sweat"></i>
    //     <i class="far fa-heart"></i>
    //     <i class="fas fa-horse"></i>
    //     */

    var firstValue;
    var arrValue = [];
    var secondValue;
    var clickNo = 1;
    var values = 0;
    const clicked1 =d ;
    const clicked2 =dd ;

    var fontawesome = document.querySelectorAll("i");
    for (let i = 0; i < squirSelctor.length; i++) {
        squirSelctor[i].addEventListener("click", function () {
            const clicked1 =squirSelctor[i].value;
            if (!clicked1) {
                //console.log(this.value + " True " + clicked1);
                clicked1 = squirSelctor[i].value;
                firstValue = fontawesome[i].className;
                squirSelctor[i].style.color = "red";
                arrValue.push(firstValue);
                console.log(firstValue + " clicked1");

            } else if (!clicked2) {
                clicked2 = squirSelctor[i].value;
                secondValue = fontawesome[i].className;
                arrValue.push(this);
                squirSelctor[i].style.color = "green";
                console.log(secondValue + " clicked2");

            } else {
                for (let i = 0; i < squirSelctor.length; i++) { }
                if (squirSelctor[i].value == clicked1) {
                    console.log(squirSelctor[i].value +" " +clicked1);
                    squirSelctor[i].style.color = "#fff";
                } if (squirSelctor[i].value == clicked2) {
                    squirSelctor[i].style.color = "#fff";
                }
                clicked1 = undefined;
                clicked2 = undefined;
            }
        });
    }
}
