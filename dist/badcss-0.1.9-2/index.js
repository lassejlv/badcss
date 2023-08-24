/* 
    @badcss/core v0.1.9-2 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license
    Github: https://github.com/lassejlv/badcss.git
*/
import{ButtonComponent}from"./components/Button.js";import{AlertComponent}from"./components/Alert.js";import{generateColor}from"./utils/generateColor.js";import{SpinnerComponent}from"./components/Spinner.js";import{Log}from"./utils/Logger.js";const validComponents=["button","alert","spinner"];document.body.style.fontFamily="sans-serif",document.body.style.margin="0",document.body.style.padding="0";try{const body=document.getElementsByTagName("body")[0],config=body.getAttribute("badcss-config"),configObj=eval("("+config+")");(!configObj||typeof configObj!="object")&&Log({type:"warn",message:"Invalid config or no config found"});const dataPlugins={fontawesome:`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${configObj?.plugins?.fontawesome?.version||"6.4.0"}/css/all.min.css" />`};configObj?.plugins?.fontawesome&&(document.head.innerHTML+=configObj.plugins.fontawesome.kitId?`<script src="https://kit.fontawesome.com/${configObj?.plugins?.fontawesome?.kitId}.js" crossorigin="anonymous"><\/script>`:dataPlugins.fontawesome),body.removeAttribute("badcss-config");const styles=document.createElement("style");styles.setAttribute("badcss",":root"),styles.innerHTML=`
  :root {
    --primary: #2563eb;
    --primary-light: #60a5fa;
    --secondary: #475569;
    --secondary-light: #94a3b8;
    --danger: #dc2626;
    --danger-light: #f87171;
    --success: #16a34a;
    --success-light: #4ade80; 
    --warning: #eab308;
    --warning-light: #fde047;
    --info: #06b6d4;
    --info-light: #67e8f9;
    --dark: #19191a;
    --dark-light: #6b7280;
    --light: #f2f2f2;
    --light-light: #f7f7f7;
    
    /* root: theme custom colors */
    ${configObj?.theme?.colors?.map(e=>`--${e.name}: ${e.value};
--${e.name}Light: ${generateColor(e.value)};`).join(`
    `)||""}
  }
`,document.head.appendChild(styles)}catch(e){Log({type:"error",message:e.message})}document.addEventListener("DOMContentLoaded",async()=>{Log({type:"info",message:"DOM fully loaded and parsed"});try{document.querySelectorAll("badcss").forEach(async t=>{const o=t,n=o.getAttribute("component");if(validComponents.includes(n))switch(n){case"button":{ButtonComponent(o);break}case"alert":{AlertComponent(o);break}case"spinner":{SpinnerComponent(o);break}}else throw o.remove(),new Error(`Invalid component ${n} found. Valid components are ${validComponents.join(", ")}`)})}catch(e){Log({type:"error",message:e.message+"from element"})}});
