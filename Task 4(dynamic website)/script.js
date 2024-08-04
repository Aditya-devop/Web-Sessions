function getinfo(){
    document.querySelector(".info").style.display="block";
}
var count=1
function createcard(){
    
    console.log(document.getElementById("thumbnail").value)
    var div=document.createElement("div")
    div.setAttribute("class","card");
    count++;
    views=document.getElementById("views").value;
    if(views>=1000000){
        views=views/1000000;
        views=Math.round(views*10)/10+"M"
    }
    else if(views>1000){
        views=views/1000;
        views=Math.round(views*10)/10+"K"
    }
    div.innerHTML=
    `<div class="srno">
                ${count}
            </div>
            <div class="image">
                <img src="${document.getElementById("thumbnail").value}";
                    alt="image">
                <div class="time">
                    ${document.getElementById("duration").value}
                </div>
            </div>
            <div class="content">
                <div class="title">
                    <h3>${document.getElementById("title").value}</h3>
                </div>
                <div class="others">
                    <p class="cname">${document.getElementById("cname").value}</p>
                    <p class="dot">.</p>
                    <p class="views">${views} views</p>
                    <p class="dot">.</p>
                    <p class="yearold">${document.getElementById("monthsold").value} months</p>
                </div>
            </div>
        `
        document.querySelector(".container").append(div);
        document.querySelector(".info").style.display="none"
}