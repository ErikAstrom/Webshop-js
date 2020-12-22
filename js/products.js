class Foods {
    constructor(title, company, info, price, photo, quantity) {
        this.title = title;
        this.company = company;
        this.info = info;
        this.price = price;
        this.photo = photo;
        this.quantity = quantity;
    }
}

let meat1 = new Foods("Köttfärs", "Garant", "Svensk köttfärs. 500 gram/förpackning.", 59, "../images/meat/mincedbeef.jpg", 0);
let meat2 = new Foods("Fläskkotlett", "Danish Crown", "Fläskkotlett med fettrand kvar. 700 gram/förpackning.", 79, "../images/meat/porkchop.jpg", 0);
let meat3 = new Foods("Chorizo", "Gunhilds", "Kryddig het färsk fläskkorv. 250 gram/förpackning.", 43, "../images/meat/chorizo.jpg", 0);
let meat4 = new Foods("Oxfilé", "Scan", "Underbart mör av bästa kvalité. Pris per kilo.", 249, "../images/meat/tenderloin.jpg", 0)

let meat = [meat1, meat2, meat3, meat4];

let bird1 = new Foods("Kycklingfilé", "Kronfågel", "Färsk kycklingfilé. ca 900 gram/förpackning.", 99, "../images/birds/chickenbreast.jpg", 0);
let bird2 = new Foods("Hel Kyckling", "Guldfågel", "Färsk hel kyckling. Pris per kilo.", 49, "../images/birds/wholechicken.jpg", 0);
let bird3 = new Foods("Grillad Kyckling", "Kronfågel", "Hel grillad kryddad kyckling.", 55, "../images/birds/grilledchicken.jpg", 0);
let bird4 = new Foods("Kycklinglår", "Garant", "Färska kycklinglår med ben. ca 700 gram/förpackning.", 37, "../images/birds/chickendrumsticks.jpg", 0);

let bird = [bird1, bird2, bird3, bird4];

let dairy1 = new Foods("Ägg", "Kronägg", "Ekologiska ägg från frigående höns. 15st/förpackning.", 35, "../images/dairy/eggs.jpg", 0);
let dairy2 = new Foods("Fetaost", "Apetina", "Salt och god fetaost från get. 150 gram/förpackning.", 15, "../images/dairy/fetacheese.jpg", 0);
let dairy3 = new Foods("Brieost", "President", "Krämig brie från Frankrike. ca 75 gram/förpackning.", 23, "../images/dairy/briecheese.jpg", 0);
let dairy4 = new Foods("Creme Fraiche", "Arla", "Syrlig och frisk Creme Fraiche. 30% fetthalt.", 12, "../images/dairy/cremefraiche.jpg", 0);

let dairy = [dairy1, dairy2, dairy3, dairy4];

let fish1 = new Foods("Laxfilé", "Feldts", "Färsk lax odlad i de norska fjordarna klara vatten. Pris per kilo.", 199, "../images/fish/salmon.jpg", 0);
let fish2 = new Foods("Makrill", "Fishy", "Färsk makrill från Sverige. Pris per kilo.", 149, "../images/fish/mackarel.jpg", 0);
let fish3 = new Foods("Rökt lax", "Feldts", "Rökt graverad lax. ca 150 gram/förpackning.", 89, "../images/fish/smokedsalmon.jpg", 0);
let fish4 = new Foods("Laxblini", "Egen Deli", "Vår egen Delis utsökta laxblinier. Pris per st, minimum 2st.", 28, "../images/fish/salmonblini.jpg", 0);

let fish = [fish1, fish2, fish3, fish4];

let bread1 = new Foods("Brioche", "Eget Bageri", "Mjuka och färskbakade briochebröd. Pris per st.", 5, "../images/bakery/brioche.jpg",0)
let bread2 = new Foods("Croissant", "Picard", "Frysta croissanter, värms i ugn. 4st per förpackning.", 36, "../images/bakery/croissant.jpg",0)
let bread3 = new Foods("Grekiskt Lantbröd", "Pågen", "Saftig och god limpa. ca 450 gram/förpackning", 28, "../images/bakery/breadloaf.jpg",0)
let bread4 = new Foods("Cheesecake", "Picard", "Fryst cheesecake, bara att tina upp. ca 360 gram/förpackning", 89, "../images/bakery/cheesecake.jpg",0)

let bakery = [bread1, bread2, bread3, bread4];

let allItems = [meat1, meat2, meat3, meat4, bird1, bird2, bird3, bird4, dairy1, dairy2, dairy3, dairy4, fish1, fish2, fish3, fish4, bread1, bread2, bread3, bread4];

