/* 
    @badcss/core v0.1.9-3 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license
    Github: https://github.com/lassejlv/badcss.git
*/
(()=>{var u=(t,e)=>()=>(t&&(e=t(t=0)),e);var H=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);function m(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,r=t==="x"?e:e&3|8;return r.toString(16)})}var y=u(()=>{});function l(t){let e=document.createElement("div");e.setAttribute("badcss","error"),e.setAttribute("component","error"),e.style.backgroundColor="#eee",e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100vw",e.style.height="100vh",e.style.display="flex",e.style.flexDirection="column",e.style.justifyContent="center",e.style.alignItems="center",e.style.zIndex="999999999",e.style.backdropFilter="blur(5px)";let n=[{keyWords:["component"],url:"https://badcss.dev/components"},{keyWords:["config","unexpected token"],url:"https://badcss.dev/config"},{keyWords:["Invalid variant","Spinner"],url:"https://badcss.dev/docs"}].find(c=>c.keyWords.some(i=>t.includes(i)));e.innerHTML=`
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
        <pre>${t}</pre>
      </p>
    `,document.body.appendChild(e)}var h=u(()=>{});function p(t){let e=["info","warn","error"],r=new Date().toISOString();if(t.type){let n;switch(t.type){case"info":n="#2563eb";break;case"warn":n="#eab308";break;case"error":n="#dc2626";break}console.log(`%c ${r} - ${t.type.toUpperCase()} %c ${t.message}`,`background: ${n}; color: white; padding: 2px; border-radius: 2px;`,"background: none; color: #999;")}else throw new Error("No type found")}var v=u(()=>{});function w(t){let e=document.createElement("button");e.innerHTML=t.innerHTML,t.parentNode.replaceChild(e,t);let r=t.getAttribute("variant"),n=t.getAttribute("size"),c=t.getAttribute("withRing"),i=t.getAttribute("color");if(n||(p({message:"No size found for button, defaulting to md",type:"warn"}),n="md"),!["primary","secondary","danger","success","warning","info","dark","light"].includes(r)&&!i)throw l(`Invalid variant ${r}`),new Error(`Invalid variant ${r}`);let s={primary:"var(--primary)",primaryLight:"var(--primary-light)",secondary:"var(--secondary)",secondaryLight:"var(--secondary-light)",danger:"var(--danger)",dangerLight:"var(--danger-light)",success:"var(--success)",successLight:"var(--success-light)",warning:"var(--warning)",warningLight:"var(--warning-light)",info:"var(--info)",infoLight:"var(--info-light)",dark:"var(--dark)",darkLight:"var(--dark-light)",light:"var(--light)",lightLight:"var(--light-light)"},d={sm:{padding:"0.25rem 0.5rem",fontSize:"0.75rem"},md:{padding:"0.5rem 1rem",fontSize:"0.875rem"},lg:{padding:"0.75rem 1rem",fontSize:"1rem"},xl:{padding:"1rem 1.5rem",fontSize:"1.125rem"}},o=document.createElement("style");o.setAttribute("data-id",m()),o.setAttribute("data-component-type","button"),o.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${m()}
        */

          .button-${r}${c==="true"?"-ring":""} {
              color:  ${r==="light"?"var(--dark)":"var(--light)"};
              background-color: ${i?`var(--${i})`:s[r]};
              font-size: ${n==="sm"?"0.875rem":n==="md"?"1rem":n==="lg"?"1.25rem":n==="xl"?"1.5rem":"1rem"};

              /* types are sm,md,lg,xl */
              padding: ${d[n].padding||"0.5rem 1rem"};
              cursor: pointer;
              border-radius: 5px;
              border: none;
              transition: all 0.3s ease-in-out;
              font-size: ${d[n].fontSize};
          }

          /* Hover */
          .button-${r}${c==="true"?"-ring":""}:hover {
              opacity: 0.9;
          }

          /* Focus */
          .button-${r}${c==="true"?"-ring":""}:focus {
              outline: none;
              ${c==="true"&&` box-shadow: 0 0 0 3px ${i?`var(--${i}Light)`:s[r+"Light"]};`}
             
          }

          
      `,document.head.appendChild(o),e.classList.add(`button-${r}${c==="true"?"-ring":""}`);let g=t.attributes;for(let f=0;f<g.length;f++){let{name:b,value:j}=g[f];b!=="component"&&b!=="variant"&&b!=="size"&&b!=="withring"&&e.setAttribute(b,j)}}var $,k=u(()=>{y();h();v();$=document.querySelectorAll('themostbad[component="button"]');$&&$.forEach(t=>{w(t)})});function L(t){let e=document.createElement("div");e.innerHTML=t.innerHTML,t.parentNode.replaceChild(e,t);let r=t.getAttribute("variant"),n=t.getAttribute("isShadow"),c=t.getAttribute("isCloseable");if(!r)throw l("No variant found"),new Error("No variant found");if(c==="true"){let o=document.createElement("button");o.innerHTML='<i class="fas fa-times"></i>',o.classList.add("close-btn"),o.addEventListener("click",()=>{e.remove()}),e.appendChild(o)}if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(r))throw l(`Invalid variant ${r}`),new Error(`Invalid variant ${r}`);let a={primary:"var(--primary)",primaryLight:"var(--primary-light)",secondary:"var(--secondary)",secondaryLight:"var(--secondary-light)",danger:"var(--danger)",dangerLight:"var(--danger-light)",success:"var(--success)",successLight:"var(--success-light)",warning:"var(--warning)",warningLight:"var(--warning-light)",info:"var(--info)",infoLight:"var(--info-light)",dark:"var(--dark)",darkLight:"var(--dark-light)",light:"var(--light)",lightLight:"var(--light-light)"},s=document.createElement("style");s.setAttribute("data-id",m()),s.setAttribute("data-component-type","alert"),s.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${m()}
        */

          .alert-${r} {
             background-color: ${a[r]};
             border-radius: 5px;
             border: 2px solid ${a[r+"Light"]};
             color: rgba(255, 255, 255, 0.7);
             padding: 1rem;
             margin: 1rem;
             ${n==="true"?`box-shadow: 0 0 10px ${a[r+"Light"]}`:""}
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
                border: 1px solid ${a[r+"Light"]};
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
      `,document.head.appendChild(s),e.classList.add(`alert-${r}`);let d=t.attributes;for(let o=0;o<d.length;o++){let{name:g,value:f}=d[o];g!=="component"&&g!=="variant"&&e.setAttribute(g,f)}}var C=u(()=>{y();h()});function I(t){let e=t.replace("#",""),r=parseInt(e.substr(0,2),16),n=parseInt(e.substr(2,2),16),c=parseInt(e.substr(4,2),16),i=1.2,a=Math.min(Math.round(r*i),255),s=Math.min(Math.round(n*i),255),d=Math.min(Math.round(c*i),255);return"#"+((a<<16)+(s<<8)+d).toString(16).padStart(6,"0")}var A=u(()=>{});function E(t){let e=document.createElement("div");e.innerHTML=t.innerHTML,t.parentNode.replaceChild(e,t);let r=t.getAttribute("variant"),n=t.getAttribute("speed");if(n||(p({message:"No speed found for Spinner, defaulting to 1s",type:"warn"}),n="1s"),!r)throw l("No variant found"),new Error("No variant found");if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(r))throw l("Invalid variant Spinner"),new Error("Invalid variant Spinner");let i={primary:"var(--primary)",secondary:"var(--secondary)",danger:"var(--danger)",success:"var(--success)",warning:"var(--warning)",info:"var(--info)",dark:"var(--dark)",light:"var(--light)"},a=document.createElement("style");a.setAttribute("data-id",m()),a.setAttribute("data-component-type","spinner"),a.innerHTML=`
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
      `,document.head.appendChild(a),e.classList.add(`spinner-${r}`);let s=t.attributes;for(let d=0;d<s.length;d++){let{name:o,value:g}=s[d];o!=="component"&&o!=="variant"&&e.setAttribute(o,g)}}var S=u(()=>{y();h();v()});function M(t){let e=t.getAttribute("variant"),r=t.getAttribute("isChecked"),n=document.createElement("div");if(n.innerHTML=`
    <div class="checkbox-${e}">
      <input type="checkbox" class="checkbox-${e}-input" ${r?"checked":""}>
    </div>
  `,t.parentNode.replaceChild(n,t),!e)throw l("No variant found"),new Error("No variant found");if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(e))throw l(`Invalid variant ${e}`),new Error(`Invalid variant ${e}`);let i={primary:"var(--primary)",secondary:"var(--secondary)",danger:"var(--danger)",success:"var(--success)",warning:"var(--warning)",info:"var(--info)",dark:"var(--dark)",light:"var(--light)"},a=document.createElement("style");a.setAttribute("data-id",m()),a.setAttribute("data-component-type","Checkbox"),a.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: "$"{new Date().toISOString()}
          Compile ID: "$"{generateUUID()}
        */

          .checkbox-${e} {
          display: inline-block;
          position: relative;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 0.25rem;
          border: 1px solid ${i[e]};
          background-color: ${i[e]};
          cursor: pointer;
          transition: all 0.2s ease-in-out;
        }

        
      `,document.head.appendChild(a),n.classList.add(`checkbox-${e}`);let s=t.attributes;for(let d=0;d<s.length;d++){let{name:o,value:g}=s[d];o!=="component"&&o!=="variant"&&n.setAttribute(o,g)}}var T=u(()=>{y();h()});var O=H((D,z)=>{k();C();A();S();T();v();h();var x=["button","alert","spinner","checkbox"];document.body.style.fontFamily="sans-serif";document.body.style.margin="0";document.body.style.padding="0";try{let body=document.getElementsByTagName("body")[0],config=body.getAttribute("badcss-config"),configObj=eval("("+config+")");(!configObj||typeof configObj!="object")&&p({type:"warn",message:"Invalid config or no config found"});let dataPlugins={fontawesome:`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${configObj?.plugins?.fontawesome?.version||"6.4.0"}/css/all.min.css" />`};configObj?.plugins?.fontawesome&&(document.head.innerHTML+=configObj.plugins.fontawesome.kitId?`<script src="https://kit.fontawesome.com/${configObj?.plugins?.fontawesome?.kitId}.js" crossorigin="anonymous"><\/script>`:dataPlugins.fontawesome),body.removeAttribute("badcss-config");let styles=document.createElement("style");styles.setAttribute("badcss",":root"),styles.innerHTML=`
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
--${t.name}Light: ${I(t.value)};`).join(`
    `)||""}
  }
`,document.head.appendChild(styles)}catch(t){p({type:"error",message:t.message})}document.addEventListener("DOMContentLoaded",async()=>{p({type:"info",message:"DOM fully loaded and parsed"});try{document.querySelectorAll("badcss").forEach(async e=>{let r=e,n=r.getAttribute("component");if(x.includes(n))switch(n){case"button":{w(r);break}case"alert":{L(r);break}case"spinner":{E(r);break}case"checkbox":{M(r);break}}else throw r.remove(),l(`Invalid component ${n} found. Valid components are ${x.join(", ")}`),new Error(`Invalid component ${n} found. Valid components are ${x.join(", ")}`)})}catch(t){p({type:"error",message:t.message+"from element"})}})});O();})();
