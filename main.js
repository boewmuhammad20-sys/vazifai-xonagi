let box = document.querySelector('.box');
let dialog = document.querySelector('.dialog');
let name = document.querySelector('.name');
let city = document.querySelector('.city');
let phone = document.querySelector('.phone');
let save = document.querySelector('.save');
let cancel = document.querySelector('.cancel');
let add = document.querySelector('.add');


let users = JSON.parse(sessionStorage.getItem("users")) || [
    {
        id: 1,
        name:"alijan",
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTibKJbn2AvGAXHAo-GFwSeJRQhrii2U62eo9aMgxGSA&s=10",
        status:true,
        city:"kulob",
        phone:"+992 918 88 88 88"
    },
       {
           avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTibKJbn2AvGAXHAo-GFwSeJRQhrii2U62eo9aMgxGSA&s=10",
           id: 2,
           city:"kulob",
           name:"alijan",
           status:false,
           phone:"+992 918 88 88 88"
    }
]


add.onclick=() => {
    dialog.showModal();
}

save.onclick=() => {
    let newUser = {
        id: Date.now(),
        name: name.value,
        avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTibKJbn2AvGAXHAo-GFwSeJRQhrii2U62eo9aMgxGSA&s=10",
        status:true,
        city:city.value,
        phone:phone.value
}

users.push(newUser);
getUsers(users);
sessionStorage.setItem("users", JSON.stringify(users));
dialog.close();

name.value = '';
city.value = '';
phone.value = '';
}


function delet(id) {
    users = users.filter(e => e.id !== id);
    getUsers(users);
    sessionStorage.setItem("users", JSON.stringify(users));
}

cancel.onclick=() => {
    dialog.close();
    name.value = '';
    city.value = '';
    phone.value = '';
}


function getUsers(users) {
    box.innerHTML = '';
    users.forEach(e => {
        let tr = document.createElement("tr");

        let avatar = document.createElement("img");
        avatar.src = e.avatar;
        avatar.classList.add("avatar");
        avatar.style.width = "40px"; 
        avatar.style.height = "40px";
        avatar.style.borderRadius = "50%";

        let tName = document.createElement("td");
        tName.classList.add("tName");

        let name = document.createElement("h2");
        name.innerHTML = e.name;

        let city = document.createElement("td");
        city.innerHTML = e.city;

        let status = document.createElement("td");
        status.innerHTML = e.status ? "active" : "inactive";

        let phone = document.createElement("td");
        phone.innerHTML = e.phone;

        let acshn = document.createElement("td");

        let del = document.createElement("button");
        del.innerHTML = "Delete";
        del.onclick = () => {
            delet(e.id);
        };

        let edit = document.createElement("button");
        edit.innerHTML = "Edit";

        acshn.append(del, edit);
        tName.append(avatar, name);
        tr.append(tName, city, status, phone, acshn);
        box.append(tr);
    });
}

getUsers(users);


