//FUNCTIONS to find all in each category

//congress navbar button function
async function congressReport(){
    
    console.log("congress report running");

    const response = await fetch('/navbar-routes/congress', {
        method: 'GET',
    });

    if (response.ok) {
    document.location.replace('/navbar-routes/congress');
    } else {
        alert(response.statusText); 
    }

}

//media navbar button function
async function pubReport(){
    
    console.log("publication report running");

    const response = await fetch('/navbar-routes/publication', {
        method: 'GET',
    });

    if (response.ok) {
    document.location.replace('/navbar-routes/publication');
    } else {
        alert(response.statusText); 
    }

}

//meeting navbar button function
async function meetingReport(){
    
    console.log("meeting report running");

    const response = await fetch('/navbar-routes/meeting', {
        method: 'GET',
    });

    if (response.ok) {
    document.location.replace('/navbar-routes/meeting');
    } else {
        alert(response.statusText); 
    }

}

//media navbar button function
async function mediaReport(){
    
    console.log("media report running");

    const response = await fetch('/navbar-routes/media', {
        method: 'GET',
    });

    if (response.ok) {
    document.location.replace('/navbar-routes/media');
    } else {
        alert(response.statusText); 
    }

}

//media navbar button function
async function ftrReport(){
    
    console.log("for the record report running");

    const response = await fetch('/navbar-routes/ftr', {
        method: 'GET',
    });

    if (response.ok) {
    document.location.replace('/navbar-routes/ftr');
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

//logic for moving to form from new submission in dashboard and submit on the dashboard
document.getElementById('newsubmission').addEventListener('click', function() {
    document.location.replace('/form');
});

document.getElementById('submit').addEventListener('click', function() {
    document.location.replace('/form');
});
