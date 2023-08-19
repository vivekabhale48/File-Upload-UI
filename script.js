
const displayFileName = (e) => {
    
    const file = document.getElementById('select');
    console.log(e.target.files[0]);
    const fileContent = e.target.files[0];
    const fileName = e.target.files[0].name
    const allfiles = document.querySelector('.allfiles');
    const div = document.createElement('div');
    div.className = 'fileupload'

    div.innerHTML = `
        <div class="upload-content">
            <div class="smallImg">
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="imgName">
                ${fileName}
            </div>
            <div class="upload-percent">
            </div>
        </div>
        <div class="progress-bar">
            <div class="bar"></div>
        </div>
    `
    allfiles.appendChild(div);
    console.log(allfiles)

    const fileupload = document.querySelector('.fileupload');
    fileupload.addEventListener('click', function(){
        if(fileContent) {
            const reader = new FileReader();
            console.log(reader)
            reader.onload = function(event) {
                console.log(event.target.result);
            }
            reader.readAsDataURL(fileContent);
        }
    })
}


