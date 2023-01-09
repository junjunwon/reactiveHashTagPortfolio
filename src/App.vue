<template>
  <div id="app">
    <!-- <router-link to="/test">Go to Foo</router-link> -->
     <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: "bauziet", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #FFFFEE;
  /* margin-top: 60px; */
}

:root {
    --font-size-lg: clamp(2rem, 4vw, 3.5rem);
    --font-size-md: clamp(1.5rem, 3vw, 2.5rem);
    --font-size-msd: clamp(1.3rem, 2.5vw, 2.0rem);
    --font-size-mssd: clamp(1.2rem, 2.2vw, 1.75rem);
    --font-size-sm: clamp(1rem, 2vw, 1.5rem);
    --font-size-ssm: clamp(0.9rem, 1.7vw, 1.2rem);
    --font-size-sssm: clamp(0.8rem, 1.7vw, 1.1rem);
    --font-size-ssssm: clamp(0.3rem, 0.6vw, 0.5rem);
    --font-size-sssssm: clamp(0.1rem, 0.1vw, 0.1rem);
}
html {
    /* max-width: 600px; */
    margin: 0 auto;
    width: 100%;
    overflow-x: hidden;
    -moz-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
    scroll-behavior: smooth;
    /* background-color: black; */
    /* font-size: var(--font-size-md); */
}
body {
    padding : 3%;
    /* margin:0; */
    /* background: linear-gradient(to bottom, #ffffee,#ececd7, rgb(3, 3, 3), black, black, black, black, black, black, black), url(https://grainy-gradients.vercel.app/noise.svg); */
    /* filter: saturate(0.7); */
}
h1 {
    font-size: var(--font-size-lg);
}
h2 {
    font-size: var(--font-size-md);
}

p {
    font-size: var(--font-size-sm);
}

blockquote {
    font-size: var(--font-size-md);
}
a {
    font-size: var(--font-size-sm);
}
img {
    width:100%; 
    object-fit: contain;
    height: 100%;
}
video {
    width:100%; 
    object-fit: contain;
    height: 100%;
}
.button {
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    /* border-radius: 36px; */
    /* height: 40px; */
    /* width: 120px; */
    color: #FFFFEE;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: var(--font-size-mssd);
    font-weight: bold;
    /* margin: 30px 10px; */
    /* padding: 0.5em 1em; */
    cursor: pointer;
}
/* .button:active{
    background-color: #FFFFED;
    color: #000000;
} */
@media (max-width: 700px) {
    .button {
        font-size: var(--font-size-mssd);
    }
}
@media (max-width: 400px) {
    .button {
        font-size: var(--font-size-sm);
    }
}
.buttonBackground {
    background-color: #0095f6;
    color: #fff;
    display: inline-block;
    width: 80px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin: 0px 5px;
    /* border-radius: 5px; */
    margin-left: auto;
}

@font-face {
    font-family: 'bauziet';
    src: url('../src/assets/font/Bauziet-Norm-Bold.otf') format('truetype');
}

</style>
