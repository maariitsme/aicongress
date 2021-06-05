if (screen && screen.width < 600) {
    let destroyBox = document.getElementsByClassName("speaker");
    for (let i of destroyBox) {
        VanillaTilt.init(i);
        i.vanillaTilt.destroy();
    }

}