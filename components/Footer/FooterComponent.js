import React from "react";

const Footer = () => {
  return (
    <div class="container mt-5">
      <footer class="bg-white border-top p-3 text-muted small">
        <div class="row align-items-center justify-content-between">
          <div>
            <span class="navbar-brand mr-2">
              <strong>Pranata's Blog</strong>
            </span>{" "}
            Copyright ©<script>document.write(new Date().getFullYear())</script>2022 . All rights reserved.
          </div>
          <div>
            Made with{" "}
            <a target="_blank" class="text-secondary font-weight-bold">
              Love and Cup of Coffee
            </a>{" "}
            by Aldi Pranata
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
