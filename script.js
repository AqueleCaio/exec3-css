let box_viewer = document.getElementById('viewer')
const all_numbers = document.getElementById('iNumber')
const click_one = document.getElementById('number_one')
const click_two = document.getElementById('number_two')
const click_three = document.getElementById('number_three')
const click_four = document.getElementById('number_four')
const click_five = document.getElementById('number_five')
const click_six = document.getElementById('number_six')
const click_seven = document.getElementById('number_seven')
const click_eight = document.getElementById('number_eight')
const click_nine = document.getElementById('number_nine')


click_one.addEventListener('click', insert)


function insert(number){
    box_viewer.innerHTML = number
}


////////////////////////////////////////////////////////////////////////



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