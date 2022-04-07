// const { goGetter, posterChild, updater, terminator } = require('./fetch')

const post = document.getElementById('post');

// let url = 'http://localhost:3001/api/'


// work with optional query info in the url to accomplish. create those in the routes


// function to generate the weekly report
async function weeklyReport(event) {

    event.preventDefault();

    let report = [];

    // publications
    const publications = await (await fetch('http://localhost:3001/api/publications')).json();

    // meetings
    // const meetings = await (await fetch('http://localhost:3001/api/meetings')).json();

    // media
    const media = await (await fetch('http://localhost:3001/api/media')).json();

    // acheivements
    // const  acheivements = await fetch('http://localhost:3001/api/acheivements');

    // congress
    // const congress = await fetch('http://localhost:3001/api/congress');

    console.log('publications:');
    console.log(publications);
    console.log('media');
    console.log(media)

    // carry this out for each category once the routes are merged 
    report = [publications, media];

    console.log('report:')
    console.log(report)

    return report;

}


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



async function btnPress(event) {

    event.preventDefault();


    // defines the data
    let pubData = {
        pub_name: document.getElementById("pubName").value,
        pub_date: document.getElementById("pubDate").value,
        keywords: document.getElementById("keywords").value,
        article_title: document.getElementById("title").value,
        author_name: document.getElementById("authName").value,
        other_contrib: document.getElementById("contributors").value,
    }


    // assigns a null value to any empty fields
    for (const property in pubData) {
        if (pubData[property] === "") {
            pubData[property] = null;
        }
    }

    console.log(pubData);

    terminator('publications', 10)

}


// this is the action on button press. Expand this out for the queries
post.addEventListener('click', btnPress)