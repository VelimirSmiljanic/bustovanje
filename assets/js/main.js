var meni = document.querySelector("#mobilni_meni");
var meniLinkovi = document.querySelector(".navigacija_meni")
var navLogo = document.querySelector("#navigacija_logo")

function mobilniMeni(){
    meni.classList.toggle("is-active")
    meniLinkovi.classList.toggle("active")
}

meni.addEventListener("click", mobilniMeni);

var aktivanTab =function aktivanTab(){
    var element = document.querySelector(".highlight")
    var pocetna = document.querySelector("#pocetna")
    var oNama = document.querySelector("#o_nama")
    var usluge = document.querySelector("#usluge1")
    var review = document.querySelector("#review")
    var contact = document.querySelector("#contact")
    var join = document.querySelector("#join")
    var faq = document.querySelector("#faq")
    var autor = document.querySelector("#autor")
    let pozicija = window.scrollY

    if(window.innerWidth > 960 && pozicija < 600){
       pocetna.classList.add("highlight");
       oNama.classList.remove("highlight");
       return
    }   else if (window.innerWidth > 960 && pozicija < 1300){
        oNama.classList.add("highlight");
        pocetna.classList.remove("highlight");
        usluge.classList.remove("highlight");
        return
    } else if (window.innerWidth > 960 && pozicija < 2000){
        usluge.classList.add("highlight");
        oNama.classList.remove("highlight");
        review.classList.remove("highlight");
        return
    }
        else if (window.innerWidth > 960 && pozicija < 2700){
        review.classList.add("highlight");
        usluge.classList.remove("highlight");
        contact.classList.remove("highlight");
        return
}
else if (window.innerWidth > 960 && pozicija < 3500){
    contact.classList.add("highlight");
    review.classList.remove("highlight");
    join.classList.remove("highlight");
    return
}
else if (window.innerWidth > 960 && pozicija < 4300){
    join.classList.add("highlight");
    contact.classList.remove("highlight");
    faq.classList.remove("highlight");
    return
}
else if (window.innerWidth > 960 && pozicija < 5800){
    faq.classList.add("highlight");
    join.classList.remove("highlight");
    autor.classList.remove("highlight");
    return
}
else if (window.innerWidth > 960 && pozicija < 6500){
    autor.classList.add("highlight");
    faq.classList.remove("highlight");
    return
}

    if(element && window.innerWidth < 960 && pozicija < 600 || element){
        element.classList.remove("highlight");
    }
}

window.addEventListener("scroll", aktivanTab);
window.addEventListener("click", aktivanTab);


//futer



//slider

var backgroundImage = document.querySelector('.sredina')
var sliderImages = ['slika1','slika2','slika3']
var imageCounter = 0
window.onload= slider();

function slider(){
    if(imageCounter<sliderImages.length){
        backgroundImage.style.backgroundImage = `url('assets/images/${sliderImages[imageCounter]}.jpg')`
        imageCounter++
    }
    else{
        imageCounter=0
    }
    setTimeout('slider()', 4000)
}

//usluga

let menu = document.querySelector('.usluge .usluge_omot');
var menuTitle = ['Silver', 'Gold', 'Platinum', 'Diamond', 'Master', 'GrandMaster']
var menuPrice = [40, 100, 250, 600, 1000, 1500]
var menuPriceNew = menuPrice.map( x=> x*0.8)
var menuHtml= ""
for(i=0;i<menuTitle.length;i++){
    menuHtml+=`
    <div class="box">
        <img src="assets/images/${menuTitle[i]}.png" alt="${menuTitle[i]}">
        <h3>${menuTitle[i]}</h3>
        <div class="price">$${Math.round(menuPriceNew[i])} <span>$${menuPrice[i]}</span></div>
        <a class="btn add-to-cart">Add to cart</a>
    </div>
    `
}
menu.innerHTML = menuHtml;

//komentari musterija
let review = document.querySelector('.komentari .komentari_omot')
var reviewText = ['Played with Neylas  and he carried top with easy in my Master promo.','I had Duo Boost - really skilled players and also friendly and really funny guys.']
var reviewName = ['Marko Tosic', 'Jovan Mijalkovic']
var reviewRating = [5, 5, 5]
var reviewHtml=""

