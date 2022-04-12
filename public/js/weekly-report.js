async function weeklyReport(){ 
<<<<<<< HEAD

=======
    
>>>>>>> 54fec24d2c42fa9a9bfb097d9f17137a5850a286
    console.log("weekly report running");
    const response = await fetch('/api/weekly-report', {
        method: 'GET',
    });

    if (response.ok) {
    document.location.replace('/api/weekly-report');
    } else {
        alert(response.statusText); 
    }

}

<<<<<<< HEAD
document.getElementById('weekly-report').addEventListener('click', weeklyReport);
=======
document.getElementById('weeklyReport').addEventListener('click', weeklyReport);
document.getElementById('weekly-report').addEventListener('click', weeklyReport);


>>>>>>> 54fec24d2c42fa9a9bfb097d9f17137a5850a286
