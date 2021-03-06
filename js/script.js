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

// Create RFQ Section
$('.cat-button').click(function(e) {
    e.stopPropagation();

    $('.cat-button-selected').attr('class', 'cat-button');
    $(this).attr('class', 'cat-button-selected');
    $('.cat-button-selected').css('display', 'block');
});

// Add Inspirations Section
$('.delete').click(function(e) {
    e.stopPropagation();

    let id = $(this).parent().attr('id');
    $(`#${id}`).css('display', 'none');
})

// Optional Details Section
$('.details-button').click(function(e) {
    e.stopPropagation();

    let id = $(this).attr('name');
    $(`#${id}`).css('display', 'block');

    $(`#${id}-button`).attr('class', 'details-button-selected');
})

$('.delete-option').click(function(e) {
    e.stopPropagation();

    let id =$(this).parent().parent().attr('id');
    $(`#${id}`).css('display', 'none');

    $(`#${id}-button`).attr('class', 'details-button');
})

// Factories Section
$('.factory-checkbox').click(function(e) {
    e.stopPropagation();

    $(this).toggleClass('factory-checkbox-selected');
    $('.factory-checkbox-selected').css('display', 'block');
});


// modal
const locations = {
    'fac1': "Vernon, CA",
    'fac2': "Dallas, TX",
    'fac3': "Columbus, OH",
    'fac4': "Atlanta, GA",
    'fac5': "Vancouver, Canada"
}

$('.factory-image').click(function() {
    $('.modal').css('display', 'block');

    let id = $(this).parent().attr('id');
    let location = locations[id];
    console.log(location);

    $('.factory-address').text(location)
});

window.onclick = function(event) {
    if (event.target == $('.modal')[0]) {
        $('.modal').css('display', 'none');
    }
};


// customize dropdown menus
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