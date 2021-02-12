let students =[];
let r = 1;
function getGender(){
    let g = document.getElementsByName('gender');
    if (g[0].checked)
        return g[0].value;
    else if (g[1].checked)
        return g[1].value;
}
function getSkills() {
    let c = document.getElementsByClassName('skill-value');
    let skills = [];
    for (var i = 0; i < 3; i++) {
        if (c[i].checked)
            skills.push(c[i].value);
    }
    return skills;
}

let enrollButton = document.getElementById('enroll-button');
enrollButton.onclick= function enrollStudent (e)  {
    e.preventDefault();
    let student = {
        Name: document.getElementById('form-name').value,
        Email: document.getElementById('form-email').value,
        Website: document.getElementById('form-website').value,
        Image: document.getElementById('form-image').value,
        Gender: getGender(),
        Skills: getSkills(),
    };
    if(student.Name =="" || student.Email == "" || student.Website == "" || student.Image == "" || student.Gender == "")
    {
        alert('Please enter all the required details!');
        return false;
    }



    
    students.push(student);
    let tableBody = document.getElementById('student-table');

    let newRow = tableBody.insertRow(r);
    if(r%2==0)
        newRow.classList.add('student-table-newrow-dark');
    else    
    newRow.classList.add('student-table-newrow-light');

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell2.classList.add('student-image-container');

    let nameNode = document.createElement('p');
    nameNode.innerHTML = student.Name;
    nameNode.classList.add('student-data-tag');
    nameNode.classList.add('name-bold');
    
    let emailNode = document.createElement('p');
    emailNode.innerHTML = student.Email;
    emailNode.classList.add('student-data-tag');
    
    let websiteNode = document.createElement('a');
    let link =document.createTextNode(student.Website);
    websiteNode.appendChild(link);
    websiteNode.href = student.Website;
    websiteNode.target ="_blank";
    websiteNode.classList.add('student-data-link-tag');


    
    let genderNode = document.createElement('p');
    genderNode.innerHTML = student.Gender;
    genderNode.classList.add('student-data-tag');
    
    let skillsNode = document.createElement('p');
    skillsNode.innerHTML = student.Skills;
    skillsNode.classList.add('student-data-tag');
    

    const profileImg = document.createElement('img');
    profileImg.classList.add('enroll-student-image');
    profileImg.src=student.Image;
    
    

    cell1.appendChild(nameNode);
    cell1.appendChild(genderNode);
    cell1.appendChild(emailNode);
    cell1.appendChild(websiteNode);
    cell1.appendChild(skillsNode);
    cell2.appendChild(profileImg);
    r++;
    document.getElementById('enrollment-form').reset();
    
}