const container=document.querySelector(".container");


const box=document.createElement("div");
box.classList="box";
container.appendChild(box);


const about=document.createElement("div");
about.classList="about";
about.innerText="About";
box.appendChild(about);

const description=document.createElement("div");
description.classList="description";
box.appendChild(description);



const image=document.createElement("img");
image.setAttribute("src",'123.jpg');
image.classList="image";
description.appendChild(image);


const textPart=document.createElement("div");
textPart.classList="textPart";
description.appendChild(textPart);



const title=document.createElement("div");
title.classList="title";
textPart.appendChild(title);


const aboutUs=document.createElement("div");
aboutUs.classList="aboutUs";
aboutUs.innerText="About us";
title.appendChild(aboutUs);

const ourMission=document.createElement("div");
ourMission.classList="aboutUs";
ourMission.innerText="Our Mission";
title.appendChild(ourMission);


const ourGoals=document.createElement("div");
ourGoals.classList="aboutUs";
ourGoals.innerText="Our Goals";
title.appendChild(ourGoals);



const text1=document.createElement("div");
text1.classList="text1";
const text1Title=document.createElement("div")
text1Title.innerText="About us";
text1Title.classList="text1Title";
const text1desc=document.createElement("div")
text1desc.innerText="As a small or midsize business (SMB), your company website is often the first touchpoint for potential clients — and you want it to make a great first impression. The secret to hitting home with your audience is to have a sophisticated and lively website design that’s aesthetically pleasing and provides great user experience (UX)."
text1desc.classList="text1desc";
text1.appendChild(text1Title);
text1.appendChild(text1desc);
textPart.appendChild(text1);


const text2=document.createElement("div");
text2.classList="text1";
const text2Title=document.createElement("div")
text2Title.innerText="Our Mission";
text2Title.classList="text1Title";
const text2desc=document.createElement("div")
text2desc.innerText="And if you’re excited to launch your own custom website, WebFX offers web design plans, tailored to your business goals! With an award-winning portfolio of over 1,128 stunning websites, we know our way around effective web design. Contact us online or call us at 888-601-5359 to start building your dream website!Court & Rowe sells"
text1desc.classList="text1desc";
text2.appendChild(text2Title);
text2.appendChild(text2desc);
textPart.appendChild(text2);
text2.style.display="none";

const text3=document.createElement("div");
text3.classList="text1";
const text3Title=document.createElement("div")
text3Title.innerText="Our Goals";
text3Title.classList="text1Title";
const text3desc=document.createElement("div")
text3desc.innerText="Ready to get started with your own company website? Check out our fresh and exciting web design plans.You can use our web design calculator or get a free quote. For rapid web designs, take a look at our exclusive RainmakerFX! We’ll make you a corporate-ready website in 30 days.Contact us online or call us at 888-601-5359 for a custom business design for your website."
text1desc.classList="text1desc";
text3.appendChild(text3Title);
text3.appendChild(text3desc);
textPart.appendChild(text3);
text3.style.display="none";


text1.style.backgroundColor="white";
        aboutUs.style.backgroundColor="white";

        ourMission.style.backgroundColor="#a3c4f3";
        ourGoals.style.backgroundColor="#a3c4f3";

aboutUs.addEventListener("click",function(){
    if(text1.style.display="none"){
        text1.style.display="block"
        text2.style.display="none"
        text3.style.display="none"
       text1.style.backgroundColor="white";
        aboutUs.style.backgroundColor="white";

        ourMission.style.backgroundColor="#a3c4f3";
        ourGoals.style.backgroundColor="#a3c4f3";
    }
})


ourMission.addEventListener("click",function(){
    if(text2.style.display="none"){
        text2.style.display="block"
        text1.style.display="none"
        text3.style.display="none"
        text2.style.backgroundColor="white";
        ourMission.style.backgroundColor="white";

        aboutUs.style.backgroundColor="#a3c4f3";
        ourGoals.style.backgroundColor="#a3c4f3";
    }
})


ourGoals.addEventListener("click",function(){
    if(text3.style.display="none"){
        text3.style.display="block"
        text1.style.display="none"
        text2.style.display="none"
        text3.style.backgroundColor="white";
        ourGoals.style.backgroundColor="white";
        aboutUs.style.backgroundColor="#a3c4f3";
        ourMission.style.backgroundColor="#a3c4f3";

    }
})
