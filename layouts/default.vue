<template>
  <div>
    <Html>
      <Head>
        <Title>Welcome To Yusuf's Portofolio</Title>
      </Head>
      <Link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" />
      <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <Body id="bg-img">
        <TheHeader />
        <slot />
        <Script src="js/main.js" defer />
        <Script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js" defer />
      </Body>
    </Html>
  </div>
</template>
