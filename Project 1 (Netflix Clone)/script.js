//odd for->open, even for->close
// count =[0,0,0,0,0,0];// array
// function openbox1() {
//     close(1);
//     count[0]++;
//     count[0] % 2 == 0 ? document.getElementById("details1").style.display = "none" : document.getElementById("details1").style.display = "block";
// }
// function openbox2() {
//     close(2);
//     count[1]++;
//     count[1] % 2 == 0 ? document.getElementById("details2").style.display = "none" : document.getElementById("details2").style.display = "block";
// }
// function openbox3() {
//     close(3);
//     count[2]++;
//     count[2] % 2 == 0 ? document.getElementById("details3").style.display = "none" : document.getElementById("details3").style.display = "block";
// }
// function openbox4() {
//     close(4);
//     count[3]++;
//     count[3] % 2 == 0 ? document.getElementById("details4").style.display = "none" : document.getElementById("details4").style.display = "block";
// }
// function openbox5() {
//     close(5);
//     count[4]++;
//     count[4] % 2 == 0 ? document.getElementById("details5").style.display = "none" : document.getElementById("details5").style.display = "block";
// }
// function openbox6() {
//     close(6);
//     count[5]++;
//     count[5] % 2 == 0 ? document.getElementById("details6").style.display = "none" : document.getElementById("details6").style.display = "block";
// }
// function close(j){
//     for (let i = 0; i < count.length; i++) {
//         if(count[i]%2!=0 && i!=j-1){
//             count[i]--;
//             document.getElementById(`details${i+1}`).style.display = "none"
//             break
//         }
//     }
// }
// document.getElementById("open1").addEventListener("click", openbox1);
// document.getElementById("open2").addEventListener("click", openbox2);
// document.getElementById("open3").addEventListener("click", openbox3);
// document.getElementById("open4").addEventListener("click", openbox4);
// document.getElementById("open5").addEventListener("click", openbox5);
// document.getElementById("open6").addEventListener("click", openbox6);
