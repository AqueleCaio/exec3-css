const all_numbers = document.getElementById('iNumber')
const delete_button = document.getElementById('delete')
let box_viewer = document.getElementById('viewer')
const click_one = document.getElementById('number_one')

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