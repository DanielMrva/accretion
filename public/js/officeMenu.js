

async function menuGen() {

    let officeData = await goGetter('offices');

    // for some reason i wasn't able to append everything in a single for loop.
    // congress
    for (let i = 0; i < officeData.length; i++) {

        let option = document.createElement('option');
        option.value = officeData[i].abbreviation;
        option.text = officeData[i].abbreviation;

        document.getElementById('congress-office').appendChild(option);

    }

    // media
    for (let i = 0; i < officeData.length; i++) {

        let option = document.createElement('option');
        option.value = officeData[i].abbreviation;
        option.text = officeData[i].abbreviation;

        document.getElementById('media-office').appendChild(option);

    }

    // meetings
    for (let i = 0; i < officeData.length; i++) {

        let option = document.createElement('option');
        option.value = officeData[i].abbreviation;
        option.text = officeData[i].abbreviation;

        document.getElementById('mtg-office').appendChild(option);

    }

    // publications
    for (let i = 0; i < officeData.length; i++) {

        let option = document.createElement('option');
        option.value = officeData[i].abbreviation;
        option.text = officeData[i].abbreviation;

        document.getElementById('pub-office').appendChild(option);

    }


    // ftr
    for (let i = 0; i < officeData.length; i++) {

        let option = document.createElement('option');
        option.value = officeData[i].abbreviation;
        option.text = officeData[i].abbreviation;

        document.getElementById('ftr-office').appendChild(option);

    }

    
}


menuGen()


// var e = document.getElementById("selectElementID");
// var value=e.options[e.selectedIndex].value;// get selected option value
// var text=e.options[e.selectedIndex].text;