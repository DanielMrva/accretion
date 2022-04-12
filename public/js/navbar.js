//FUNCTIONS to find all in each category

//congress navbar button function
async function congressReport(){
    
    console.log("congress report running");

    const response = await fetch('/api/navbar-routes/congress', {
        method: 'GET',
    });

    if (response.ok) {
    document.location.replace('/api/navbar-routes/congress');
    } else {
        alert(response.statusText); 
    }

}

//media navbar button function
async function pubReport(){
    
    console.log("publication report running");

    const response = await fetch('/api/navbar-routes/publication', {
        method: 'GET',
    });

    if (response.ok) {
    document.location.replace('/api/navbar-routes/publication');
    } else {
        alert(response.statusText); 
    }

}

//meeting navbar button function
async function meetingReport(){
    
    console.log("meeting report running");

    const response = await fetch('/api/navbar-routes/meeting', {
        method: 'GET',
    });

    if (response.ok) {
    document.location.replace('/api/navbar-routes/meeting');
    } else {
        alert(response.statusText); 
    }

}

//media navbar button function
async function mediaReport(){
    
    console.log("media report running");

    const response = await fetch('/api/navbar-routes/media', {
        method: 'GET',
    });

    if (response.ok) {
    document.location.replace('/api/navbar-routes/media');
    } else {
        alert(response.statusText); 
    }

}

//media navbar button function
async function ftrReport(){
    
    console.log("for the record report running");

    const response = await fetch('/api/navbar-routes/ftr', {
        method: 'GET',
    });

    if (response.ok) {
    document.location.replace('/api/navbar-routes/ftr');
    } else {
        alert(response.statusText); 
    }

}


//LOGIC
document.getElementById('congress-report').addEventListener('click', congressReport);
document.getElementById('publication-report').addEventListener('click', pubReport);
document.getElementById('meeting-report').addEventListener('click', meetingReport);
document.getElementById('media-report').addEventListener('click', mediaReport);
document.getElementById('record-report').addEventListener('click', ftrReport);
