

function deleteButton(event) {
    console.log('trying to delete');

    
}

function submitButt(event) {
    console.log('trying to button');
    event.preventDefault();

    //get input
    let getFirstNameInput = document.getElementById('firstNameInput').value;
    let getLastNameInput = document.getElementById('lastNameInput').value;
    let getIdInput = document.getElementById('idInput').value;
    let getTitleInput = document.getElementById('titleInput').value;
    let getSalaryInput = document.getElementById('annualSalaryInput').value;

    //resets input
    document.getElementById('firstNameInput').value = '';
    document.getElementById('lastNameInput').value = '';
    document.getElementById('idInput').value = '';
    document.getElementById('titleInput').value = '';
    document.getElementById('annualSalaryInput').value = '';

    console.log(getFirstNameInput, getLastNameInput, getIdInput, getTitleInput, getSalaryInput);

    let tableBody = document.getElementById('tableBody');

    tableBody.innerHTML +=
    ` <tr>
    <td>${getFirstNameInput}</td>
    <td>${getLastNameInput}</td>
    <td>${getIdInput}</td>
    <td>${getTitleInput}</td>
    <td>${getSalaryInput}</td>
    <td><button onclick='deleteButton(event)'>delete</button></td>
  </tr>
  `

  console.log('we are trying to add to table body', tableBody);
}