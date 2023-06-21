let section_1 = document.querySelector('.section1')
let section_2 = document.querySelector('.section2')
let section_3 = document.querySelector('.section3')

let table_body = document.querySelector(".table__body")
let detail = document.querySelector(".detail-container")



section_1.addEventListener("click",()=>{

    detail.style.display = "grid"
    table_body.style.display = "none"
// section_3.style.display = "none"


})

section_2.addEventListener("click",()=>{

    detail.style.display = "none"
    table_body.style.display = "block"
    
    
    })

    section_3.addEventListener("click",()=>{

        detail.style.display = "none"
        table_body.style.display = "block"
        
        
        })
