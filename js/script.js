/* Click Off */

$('body').click(function() {
    $('#menu div').addClass('hidden');
    $('.info-bubble').addClass('invisible');
    $('.quote-buttons-container').addClass('hidden');
});

/* Menu */

$('#menu img').click(function(e) {
    e.stopPropagation();

    $(this).parent().find('div').toggleClass('hidden');
});

/* Site Header */

$('.request-quote > img').click(function(e) {
    e.stopPropagation();

    $(this).parent().find('.quote-buttons-container').toggleClass('hidden');
});

/* ADD JS HERE */

// Create RFQ
$('#button-upholstery').add('#button-casegoods').add('#button-metal').click(function(e) {
    e.stopPropagation();

    $(this).toggleClass('cat-button-selected');
    $('.cat-button-selected').css("display", "block");
});

// Add Inspirations
$('.delete').click(function(e) {
    e.stopPropagation();

    let id = $(this).parent().attr("id");
    $(`#${id}`).css("display", "none");
})


// customize dropdown menu
var x, i, j, selElmnt, a, b, c;
x = $(".dropdown");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("div");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("div");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        c = document.createElement("div");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                this.setAttribute("class", "same-as-selected");
                break;
            }
        }
        h.click();
    });
    b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}

document.addEventListener("click", closeAllSelect);