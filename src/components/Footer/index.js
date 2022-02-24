import React from "react";

function Footer() {
    return (
        <footer>
            <section className="page-section contact" id="contact">
      {/* <h2>Contact</h2> */}
      <div>
        <address className="address">
          <a class="email" href="mailto:aggiebec06@gmail.com">  Email </a>
          <a class="github" href="https://github.com/RPB543">GitHub</a>
          <a class="linkedin" href="https://www.linkedin.com/in/rebeccabyrne/">LinkedIn</a>
        </address>
      </div>
    </section>
        </footer>
    )
}

export default Footer;