let url = '/api/'

// general function to fetch data
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


// specific get function
async function goGetter(category, id=undefined) {

    if (!id) {

        url += category;
        console.log(url);

        const data = await (await fetch(url)).json();

        console.log(data);
        return data;
    }

    if (id) {

        url = `${url}${category}/${id}`;
        console.log(url);

        const data = await (await fetch(url)).json();

        console.log(data);
        return data;
    }

}

// specific post function
async function posterChild(category, body) {

    url += category;


    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json' },
    });

    if (response.ok) {
        console.log('Success!');
    } else {
        alert(response.statusText)
    }

    return;
}

// specific update function
async function updater(category, body, id) {

    url = `${url}${category}/${id}`;

    let response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json' }
    })

    if (response.ok) {
        console.log('Success!');
    } else {
        alert(response.statusText);
    }

}

// specific delete function
async function terminator(category, id) {

    url = `${url}${category}/${id}`; 

    const response = await fetch(url, {
        method: 'DELETE'
    })

    if (response.ok) {
        console.log('Success!');
    } else {
        alert(response.statusText);
    }

}
