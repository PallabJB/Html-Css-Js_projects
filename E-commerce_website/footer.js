const footerHTML =`
<footer class="section-footer">
    <div class="footer-container container" >
        <div class="content_1" >
            <img src="./public/images/logo.png" alt="logo footer line 5"/>
                <p>
                    Welcome to PJ Store, <br />
                    your ultimate destination for
                    <br />
                    cutting-edge gadgets!
                </p>
                
            
        </div>
        <div class="content_2" >
            <h4>SHOPPING</h4>
            <a href="#">Computer Store</a>
            <a href="#">Laptop Store</a>
            <a href="#">Accessories Store</a>
            <a href="#">Sales & Discount</a>
        </div>
    
    <div class="content_3">
        <h4>Experience</h4>
        <a href="" target="_blank">Contact Us</a>
        <a href="" target="_blank">Payment Method</a>
        <a href="" target="_blank">Delivery</a>
        <a href="" target="_blank">Return and Exchange</a>
    </div>
    <div class="content_4">
        <h4>NEWSLETTER</h4>
        <p>
            Be the first to know about new
            <br />
            arrivals, sales & promos!
        </p>
        <div class="f-mail">
            <input type="email" placeholder="Your Email"/>
            <i class="bx bx-envelope"></i>
        </div>
        <hr />
      </div>  
    </div>

    <div class ="f-design">
        <div class="f-design-text">
            <p>Design and Code by PJ</p>
        </div>

    </div>
</footer>`;

const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin", footerHTML);