

function deleteButton(event) {
    console.log('trying to delete');

    event.target.parentElement.parentElement.remove();
    
}

let monthlyCap = 20000;

function submitButton(event) {
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

    //setting the table body to the html spot
    let tableBody = document.getElementById('tableBody');
    
    //adding input into the table
    tableBody.innerHTML +=
    ` <tr>
    <td>${getFirstNameInput}</td>
    <td>${getLastNameInput}</td>
    <td>${getIdInput}</td>
    <td>${getTitleInput}</td>
    <td>$${getSalaryInput}</td>
    <td><button onclick='deleteButton(event)'>delete</button></td>
  </tr>
  `

  console.log('we are trying to add to table body', tableBody);

  //divides the salary to the months
  monthlyCap -= getSalaryInput / 12;

  console.log('this is the new monthly cap', monthlyCap);

  monthlyCap -= document.getElementsByClassName('over-budget').innerHTML;
  
  if (monthlyCap < 0) {
        console.log('we spent way to much money', monthlyCap);
        document.getElementsByClassName('over-budget').value
  }


}


