

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

            const seatCount = getElementValueById('seat-count') ;
            if(seatCount < 4){
                const seatCount = getElementValueById('seat-count') ;
                const count = seatCount + 1 ;
                setElementValueById('seat-count' , count)
            }

            const dinamic = document.getElementById('dinamic-container') ;
            const dinamicChilds = dinamic.childNodes.length ;
            if(dinamicChilds <= 4){
                const dinamic = document.getElementById('dinamic-container') ;

                const ptag = document.createElement('p') ;

                const span1 = document.createElement('span') ;
                span1.innerText = e.target.innerText ;
                const span2 = document.createElement('span') ;
                span2.innerText = 'Economoy' ;
                span2.classList.add('ml-10') 

                const span3 = document.createElement('span') ;
                span3.innerText = 550 ;

                // P tag styles !
                ptag.classList.add('flex')
                ptag.classList.add('justify-between')
                ptag.classList.add('items-center')
                ptag.classList.add('inter')
                ptag.classList.add('text-[#03071299]')

                ptag.appendChild(span1)
                ptag.appendChild(span2)
                ptag.appendChild(span3)

                dinamic.appendChild(ptag) ;
                console.log(e.target.innerText);
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

