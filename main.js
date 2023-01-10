const firebaseConfig = {
    apiKey: "AIzaSyCiMdoeA-iN0x7Z3KAofyCUVZPlW_Mw2Rk",
    authDomain: "timeofeating.firebaseapp.com",
    databaseURL: "https://timeofeating-default-rtdb.firebaseio.com",
    projectId: "timeofeating",
    storageBucket: "timeofeating.appspot.com",
    messagingSenderId: "1097272366889",
    appId: "1:1097272366889:web:d71b3dd6b17f2ba7c80938",
    measurementId: "G-7R3S6Q0XHK"
};

// to initializeApp 
firebase.initializeApp(firebaseConfig);

// reference to database
const timeofeating = firebase.database().ref('timeofeating')

document.getElementById('eat').addEventListener("submit", (e) => {
    // e.preventDefault();
    let name = document.getElementById('name').value;
    let work = document.getElementById('work').value;
    let time = new Date();
    let t = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    confirm(`${name} ${work} ${t}`)
    saveMessages(name, work, t)
})

let saveMessages = (name, work, t) => {
    let newTime = timeofeating.push();

    newTime.set({
        name: name,
        work: work,
        t: t
    })
};

// retrive data from firebase 

timeofeating.on('value', function (snapshot) {
    var data = snapshot.val();
    var ll = Object.values(data);
    // console.log(ll);
    let aayansh = document.getElementById('aayansh');
    let anaya = document.getElementById('anaya');
    var aa = [];
    var yy = [];
    ll.map((e) => {
        if (e.name == "આયાંશ") {
            aa.push(e);
        } if (e.name == "અનાયા") {
            yy.push(e);
        }
    })

    console.log(aa);
    console.log(yy);
    aa = aa.reverse();
    yy = yy.reverse();
    aa.map((e) => {
        let html = `
            <li class="bg-gray-800 rounded-lg  p-2 m-1">
                <p>${e.work}</p>
                <p>${e.t}</p>
            </li>
                `
        aayansh.innerHTML += html;
    })
    yy.map((e) => {
        let html = `
            <li class="bg-gray-800 rounded-lg  p-2 m-1">
                <p>${e.work}</p>
                <p>${e.t}</p>
            </li>
                `
        anaya.innerHTML += html;
    })

})
