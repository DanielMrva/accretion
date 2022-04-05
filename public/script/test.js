



async function testGetAll() {


    const response = await fetch('/api/publications', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });

    if (response.ok) {

        console.log(response);

    } else {

        alert(response.statusText);
    }


};


testGetAll()