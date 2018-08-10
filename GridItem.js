var GridItem = Object.create(HTMLElement.prototype);

GridItem.createdCallback = function () {
    let shadow = this.createShadowRoot();

    let img = document.createElement('img');
    img.alt = "";
    img.src = "http://via.placeholder.com/250x250/808080?text=+";

    img.style.width = "100%";
    img.style.maxHeight = "180px";

    shadow.appendChild(img);

    let div = document.createElement('div');
    div.className = 'grid-div';
    div.style.paddingBottom = "20px";
    div.style.width = "100%";

    let title = document.createElement('span');
    title.textContent = this.getAttribute('data-name');
    title.className = 'grid-title';
    title.style.display = "block";
    title.style.padding = "10px";
    title.style.cssFloat = "left";
    title.style.fontWeight = "bold";
    title.style.fontSize = "1.2em";

    let batch = document.createElement('span');
    let category = this.getAttribute('data-category');
    batch.textContent = category;
    batch.style.padding = "5px";
    batch.style.marginRight = "10px";
    batch.style.marginTop = "10px";
    batch.style.display = "block";
    batch.style.cssFloat = "right";
    batch.style.borderRadius = "20px";
    batch.style.color = "white";
    if (category === "Meat") batch.style.backgroundColor = "red";
    else if (category === "Fruit") batch.style.backgroundColor = "orange";
    else batch.style.backgroundColor = "green";

    div.appendChild(title);
    div.appendChild(batch);
    shadow.appendChild(div);

    let text = document.createElement('p');
    text.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";
    text.style.padding = "10px";
    text.style.width = "90%";
    shadow.appendChild(text);

    let link = document.createElement('a');
    link.href = "";
    link.innerText = "> More info";
    link.style.padding = "10px";
    link.style.textDecoration = "none";
    link.style.color = "black";
    shadow.appendChild(link);
};

var GridItem = document.registerElement('grid-item', {
    prototype: GridItem
});
