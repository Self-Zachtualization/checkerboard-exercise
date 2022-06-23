const container = document.createElement("div");
document.body.append(container);

for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 8; j++) {
    var div = document.createElement("div");
    div.style.display = "flex";
    div.style.width = "11.1%";
    div.style.float = "left";
    div.style.paddingBottom = "11.1%";
    if (j % 2 === 0 && i % 2 === 0) {
      div.style.background = "red";
    } else if (j % 2 === 0 && i % 2 !== 0) {
      div.style.background = "black";
    } else if (j % 2 !== 0 && i % 2 === 0) {
      div.style.background = "black";
    } else {
      div.style.background = "red";
    }
    div.style.border = "1px solid black";
    container.append(div);
  }
}
