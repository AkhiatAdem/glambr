
//header code
const header = document.querySelector("header");
const listMenu = document.querySelectorAll("li");
if (window.scrollY !== 0) {
    header.style.backgroundColor = '#252525';
    header.style.boxShadow = 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px';
} else {
    header.style.backgroundColor = 'transparent';
    header.style.boxShadow = 'none';
}
listMenu.forEach(list=>{
    list.addEventListener("mouseover",()=>{
        list.style.color = '#252525';
    })
    list.addEventListener("mouseout",()=>{
        list.style.color = 'white';
    })
})
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header"); 
    

    listMenu.forEach(list => {
        list.addEventListener("mouseover", () => {
            list.style.color = '#CFB466';
        });
        list.addEventListener("mouseout", () => {
            list.style.color = 'white';
        });
    });

    document.addEventListener("scroll", () => {
        if (window.scrollY !== 0) {
            header.style.backgroundColor = '#252525';
            header.style.boxShadow = 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px';
        } else {
            header.style.backgroundColor = 'transparent';
            header.style.boxShadow = 'none';
        }
    });
});


//images zoom
const images = ['imgs/1.jpg', 'imgs/2.jpg', 'imgs/3.png', 'imgs/4.jpg', 'imgs/5.jpg','imgs/6.jpg'];
const zoomcircle = document.querySelectorAll(".circle-zoom");

zoomcircle.forEach((zoom, index) => {
    zoom.addEventListener("click", () => {
        const newdiv = document.createElement("div");
        newdiv.classList.add("imgdisplay");

        const newimg = document.createElement("img");
        newimg.src = images[index];
        newdiv.appendChild(newimg);

        document.body.appendChild(newdiv);

        newdiv.addEventListener('click', function(e) {
            if (e.target === newdiv) {
                document.body.removeChild(newdiv);
            }
        });
    });
});




//prices



const lesPrix = [`<p>1 480 DZD</p>
<h3 class="prices-h3">COUPE POUR FEMMES</h3>
<h4>Curl offre une longue liste de services de salon qui rendront les femmes fabuleuses. 
    Les femmes peuvent se faire plaisir avec juste une coupe de cheveux ou choisir parmi 
    l'un de nos services experts.
</h4>

<p>2 160 DZD</p>
<h3>COUPE POUR HOMMES</h3>
<h4>La coiffure pour hommes n'a jamais été aussi facile. Nos barbiers experts offrent des 
    coupes de cheveux de première qualité adaptées aux préférences des hommes, assurant 
    un look net et stylé à chaque fois.
</h4>

<p>1 800 DZD</p>
<h3 class="prices-h3">COUPE POUR ENFANTS</h3>
<h4>Notre salon adapté aux enfants propose une variété de coupes de cheveux amusantes et 
    stylées pour les enfants. Nous garantissons une expérience confortable et agréable 
    pour les petits, rendant les coupes de cheveux faciles.
</h4>

<p>3 000 DZD</p>
<h3 class="prices-h3">COULEUR COMPLÈTE</h3>
<h4>Rafraîchissez votre look avec un traitement de couleur complète. Nos spécialistes en 
    coloration offrent une gamme de teintes vibrantes et naturelles, assurant que vos 
    cheveux soient à leur meilleur avec une nouvelle couleur.
</h4>


`,
`<p>1 200 DZD</p>
<h3 class="prices-h3">MANUCURE SIMPLE</h3>
<h4>Offrez-vous une manucure simple pour des ongles impeccables. Notre équipe expérimentée prendra soin de vos ongles en les nettoyant, en les taillant et en les polissant pour un aspect soigné et professionnel.
</h4>

<p>1 800 DZD</p>
<h3 class="prices-h3">MANUCURE ET POSE DE VERNIS</h3>
<h4>Complétez votre manucure avec une pose de vernis de qualité. Choisissez parmi notre large gamme de couleurs et de finitions pour des ongles élégants et éclatants.
</h4>

<p>2 400 DZD</p>
<h3 class="prices-h3">PÉDICURE COMPLÈTE</h3>
<h4>Prenez soin de vos pieds avec une pédicure complète. Nos spécialistes prendront soin de vos ongles, de vos cuticules et de vos callosités, vous laissant avec des pieds doux et lisses.
</h4>


`,
`<p>1 500 DZD</p>
<h3 class="prices-h3">EXTENSIONS DE CILS CLASSIQUES</h3>
<h4>Obtenez des cils longs et volumineux avec nos extensions de cils classiques. Nos techniciennes appliqueront soigneusement des extensions individuelles pour un regard naturellement magnifique qui dure des semaines.
</h4>

<p>2 200 DZD</p>
<h3 class="prices-h3">EXTENSIONS DE CILS VOLUME RUSSE</h3>
<h4>Donnez à vos cils un volume incroyable avec nos extensions de cils volume russe. Notre technique avancée crée des bouquets de cils légers et aériens pour un regard spectaculaire et glamour.
</h4>

<p>2 800 DZD</p>
<h3 class="prices-h3">RETOUCHE D'EXTENSIONS DE CILS</h3>
<h4>Maintenez votre look impeccable avec notre service de retouche d'extensions de cils. Nos techniciennes remplaceront les cils perdus pour que vos extensions restent pleines et volumineuses entre chaque rendez-vous.
</h4>

<p>1 200 DZD</p>
<h3 class="prices-h3">PERMANENTE DE CILS</h3>
<h4>Obtenez des cils recourbés et pleins avec notre service de permanente de cils. Nos techniciennes utiliseront des solutions douces pour recourber vos cils naturels, leur donnant une belle courbure qui dure des semaines.
</h4>

`];
const offerslist = document.querySelectorAll(".types-offers");
const prices = document.querySelector(".prices");
offerslist.forEach((offer,index)=>{
    offer.addEventListener("click",()=>{
    prices.innerHTML = lesPrix[index];
    offerslist.forEach(f=>{
        f.classList.remove("activeoffer");
    })
    offer.classList.add("activeoffer");
    })
})