let cart = [];

$(function () {
    $(".cartbutton").on('click', () => {
        $("#cartdiv").toggle();
        generateCartDropDown();
    });

    cart = JSON.parse(localStorage.getItem('cart')) || [];

    $(".navbar-brand").on('click', function() {
        window.location.assign('../index.html');
    });
    $("#home").on('click', function() {
        window.location.assign('../index.html');
    });
    $("#products").on('click', function() {
        window.location.assign('../html/products.html');
    });
    $("#checkout").on('click', function () { 
        window.location.assign('../html/cashregister.html');
    });

    // Products Arrays
    $.each(meat, (i, items) => {
        let colDiv = $("<div>").addClass("col mb-4").appendTo(".featuremeat");
        let cardDiv = $("<div>").addClass("card h-100").appendTo(colDiv);
        let imgDiv = $("<div>").addClass("image").appendTo(cardDiv);
        let textDiv = $("<div>").addClass("card-body").appendTo(cardDiv);
        let footerDiv = $("<div>").addClass("card-footer d-flex flex-column").appendTo(cardDiv);
        $("<img>").attr("src", items.photo).appendTo(imgDiv);
        $("<h5>").html(items.title).appendTo(textDiv);
        $("<h6>").html(items.company).appendTo(textDiv);
        $("<p>").html(items.info).appendTo(textDiv);
        $("<p>").html(items.price + " " + "kr").appendTo(footerDiv);
        $("<button>").addClass("btn btn-success btn-md mt-2 buybtn").text("Lägg i varukorg").appendTo(footerDiv);
    });

    $.each(bird, (i, items) => {
        let colDiv = $("<div>").addClass("col mb-4").appendTo(".featurebird");
        let cardDiv = $("<div>").addClass("card h-100").appendTo(colDiv);
        let imgDiv = $("<div>").addClass("image").appendTo(cardDiv);
        let textDiv = $("<div>").addClass("card-body").appendTo(cardDiv);
        let footerDiv = $("<div>").addClass("card-footer d-flex flex-column").appendTo(cardDiv);
        $("<img>").attr("src", items.photo).appendTo(imgDiv);
        $("<h5>").html(items.title).appendTo(textDiv);
        $("<h6>").html(items.company).appendTo(textDiv);
        $("<p>").html(items.info).appendTo(textDiv);
        $("<p>").html(items.price + " " + "kr").appendTo(footerDiv);
        $("<button>").addClass("btn btn-success btn-md mt-2 buybtn").text("Lägg i varukorg").appendTo(footerDiv);
    });

    $.each(dairy, (i, items) => {
        let colDiv = $("<div>").addClass("col mb-4").appendTo(".featuredairy");
        let cardDiv = $("<div>").addClass("card h-100").appendTo(colDiv);
        let imgDiv = $("<div>").addClass("image").appendTo(cardDiv);
        let textDiv = $("<div>").addClass("card-body").appendTo(cardDiv);
        let footerDiv = $("<div>").addClass("card-footer d-flex flex-column").appendTo(cardDiv);
        $("<img>").attr("src", items.photo).appendTo(imgDiv);
        $("<h5>").html(items.title).appendTo(textDiv);
        $("<h6>").html(items.company).appendTo(textDiv);
        $("<p>").html(items.info).appendTo(textDiv);
        $("<p>").html(items.price + " " + "kr").appendTo(footerDiv);
        $("<button>").addClass("btn btn-success btn-md mt-2 buybtn").text("Lägg i varukorg").appendTo(footerDiv);
    });

    $.each(fish, (i, items) => {
        let colDiv = $("<div>").addClass("col mb-4").appendTo(".featurefish");
        let cardDiv = $("<div>").addClass("card h-100").appendTo(colDiv);
        let imgDiv = $("<div>").addClass("image").appendTo(cardDiv);
        let textDiv = $("<div>").addClass("card-body").appendTo(cardDiv);
        let footerDiv = $("<div>").addClass("card-footer d-flex flex-column").appendTo(cardDiv);
        $("<img>").attr("src", items.photo).appendTo(imgDiv);
        $("<h5>").html(items.title).appendTo(textDiv);
        $("<h6>").html(items.company).appendTo(textDiv);
        $("<p>").html(items.info).appendTo(textDiv);
        $("<p>").html(items.price + " " + "kr").appendTo(footerDiv);
        $("<button>").addClass("btn btn-success btn-md mt-2 buybtn").text("Lägg i varukorg").appendTo(footerDiv);
    });

    $.each(bakery, (i, items) => {
        let colDiv = $("<div>").addClass("col mb-4").appendTo(".featurebakery");
        let cardDiv = $("<div>").addClass("card h-100").appendTo(colDiv);
        let imgDiv = $("<div>").addClass("image").appendTo(cardDiv);
        let textDiv = $("<div>").addClass("card-body").appendTo(cardDiv);
        let footerDiv = $("<div>").addClass("card-footer d-flex flex-column").appendTo(cardDiv);
        $("<img>").attr("src", items.photo).appendTo(imgDiv);
        $("<h5>").html(items.title).appendTo(textDiv);
        $("<h6>").html(items.company).appendTo(textDiv);
        $("<p>").html(items.info).appendTo(textDiv);
        $("<p>").html(items.price + " " + "kr").appendTo(footerDiv);
        $("<button>").addClass("btn btn-success btn-md mt-2 buybtn").text("Lägg i varukorg").appendTo(footerDiv);
    });

    $.each($(".buybtn"), (i, product) => {
        $(product)
            .on('click', () => {
                generateCart(allItems[i]);
            });
    });

    countCart();

});

