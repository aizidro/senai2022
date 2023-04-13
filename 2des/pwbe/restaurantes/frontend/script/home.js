var tbody = document.querySelector("tbody")
var thead = document.querySelector("thead")
var tdCount = thead.querySelectorAll("th").length

fetch ("http://localhost:3000/lista")
.then(info =>{
    return info.json()
})

.then(data =>{
    for(element of data ){
        let {restaurante, categoria, nota} = element
        let tr = document.createElement("tr")
        tr.innerHTML = `
        <td>${restaurante}</td>
        <td>${categoria}</td>
        <td>${nota}</td>
        `
        tbody.appendChild(tr)
    }
})