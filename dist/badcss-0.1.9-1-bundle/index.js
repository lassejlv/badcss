/* 
    @badcss/core v0.1.9-1 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license
    Github: https://github.com/lassejlv/badcss.git
*/
(()=>{var m=(e,t)=>()=>(e&&(t=e(e=0)),t);var E=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);function l(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=Math.random()*16|0,r=e==="x"?t:t&3|8;return r.toString(16)})}var f=m(()=>{});function b(e){let t=document.createElement("button");t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t,e);let r=e.getAttribute("variant"),n=e.getAttribute("size"),a=e.getAttribute("withRing"),d=e.getAttribute("color");if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(r))throw new Error(`Invalid variant ${r}`);let s={primary:"var(--primary)",primaryLight:"var(--primary-light)",secondary:"var(--secondary)",secondaryLight:"var(--secondary-light)",danger:"var(--danger)",dangerLight:"var(--danger-light)",success:"var(--success)",successLight:"var(--success-light)",warning:"var(--warning)",warningLight:"var(--warning-light)",info:"var(--info)",infoLight:"var(--info-light)",dark:"var(--dark)",darkLight:"var(--dark-light)",light:"var(--light)",lightLight:"var(--light-light)"},c={sm:{padding:"0.25rem 0.5rem",fontSize:"0.75rem"},md:{padding:"0.5rem 1rem",fontSize:"0.875rem"},lg:{padding:"0.75rem 1rem",fontSize:"1rem"},xl:{padding:"1rem 1.5rem",fontSize:"1.125rem"}},o=document.createElement("style");o.setAttribute("data-id",l()),o.setAttribute("data-component-type","button"),o.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${l()}
        */

          .button-${r}${a==="true"?"-ring":""} {
              color:  ${r==="light"?"var(--dark)":"var(--light)"};
              background-color: ${d?`var(--${d})`:s[r]};
              font-size: ${n==="sm"?"0.875rem":n==="md"?"1rem":n==="lg"?"1.25rem":n==="xl"?"1.5rem":"1rem"};

              /* types are sm,md,lg,xl */
              padding: ${c[n].padding||"0.5rem 1rem"};
              cursor: pointer;
              border-radius: 5px;
              border: none;
              transition: all 0.3s ease-in-out;
              font-size: ${c[n].fontSize};
          }

          /* Hover */
          .button-${r}${a==="true"?"-ring":""}:hover {
              opacity: 0.9;
          }

          /* Focus */
          .button-${r}${a==="true"?"-ring":""}:focus {
              outline: none;
              ${a==="true"&&` box-shadow: 0 0 0 3px ${d?`var(--${d}Light)`:s[r+"Light"]};`}
             
          }

          
      `,document.head.appendChild(o),t.classList.add(`button-${r}${a==="true"?"-ring":""}`);let g=e.attributes;for(let u=0;u<g.length;u++){let{name:p,value:T}=g[u];p!=="component"&&p!=="variant"&&p!=="size"&&p!=="withring"&&t.setAttribute(p,T)}}var y,v=m(()=>{f();y=document.querySelectorAll('themostbad[component="button"]');y&&y.forEach(e=>{b(e)})});function w(e){let t=document.createElement("div");t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t,e);let r=e.getAttribute("variant"),n=e.getAttribute("isShadow"),a=e.getAttribute("isCloseable");if(!r)throw new Error("No variant found");if(a==="true"){let o=document.createElement("button");o.innerHTML='<i class="fas fa-times"></i>',o.classList.add("close-btn"),o.addEventListener("click",()=>{t.remove()}),t.appendChild(o)}if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(r))throw new Error(`Invalid variant ${r}`);let i={primary:"var(--primary)",primaryLight:"var(--primary-light)",secondary:"var(--secondary)",secondaryLight:"var(--secondary-light)",danger:"var(--danger)",dangerLight:"var(--danger-light)",success:"var(--success)",successLight:"var(--success-light)",warning:"var(--warning)",warningLight:"var(--warning-light)",info:"var(--info)",infoLight:"var(--info-light)",dark:"var(--dark)",darkLight:"var(--dark-light)",light:"var(--light)",lightLight:"var(--light-light)"},s=document.createElement("style");s.setAttribute("data-id",l()),s.setAttribute("data-component-type","alert"),s.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${l()}
        */

          .alert-${r} {
             background-color: ${i[r]};
             border-radius: 5px;
             border: 2px solid ${i[r+"Light"]};
             color: rgba(255, 255, 255, 0.7);
             padding: 1rem;
             margin: 1rem;
             ${n==="true"?`box-shadow: 0 0 10px ${i[r+"Light"]}`:""}
          }

          .alert-${r} .alert-title {
            font-size: 1.5rem;
            font-weight: bold;
            opacity: 1;
            margin: 0;
          }

          .alert-${r} .alert-message {
             font-size: 1rem;
             opacity: 1;
             margin: 0;

           }

           .alert-${r} hr {
                border: 1px solid ${i[r+"Light"]};
                margin: 1rem 0;
            }

            .alert-${r} .close-btn {
                position: absolute;
                top: 0.7rem;
                right: 0.7rem;
                border: none;
                background: none;
                color: rgba(255, 255, 255, 0.7);
                cursor: pointer;
                outline: none;
                font-size: 1.5rem;
            }

            .alert-${r} .close-btn:hover {
                color: rgba(255, 255, 255, 1);
            }
      `,document.head.appendChild(s),t.classList.add(`alert-${r}`);let c=e.attributes;for(let o=0;o<c.length;o++){let{name:g,value:u}=c[o];g!=="component"&&g!=="variant"&&t.setAttribute(g,u)}}var x=m(()=>{f()});function $(e){let t=e.replace("#",""),r=parseInt(t.substr(0,2),16),n=parseInt(t.substr(2,2),16),a=parseInt(t.substr(4,2),16),d=1.2,i=Math.min(Math.round(r*d),255),s=Math.min(Math.round(n*d),255),c=Math.min(Math.round(a*d),255);return"#"+((i<<16)+(s<<8)+c).toString(16).padStart(6,"0")}var L=m(()=>{});function k(e){let t=document.createElement("div");t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t,e);let r=e.getAttribute("variant"),n=e.getAttribute("speed");if(!n)return;if(!r)throw new Error("No variant found");if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(r))throw new Error("Invalid variant Spinner");let d={primary:"var(--primary)",secondary:"var(--secondary)",danger:"var(--danger)",success:"var(--success)",warning:"var(--warning)",info:"var(--info)",dark:"var(--dark)",light:"var(--light)"},i=document.createElement("style");i.setAttribute("data-id",l()),i.setAttribute("data-component-type","spinner"),i.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${l()}
        */

          .spinner-${r} {
            border: 0.2rem solid ${d[r]};
            border-top: 0.2rem solid transparent;
            border-radius: 50%;
            width: 1.5rem;
            height: 1.5rem;
            animation: spin ${n||"1s"} linear infinite;
            margin: 0 auto;
          }
          
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
          
            100% {
              transform: rotate(360deg);
            }
          }
      `,document.head.appendChild(i),t.classList.add(`spinner-${r}`);let s=e.attributes;for(let c=0;c<s.length;c++){let{name:o,value:g}=s[c];o!=="component"&&o!=="variant"&&t.setAttribute(o,g)}}var C=m(()=>{f()});function h(e){let t=["info","warn","error"],r=new Date().toISOString();if(e.type){let n;switch(e.type){case"info":n="#2563eb";break;case"warn":n="#eab308";break;case"error":n="#dc2626";break}console.log(`%c ${r} - ${e.type.toUpperCase()} %c ${e.message}`,`background: ${n}; color: white; padding: 2px; border-radius: 2px;`,"background: none; color: #999;")}else throw new Error("No type found")}var I=m(()=>{});var z=E((M,S)=>{v();x();L();C();I();var A=["button","alert","spinner"];document.body.style.fontFamily="sans-serif";document.body.style.margin="0";document.body.style.padding="0";try{let body=document.getElementsByTagName("body")[0],config=body.getAttribute("badcss-config"),configObj=eval("("+config+")");(!configObj||typeof configObj!="object")&&h({type:"warn",message:"Invalid config or no config found"});let dataPlugins={fontawesome:`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${configObj?.plugins?.fontawesome?.version||"6.4.0"}/css/all.min.css" />`};configObj?.plugins?.fontawesome&&(document.head.innerHTML+=configObj.plugins.fontawesome.kitId?`<script src="https://kit.fontawesome.com/${configObj?.plugins?.fontawesome?.kitId}.js" crossorigin="anonymous"><\/script>`:dataPlugins.fontawesome),body.removeAttribute("badcss-config");let styles=document.createElement("style");styles.setAttribute("badcss",":root"),styles.innerHTML=`
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
--${e.name}Light: ${$(e.value)};`).join(`
    `)||""}
  }
`,document.head.appendChild(styles)}catch(e){h({type:"error",message:e.message})}document.addEventListener("DOMContentLoaded",async()=>{h({type:"info",message:"DOM fully loaded and parsed"});try{let e=document.getElementsByTagName("badcss");for(let t=0;t<e.length;t++){let r=e[t],n=r.getAttribute("component");if(A.includes(n))switch(n){case"button":{b(r);break}case"alert":{w(r);break}case"spinner":{k(r);break}}else throw r.remove(),new Error(`Invalid component ${n} found. Valid components are ${A.join(", ")}`)}}catch(e){let t=document.createElement("div");t.setAttribute("badcss","error"),t.setAttribute("component","error"),t.style.backgroundColor="#eee",t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100vw",t.style.height="100vh",t.style.display="flex",t.style.flexDirection="column",t.style.justifyContent="center",t.style.alignItems="center",t.style.zIndex&&(t.style.zIndex?parseInt(t.style.zIndex)+1:parseInt(t.style.zIndex))+"",t.style.backdropFilter="blur(5px)";let r=[{keyWords:["component"],url:"https://badcss.dev/components"},{keyWords:["config","unspected token"],url:"https://badcss.dev/config"},{keyWords:["Invalid variant","Spinner"],url:"https://badcss.dev/docs"}];t.innerHTML=`
    <h1>
        Runtime Error <span style="color: var(--danger)">&times;</span>
    </h1>
    <p style="text-align: center">
      Badcss encountered an error while loading the page.<br />
      
      ${r.find(n=>n.keyWords.some(a=>e.message.includes(a)))?`
          Read the documentation for help, this might help you to fix the error.<br />
          <a href="${r.find(n=>n.keyWords.some(a=>e.message.includes(a))).url}" target="_blank" style="color: var(--primary)">${r.find(n=>n.keyWords.some(a=>e.message.includes(a))).url}</a>`:""}
      
    </p>
    <p>
    <pre>${e.message}</pre>
    </p>
  `,document.body.appendChild(t),h({type:"error",message:e.message})}})});z();})();
