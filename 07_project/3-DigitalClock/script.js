const clock = document.querySelector('#clock')

setInterval(function(){
    let date = new Date()
    clock.innerHTML=date.toLocaleTimeString('en-US',{hour12:true})
},1000)

//,{hour12:true} without this code also work