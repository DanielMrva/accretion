// submit buttons
const pubPost = document.getElementById('submitPublications');
const congPost = document.getElementById('submitCongress');
const mediaPost = document.getElementById('submitMedia');
const meetingPost = document.getElementById('submitMeetings');
const ftrPost = document.getElementById('submitFTR');

// function to post publication data to the db
async function pubSubmit(event) {

    event.preventDefault();

    // defines the data
    let pubData = {
        pub_name: document.getElementById("pub-name").value.trim(),
        title: document.getElementById("pub-title").value.trim(),
        desc: document.getElementById("pub-desc").value.trim(),
        employee_name: document.getElementById("pub-emp-name").value.trim(),
        employee_email: document.getElementById("pub-emp-email").value.trim(),
        authors: document.getElementById("pub-authors").value.trim(),
    }


    // this converts the office selected to an id for use in the post. Have the default office be the office of the user.
    const office = document.getElementById("pub-office").value;

    const officeData = await (await fetch(`/api/offices/abbrev/${office}`)).json();

    pubData.office_id = officeData[0].id;

    // assigns a null value to any empty fields
    for (const property in pubData) {
        if (pubData[property] === "") {
            pubData[property] = null;
        }
    }

    await posterChild('publications', pubData)


    document.getElementById("pub-name").value = "";
    document.getElementById("pub-title").value = "";
    document.getElementById("pub-desc").value = "";
    document.getElementById("pub-emp-name").value = "";
    document.getElementById("pub-emp-email").value = "";
    document.getElementById("pub-authors").value = "";
    
    return;

}

// function to post congress data to the db
async function congSubmit(event) {

    event.preventDefault();

    let congData =  {
        rep_committee: document.getElementById('rep-committee').value.trim(),
        desc: document.getElementById('congress-desc').value.trim(),
        employee_name: document.getElementById('congress-name').value.trim(),
        employee_email: document.getElementById('congress-email').value.trim(), 
    }

    const office = document.getElementById("congress-office").value;

    const officeData = await (await fetch(`/api/offices/abbrev/${office}`)).json();

    congData.office_id = officeData[0].id;

    for (const property in congData) {
        if (congData[property] === "") {
            congData[property] = null;
        }
    }

    await posterChild('congress', congData);


    document.getElementById("rep-committee").value = "";
    document.getElementById("congress-desc").value = "";
    document.getElementById("congress-name").value = "";
    document.getElementById("congress-email").value = "";

    return;

}

// function to post media data to the db
async function mediaSubmit(event) {

    event.preventDefault();

    let mediaData = {
        name: document.getElementById('media-interaction').value.trim(),
        outlet: document.getElementById('media-outlet').value.trim(),
        desc: document.getElementById('media-desc').value.trim(), 
        employee_name: document.getElementById('media-emp-name').value.trim(),
        employee_email: document.getElementById('media-emp-email').value.trim(),
    }

    const office = document.getElementById("media-office").value;

    const officeData = await (await fetch(`/api/offices/abbrev/${office}`)).json();

    mediaData.office_id = officeData[0].id;

    for (const property in mediaData) {
        if (mediaData[property] === "") {
            mediaData[property] = null;
        }
    }

    await posterChild('media', mediaData);

    document.getElementById("media-interaction").value = "";
    document.getElementById("media-outlet").value = "";
    document.getElementById("media-desc").value = "";
    document.getElementById("media-emp-name").value = "";
    document.getElementById("media-emp-email").value = "";

    return;

}

// function to post meeting/achievement data to the db
async function meetingsSubmit(event) {

    event.preventDefault();

    let mtgData = {
        mtg_ach: document.getElementById('mtg-ach').value.trim(),
        desc: document.getElementById('mtg-desc').value.trim(),
        employee_name: document.getElementById('mtg-name').value.trim(),
        employee_email: document.getElementById('mtg-email').value.trim(),
    }

    const office = document.getElementById("mtg-office").value;

    const officeData = await (await fetch(`/api/offices/abbrev/${office}`)).json();

    mtgData.office_id = officeData[0].id;

    for (const property in mtgData) {
        if (mtgData[property] === "") {
            mtgData[property] = null;
        }
    }

    await posterChild('meetings', mtgData);

    document.getElementById("mtg-ach").value = "";
    document.getElementById("mtg-desc").value = "";
    document.getElementById("mtg-name").value = "";
    document.getElementById("mtg-email").value = "";

    return;

}

// function to post For the Record data to the db
async function ftrSubmit(event) {

    event.preventDefault();

    let ftrData = {
        note: document.getElementById('ftr-note').value.trim(),
        desc: document.getElementById('ftr-desc').value.trim(),
        employee_name: document.getElementById('ftr-emp-name').value.trim(),
        employee_email: document.getElementById('ftr-emp-email').value.trim(),
    }

    const office = document.getElementById("ftr-office").value;

    const officeData = await (await fetch(`/api/offices/abbrev/${office}`)).json();

    ftrData.office_id = officeData[0].id;

    for (const property in ftrData) {
        if (ftrData[property] === "") {
            ftrData[property] = null;
        }
    }

    await posterChild('ftr', ftrData);

    document.getElementById("ftr-note").value = "";
    document.getElementById("ftr-desc").value = "";
    document.getElementById("ftr-emp-name").value = "";
    document.getElementById("ftr-emp-email").value = "";

    return;

}


// event listeners
pubPost.addEventListener('click', pubSubmit);
congPost.addEventListener('click', congSubmit);
mediaPost.addEventListener('click', mediaSubmit);
meetingPost.addEventListener('click', meetingsSubmit);
ftrPost.addEventListener('click', ftrSubmit);

