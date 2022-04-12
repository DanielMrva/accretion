//FUNCTIONS to find all in each category

async function congressReport(){
    
    console.log("congress report running");

    const response = await fetch('/api/congress', {
        method: 'GET',
    });

    if (response.ok) {
    document.location.replace('/api/congress');
    } else {
        alert(response.statusText); 
    }

}

//LOGIC
document.getElementById('congressReport').addEventListener('click', congressReport);
