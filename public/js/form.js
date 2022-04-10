// submit buttons
const pubPost = document.getElementById('submitPublications');
const congPost = document.getElementById('submitCongress');
const mediaPost = document.getElementById('submitMedia');
const meetingPost = document.getElementById('submitMeetings');
const ftrPost = document.getElementById('submitFTR');


async function pubSubmit(event) {

    event.preventDefault();

    // defines the data
    let pubData = {
        pub_name: document.getElementById("pub-name").value,
        title: document.getElementById("pub-title").value,
        desc: document.getElementById("pub-desc").value,
        employee_name: document.getElementById("pub-emp-name").value,
        employee_email: document.getElementById("pub-emp-email").value,
        authors: document.getElementById("pub-authors").value,
        // office needs to be a dropdown of all the offices, which in turn queries for the id of that office abbrev/name
        office_id: document.getElementById('pub-office').value
    }


    // this converts the office selected to an id for use in the post. Have the default office be the office of the user.
    // let office = document.getElementById("office");

    // let offID = await fetch(`/api/offices/abbrev/${office}`);

    // pubData.office_id = offID.id;


    // assigns a null value to any empty fields
    for (const property in pubData) {
        if (pubData[property] === "") {
            pubData[property] = null;
        }
    }

    await posterChild('publications', pubData)
    
    return;

}

async function congSubmit(event) {

    event.preventDefault();

    let congData =  {
        rep_committee: document.getElementById('rep-committee').value,
        desc: document.getElementById('congress-desc').value,
        employee_name: document.getElementById('congress-name').value,
        employee_email: document.getElementById('congress-email').value, 
        office_id: document.getElementById('congress-office').value
    }

    for (const property in congData) {
        if (congData[property] === "") {
            congData[property] = null;
        }
    }

    await posterChild('congress', congData);

    return;

}


async function mediaSubmit(event) {

    event.preventDefault();

    let mediaData = {
        name: document.getElementById('media-interaction').value,
        outlet: document.getElementById('media-outlet').value,
        desc: document.getElementById('media-desc').value, 
        employee_name: document.getElementById('media-emp-name').value,
        employee_email: document.getElementById('media-emp-email').value,
        office_id: document.getElementById('media-office').value
    }

    for (const property in mediaData) {
        if (mediaData[property] === "") {
            mediaData[property] = null;
        }
    }

    await posterChild('media', mediaData);


    return;

}


async function meetingsSubmit(event) {

    event.preventDefault();

    let mtgData = {
        mtg_ach: document.getElementById('mtg-ach').value,
        desc: document.getElementById('mtg-desc').value,
        employee_name: document.getElementById('mtg-name').value,
        employee_email: document.getElementById('mtg-email').value,
        office_id: document.getElementById('mtg-office').value
    }

    for (const property in mtgData) {
        if (mtgData[property] === "") {
            mtgData[property] = null;
        }
    }

    await posterChild('meetings', mtgData);

    return;

}


async function ftrSubmit(event) {

    event.preventDefault();

    let ftrData = {
        note: document.getElementById('ftr-note').value,
        desc: document.getElementById('ftr-desc').value,
        employee_name: document.getElementById('ftr-emp-name').value,
        employee_email: document.getElementById('ftr-emp-email').value,
        office_id: document.getElementById('ftr-office').value
    }

    for (const property in ftrData) {
        if (ftrData[property] === "") {
            ftrData[property] = null;
        }
    }

    await posterChild('ftr', ftrData);

    return;

}


// event listeners
pubPost.addEventListener('click', pubSubmit);
congPost.addEventListener('click', congSubmit);
mediaPost.addEventListener('click', mediaSubmit);
meetingPost.addEventListener('click', meetingsSubmit);
ftrPost.addEventListener('click', ftrSubmit);