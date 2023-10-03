<template>
  <div>
    <Html>
      <Head>
        <Title>Welcome To Masjids Rwanda</Title>
      </Head>
      <Link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
      />
      <Link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
        integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />

      <Link rel="icon" type="image/png" href="/image/masdjid-logo-only.png" />
      <Body id="bg-img">
        <slot />
        <Script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
          defer
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
          defer
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
          defer
        />
      </Body>
    </Html>
  </div>
</template>
<script setup>
</script>
<style>
:root {
  --color-green: #006c35;
  --color-green-darker: #024b37;
}

body {
  padding-top: 40px;
}

#mobile-menu {
  display: none;
}

#intro, #announcements, #services, #programs, #about, #library {
  scroll-margin-top: 5em;
}

.section-title {
  color: var(--color-green);
}

.border-success {
  border-color: var(--color-green) !important;;
}

.modal-dialog .modal-header {
    background-color: var(--color-green);
    border-radius: 1px;
    color: #fff;
}

.modal-dialog .modal-header {
    border: 0;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
}

.modal-footer .btn-secondary {
    color: #fff!important;
    font-weight: 500;
    background-color: var(--color-green) !important;
    border-radius: 1px;
}

.modal-footer .btn {
    margin: .375rem;
    color: inherit;
    text-transform: uppercase;
    word-wrap: break-word;
    white-space: normal;
    cursor: pointer;
    border: 0;
    border-radius: 1px;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
    padding: .84rem 2.14rem;
    font-size: .81rem;
}

    .modal-image {
        max-width:100%;
        margin: 0.5rem 0 0.5rem 0;
    }

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  body {
    padding-top: 200px;
  }


#mobile-menu {
  display: inline;
}

#menu {
  display: none;
}

  #intro, #services {
    margin: 0.5em;
  }

  #intro-image {
    display: none;
  }


#intro, #announcements, #services, #programs, #about {
  scroll-margin-top: 15em;
}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  body {
    padding-top: 100px;
  }

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {}
</style>
