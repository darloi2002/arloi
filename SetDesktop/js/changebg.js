
const ulListBG =   document.querySelector(".bg-display");
const videoBackGround = document.querySelector('.videobg video');
const sourceBackGround = document.querySelector('.videobg source');
// let create li tags according to array length for list
function loadListBG(){
  for (let i = 0; i < allBackGround.length; i++) {
    //let's pass the song name, artist from the array
    let renderBG = `<li bg-index=${i} class="setting_item">
                      <div class="border_image">
                        <video muted>
                          <source src="./video/${allBackGround[i].src}.${allBackGround[i].file}" type="video/mp4">
                        </video>
                      </div>
                      <div class="setting_item_details">
                        <h3>${allBackGround[i].name}</h3>
                        <span>${allBackGround[i].tag}</span>
                        <span>nội dung</span>
                      </div>
                    </li>`
    ulListBG.insertAdjacentHTML("beforeend", renderBG); //inserting the li inside ul tag
  }
}



function addEventForListBG(callback){
  callback();
  const liListBG = document.querySelectorAll('.setting_item')
  for(let i = 0;i < liListBG.length; i++){
    liListBG[i].setAttribute("onclick", "changeBG(this)");
  }
}
addEventForListBG(loadListBG)

function changeBG(item){
  let getBgIndex = item.getAttribute("bg-index");
  videoBackGround.pause();
  sourceBackGround.src = `./video/${allBackGround[getBgIndex].src}.${allBackGround[getBgIndex].file}`
  videoBackGround.load();
  videoBackGround.play();
}



//Chỉnh màu sắc

const ulListColor = document.querySelector('.color-display')
function loadListColor(){
  for (let i = 0; i < allColor.length; i++) {
    //let's pass the song name, artist from the array
    let renderColor = `<li cl-index=${i}>
                        <div style=\"background-color: ${`rgb(${allColor[i].red},${allColor[i].green},${allColor[i].blue})`}\" class="show_color"></div>
                        <span>${allColor[i].name}</span>
                      </li>`
    ulListColor.insertAdjacentHTML("beforeend", renderColor); //inserting the li inside ul tag
  }
}



function addEventForListColor(callback){
  callback();
  const liListCL = document.querySelectorAll('.color-display li')
  for(let i = 0;i < liListCL.length; i++){
    liListCL[i].setAttribute("onclick", "changeColor(this)");
  }
}
addEventForListColor(loadListColor)


function changeColor(item){
  const audioPlayer = document.querySelector('.audio-player')
  let getColorIndex = item.getAttribute("cl-index");
  red = allColor[getColorIndex].red
  green = allColor[getColorIndex].green
  blue = allColor[getColorIndex].blue
  audioPlayer.style.borderBottom = `1.5px solid rgb(${red},${green},${blue})`
}


function SetContentST(item){
  const ListSettingContent = document.querySelectorAll('.setting_content_detail')
  const ListSettingHeader = document.querySelectorAll('.setting_title')
  const index = item.getAttribute("st-index")
  for(let i = 0; i < ListSettingHeader.length; i++){

    if(ListSettingHeader[i].classList.contains("choosed")){
      ListSettingHeader[i].classList.remove("choosed");
    }
    if(ListSettingHeader[i].getAttribute("st-index") == index){
      ListSettingHeader[i].classList.add("choosed");
    }


    if(ListSettingContent[i].classList.contains("show")){
      ListSettingContent[i].classList.remove("show");
    }
    if(ListSettingContent[i].getAttribute("st-item") == index){
      ListSettingContent[i].classList.add("show");
    }
  }

}