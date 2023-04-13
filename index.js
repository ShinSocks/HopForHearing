var opened;
opened = false;

var opened1;
opened1 = false;

var opened2;
opened2 = false;

var opened3;
opened3 = false;

var opened4;
opened3 = false;

function dropDown () {
    if(!opened){
        opened = true;
        document.getElementById("header").style.height = "75%";
        document.getElementById("headerDropDown").style.display = "block";
        document.getElementById("hamLogo").src = "./assets/x.png"
        document.getElementById("hamLogo").style.height = "100%"

    }

    else if(opened){
        opened = false;
        document.getElementById("header").style.height = "10%";
        document.getElementById("headerDropDown").style.display = "none";
        document.getElementById("hamLogo").src = "./assets/ham.png"
        document.getElementById("hamLogo").style.height = "100%"
    }
    
}

function dropDown1 (toggle = true) {
  if(!toggle){
    document.getElementById("end").style.height = "50cm";
  }
  if(!opened1){
    
      opened1 = true;
    
      
      document.getElementById("dropContainer1").style.height = "27cm";
      
      
      //document.getElementById("hamLogo").src = "./assets/x.png"
      //document.getElementById("hamLogo").style.height = "80%"

  }

  else if(opened1 && toggle){
    
      opened1 = false;
    
      document.getElementById("dropContainer1").style.height = "5cm";
      
      //document.getElementById("hamLogo").src = "./assets/ham.png"
     // document.getElementById("hamLogo").style.height = "100%"
  }
  setTimeout(function(){
    document.getElementById("end").style.height = "0";
  }, 100);
  
}

function dropDown2 (toggle = true) {
  if(!toggle){
    document.getElementById("end").style.height = "50cm";
  }
  if(!opened2){
      opened2 = true;
      document.getElementById("dropContainer2").style.height = "27cm";
      
      //document.getElementById("hamLogo").src = "./assets/x.png"
      //document.getElementById("hamLogo").style.height = "80%"

  }

  else if(opened2 && toggle){
      opened2 = false;
      document.getElementById("dropContainer2").style.height = "5cm";
     
      //document.getElementById("hamLogo").src = "./assets/ham.png"
     // document.getElementById("hamLogo").style.height = "100%"
  }

  setTimeout(function(){
    document.getElementById("end").style.height = "0";
  }, 1000); 
  
  
}

function dropDown3 (toggle = true) {
  if(!toggle){
    document.getElementById("end").style.height = "50cm";
  }
  if(!opened3){
      opened3 = true;
      document.getElementById("dropContainer3").style.height = "69cm";
      
      
      //document.getElementById("hamLogo").src = "./assets/x.png"
      //document.getElementById("hamLogo").style.height = "80%"

  }

  else if(opened3 && toggle){
      opened3 = false;
      document.getElementById("dropContainer3").style.height = "5cm";
      
      //document.getElementById("hamLogo").src = "./assets/ham.png"
     // document.getElementById("hamLogo").style.height = "100%"
  }
  setTimeout(function(){
    document.getElementById("end").style.height = "0";
  }, 100);
}

