/* 
    @badcss/core v0.1.9-1 
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
    ${configObj?.theme?.colors?.map(t=>`--${t.name}: ${t.value};
--${t.name}Light: ${generateColor(t.value)};`).join(`
    `)||""}
  }
`,document.head.appendChild(styles)}catch(t){Log({type:"error",message:t.message})}document.addEventListener("DOMContentLoaded",async()=>{Log({type:"info",message:"DOM fully loaded and parsed"});try{const t=document.getElementsByTagName("badcss");for(let e=0;e<t.length;e++){const n=t[e],o=n.getAttribute("component");if(validComponents.includes(o))switch(o){case"button":{ButtonComponent(n);break}case"alert":{AlertComponent(n);break}case"spinner":{SpinnerComponent(n);break}}else throw n.remove(),new Error(`Invalid component ${o} found. Valid components are ${validComponents.join(", ")}`)}}catch(t){const e=document.createElement("div");e.setAttribute("badcss","error"),e.setAttribute("component","error"),e.style.backgroundColor="#eee",e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100vw",e.style.height="100vh",e.style.display="flex",e.style.flexDirection="column",e.style.justifyContent="center",e.style.alignItems="center",e.style.zIndex&&(e.style.zIndex?parseInt(e.style.zIndex)+1:parseInt(e.style.zIndex))+"",e.style.backdropFilter="blur(5px)";const n=[{keyWords:["component"],url:"https://badcss.dev/components"},{keyWords:["config","unspected token"],url:"https://badcss.dev/config"},{keyWords:["Invalid variant","Spinner"],url:"https://badcss.dev/docs"}];e.innerHTML=`
    <h1>
        Runtime Error <span style="color: var(--danger)">&times;</span>
    </h1>
    <p style="text-align: center">
      Badcss encountered an error while loading the page.<br />
      
      ${n.find(o=>o.keyWords.some(s=>t.message.includes(s)))?`
          Read the documentation for help, this might help you to fix the error.<br />
          <a href="${n.find(o=>o.keyWords.some(s=>t.message.includes(s))).url}" target="_blank" style="color: var(--primary)">${n.find(o=>o.keyWords.some(s=>t.message.includes(s))).url}</a>`:""}
      
    </p>
    <p>
    <pre>${t.message}</pre>
    </p>
  `,document.body.appendChild(e),Log({type:"error",message:t.message})}});
