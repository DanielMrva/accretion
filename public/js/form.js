
const pubPost = document.getElementById('submitPublications');
<<<<<<< HEAD
const achPost = document.getElementById('submitAchievement');
// let url = 'http://localhost:3001/api/'


// work with optional query info in the url to accomplish. create those in the routes


async function fetcher(method, category, id=undefined, body=undefined) {

    let data;

    switch (method) {

        case 'GET':
            
            if (!id) {

                data = await goGetter(category);
                return data;

            } else {

                data = await goGetter(category, id);
                return data;
            }
        
        case 'POST':

            data = await posterChild(category, body);
            return;

        case 'PUT': 

            data = await updater(category, body, id);
            return;

        case 'DELETE':
            
            data = await terminator(category, id)
            return;
    }

}
// for achievement table
async function achSumbit(event) {
    event.preventDefault();

    let achData = {
        
    }
}
=======

>>>>>>> 304ccea6a035df42fc80813d2ca38ae29be1044f

// currently this is for the publication table
// replicate this for each entry type
async function pubSubmit(event) {

    event.preventDefault();

    // defines the data
    let pubData = {
        pub_name: document.getElementById("pubName").value,
        title: document.getElementById("title").value,
        desc: document.getElementById("desc").value,
        employee_name: document.getElementById("name").value,
        employee_email: document.getElementById("email").value,
        authors: document.getElementById("authors").value,
        // office needs to be a dropdown of all the offices, which in turn queries for the id of that office abbrev/name
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

    posterChild('publications', pubData)
    // goGetter('publications')

}


// this is the action on button press. Expand this out for the queries
pubPost.addEventListener('click', pubSubmit)


