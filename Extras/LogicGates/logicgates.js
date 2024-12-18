/* ----- Variables ----- */
let checkboxList = [];

/* ----- Functions ----- */
function RunLogicGate() {
    var INPUT_1 = document.getElementById('INPUT_1').checked;
    var INPUT_2 = document.getElementById('INPUT_2').checked;
    var GATE_1 = document.getElementById('GATE_1').value;
    var valResult;

    switch (GATE_1) {
        case "OPEN":
            valResult = INPUT_1;
            break;
        case "AND":
            valResult = INPUT_1 && INPUT_2;
            break;
        case "OR":
            valResult = INPUT_1 || INPUT_2;
            break;
        case "XOR":
            valResult = INPUT_1 !== INPUT_2;
            break;
        case "NOT":
            valResult = !INPUT_1;
            break;
        case "NAND":
            valResult = !(INPUT_1 && INPUT_2);
            break;
        case "NOR":
            valResult = !(INPUT_1 || INPUT_2);
            break;
        case "XNOR":
            valResult = (INPUT_1 && INPUT_2) || (!INPUT_1 && !INPUT_2);
            break;
    }

    var GATE_1 = document.getElementById('OUTPUT_1').value = valResult;
}

function AddInput() {
    // Create the checkbox element
    const checkbox = document.createElement('input');
    const label = document.getElementById('INPUT_NAME').value;

    if(label == ""){
        SendMessage("Error No Input Name");
    }
    else{

        checkbox.type = 'checkbox';
        checkbox.name = 'checkboxList[]'; // Use an array for multiple checkboxes
        checkbox.value = label;

        // Create the label element
        const labelElement = document.createElement('label');
        labelElement.textContent = label;

        // Create a container for the checkbox and label
        const container = document.createElement('div');
        container.appendChild(checkbox);
        container.appendChild(labelElement);

        // Append the container to the list
        document.getElementById('inputList').appendChild(container);

        document.getElementById('INPUT_NAME').value = null;
    }
}

function AddGate() {
    // Create the checkbox element
    const checkbox = document.createElement('input');
    const label = document.getElementById('GATE_NAME').value;

    if(label == ""){
        SendMessage("Error No Input Name");
    }
    else{

        checkbox.type = 'checkbox';
        checkbox.name = 'checkboxList[]'; // Use an array for multiple checkboxes
        checkbox.value = label;

        // Create the label element
        const labelElement = document.createElement('label');
        labelElement.textContent = label;

        // Create a container for the checkbox and label
        const container = document.createElement('div');
        container.appendChild(checkbox);
        container.appendChild(labelElement);

        // Append the container to the list
        document.getElementById('inputList').appendChild(container);

        document.getElementById('INPUT_NAME').value = null;
    }
}
function AddResult() {
    

}
function SendMessage(message){
    document.getElementById('messageBoxOverlay').style.display = 'block';
    document.getElementById('messageMSGBox').style.display = 'block';
    document.getElementById('messageMSG').innerHTML = message;
}

function CloseMessage(){
    document.getElementById('messageBoxOverlay').style.display = 'none';
    document.getElementById('messageMSGBox').style.display = 'none';
    document.getElementById('messageMSG').innerHTML = "NO MESSAGE SET";
}