const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
            <img src="Img/light-logo.png" class="logo" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">men</li>
                    <li><a href="#" class="footer-link">camisetas</a></li>
                    <li><a href="#" class="footer-link">acessórios</a></li>
                    <li><a href="#" class="footer-link">croppeds</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">wommen</li>
                    <li><a href="#" class="footer-link">camisetas</a></li>
                    <li><a href="#" class="footer-link">acessórios</a></li>
                    <li><a href="#" class="footer-link">croppeds</a></li>
                </ul>
            </div>
            

        </div>
        <p class="footer-title">Sobre a empresa</p>
        <p class="info">Somos uma empresa bla bla bla bla bla</p>
        <p class="info">suporte email - comunaseregy@email.com</p>
        <p class="info">contato - (+55) 79-8899-9988</p>
        <div class="footer-social-container">
            <div>
            <a href="#" class="social-link">termos de serviço</a>
            <a href="#" class="social-link">página privada</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">whatsapp</a>
            <a href="#" class="social-link">twitter</a>
        </div>
        </div>
        <p class="footer-credit">K.</p>
        `;
}

createFooter();