
// specific get function
async function goGetter(category, id=undefined) {

    let url = '/api/'

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

    let url = '/api/'

    url += category;

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

// specific update function
async function updater(category, body, id) {

    let url = '/api/'

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

    let url = '/api/'

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
