const all_numbers = document.getElementById('iNumber')
const delete_button = document.getElementById('delete')
let box_viewer = document.getElementById('viewer')

function insert(number){
    let num = box_viewer.innerHTML;   
    box_viewer.innerHTML = `<div style="position: relative;
                                                               left: 90%;
                                                               font-size: 55px;
                                                               color: white;
                                                               display: inline-block;"> ${number}
                                                            </div>
                                                            `          
};

delete_button.addEventListener('click', function(){
    box_viewer.innerHTML = `<div style="position: relative;
    left: 90%;
    font-size: 55px;
    color: white;
    display: inline-block;"> ${'0'}
 </div>
 `       
});


////////////////////////////////////////////////////////////////////////

//num + number;

/*
`<div style="position: relative;
                           left: 90%;
                           font-size: 55px;
                           color: white;">${num + number}
                 </div>
                    `
*/


/*
all_numbers.addEventListener('click', function(){
    box_viewer.innerHTML = `<div 
                            style="position: relative;
                                   left: 90%;
                                   font-size: 55px;
                                   color: white;">${1} 
                            </div>
                            `
})
*/

/* if (document.box_viewer == null){
        box_viewer.innerHTML = `<div style="
                                position: relative;
                                left: 90%;
                                font-size: 55px;
                                color: white;"> ${1} 
                            </div>
                            `
    }else{
        box_viewer.innerHTML += `<div style="
                                position: relative;
                                left: 90%;
                                font-size: 55px;
                                color: white;"> ${1} 
                            </div>
                            `            
    }
    */