//Newsletter 
let dialog = $("#dialog").dialog({
    autoOpen: false,
    modal: true,
    buttons: {
        Ok: function() {
            $(this).dialog("close");
        }
    },
    dialogClass: "myClass"
});

$("#newsletterbtn").on('click', function() {
    let newsLetterInput = $("#newsletter").val();
    if (newsLetterInput < 2) {
        $("#erroremail").show("fast").delay(3000).hide("fast");
    } else {
    dialog.dialog("open");
    $("#newsletter").val('');
    }  
});

// Shopping Cart
function generateCart(product) {

    let foundProduct = false;

    $.each(cart, (i, cartItem) => {
        if(cartItem.title == product.title) {
            cartItem.quantity++;
            foundProduct = true;
        }
    });

    if (!foundProduct) {
        product.quantity = 1;
        cart.push(product);
    };

    localStorage.setItem("cart", JSON.stringify(cart));
    countCart();
    generateCartDropDown();
};

function generateCartDropDown(){

    localStorage.setItem("cart", JSON.stringify(cart));
    $("#cartdiv").html("");

    let totalValue = 0;

    $("<table>").addClass("table").appendTo("#cartdiv");
    $("<thead>").appendTo("table");
    let myTR = $("<tr>").appendTo("thead");
    $("<th>").attr("scope", "col").text("").appendTo(myTR);
    $("<th>").attr("scope", "col").text("Vara").appendTo(myTR);
    $("<th>").attr("scope", "col").text("Antal").appendTo(myTR);
    $("<th>").attr("scope", "col").text("Pris").appendTo(myTR);
    $("<tbody>").attr("id", "carttablebody").appendTo("table");

    $.each(cart, (i, items) => {
        let myCartRow =  $("<tr>").appendTo("#carttablebody");
        let cartImgtd = $("<td>").appendTo(myCartRow);
        $("<img>").addClass("cartimg").attr("src", items.photo).appendTo(cartImgtd);
        $("<td>").text(items.title).appendTo(myCartRow);

        let addButton = $("<i>").addClass("add fas fa-plus-square").on('click', () => { addToCart(i); });
        let decreaseButton = $("<i>").addClass("decrease fas fa-minus-square").on('click', () => { decreaseFromCart(i); });

        $("<td>").text(items.quantity).append(addButton).append(decreaseButton).appendTo(myCartRow);
        $("<td>").text(items.price * items.quantity + " kr").appendTo(myCartRow);
       
        totalValue += items.price * items.quantity;

    });

    $("<tr>").attr("id", "carttotalrow").appendTo("#carttablebody");
    $("<th>").text("Totalt").appendTo("#carttotalrow");
    $("<td>").appendTo("#carttotalrow");
    $("<td>").appendTo("#carttotalrow");
    $("<td>").text(totalValue + " kr").appendTo("#carttotalrow");
    $("<a>").text("Till Kassan").attr("href", "../html/cashregister.html").appendTo("#cartdiv");

}

function countCart(){
    $("#qtybadge").empty();
    totalItems = 0;
    $.each(cart, (i, cartIndex)=> {
    totalItems += cartIndex.quantity
    })

  $("<div>").text(totalItems).appendTo("#qtybadge");
}

function removeFromCart(i) {
    cart.splice(i, 1);
    countCart();
}

function addToCart(i) {
    cart[i].quantity++;
    countCart();
    generateCartDropDown();
}

function decreaseFromCart(i) {
    cart[i].quantity--;
    if (cart[i].quantity < 1) {
        removeFromCart(i);
    } 
    countCart();
    generateCartDropDown();
}