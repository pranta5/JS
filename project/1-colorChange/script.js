const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

buttons.forEach( (btn)=> {
    console.log(btn);
    btn.addEventListener('click', function(e){  
        console.log(e);        //e is event object
        console.log(e.target);
        if (e.target.id==='grey') {
            body.style.backgroundColor=e.target.id
        }
        if (e.target.id==='white') {
            body.style.backgroundColor=e.target.id
        }
        if (e.target.id==='blue') {
            body.style.backgroundColor=e.target.id
        }
        if (e.target.id==='yellow') {
            body.style.backgroundColor=e.target.id
        }
    })
});