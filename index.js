function Clock(){
    const watch=document.querySelector(".clock")
    const d=new Date();
    const hour=d.getHours()>9?d.getHours():`0${d.getHours()}`;
    const minute=d.getMinutes()>9?d.getMinutes():`0${d.getMinutes()}`;
    const second=d.getSeconds()>9?d.getSeconds():`0${d.getSeconds()}`;
    watch.innerText=`${hour}:${minute}:${second}`
}

setInterval(Clock, 1000);

