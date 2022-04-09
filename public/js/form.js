// const { goGetter, posterChild, updater, terminator } = require('./fetch')

const pubPost = document.getElementById('submitPublications');
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

// currently this is for the publication table
async function pubSubmit(event) {

    event.preventDefault();


    console.log(1)
    // defines the data
    let pubData = {
        pub_name: document.getElementById("pubName").value,
        pub_date: document.getElementById("pubDate").value,
        article_title: document.getElementById("title").value,
        name: document.getElementById("authName").value,
        other_contrib: document.getElementById("contributor").value,
        user_id: 1,
        office_id: 1
    }


    console.log(2)
    // assigns a null value to any empty fields
    for (const property in pubData) {
        if (pubData[property] === "") {
            pubData[property] = null;
        }
    }

    console.log(3)
    posterChild('publications', pubData)
    // goGetter('publications')

    console.log(4)

}


// this is the action on button press. Expand this out for the queries
pubPost.addEventListener('click', pubSubmit)


