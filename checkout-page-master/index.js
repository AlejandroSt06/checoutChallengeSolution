
var buttons = document.querySelectorAll(".addsub button");
var count1 = +document.querySelector(".count1").innerHTML;
var count2 = +document.querySelector(".count2").innerHTML;


for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        pulsante = this.className;

        switch (pulsante) {


            case "addButton1":

                count1 += 1;
                document.querySelector(".count1").innerHTML = count1;
                break

            case "addButton2":
                count2 += 1;
                document.querySelector(".count2").innerHTML = count2;
                break

            case "subButton1":
                if (count1 > 0)
                    count1 -= 1;
                document.querySelector(".count1").innerHTML = count1;
                break

            case "subButton2":
                if (count2 > 0)
                        count2 -= 1;
                document.querySelector(".count2").innerHTML = count2;
                break

        }
        var total = (count1 * 54.99) + (count2*74.99)
        total = total.toFixed(2);
        document.querySelectorAll(".priceCount ")[1].innerHTML = total;
    });
}
