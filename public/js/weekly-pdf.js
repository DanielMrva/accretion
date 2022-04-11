async function weeklyPDF(event){

    event.preventDefault(); 
    
    console.log("weekly report PDF running");
    const response = await fetch('/api/weekly-PDF', {
        method: 'GET',
    });

    if (response.ok) {
    document.location.replace("/api/weekly-PDF");
    } else {
        alert(response.statusText); 
    }

}

document.getElementById('weeklyPDF').addEventListener('click', weeklyPDF);


