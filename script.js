fetch("./data.json").then(res => res.json()).then((res) => {
    console.log(res) //这个是json的output
  })
  let jsonData = null;
  fetch("./data.json")
    .then(response => response.json())
    .then(data => {
        jsonData = data;
    })
    .catch(error =>
        console.error('Erorr loading JSON file:', error));

document.getElementById("idForm").addEventListener("submit", function(event) {
    event.preventDefault(); //Prevent form submission
    var ID = document.getElementById("ID").value;
    let name = "";
        for(let i = 0; i < jsonData.data.length; i++) {
            if (jsonData.data[i].ID == ID) {
                name = jsonData.data[i].name;
                break;
            }
        }
        if (name === "") {
            alert("ID not found!");
            return;
        }
    let currentTime = new Date();
    const date = currentTime.toLocaleDateString("en-GB");
    const time = currentTime.toLocaleTimeString();
    document.getElementById("ID").value = ""
    
    //清空打卡记录
document.getElementById("reset").addEventListener("click", function(event) {
    alert("Your attendance record has been cleared!");
    document.getElementById("PSSAttendanceSystem").innerHTML = "";
})

    //添加到打卡记录
    const PSSAttendanceSystem = document.getElementById("PSSAttendanceSystem");
    const newRole = PSSAttendanceSystem.insertRow();
    newRole.innerHTML = '<td>' + ID + "</td><td>" + name + "</td><td>" + date + "</td><td>" + time + "</td>";
});