function dropDown4 (toggle = true) {
  if(!opened4){
      opened4 = true;
      document.getElementById("dropContainer4").style.height = "130cm";
      
      
      //document.getElementById("hamLogo").src = "./assets/x.png"
      //document.getElementById("hamLogo").style.height = "80%"

  }

  else if(opened4 && toggle){
      opened4 = false;
      document.getElementById("dropContainer4").style.height = "5cm";
      
      //document.getElementById("hamLogo").src = "./assets/ham.png"
     // document.getElementById("hamLogo").style.height = "100%"
  }
  
}

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  var sectionTop = section.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: sectionTop - 200, behavior: 'smooth' });
}
document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('scroll', myFunctionForSticky);
 
    var header1 = document.getElementById("header");
  
    var sticky = header1.offsetTop;

    var engOption = document.getElementById('eng-option');
    var chOption = document.getElementById('ch-option');
    engOption.addEventListener('click', function() {
      engOption.classList.add('active');
      chOption.classList.remove('active');
      location.reload();
    });
  
    chOption.addEventListener('click', function() {
      chOption.classList.add('active');
      engOption.classList.remove('active');
      document.getElementById("overlayHeader").textContent = "为听力损失者带来希望"
      document.getElementById("overlayText").textContent = "每个人都应该享有听力的礼物，你有可能是下一个听力损失的受害者"
      document.getElementById("donateButton").textContent = "立即捐赠"
      document.getElementById("ourMissionH1").textContent = "我们的使命"
      document.getElementById("ourMissionP").textContent = "Hope For Hearing 是一家为加拿大患有听力损失和失聪者提供希望和支持的慈善机构。在我们日常生活中，听力是非常重要的礼物，我们希望能够帮助那些正在失去这份礼物的人"
      document.getElementById("why").innerHTML = '<h2 id="whyHeader">为什么支持我们的慈善事业？</h2>听力损失是全球主要症状之一。据统计,在加拿大有60%的成年人经历过某种程度的听力损失<br><br>听力损失是一种严重的健康问题，会对我们日常生活中与亲人交流和对话造成严重的影响。这可能导致其他危险疾病的发生，如痴呆症、阿尔茨海默症、抑郁症和焦虑症，进而影响我们的身心健康和幸福感。</u><br><div id="inSupportJump"></div><br>近期，儿童的听力损失率也有所上升，影响了他们与父母的沟通和学习能力。'
      document.getElementById("inSupportH1").textContent = "支持者"
      document.getElementById("inSupportP").innerHTML = "所有收到的资金将捐赠给Sunnybrook医院,以支持他们的工作。我们非常感激有这样一个出色而值得信赖的合作伙伴。<br><br>Sunnybrook基金会将使用您的捐款支持人工耳蜗部门的研究和援助工作,为那些需要帮助的人提供资助。"
      document.getElementById("infoDropP1").textContent = "贡献方式"
      document.getElementById("infoDropH31").textContent = "您有经营自己的生意吗？"
      document.getElementById("infoDropP12").textContent = "我们非常乐意和期待与任何企业合作伙伴或赞助商合作。请联系我们以获取更多咨询或提案！"
      document.getElementById("infoDropH32").textContent = "您是学生吗?"
      document.getElementById("infoDropP13").textContent = "我们很希望能够让你和你的学校参与我们的旅程。"
      document.getElementById("contactButton").textContent = "请联系我们"
      document.getElementById("infoDropP2").textContent = "分享你的故事"
      document.getElementById("infoDropP2H3").textContent = "我们非常希望了解您与听力损失相关的故事和经历。无论是您亲身经历或亲友有相关经验，都欢迎与我们分享您的故事，以进一步扩大大众的意识。"
      document.getElementById("shareButton").textContent = "分享您的故事"
      document.getElementById("infoDropP3").textContent = "听力损失更多资讯"
      
      document.getElementById("infoDropP3H31").textContent = "有多少人经历听力损失？"
      document.getElementById("infoDropP31").textContent = "目前,加拿大有60%的成年人经历过听力损失。更值得注意的是,加拿大的老年人中有78%存在可测量的听力损失。"
      document.getElementById("infoDropP3H32").textContent = "听力损失对我们的影响"
      document.getElementById("infoDropP32").innerHTML = "听力损失会使与他人交流变得困难，而导致社交困难、误解和挫败感。这可以影响日常生活，损害人际关系，从而引发焦虑和抑郁，并最终导致痴呆和阿尔茨海默病。<br><br>听力损失通常会导致老年人退出社交活动并在家里花更多时间，这可能更容易导致抑郁，从而导致进食、睡眠和体力活动等习惯不良。"
      document.getElementById("infoDropP3H33").textContent = "听力损失有治愈方法吗？"
      document.getElementById("infoDropP33").textContent = "90%的听力受损者可以通过环境改变、助听器等手段来改善他们的听力、交流和生活质量。"
      document.getElementById("infoDropP3H34").textContent = "什么会导致听力损失？"
      document.getElementById("infoDropP34").textContent = "听力能力下降的一个普遍问题是由于暴露于噪音、自然老化过程、疾病和基因等因素导致的。随着年龄的增长，经历听力损失的可能性增加，约三分之一的老年人受到影响。"
      document.getElementById("infoDropP5").textContent = "如果您有任何问题，请随时向我们提问，我们会尽快回复您。"
      document.getElementById("questionButton").textContent = "查询"


    });
    
    function myFunctionForSticky() {
      if (window.pageYOffset > sticky) {
        document.getElementById("header").style.position = "fixed";
      } else {
        document.getElementById("header").style.position = "absolute";
      }
    }
  })

  

  
    