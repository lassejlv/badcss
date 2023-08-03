/* 
    @badcss/core v0.1.6 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license
    Github: https://github.com/lassejlv/badcss.git
*/
import{ButtonComponent}from"./components/Button.js";import{AlertComponent}from"./components/Alert.js";const validComponents=["button","alert"];document.body.style.fontFamily="sans-serif",document.body.style.margin="0",document.body.style.padding="0";const styles=document.createElement("style");styles.setAttribute("themostbad-css-framework",":root"),styles.innerHTML=`
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
  }
`,document.head.appendChild(styles);const body=document.getElementsByTagName("body")[0],config=body.getAttribute("themostbad");config||console.warn("No config found");const configObj=eval("("+config+")");configObj||console.warn("No config found JSON");const dataPlugins={fontawesome:`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${configObj?.plugins?.fontawesome?.version||"6.4.0"}/css/all.min.css" />`};configObj?.plugins?.fontawesome&&(document.head.innerHTML+=configObj.plugins.fontawesome.kitId?`<script src="https://kit.fontawesome.com/${configObj?.plugins?.fontawesome?.kitId}.js" crossorigin="anonymous"><\/script>`:dataPlugins.fontawesome),body.removeAttribute("themostbad"),document.addEventListener("DOMContentLoaded",async()=>{try{const t=document.getElementsByTagName("themostbad");for(let e=0;e<t.length;e++){const o=t[e],n=o.getAttribute("component");if(validComponents.includes(n))switch(n){case"button":{ButtonComponent(o);break}case"alert":{console.log("alert"),AlertComponent(o);break}}else throw o.remove(),new Error(`Invalid component ${n}`)}}catch(t){console.error("Error loading scripts:",t)}});
