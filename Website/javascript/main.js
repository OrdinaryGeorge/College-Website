document.addEventListener("DOMContentLoaded", function () {

    console.log('Brrr')

    var CurContMode = localStorage.getItem('ContrastMode')
    const BackGround = document.querySelectorAll('body');
    const placeholder = document.querySelectorAll('::placeholder');
    const Icons = document.querySelectorAll('.Nav-Icons');
    const ContextMenu = document.querySelectorAll('.custom-context-menu');

    if (CurContMode === null) {
        console.log('Null')
        localStorage.setItem('ContrastMode', '1');
        return
    }

    if (CurContMode === '2') {
        console.log('Light')
        // BackGround.classList.toggle("body-light");
        // Icons.classList.toggle("Nav-Icons-light");
        Icons.forEach((userItem) => {
            userItem.classList.toggle("Nav-Icons-light");
        });
        ContextMenu.forEach((userItem) => {
            userItem.classList.toggle("custom-context-menu-light");
        });
        BackGround.forEach((userItem) => {
            userItem.classList.toggle("body-light");
        });
        // placeholder.style.colour = 'black'
        placeholder.forEach((userItem) => {
            userItem.classList.toggle("body-light");
        });
    } else if (CurContMode === '1') {
        console.log('Dark')
        // dark is default page style
    }
});


function fadeIn(id) {
    let element = document.getElementById(id);
    let opacity = 0;
    element.style.display = "flex";
    element.style.opacity = opacity;

    let fadeEffect = setInterval(function () {
        if (opacity < 1) {
            opacity += 0.01;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeEffect);
        }
    }, 30);
}

function SwitchContrastMode() {
    const CurContMode = localStorage.getItem('ContrastMode')
    const BackGround = document.querySelector('body');
    const Icons = document.querySelectorAll('.Nav-Icons');
    const ContextMenu = document.querySelectorAll('.custom-context-menu');
    if (CurContMode === '1') { localStorage.setItem('ContrastMode', '2'); } else if (CurContMode === '2') { localStorage.setItem('ContrastMode', '1'); }


    BackGround.classList.toggle("body-light");
    ContextMenu.forEach((userItem) => {
        userItem.classList.toggle("custom-context-menu-light");
    });

    Icons.forEach((userItem) => {
        userItem.classList.toggle("Nav-Icons-light");
    });
}

var ContextOpen = false

function OpenDropdown() {
    const Context = document.getElementById('customContextMenu');
    Context.innerHTML = `
        <ul>
            <li onclick="Dofunctionpls('Navigation', 'Home')">Home Page</li>
            <li onclick="Dofunctionpls('Navigation', 'AboutMe')">About Me</li>
            <li onclick="Dofunctionpls('Navigation', 'Hobbies')">My Hobbies</li>
            <li onclick="Dofunctionpls('Navigation', 'MyCV')">My CV</li>
            <li onclick="Dofunctionpls('Navigation', 'GCSEG')">My GCSE Grades</li>
            <li onclick="Dofunctionpls('Navigation', 'SCML')">Social Links</li>
            <li onclick="Dofunctionpls('Navigation', 'Contact')">Contact Me</li>
            <br>
            <li onclick="Dofunctionpls('Navigation', 'CybrSec')">Cyber Security</li>
        </ul>
    `;

    console.log('1')
    if (ContextOpen === true) {
        Context.style.display = 'none'
        setTimeout(`ContextOpen = false`, 200)
    } else if (ContextOpen === false) {
        fadeIn('customContextMenu')
        setTimeout(`ContextOpen = true`, 200)
    }
}

window.addEventListener('click', (event) => {
    const Context = document.getElementById('customContextMenu');

    if (ContextOpen === true) {
        if (!Context.contains(event.target)) {
            Context.style.display = 'none';
            ContextOpen = false;
        }
    }
});


function Dofunctionpls(Type, Thing) {
    if (Type === 'Navigation') {
        window.location.replace(Thing + '.html');
    }
}

var EmailInfo = false


function OpenEmailForm(Type) {
    if (Type === 'Open') {
        const EMLFORM = document.getElementById("EmailContainer")
        if (EmailInfo === false) {
            EMLFORM.innerHTML = `
            <input id="EFirstName" value="" placeholder="First name"></input>
            <input id="ELastName" value="" placeholder="Last name"></input>
            <input id="EEmail" style="width: 20rem;" value="" placeholder="Email"></input>
            <input id="EMessage" style="width: 20rem; height: 10rem;" value="" placeholder="Message"></input>
            <button onclick="OpenEmailForm('Send')" >Send</button>`;
            EMLFORM.style.display = 'block';
            EmailInfo = true
        } else if (EmailInfo === true) {
            EMLFORM.innerHTML = "";
            EMLFORM.style.display = 'none';
            EmailInfo = false
        }
    } else if (Type === 'Send') {
        EF = document.getElementById('EFirstName');
        EL = document.getElementById('ELastName');
        EE = document.getElementById('EEmail');
        EM = document.getElementById('EMessage');
        // Need to make fuction

        var link = "https://discord.com/api/webhooks/1303002886674059264/iolIbKQq65hE9u0VjTgdEcoSzqnzyE7RwBGREAzqkz2Jn6KZ8pOQnEOFAf4-e9xcR5-t"
        var avatar = ""
        var username = "Website"
        var content = "Firstname: "+EF.value + " Lastname:" + EL.value + "\nEmail: " + EE.value + "\n```" + EM.value + "```"
        fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: content,
                username: username,
                avatar_url: avatar,
            }),
        })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch(error => console.error('Error:', error));
            EF.value = ''
            EL.value = ''
            EE.value = ''
            EM.value = ''
            
            setTimeout(function() {
                const EMLFORM = document.getElementById("EmailContainer")
                EMLFORM.style.display = 'none';
                EmailInfo = false
            }, 5 )

    }
}
