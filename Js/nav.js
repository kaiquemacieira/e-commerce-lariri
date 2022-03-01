const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    <div class="nav">
                <img src="./Img/logologo.png" class="brand-logo" alt="">
        
            <div class="nav-itens">
            <div class="search">
                <input type="text" class="search-box" placeholder="Pesquise seu produto">
                <button class="search-btn">Search</button>
            </div>
            <a href="#"><img src="./Img/user.png" alt=""></a>
            <a href="#"><img src="./Img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">início</a></li>
            <li class="link-item"><a href="#" class="link">acessórios</a></li>
            <li class="link-item"><a href="#" class="link">ecobags</a></li>
            
        </ul>
    `;
}

createNav();