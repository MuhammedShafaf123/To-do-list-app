$(document).ready(function(){
    $("#color-one").click(function(){
        $("#box").css({"background":"white"})
    })
    $("#color-two").click(function(){
        $("#box").css({"background":"rgb(255, 226, 231)"})
    })
    $("#color-three").click(function(){
        $("#box").css({"background":"rgb(220, 246, 255)"})
    })
    $("#color-four").click(function(){
        $("#box").css({"background":"rgb(208, 255, 208)"})
    })

    if($("#box").css({"background":"white"})){
        $("#input-row").css({"background":"rgba(211,  211, 211, 0.308)"})
    }  
})

var inputBox = document.getElementById("input")


function addTask(){
    if(inputBox.value === ''){
        alert("You must write something !")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.style.textAlign="center"
        li.appendChild(span);
    }
   inputBox.value = '';
   saveData();
}

var listContainer = document.getElementById("list-container")

  listContainer.addEventListener("click",function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('checked');
        saveData();
    }
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

  }, false);

  function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
  }

  function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
  }

  showTask();