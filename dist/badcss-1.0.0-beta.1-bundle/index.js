/* 
    @badcss/core v1.0.0-beta.1 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license
    Github: https://github.com/lassejlv/badcss.git
*/
(()=>{var g=(e,t)=>()=>(e&&(t=e(e=0)),t);var U=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);function m(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=Math.random()*16|0,r=e==="x"?t:t&3|8;return r.toString(16)})}var y=g(()=>{});function l(e){let t=document.createElement("div");t.setAttribute("badcss","error"),t.setAttribute("component","error"),t.style.backgroundColor="#eee",t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100vw",t.style.height="100vh",t.style.display="flex",t.style.flexDirection="column",t.style.justifyContent="center",t.style.alignItems="center",t.style.zIndex="999999999",t.style.backdropFilter="blur(5px)";let n=[{keyWords:["component"],url:"https://badcss.dev/components"},{keyWords:["config","unexpected token"],url:"https://badcss.dev/config"},{keyWords:["Invalid variant","Spinner"],url:"https://badcss.dev/docs"}].find(s=>s.keyWords.some(i=>e.includes(i)));t.innerHTML=`
      <h1>
          Runtime Error <span style="color: var(--danger)">&times;</span>
      </h1>
      <p style="text-align: center">
        Badcss encountered an error while loading the page.<br />
        ${n?`
            Read the documentation for help, this might help you to fix the error.<br />
            <a href="${n.url}" target="_blank" style="color: var(--primary)">
              ${n.url}
            </a>`:""}
      </p>
      <p>
        <pre>${e}</pre>
      </p>
    `,document.body.appendChild(t)}var b=g(()=>{});function p(e){let t=["info","warn","error"],r=new Date().toISOString();if(e.type){let n;switch(e.type){case"info":n="#2563eb";break;case"warn":n="#eab308";break;case"error":n="#dc2626";break}console.log(`%c ${r} - ${e.type.toUpperCase()} %c ${e.message}`,`background: ${n}; color: white; padding: 2px; border-radius: 2px;`,"background: none; color: #999;")}else throw new Error("No type found")}var v=g(()=>{});function $(e){let t=document.createElement("button");t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t,e);let r=e.getAttribute("variant"),n=e.getAttribute("size"),s=e.getAttribute("withRing"),i=e.getAttribute("color"),d=e.getAttribute("disabled:cursor"),o=e.getAttribute("isBold");if(n||(p({message:"No size found for button, defaulting to md",type:"warn"}),n="md"),!["primary","secondary","danger","success","warning","info","dark","light"].includes(r)&&!i)throw l(`Invalid variant ${r}`),new Error(`Invalid variant ${r}`);let a={primary:"var(--primary)",primaryLight:"var(--primary-light)",secondary:"var(--secondary)",secondaryLight:"var(--secondary-light)",danger:"var(--danger)",dangerLight:"var(--danger-light)",success:"var(--success)",successLight:"var(--success-light)",warning:"var(--warning)",warningLight:"var(--warning-light)",info:"var(--info)",infoLight:"var(--info-light)",dark:"var(--dark)",darkLight:"var(--dark-light)",light:"var(--light)",lightLight:"var(--light-light)"},u={sm:{padding:"0.25rem 0.5rem",fontSize:"0.75rem"},md:{padding:"0.5rem 1rem",fontSize:"0.875rem"},lg:{padding:"0.75rem 1rem",fontSize:"1rem"},xl:{padding:"1rem 1.5rem",fontSize:"1.125rem"}},f=document.createElement("style");f.setAttribute("data-id",m()),f.setAttribute("data-component-type","button"),f.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${m()}
        */

          .button-${r}${s==="true"?"-ring":""} {
              color:  ${r==="light"?"var(--dark)":"var(--light)"};
              background-color: ${i?`var(--${i})`:a[r]};
              font-size: ${n==="sm"?"0.875rem":n==="md"?"1rem":n==="lg"?"1.25rem":n==="xl"?"1.5rem":"1rem"};

              /* types are sm,md,lg,xl */
              padding: ${u[n].padding||"0.5rem 1rem"};
              cursor: pointer;
              border-radius: 5px;
              border: none;
              transition: all 0.3s ease-in-out;
              ${o?`font-weight: ${o};`:""}
              font-size: ${u[n].fontSize};
          }

          /* Hover */
          .button-${r}${s==="true"?"-ring":""}:hover {
              opacity: 0.9;
          }

          /* Focus */
          .button-${r}${s==="true"?"-ring":""}:focus {
              outline: none;
              ${s==="true"&&` box-shadow: 0 0 0 3px ${i?`var(--${i}Light)`:a[r+"Light"]};`}
             
          }

          .button-${r}${s==="true"?"-ring":""}:disabled {
            opacity: 0.5;
            ${d==="not-allowed"?"cursor: not-allowed;":""}
          }

          
      `,document.head.appendChild(f),t.classList.add(`button-${r}${s==="true"?"-ring":""}`);let L=e.attributes;for(let w=0;w<L.length;w++){let{name:h,value:O}=L[w];h!=="component"&&h!=="variant"&&h!=="size"&&h!=="withring"&&h!=="disabled:cursor"&&h!=="isBold"&&t.setAttribute(h,O)}}var k,C=g(()=>{y();b();v();k=document.querySelectorAll('themostbad[component="button"]');k&&k.forEach(e=>{$(e)})});function I(e){let t=document.createElement("div");t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t,e);let r=e.getAttribute("variant"),n=e.getAttribute("isShadow"),s=e.getAttribute("isCloseable");if(!r)throw l("No variant found"),new Error("No variant found");if(s==="true"){let a=document.createElement("button");a.innerHTML='<i class="fas fa-times"></i>',a.classList.add("close-btn"),a.addEventListener("click",()=>{t.remove()}),t.appendChild(a)}if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(r))throw l(`Invalid variant ${r}`),new Error(`Invalid variant ${r}`);let d={primary:"var(--primary)",primaryLight:"var(--primary-light)",secondary:"var(--secondary)",secondaryLight:"var(--secondary-light)",danger:"var(--danger)",dangerLight:"var(--danger-light)",success:"var(--success)",successLight:"var(--success-light)",warning:"var(--warning)",warningLight:"var(--warning-light)",info:"var(--info)",infoLight:"var(--info-light)",dark:"var(--dark)",darkLight:"var(--dark-light)",light:"var(--light)",lightLight:"var(--light-light)"},o=document.createElement("style");o.setAttribute("data-id",m()),o.setAttribute("data-component-type","alert"),o.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${m()}
        */

          .alert-${r} {
             background-color: ${d[r]};
             border-radius: 5px;
             border: 2px solid ${d[r+"Light"]};
             color: rgba(255, 255, 255, 0.7);
             padding: 1rem;
             margin: 1rem;
             ${n==="true"?`box-shadow: 0 0 10px ${d[r+"Light"]}`:""}
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
                border: 1px solid ${d[r+"Light"]};
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
      `,document.head.appendChild(o),t.classList.add(`alert-${r}`);let c=e.attributes;for(let a=0;a<c.length;a++){let{name:u,value:f}=c[a];u!=="component"&&u!=="variant"&&t.setAttribute(u,f)}}var A=g(()=>{y();b()});function S(e){let t=e.replace("#",""),r=parseInt(t.substr(0,2),16),n=parseInt(t.substr(2,2),16),s=parseInt(t.substr(4,2),16),i=1.2,d=Math.min(Math.round(r*i),255),o=Math.min(Math.round(n*i),255),c=Math.min(Math.round(s*i),255);return"#"+((d<<16)+(o<<8)+c).toString(16).padStart(6,"0")}var E=g(()=>{});function M(e){let t=document.createElement("div");t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t,e);let r=e.getAttribute("variant"),n=e.getAttribute("speed");if(n||(p({message:"No speed found for Spinner, defaulting to 1s",type:"warn"}),n="1s"),!r)throw l("No variant found"),new Error("No variant found");if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(r))throw l("Invalid variant Spinner"),new Error("Invalid variant Spinner");let i={primary:"var(--primary)",secondary:"var(--secondary)",danger:"var(--danger)",success:"var(--success)",warning:"var(--warning)",info:"var(--info)",dark:"var(--dark)",light:"var(--light)"},d=document.createElement("style");d.setAttribute("data-id",m()),d.setAttribute("data-component-type","spinner"),d.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${m()}
        */

          .spinner-${r} {
            border: 0.2rem solid ${i[r]};
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
      `,document.head.appendChild(d),t.classList.add(`spinner-${r}`);let o=e.attributes;for(let c=0;c<o.length;c++){let{name:a,value:u}=o[c];a!=="component"&&a!=="variant"&&t.setAttribute(a,u)}}var T=g(()=>{y();b();v()});function D(e){let t=document.createElement("input");t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t,e);let r=e.hasAttribute("full-width"),n=e.getAttribute("type");if(console.log(r),n===null){let o="Input component must have a type attribute";throw l(o),new Error(o)}let s=["text","password","email","number","date","time","datetime-local","search","tel","url","week","month","file","color"];if(!s.includes(n)){let o=`Invalid type ${n} found. Valid types are ${s.join(", ")}`;throw l(o),new Error(o)}let i=document.createElement("style");i.setAttribute("data-id",m()),i.setAttribute("data-component-type","input"),i.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: "$"{new Date().toISOString()}
          Compile ID: "$"{generateUUID()}
        */

          .input {
            border: 2px solid var(--dark-light);
            border-radius: 5px;
            padding: 10px;
            ${r===!0?"width: 100%;":""}
            outline: none;
            transition: 0.2s;
          }    

          .input:focus {
            border: 2px solid var(--primary-light);
            box-shadow: 0 0 0 2.5px var(--primary-light);
          }
      `,document.head.appendChild(i),t.classList.add("input");let d=e.attributes;for(let o=0;o<d.length;o++){let{name:c,value:a}=d[o];c!=="component"&&t.setAttribute(c,a)}}var H=g(()=>{y();b()});var V=U((j,z)=>{C();A();E();T();v();b();H();var x=["button","alert","spinner","input"];try{let body=document.getElementsByTagName("body")[0],config=body.getAttribute("badcss-config"),configObj=eval("("+config+")");(!configObj||typeof configObj!="object")&&p({type:"warn",message:"Invalid config or no config found"});let dataPlugins={fontawesome:`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${configObj?.plugins?.fontawesome?.version||"6.4.0"}/css/all.min.css" />`};configObj?.plugins?.fontawesome&&(document.head.innerHTML+=configObj.plugins.fontawesome.kitId?`<script src="https://kit.fontawesome.com/${configObj?.plugins?.fontawesome?.kitId}.js" crossorigin="anonymous"><\/script>`:dataPlugins.fontawesome),body.removeAttribute("badcss-config");let styles=document.createElement("style"),defaultStyles=document.createElement("style");defaultStyles.setAttribute("badcss",":styles:global"),styles.setAttribute("badcss",":root"),defaultStyles.innerHTML=`
    * {
      magin: 0;
      padding: 0;
      font-family: sans-serif;
    }
  `,styles.innerHTML=`
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
--${e.name}Light: ${S(e.value)};`).join(`
    `)||""}
  }
`,document.head.appendChild(styles),document.head.appendChild(defaultStyles)}catch(e){p({type:"error",message:e.message})}document.addEventListener("DOMContentLoaded",async()=>{p({type:"info",message:"DOM fully loaded and parsed"});try{document.querySelectorAll("badcss").forEach(async t=>{let r=t,n=r.getAttribute("component");if(x.includes(n))switch(n){case"button":{$(r);break}case"alert":{I(r);break}case"spinner":{M(r);break}case"input":{D(r);break}}else throw r.remove(),l(`Invalid component ${n} found. Valid components are ${x.join(", ")}`),new Error(`Invalid component ${n} found. Valid components are ${x.join(", ")}`)})}catch(e){p({type:"error",message:e.message+"from element"})}})});V();})();
