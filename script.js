document.getElementById("submit").addEventListener("click", function() {
    var ID = document.getElementById("ID").value;
    var name = document.getElementById("name").value;
    const date = currentTime.toLocaleDateString();
    const time = currentTime.toLocaleTimeString();

    //添加到打卡记录
    const PSSAttendanceSystem = document.getElementById("PSSAttendanceSystem");
    const newRole = PSSAttendanceSystem.insertRow();
    newRole.innerHTML = '<td>' + ID + "</td><td>" + name + "</td><td>" + date + "</td><td>" + time + "</td>";
});