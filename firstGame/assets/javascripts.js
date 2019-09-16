var boxs = document.querySelectorAll(".box");
var timer = document.querySelector("span");
var timerTheColor = document.querySelector("h2");
var btn = document.querySelector(".btn");
var textWiner = document.querySelector(".s");

var firstArry = numpers(1, 13);;
var sacendArry = numpers(14, 25);
var mainArr = numpers(26, 50);
var testValue = 1;
var elapsedTimes;
var interval;


//---- var mainArry = firstArry.concat(sacendArry);
var x = arrayRandom(13, firstArry);
var xx = arrayRandom(12, sacendArry);
var xxx = x.concat(xx);

btn.addEventListener("click", function () {
    firstArry = numpers(1, 13);;
    sacendArry = numpers(14, 25);
    mainArr = numpers(26, 50);

    x = arrayRandom(13, firstArry);
    xx = arrayRandom(12, sacendArry);
    xxx = x.concat(xx);

    testValue = 1;
    for (let i = 0; i < boxs.length; i++) {
        boxs[i].style.display = "block";
        boxs[i].style.visibility = "visible";
        boxs[i].style.background = "#03858B";
    }

    creatGame();
    document.querySelector("p").textContent = "الرقم التالي : " + testValue;

    clearInterval(interval);
    timer.innerHTML = "0.000";
    textWiner.style.display = "none";

});

function arrayRandom(cells, lengths) {
    let randomArry = [];
    for (let i = 0; i < cells; i++) {
        let x = Math.floor(Math.random() * lengths.length);
        randomArry.push(lengths[x]);
        lengths.splice(x, 1);
    } return randomArry;
}

creatGame();


//ينشئ القيم الاولة للمصفوفة
function creatGame() {
    for (let i = 0; i < 25; i++) {
        let y = Math.floor(Math.random() * xxx.length);
        boxs[i].textContent = xxx[y];
        //mainArr.push(sacendArry[y]);
        xxx.splice(y, 1);
        sacendArry.splice(y, 1);
    }
}

boxs.forEach(function (box) {
    box.addEventListener("click", function () {
        var value = parseInt(this.textContent);
        if (testValue === value) {
            if (testValue === 1) {
                bTimer();
            }
            testValue++;
            endComments(testValue);
            box.style.background = "#fff";
            setTimeout(function () {
                box.style.visibility = "hidden";
            }, 250);


            //مساعد ضهور الرقم  
            boxs.forEach(function (box) {
                let value = parseInt(box.textContent);
                if (testValue === value) {
                    box.style.background = "purple";
                }
            });

            boxGeneratorِ(box);
        } else {
            for (let i = 1; i < 4; i++) {
                timerTheColor.style.background = "red";
                setTimeout(function () {
                    timerTheColor.style.background = "#fff";
                }, 400);
            }
        }
    });
});

function boxGeneratorِ(box) {
    let a = Math.floor(Math.random() * mainArr.length);
    box.textContent = mainArr[a];

    setTimeout(function () {
        if (!mainArr.length) {
            box.style.background = "white";
            box.style.visibility = "hidden";
        }
        else {
            box.style.visibility = "visible";
            box.style.background = "#04ABB2";
            mainArr.splice(a, 1);
        }
    }, 250);
}


//ادخال قم المصفوفة ****
function numpers(index, num) {
    var arr = [];
    for (let i = index; i <= num; i++) {
        arr.push(i);
    }
    return arr;
}
// sessionStorage.clear();
//تعليقات النهائية
function endComments(testValue) {
    if (testValue == 51) {
        document.querySelector("p").textContent = "مبارك عليك";
        var strings;
        var strings2 = "";
        if (elapsedTimes < 45) {
            strings = "ذكائك الخارق";
        } else if (elapsedTimes < 55) {
            strings = "العقلية الخبيره";
        } else if (elapsedTimes < 65) {
            strings = "هذا الذكاء المميز";
        } else if (elapsedTimes < 85) {
            strings = "طبيعتك العاديه";
        } else if (elapsedTimes < 90) {
            strings = "شيبتك المبكره";
        } else if (elapsedTimes < 105 && elapsedTimes > 90) {
            strings = "اشتباه حالتك بمرض الزهايمر";
        } else {
            strings2 = "لا تـ"
            strings = "هذي النتيجه "
        }
        for (let i = 0; i < boxs.length; i++) {
            boxs[i].style.display = "none";
        }
        textWiner.style.display = "block";
        textWiner.textContent = strings2 + "شارك " + strings + " مع اصحابك";

    } else {
        document.querySelector("p").textContent = "الرقم التالي : " + testValue;
    }
}


// الوقت
function bTimer() {
    var startTime = Date.now();
    interval = setInterval(function () {
        var elapsedTime = Date.now() - startTime;
        elapsedTimes = elapsedTime / 1000;
        timer.innerHTML = (elapsedTimes).toFixed(3);
        if (testValue == 51) {
            clearInterval(interval);
        }
    }, 100);
}