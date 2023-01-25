function showsubmenutree() {
    let count = document.getElementById('tree').value;
    if (count == 1) {
        document.getElementById('sub_menu_tree').style.visibility = "visible";
        document.getElementById('sub_menu_tree').style.zIndex = 1;
        document.getElementById('sub_menu_tree').style.opacity = 1;
        document.getElementById('tree').value = 0;
    }
    else {
        document.getElementById('sub_menu_tree').style.visibility = "hidden";
        document.getElementById('sub_menu_tree').style.opacity = 0;
        document.getElementById('tree').value = 1;
    }
}

function eachproduct(val) {
    console.log(val);
    localStorage.setItem('objectnumber', val);
}

function outsideproduct(uval) {
    console.log(uval);
    localStorage.setItem('outsidenumber', uval);
}

function boxproduct(bval) {
    console.log(bval);
    localStorage.setItem('bnumber', bval);
}

function soilproduct(sval) {
    console.log(sval);
    localStorage.setItem('snumber', sval);
}

function otherproduct(oval) {
    console.log(oval);
    localStorage.setItem('onumber', oval);
}

function getvalue(value) {
    return value;
}


