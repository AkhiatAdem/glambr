
//header code
const header = document.querySelector("header");
const listMenu = document.querySelectorAll("li");

listMenu.forEach(list=>{
    list.addEventListener("click",()=>{
    	if(window.innerWidth <= 800){
    		menu.style.transform = 'translateX(-100%)';
        showmenu.src = 'imgs/menu.png';
        document.querySelector(".icons-div").style.transform = 'translateX(-250%)';
    	}
        
        isclicked = false;
    })
})
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
const images = ['imgs/1.jpg', 'imgs/2.jpg', 'imgs/3.png', 'imgs/4.jpg', 'imgs/5.jpg','imgs/6.jpg', 'imgs/7.jpg', 'imgs/8.jpg', 'imgs/9.jpg', 'imgs/10.jpg', 'imgs/11.jpg', 'imgs/12.jpg'];

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

const gallerydiv = document.querySelectorAll(".gallery-div");
gallerydiv.forEach((pic,index)=>{
    pic.addEventListener("click",()=>{
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
    })
})




//prices



const lesPrix = [`<p>400DA-1000DA</p>
<h3>BRUSHING</h3>
<h4>Offrez-vous des services de brushing professionnels qui rendront vos cheveux lisses, brillants et pleins de vie. Nos experts utilisent des produits de qualité supérieure et des techniques avancées pour donner à vos cheveux une finition parfaite. Profitez d'un brushing impeccable qui dure.
</h4>

<p>400DA-1000DA</p>
<h3>LES COUPES</h3>
<h4>Nos coupes de cheveux offrent une longue liste de styles qui rendront les femmes fabuleuses. Faites-vous plaisir avec une simple coupe de cheveux ou choisissez parmi nos services experts pour un look totalement personnalisé.
</h4>

<p>1500DA</p>
<h3>APLICATION COULEUR(SANS BRUSHING)</h3>
<h4>Découvrez notre service d'application de couleur, sans brushing, pour une transformation éclatante. Nos experts coloristes utilisent des produits de haute qualité pour garantir une couleur riche et vibrante qui met en valeur votre style unique.
</h4>

<p>500DA</p>
<h3>ONDULE(SANS BRUSHING)</h3>
<h4>Profitez de notre service d'ondulé, sans brushing, pour des vagues naturelles et élégantes. Nos spécialistes créent des ondulations magnifiques qui ajoutent du volume et du mouvement à vos cheveux, en utilisant des techniques avancées et des produits de qualité.
</h4>

<p>a partir de 3000DA</p>
<h3>LES MECHE</h3>
<h4>Sublimez votre look avec notre service de mèches expertes. Nos coloristes talentueux utilisent des techniques avancées pour créer des mèches parfaitement intégrées qui illuminent et mettent en valeur vos cheveux. Obtenez des reflets subtils ou audacieux pour un style unique et éclatant.</h4>

<p>5000DA-6000DA</p>
<h3>SOINS CAPILLAIRES CHEVEUX LONG</h3>
<h4>Offrez à vos cheveux longs le traitement luxueux qu'ils méritent avec notre service de soins capillaires spécialisés. Nos experts utilisent des produits haut de gamme pour nourrir en profondeur, hydrater et réparer vos cheveux longs, les laissant doux, brillants et pleins de vitalité. Profitez d'une expérience indulgente qui chouchoute vos longues mèches et leur redonne éclat et santé.</h4>

<p>3000DA</p>
<h3>SOINS CAPILLAIRES CHEVEUX COURTS</h3>
<h4>Offrez à vos cheveux courts le traitement qu'ils méritent avec notre service de soins capillaires spécialisé. Nos experts utilisent des produits de qualité pour nourrir, hydrater et revitaliser vos cheveux, laissant une sensation de douceur et de vitalité. Profitez d'une expérience relaxante et revitalisante qui laisse vos cheveux courts magnifiquement soignés.</h4>

`,
`<p>2000DA</p>
<h3 class="prices-h3">POSE CAPSULE GEL SIMPLE</h3>
<h4>Offrez à vos ongles une transformation élégante avec notre service de pose de capsules en gel simple. Nos techniciennes expérimentées créent des ongles impeccables et durables en utilisant des capsules de haute qualité et des gels professionnels. Obtenez des ongles impeccables et naturels qui durent longtemps, pour un look élégant et soigné à tout moment.
</h4>

<p>100DA+</p>
<h3 class="prices-h3">DECO</h3>
<h4>Exprimez votre style avec notre service de décoration d'ongles. Nos artistes talentueux utilisent une variété de techniques et de matériaux pour créer des designs uniques et personnalisés qui captivent l'œil. Que vous recherchiez une touche subtile d'élégance ou une explosion de créativité, nous avons ce qu'il vous faut pour des ongles qui se démarquent avec classe.
</h4>

<p>2500DA</p>
<h3 class="prices-h3">BABY BOOMER</h3>
<h4>Optez pour l'élégance intemporelle avec notre service Baby Boomer. Nos techniciennes spécialisées maîtrisent l'art de cette tendance chic en créant un dégradé subtil entre le rose et le blanc sur vos ongles. Obtenez un look sophistiqué et naturel qui complète parfaitement toute tenue, que ce soit pour une occasion spéciale ou pour une allure quotidienne raffinée.
</h4>

<p>2500DA</p>
<h3>LA FRANCHE</h3>
<h4>Offrez à vos ongles une touche de sophistication avec notre service "La Française". Nos techniciennes expertes maîtrisent l'art de cette technique classique en créant une ligne nette et élégante à la pointe de l'ongle, accentuant sa beauté naturelle. Obtenez des ongles impeccables et intemporels qui ajoutent une touche de raffinement à votre style.
</h4>

<p>1000DA</p>
<h3>FAUX ONGLE</h3>
<h4>Transformez vos ongles en un clin d'œil avec notre service de pose de faux ongles. Nos techniciennes expérimentées utilisent des techniques avancées pour créer des ongles longs et élégants, parfaitement adaptés à vos préférences. Profitez d'un look glamour et soigné sans attendre la croissance naturelle de vos ongles.</h4>

<p>800DA</p>
<h3>VERNI SEMI PARAMANAN</h3>
<h4>Profitez d'une manucure longue durée avec notre service de vernis semi-permanent. Nos techniciennes expertes utilisent des vernis de qualité professionnelle qui offrent une tenue prolongée et une brillance éclatante. Avec une gamme de couleurs tendance à choisir, vous pouvez obtenir des ongles impeccables qui durent jusqu'à plusieurs semaines sans s'écailler.</h4>

<p>500DA</p>
<h3>LA DEPOSE</h3>
<h4>Prenez soin de vos ongles avec notre service de dépose professionnel. Nos techniciennes utilisent des méthodes douces et efficaces pour retirer délicatement le vernis semi-permanent ou les faux ongles sans endommager vos ongles naturels. Profitez d'une expérience sans stress et retrouvez des ongles sains et prêts pour votre prochaine manucure.</h4>
`,
`
<p>2000DA</p>
<h3 class="prices-h3">EFFET NATUREL</h3>
<h4>Obtenez des cils magnifiquement subtils avec notre service d'effet naturel. Nos esthéticiennes spécialisées utilisent des techniques précises pour appliquer des extensions de cils légères et délicates, créant un look naturel et élégant qui rehausse votre beauté naturelle. Profitez d'un regard subtilement magnifié qui attire l'attention sans paraître exagéré.
</h4>

<p>2000DA</p>
<h3 class="prices-h3">EFFET MIXTE</h3>
<h4>Optez pour un look polyvalent avec notre service d'effet mixte. Nos techniciennes expérimentées combinent habilement des extensions de cils individuelles avec des volumes plus légers pour créer un effet harmonieux et dynamique. Obtenez des cils à la fois volumineux et naturels qui mettent en valeur votre regard de manière subtile et sophistiquée.
</h4>

<p>2000DA</p>
<h3 class="prices-h3">EFFET BICHE</h3>
<h4>Découvrez un regard captivant avec notre service d'effet biche. Nos esthéticiennes expertes utilisent des extensions de cils soigneusement placées pour créer un effet de cils recourbés vers le haut, similaire à celui des yeux de biche. Obtenez des cils longs, volumineux et légèrement courbés qui ajoutent une touche de charme et de séduction à votre regard.
</h4>

<p>2500DA</p>
<h3 class="prices-h3">EFFET WISPY</h3>
<h4>Obtenez un regard envoûtant avec notre service d'effet wispy. Nos techniciennes spécialisées utilisent une combinaison d'extensions de cils individuelles et de volumes légers pour créer un effet aérien et naturellement texturé. Profitez de cils délicatement espacés et superposés qui ajoutent une dimension subtile à votre regard, pour une beauté mystérieuse et élégante.
</h4>

<p>3000DA-3500DA</p>
<h3>WISPY CHARGE</h4>
<h4>Obtenez un regard envoûtant avec notre service d'effet wispy. Nos esthéticiennes spécialisées utilisent une combinaison d'extensions de cils individuelles et de volumes légers pour créer un effet aérien et naturellement texturé. Profitez de cils délicatement espacés et superposés qui ajoutent une dimension subtile à votre regard, pour une beauté mystérieuse et élégante.</h4>

<p>2500DA</p>
<h3>POSE COMPLET UN PEU CHARGE</h3>
<h4>Offrez-vous un look élégant avec notre pose complète de cils légèrement chargée. Nos esthéticiennes expérimentées utiliseront des techniques avancées pour créer des cils longs et volumineux qui ajoutent une touche de glamour subtile à votre regard.</h4>

<p>3000DA</p>
<h3>MEGA CHARGER</h3>
<h4>Transformez votre regard avec notre service MEGA CHARGER. Nos esthéticiennes utilisent des extensions de cils volumineuses pour créer un effet spectaculaire et audacieux. Obtenez des cils volumineux et intenses qui attirent tous les regards.</h4>

<p>3500DA</p>
<h3>RUSSE</h3>
<h4>Découvrez la sophistication avec notre service de pose de cils russe. Nos esthéticiennes experts utilisent des techniques précises pour créer des cils fins et élégants avec une courbe naturelle. Obtenez un regard subtilement magnifié qui attire l'attention avec classe.</h4>

<p>500DA</p>
<h3>LA DEPOSE</h3>
<h4>Prenez soin de vos cils avec notre service de dépose professionnel. Nos esthéticiennes utilisent des méthodes douces et efficaces pour retirer délicatement les extensions de cils sans endommager vos cils naturels. Profitez d'une expérience sans stress et retrouvez des cils sains et prêts pour votre prochaine pose.</h4>


`,
`
<p>800DA</p>
<h3>Visage Complet</h3>
<h4>Optez pour une peau lisse et impeccable avec notre service d'épilation du visage complet. Nos esthéticiennes expérimentées utilisent des techniques douces pour éliminer les poils indésirables du visage, laissant votre peau douce et soyeuse. Profitez d'un teint frais et éclatant sans aucun poil superflu.</h4>

<p>500DA</p>
<h3>Les Aisselles</h3>
<h4>Profitez d'une épilation rapide et efficace de vos aisselles avec notre service spécialisé. Nos esthéticiennes utilisent des techniques professionnelles pour éliminer les poils indésirables, vous offrant des aisselles douces et impeccables en un rien de temps.</h4>

<p>800DA</p>
<h3>Bras Complet</h3>
<h4>Obtenez des bras doux et lisses avec notre service d'épilation des bras complets. Nos esthéticiennes expérimentées utilisent des techniques douces pour éliminer efficacement les poils sur toute la surface des bras, vous offrant une peau soyeuse et impeccable.</h4>

<p>1200DA</p>
<h3>Les Jambes</h3>
<h4>Offrez-vous des jambes douces et impeccables avec notre service d'épilation des jambes. Nos esthéticiennes expertes utilisent des techniques professionnelles pour éliminer les poils indésirables, vous offrant des jambes lisses et soyeuses qui vous donnent confiance en vous.</h4>

<p>1000DA</p>
<h3>Ventre et Dos</h4>
<h4>Éliminez les poils indésirables du ventre et du dos avec notre service d'épilation spécialisé. Nos esthéticiennes utilisent des techniques douces pour éliminer les poils tout en prenant soin de votre peau, vous offrant un ventre et un dos lisses et impeccables.</h4>

<p>500DA</p>
<h3>Sourcil et Moustache</h3>
<h4>Obtenez des sourcils parfaitement dessinés et une lèvre supérieure lisse avec notre service d'épilation des sourcils et de la moustache. Nos esthéticiennes utilisent des techniques précises pour éliminer les poils indésirables, vous offrant un look soigné et impeccable en quelques minutes.</h4>
`,
`
<p>2500DA</p>
<h3>MAQUILLAGE INVITE SIMPLE</h3>
<h4>Optez pour un maquillage simple et élégant avec notre service Maquillage Invité Simple. Nos maquilleurs professionnels utilisent des produits de qualité pour créer un look naturel et sophistiqué qui met en valeur votre beauté sans exagération. Idéal pour les occasions spéciales où vous souhaitez paraître radieuse sans effort.</h4>

<p>3000DA</p>
<h3>MAQUILLAGE INVITE UN PEU CHARGE</h3>
<h4>Pour un look légèrement plus prononcé, choisissez notre service Maquillage Invité Un Peu Chargé. Nos experts en maquillage utiliseront des techniques avancées pour accentuer vos traits avec finesse, ajoutant une touche supplémentaire de glamour à votre apparence tout en restant naturel et élégant.</h4>

<p>3500DA</p>
<h3>MAQUILLAGE INVITE CHARGE</h3>
<h4>Faites-vous remarquer avec notre service Maquillage Invité Chargé. Parfait pour les grandes occasions, ce maquillage mettra en valeur vos meilleurs atouts avec des couleurs audacieuses et des techniques de contouring sophistiquées. Profitez d'un look glamour et impeccable qui attire tous les regards.</h4>

<p>5000DA-6000DA</p>
<h3>MAQUILLAGE LA MARIEE</h3>
<h4>Pour le jour le plus important de votre vie, choisissez notre service Maquillage La Mariée. Nos maquilleurs professionnels créeront un look sur mesure qui complétera parfaitement votre robe et thème de mariage. Utilisant des produits longue tenue et résistants aux larmes, nous assurons que vous serez éblouissante du début à la fin de votre journée spéciale.</h4>
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

//animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
       if(entry.isIntersecting){
        entry.target.classList.add('show');
       }
    });
})
const hidden = document.querySelectorAll(".hidden");
const hiddenLeft = document.querySelectorAll("hidden-left");

hidden.forEach((el) => observer.observe(el));
hiddenLeft.forEach((el) => observer.observe(el));



const instagramicon = document.getElementById('instagramicon');
instagramicon.addEventListener("click",()=>{
    window.open("https://www.instagram.com/glam_by_riri_rabiaa/?igsh=MWxpZDc3Y2ozdmIyNg%3D%3D", "_blank");
})

const tiktokicon = document.getElementById('tiktokicon');
tiktokicon.addEventListener("click",()=>{
    window.open("https://www.tiktok.com/@glam_by_riri?_t=8mtdk8S80ZB&_r=1", "_blank");
})

