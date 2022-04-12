<<<<<<< HEAD
async function weeklyReport(){

=======
async function weeklyReport(){ 
    
>>>>>>> e15e649831e45832ac8db6c0c58c7a46c21fe533
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

document.getElementById('weeklyReport').addEventListener('click', weeklyReport);


