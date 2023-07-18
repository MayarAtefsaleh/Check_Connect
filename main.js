

let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');


// al function de bt4oof online wla l2  window.onload alsf7a bt3ty t7ml reload mn foo2 
window.onload = function ()
{
    if (window.navigator.onLine)
    {
        online();
    }
    else
    {
        Offline();
    }

}

window.addEventListener("online", function ()
{
    online();
});


window.addEventListener("Offline", function ()
{
    Offline();
});
    
reload.onclick = function ()
{
    window.location.reload();
}


function online()
{
    
    title.innerHTML = 'Online Now';
    title.style.color = 'green';
    ul.classList.add('hide');
    reload.classList.add('hide');
}


function Offline()
{
    
    title.innerHTML = 'Offline Now';
    title.style.color = '#666';
    ul.classList.remove('hide');
    reload.classList.remove('hide');
}