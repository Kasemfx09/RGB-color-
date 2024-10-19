window.onload=()=>{    
    setInterval(() => {
        main();
    },1000);
};

function main(){
    const root=document.getElementById('root');  
    const bunttonClick=document.getElementById('color_change_button');
    // Button click changed background color

    // bunttonClick.addEventListener('click', function(){
    //     const gbColor=bgColorChange();
    //     root.style.backgroundColor=gbColor; 
    // })
    const gbColor=bgColorChange();
    root.style.backgroundColor=gbColor;  
}

function bgColorChange(){
   
    // rgb color making
    const red =Math.floor(Math.random()*255);
    const blue =Math.floor(Math.random()*255);
    const green =Math.floor(Math.random()*255);

    return `rgb(${red},${blue},${green})`;
};