for(let i=0;i<reviewName.length;i++){
    reviewHtml+=`
            <div class="box">
                <img src="assets/images/quote.png" alt="quote" class="quote">
                <p>${reviewText[i]}</p>
                <img src="assets/images/covek${i+1}.jpg" alt="covek-${i+1}" class="user">
                <h3>${reviewName[i]}</h3>
                <div class="stars">
                    ${starRating(reviewRating[i])}
                </div>
            </div>
    `
}
review.innerHTML = reviewHtml;

function starRating(value){
    var stars = ""
    switch (value) {
        case 1:
            stars+=`<i class="fas fa-star"></i>`
            break;
        case 2:
            stars+=`<i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>`
            break;
        case 3:
            stars+=`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`
            break;
        case 4:
            stars+=`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`
            break;
        case 5:
            stars+=`<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>`
            break;
    }
    return stars;
}

//FAQ

let faq = document.querySelector('.faq .faq_omot')
var faqTitle = ['What is LoL Boosting?', 'What is the process of LoL Boosting?', 'Why should i buy LoL boost?']
var faqContent = ['What is LoL Boosting?', 'What is the process of LoL Boosting?', 'Why should i buy LoL boost?']
var faqContentExtendet = ['LoL Boosting is the process of increasing your rank in LoL by giving access of your account to a professional booster who spends all his time playing at a high level and boosting league of legends accounts.', 'The process of LoL boosting at GameBoost is simple and straightforward.You start by selecting your boost type (Rank Boost, Win Boost...), then you just need to complete the boost form, and proceed to the payment page. Once you complete the payment, a booster will be assigned to your order and he will start the boost. You will be notified by email once your order is completed.', 'There are multiple cases for which we suggest LoL Boosting. If youre feeling more skilled than your current rank elo boosting is the way to go. Climbing the rank ladder is always harder than performing well within the division where you feel you would belong. In order to avoid the frustration and tilt caused by playing on lower tiers and divisions, buying a boost can be a simple but great solution to enjoy the game and play it the way it was meant to be.']
var faqHtml=""

for(let i in faqTitle){
    faqHtml+=`
    <div class="box">
        <div class="content">
            <a href="#" class="title">${faqTitle[i]}</a>
            <p>${faqContent[i]}</p>
            <a class="btn extend-btn">Read more</a>
            <p class="extend">${faqContentExtendet[i]} \n <a class="invert-btn">Read Less</a></p>
        </div>
    </div>
    `
}
faq.innerHTML=faqHtml;

const parentContainer =  document.querySelector('.read-more-container');

parentContainer.addEventListener('click', event=>{

    const current = event.target;

    const isReadMoreBtn = current.className.includes('read-more-btn');

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.read-more-text');

    currentText.classList.toggle('read-more-text--show');

    current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More...";

})



//KONTAKT
function contactHandler(){
    var name, email,  number, text, nameErr , emailErr, numberErr, textErr
    var errors= 0
    name = document.querySelector('#name')
    email = document.querySelector('#email')
    number = document.querySelector('#number')
    text = document.querySelector('#text')
    nameErr = document.querySelector('#nameError')
    emailErr = document.querySelector('#emailError')
    numberErr = document.querySelector('#phoneError')
    textErr = document.querySelector('#textError')
    
    if(name.val()==""){
        nameErr.html("This field is empty!")
        errors++
    }else if(!testRegex(reName,name.val())){
        nameErr.html("Invalid name! Name must contain only letters! (ex. John Doe)")
        errors++
    }else{
        nameErr.html(" ")
    }

    if(email.val()==""){
        emailErr.html("This field is empty!")
        errors++
    }else if(!testRegex(reEmail,email.val())){
        emailErr.html("Invalid email!  (ex. johndoe@mail.com)")
        errors++
    }else{
        emailErr.html(" ")
    }

    if(number.val()==""){
        numberErr.html("This field is empty!")
        errors++
    }else if(!testRegex(reNumber,number.val())){
        numberErr.html("Invalid number! Number must contain minimum 7 numbers! (ex. +381601234567)")
        errors++
    }else{
        numberErr.html(" ")
    }

    if(text.val()==""){
        textErr.html("This field is empty!")
        errors++
    }else{
        textErr.html("")
    }

    if(errors == 0){
        alert('Message Sent!')
    }
}

function testRegex(regex , value){
    return regex.test(value)
}