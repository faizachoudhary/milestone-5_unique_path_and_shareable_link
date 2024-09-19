// listing element
document.getElementById('resumeForm')?.addEventListener('submit' , function(event){
    event.preventDefault();

    // type assertion
    const profilepictureInput =document.getElementById('profile picture') as HTMLInputElement;
    const nameElement =document.getElementById('name') as HTMLInputElement;
    const fathernameElement =document.getElementById('father name') as HTMLInputElement;
    const phonenumberElement =document.getElementById('phone number') as HTMLInputElement;
    const emailElement =document.getElementById('email') as HTMLInputElement;
    const educationElement =document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement =document.getElementById('experience') as HTMLTextAreaElement;
    const skillsElement =document.getElementById('skills') as HTMLTextAreaElement;
    const hobbiesElement =document.getElementById('hobbies') as HTMLTextAreaElement;


    // **

    const usernameElement = document.getElementById('username') as HTMLInputElement;


    if(profilepictureInput && nameElement && fathernameElement && phonenumberElement && emailElement && educationElement && experienceElement && skillsElement && hobbiesElement && usernameElement) {
        const name = nameElement.value;
        const fathername = fathernameElement.value;
        const phonenumber = phonenumberElement.value;
        const email = emailElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;
        const hobbies = hobbiesElement.value;

        // **

        const username = usernameElement.value;
        const uniquePath = `resumes/${username.replace(/\s+/g, '_')}_cv.html`

    
        // picture element
        const profilepictureFile = profilepictureInput.files?.[0]
        const profilepictureURL = profilepictureFile? URL.createObjectURL(profilepictureFile) : "";


    // create resume output
    const resumeOutput = `
    <h2>Resume</h2>
    ${profilepictureURL ?`<img src="${profilepictureURL}" alt="Profile Picture"  class="profilepicture">` :``}

    <p><strong>Name:</strong> ${name} </p>
    <p><strong>Father Name:</strong> ${fathername} </p>
    <p><strong>Phone Number:</strong> ${phonenumber} </p>
    <p><strong>Email:</strong> ${email} </p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>
    
    <h3>Skills</h3>
    <p>${skills}</p>

    <h3>Hobbies</h3>
    <p>${hobbies}</p>
    `;


    // **

    const downloadLink = document.createElement('a')
    downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
    downloadLink.download = uniquePath;
    downloadLink.textContent = 'Download Your 2024 Resume';



    // resume output
    const resumeOutputElement = document.getElementById('resumeOutput')
    if (resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput;
      
      // makeEditable();


    // **
    resumeOutputElement?.appendChild(downloadLink)


    resumeOutputElement.style.display = "block";
     
    }
    
} else {
    console.error('one or more output element are missing')
}

})


// function makeEditable(){
//     const editableElements = document.querySelectorAll('.editable');
//     editableElements.forEach(element =>{
//         element.addEventListener('click', function(){
//             const currentElement = element as HTMLElement;
//             const currentValue = currentElement.textContent || "";

//             // replace content
//             if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
//                 const input = document.createElement('input')
//                 input.type = 'text'
//                 input.value = currentValue
//                 input.classList.add('aditing-input')


//                 currentElement.style.display = 'none'
//                 currentElement.parentNode?.insertBefore(input, currentElement)
//                 input.focus()
//             }
//         })
//     })
// }
