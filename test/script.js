var input = document.querySelector("input");
var data = [
    {name: "Nikita", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Nike", src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},
    {name: "Nihal", src: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},
    {name: "sohan", src: "https://media.istockphoto.com/id/642272658/photo/bearded-stylish-man-posing-outdoors.jpg?s=612x612&w=0&k=20&c=5G7hDVBJmrQ_EwQrR0wKDaMqbPqkR9-gflCxf6K7zT4="},
    {name: "Disha", src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
    {name: "sonali", src: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
    {name: "Dimpal", src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
];

var per = "";
data.forEach(function(ele){
    per += ` <div id="persons">
                <div id="pepole">
                    <div id="img">
                        <img src="${ele.src}" alt="">
                    </div>
                    <h3>${ele.name}</h3>
                </div>
            </div>`
});

document.querySelector("#persons").innerHTML = per;

input.addEventListener("input", function(){
    var matching = data.filter(function(ele){
        return ele.name.startsWith(input.value);
    })

    var newuser = "";
matching.forEach(function(ele){
    newuser += ` <div id="persons">
                <div id="pepole">
                    <div id="img">
                        <img src="${ele.src}" alt="">
                    </div>
                    <h3>${ele.name}</h3>
                </div>
            </div>`
});
document.querySelector("#persons").innerHTML = newuser;
})