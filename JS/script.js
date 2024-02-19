

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

            // Creat dinamic P tags !
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
                span3.innerText = parseInt(550) ;

                // P tag styles !
                ptag.classList.add('flex')
                ptag.classList.add('justify-between')
                ptag.classList.add('items-center')
                ptag.classList.add('inter')
                ptag.classList.add('text-[#03071299]')

                ptag.appendChild(span1)
                ptag.appendChild(span2)
                ptag.appendChild(span3)

                // To handle some Error !
                if(span1.innerText.length <= 2){
                    dinamic.appendChild(ptag) ;
                    
                    const seatCount = getElementValueById('seat-count') ;
                    if(seatCount < 4){
                        const seatCount = getElementValueById('seat-count') ;
                        const count = seatCount + 1 ;
                        setElementValueById('seat-count' , count)
                    }
                }
                else{
                    const seatCount = getElementValueById('seat-count') ;
                    onerror = () => {
                        const count = seatCount - 1 ;
                        if(count > 0){
                            setElementValueById('seat-count' , count)
                        }
                    }
                }
                
            }
            
        }
        
        // To handle some Error !
        onerror = () => {
            const seatsTotal = getElementValueById('total-seats')
            const increment = seatsTotal + 1 ;
            setElementValueById('total-seats' , increment)
            seatArr.pop() ;
        }

        if(seatArr.length <= 4){

            // Update the total price !
            if(seatArr[0].length <= 4 || seatArr.includes(e.target)){
                const ticketPrice = 550;
                const totalPrice = ticketPrice * seatArr.length ;
                setElementValueById('total-price' , totalPrice)
            }

            if(seatArr.length >= 4){
                const applyBtn = getElementById('apply-btn') ;
                applyBtn.removeAttribute('disabled') ;
            }

            if(!e.target.classList.contains('bg-green-500')){
                document.getElementById('apply-btn').addEventListener('click' , () => {
                    
                    const ticketPrice = 550;
                    const totalPrice = ticketPrice * seatArr.length ;
                    setElementValueById('total-price' , totalPrice)

                    const inputvalue = getInputValueById('coupon-input') ;
                    if(inputvalue === 'NEW15'){
                        const grandTotal = totalPrice * 15 / 100 ;
                        const finelPrice = totalPrice - grandTotal ;
                        setElementValueById('grand-price' , finelPrice)

                        const dinamicPTag = getElementById('dinamic-p-tag')
                        const dinamicSpan = document.createElement('span') ;
                        dinamicSpan.innerText = 'Discount' ;
                        const dinamicPriceSpan = document.createElement('span') ;
                        dinamicPriceSpan.innerText = '-' + grandTotal ;
                        // justify-between items-center font-medium text-[#030712]
                        dinamicPTag.classList.add('flex')
                        dinamicPTag.classList.add('justify-between')
                        dinamicPTag.classList.add('items-center')
                        dinamicPTag.classList.add('font-medium')
                        dinamicPTag.classList.add('text-[#030712]')
                        dinamicPTag.classList.add('mt-2')

                        dinamicPTag.appendChild(dinamicSpan)
                        dinamicPTag.appendChild(dinamicPriceSpan)

                        const couponContainer = getElementById('coupon-container') ;
                        const couponInput = getElementById('coupon-input') ;
                        const couponBtn = getElementById('apply-btn') ;
                        couponInput.classList.add('hidden') ;
                        couponBtn.classList.add('hidden') ;

                        couponContainer.classList.add('text-center')
                        couponContainer.classList.add('text-[#1DD100]')

                        couponContainer.innerText = "'Congratulations you have success fully submit the Coupon Code ! '" ;

                        couponContainer.appendChild(newPTag) ;
                    }
                    else if(inputvalue === 'Couple 20'){
                        const grandTotal = totalPrice * 20 / 100 ;
                        const finelPrice = totalPrice - grandTotal ;
                        setElementValueById('grand-price' , finelPrice)
    
                        const couponContainer = getElementById('coupon-container') ;
                        couponContainer.classList.add('hidden') ;
                    }

                })

                document.getElementById('input-phone').addEventListener('blur' , () => {
                    const numberInput = getInputValueById('input-phone') ;
                    if(!isNaN(numberInput) && numberInput !== ''){
                        const nextBtn = getElementById('next-btn');
                        nextBtn.removeAttribute('disabled')
                    }
                })
                
            }
            
            // Update the grand total price !
            if(seatArr[0].length <= 4 || seatArr.includes(e.target)){
                const ticketPrice = 550;
                const grandTotal = ticketPrice * seatArr.length
                setElementValueById('grand-price' , grandTotal)
            }

            setBgColorById(e.target.innerText) ;

        }
        else{
            seatArr.pop() ;
        }

    })
    
}

function nextVerdion (){
    showElementById('success-container') ;
    hideElementById('sec1')
    hideElementById('sec2')
    hideElementById('header')
    hideElementById('footer')
}

function continuef (){
    hideElementById('success-container')
    showElementById('sec1')
    showElementById('sec2')
    showElementById('header')
    showElementById('footer')
    window.location.reload() ;
}

