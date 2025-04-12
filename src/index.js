const init = () => {

    const inputForm = document.querySelector("form")
    inputForm.addEventListener("submit", (event)=>{
        event.preventDefault()
        const input = document.querySelector("input#searchByID")
        console.log(input.value)
       
       fetch(`http://localhost:3000/movies/${input.value}`)
        .then((Response) => Response.json())
        .then((data)=> {

            console.log(data)
           
            //create element to append title
            let titleArea = document.querySelector("h4");
            titleArea.innerHTML = ''; // Clear previous content
            let titleName = document.createElement("h2");
            titleName.innerText = data.title;
            titleArea.append(titleName);
            input.value = '';

            // Create element to append summary
            let summaryArea = document.querySelector("p");
            summaryArea.innerHTML = ''; // Clear previous content
            let summaryContent = document.createElement("p");
            summaryContent.innerText = data.summary;
            summaryArea.append(summaryContent);
            input.value = '';


        })







    }
    
    )


  
}

document.addEventListener('DOMContentLoaded', init);