const currentYear = new Date().getFullYear();
const copyrightText = `&copy; ${currentYear} glam by riri. All Rights Reserved.`;
document.getElementById('copyright').innerHTML = copyrightText;



//apointment
const apointmentName = document.getElementById("apointment-name");
const apointmentnum = document.getElementById("apointment-num");
const apointmentdate = document.getElementById("apointment-date");
const setapo = document.getElementById("setapo");

setapo.addEventListener("click",()=>{
    if(apointmentName.value.trim() == ''){
        apointmentName.style.borderColor = 'red';
    }else{
        apointmentName.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    }
    if(apointmentnum.value.trim() == ''){
        apointmentnum.style.borderColor = 'red';
    }else{
        apointmentnum.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        
    }
    if(apointmentdate.value.trim() == ''){
        apointmentdate.style.borderColor = 'red';
        
    }else{
        apointmentdate.style.borderColor = 'rgba(255, 255, 255, 0.1)';

    }
    if(apointmentName.value.trim() != '' && apointmentnum.value.trim() != '' && apointmentdate.value.trim() != ''){
        
        emailjs.init({
            publicKey: "O-0Izc6-VH1GQOw4l",
          });
          var params = {
            name:apointmentName.value,
            num:apointmentnum.value,
            date:apointmentdate.value
        }
    
        emailjs.send('service_9itegmp', 'template_gl2atgr', params).then(
        (response) => {
        alert("message sent we will call you for confirmation");
        },
        (error) => {
        console.log('FAILED...', error);
        },
        );
    }
})


//message

const namemessage= document.getElementById("namemessage");
const emailmessage= document.getElementById("emailmessage");
const message= document.querySelector(".messagepls");
const sendmessage = document.getElementById("sendmessage");
sendmessage.addEventListener("click",()=>{
    if(namemessage.value.trim() == ''){
        namemessage.style.borderColor = 'red';
    }else{
        namemessage.style.borderColor = 'rgba(255, 255, 255, 0.1)';
    }
    if(emailmessage.value.trim() == ''){
        emailmessage.style.borderColor = 'red';
    }else{
        emailmessage.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        
    }
    if(message.value.trim() == ''){
        message.style.borderColor = 'red';
        
    }else{
        message.style.borderColor = 'rgba(255, 255, 255, 0.1)';

    }
    if(namemessage.value.trim() != '' && emailmessage.value.trim() != '' && message.value.trim() != ''){
        
        emailjs.init({
            publicKey: "O-0Izc6-VH1GQOw4l",
          });
          var params = {
            name:namemessage.value,
            email:emailmessage.value,
            message:message.value
        }
    
        emailjs.send('service_9itegmp', 'template_7mgyk8k', params).then(
        (response) => {
        alert("message sent we will call you for confirmation");
        },
        (error) => {
        console.log('FAILED...', error);
        },
        );
    }
})

document.addEventListener('DOMContentLoaded', function() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

const showmenu = document.querySelector(".burgermenu");
const menu = document.getElementById("menu");
let isclicked = false;
showmenu.addEventListener("click",()=>{
    if(isclicked == false){
        menu.style.transform = 'translateX(0)';
        showmenu.src = 'imgs/close.png';
        document.querySelector(".icons-div").style.transform = 'translateX(-50%)';

    }else{
        menu.style.transform = 'translateX(-100%)';
        showmenu.src = 'imgs/menu.png';
        document.querySelector(".icons-div").style.transform = 'translateX(-250%)';


    }
    isclicked = !isclicked;
})

