<<<<<<< HEAD


// write logic to properly return the values
=======
>>>>>>> 8a61a274f9ff08bb43f184864a4ab527bc70f430
async function weeklyReport(){
    console.log("weekly report running");
    const response = await fetch('/api/weekly-report', {
        method: 'GET',
    });

<<<<<<< HEAD
    const reportData = await fetcher('GET', 'weekly-report')
=======
    if (response.ok) {
    document.location.replace('/api/weekly-report');
    } else {
        alert(response.statusText); 
    }
>>>>>>> 8a61a274f9ff08bb43f184864a4ab527bc70f430

}

document.getElementById('weeklyReport').addEventListener('click', weeklyReport);


