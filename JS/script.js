

const seatBtns = document.querySelectorAll('.seats') ;
let seatArr = [] ;

for(const seatBtn of seatBtns){

    seatBtn.addEventListener('click' , (e) => {
        
        if(!seatArr.includes(e.target.innerText) && !seatArr.length <= 4){
            seatArr.push(e.target.innerText)

            const seatsTotal = getElementValueById('total-seats')
            if(seatsTotal > 36){
                const seatsTotal = getElementValueById('total-seats')
                const decrement = seatsTotal - 1 ;
                setElementValueById('total-seats' , decrement)
            }
        }
        
        onerror = () => {
            const icrement = 40 ;
            setElementValueById('total-seats' , icrement)
            seatArr.pop() ;
        }

        if(seatArr.length <= 4){
            setBgColorById(e.target.innerText) ;
        }
        else{
            // alert('You can select only 4 seats !')
            seatArr.pop() ;
        }
        
    })

}

