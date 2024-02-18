

const seatBtns = document.querySelectorAll('.seats') ;
let seatArr = [] ;

for(const seatBtn of seatBtns){

    seatBtn.addEventListener('click' , (e) => {
        seatArr.push(e.target.innerText)
        if(seatArr.length <= 4){
            if(seatArr.includes(e.target.innerText)){
                setBgColorById(e.target.innerText) ;
                seatBtn
            }
            else{
            }
        }
        else{
            alert('You can select only 4 seats !')
        }
    })

}