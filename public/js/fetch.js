let url = '/api/'

// get request for a specific category. Search by id optional
// try to implement the search engine in to this
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

// post function
async function posterChild(category, body) {

    url += category;

    console.log('posterChild body:')
    console.log(body)

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

// update function
async function updater(category, body, id) {

    url = `${url}${category}/${id}`;

    console.log('updater body:')
    console.log(body)

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

// delete function
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

// module.exports = { goGetter, posterChild, updater, terminator }