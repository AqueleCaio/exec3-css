let box_viewer = document.getElementById('viewer')
let click_one = document.getElementById('number_one')

click_one.addEventListener('click', function() {
    box_viewer.innerHTML = `<div style="
                                position: relative;
                                left: 90%;
                                font-size: 55px;
                                color: white;">${1} 
                            </div>
                            `
})

////////////////////////////////////////////////////////////////////////

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