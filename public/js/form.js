// const { goGetter, posterChild, updater, terminator } = require('./fetch')

const pubPost = document.getElementById('submitPublications');

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


// currently this is for the publication table
async function pubSubmit(event) {

    event.preventDefault();


    // defines the data
    let pubData = {
        pub_name: document.getElementById("pubName").value,
        pub_date: document.getElementById("pubDate").value,
        keywords: document.getElementById("keywords").value,
        article_title: document.getElementById("title").value,
        author_name: document.getElementById("authName").value,
        other_contrib: document.getElementById("contributor").value,
    }


    // assigns a null value to any empty fields
    for (const property in pubData) {
        if (pubData[property] === "") {
            pubData[property] = null;
        }
    }

    console.log(pubData);

    goGetter('publications')

}


// this is the action on button press. Expand this out for the queries
pubPost.addEventListener('click', pubSubmit)