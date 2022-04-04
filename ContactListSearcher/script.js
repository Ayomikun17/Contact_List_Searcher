let filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    //Get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();


    //Get names ul, you can leave this out
    // let ul = document.getElementById('names');

    //get li from ul
    let li = document.querySelectorAll('.collection-item');

    //loop through the collection items
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        //We got used the li to get the a tags because the a tags are embedded into the li
        //We put the [0] index to get the current link 

        //If matched
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            //if a letter entered corresponds with one of the letters in the names
            li[i].style.display = '';
            //if there's a match then we set the css style property to do nothing so it displays the corresponding names
        } else {
            li[i].style.display = 'none';
            //if there's no match then hide all the names available
        }
    }
}