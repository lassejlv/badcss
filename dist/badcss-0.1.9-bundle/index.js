/* 
    @badcss/core v0.1.9 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license
    Github: https://github.com/lassejlv/badcss.git
*/
(()=>{var p=(t,r)=>()=>(t&&(r=t(t=0)),r);var E=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports);function m(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var r=Math.random()*16|0,e=t==="x"?r:r&3|8;return e.toString(16)})}var f=p(()=>{});function b(t){let r=document.createElement("button");r.innerHTML=t.innerHTML,t.parentNode.replaceChild(r,t);let e=t.getAttribute("variant"),o=t.getAttribute("size"),i=t.getAttribute("withRing"),a=t.getAttribute("color");if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(e))throw new Error(`Invalid variant ${e}`);let s={primary:"var(--primary)",primaryLight:"var(--primary-light)",secondary:"var(--secondary)",secondaryLight:"var(--secondary-light)",danger:"var(--danger)",dangerLight:"var(--danger-light)",success:"var(--success)",successLight:"var(--success-light)",warning:"var(--warning)",warningLight:"var(--warning-light)",info:"var(--info)",infoLight:"var(--info-light)",dark:"var(--dark)",darkLight:"var(--dark-light)",light:"var(--light)",lightLight:"var(--light-light)"},l={sm:{padding:"0.25rem 0.5rem",fontSize:"0.75rem"},md:{padding:"0.5rem 1rem",fontSize:"0.875rem"},lg:{padding:"0.75rem 1rem",fontSize:"1rem"},xl:{padding:"1rem 1.5rem",fontSize:"1.125rem"}},n=document.createElement("style");n.setAttribute("data-id",m()),n.setAttribute("data-component-type","button"),n.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${m()}
        */

          .button-${e}${i==="true"?"-ring":""} {
              color:  ${e==="light"?"var(--dark)":"var(--light)"};
              background-color: ${a?`var(--${a})`:s[e]};
              font-size: ${o==="sm"?"0.875rem":o==="md"?"1rem":o==="lg"?"1.25rem":o==="xl"?"1.5rem":"1rem"};

              /* types are sm,md,lg,xl */
              padding: ${l[o].padding||"0.5rem 1rem"};
              cursor: pointer;
              border-radius: 5px;
              border: none;
              transition: all 0.3s ease-in-out;
              font-size: ${l[o].fontSize};
          }

          /* Hover */
          .button-${e}${i==="true"?"-ring":""}:hover {
              opacity: 0.9;
          }

          /* Focus */
          .button-${e}${i==="true"?"-ring":""}:focus {
              outline: none;
              ${i==="true"&&` box-shadow: 0 0 0 3px ${a?`var(--${a}Light)`:s[e+"Light"]};`}
             
          }

          
      `,document.head.appendChild(n),r.classList.add(`button-${e}${i==="true"?"-ring":""}`);let g=t.attributes;for(let u=0;u<g.length;u++){let{name:h,value:I}=g[u];h!=="component"&&h!=="variant"&&h!=="size"&&h!=="withring"&&r.setAttribute(h,I)}}var y,x=p(()=>{f();y=document.querySelectorAll('themostbad[component="button"]');y&&y.forEach(t=>{b(t)})});function w(t){let r=document.createElement("div");r.innerHTML=t.innerHTML,t.parentNode.replaceChild(r,t);let e=t.getAttribute("variant"),o=t.getAttribute("isShadow"),i=t.getAttribute("isCloseable");if(!e)throw new Error("No variant found");if(i==="true"){let n=document.createElement("button");n.innerHTML='<i class="fas fa-times"></i>',n.classList.add("close-btn"),n.addEventListener("click",()=>{r.remove()}),r.appendChild(n)}if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(e))throw new Error(`Invalid variant ${e}`);let c={primary:"var(--primary)",primaryLight:"var(--primary-light)",secondary:"var(--secondary)",secondaryLight:"var(--secondary-light)",danger:"var(--danger)",dangerLight:"var(--danger-light)",success:"var(--success)",successLight:"var(--success-light)",warning:"var(--warning)",warningLight:"var(--warning-light)",info:"var(--info)",infoLight:"var(--info-light)",dark:"var(--dark)",darkLight:"var(--dark-light)",light:"var(--light)",lightLight:"var(--light-light)"},s=document.createElement("style");s.setAttribute("data-id",m()),s.setAttribute("data-component-type","alert"),s.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${m()}
        */

          .alert-${e} {
             background-color: ${c[e]};
             border-radius: 5px;
             border: 2px solid ${c[e+"Light"]};
             color: rgba(255, 255, 255, 0.7);
             padding: 1rem;
             margin: 1rem;
             ${o==="true"?`box-shadow: 0 0 10px ${c[e+"Light"]}`:""}
          }

          .alert-${e} .alert-title {
            font-size: 1.5rem;
            font-weight: bold;
            opacity: 1;
            margin: 0;
          }

          .alert-${e} .alert-message {
             font-size: 1rem;
             opacity: 1;
             margin: 0;

           }

           .alert-${e} hr {
                border: 1px solid ${c[e+"Light"]};
                margin: 1rem 0;
            }

            .alert-${e} .close-btn {
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

            .alert-${e} .close-btn:hover {
                color: rgba(255, 255, 255, 1);
            }
      `,document.head.appendChild(s),r.classList.add(`alert-${e}`);let l=t.attributes;for(let n=0;n<l.length;n++){let{name:g,value:u}=l[n];g!=="component"&&g!=="variant"&&r.setAttribute(g,u)}}var $=p(()=>{f()});function L(t){let r=t.replace("#",""),e=parseInt(r.substr(0,2),16),o=parseInt(r.substr(2,2),16),i=parseInt(r.substr(4,2),16),a=1.2,c=Math.min(Math.round(e*a),255),s=Math.min(Math.round(o*a),255),l=Math.min(Math.round(i*a),255),n="#"+((c<<16)+(s<<8)+l).toString(16).padStart(6,"0");return console.log(n),n}var k=p(()=>{});var H=E((M,S)=>{x();$();k();var T=["button","alert"];document.body.style.fontFamily="sans-serif";document.body.style.margin="0";document.body.style.padding="0";var C=document.getElementsByTagName("body")[0],A=C.getAttribute("badcss-config");A||console.warn("No config found");var d=eval("("+A+")");d||console.warn("No config found JSON");console.log(d);var z={fontawesome:`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${d?.plugins?.fontawesome?.version||"6.4.0"}/css/all.min.css" />`};d?.plugins?.fontawesome&&(document.head.innerHTML+=d.plugins.fontawesome.kitId?`<script src="https://kit.fontawesome.com/${d?.plugins?.fontawesome?.kitId}.js" crossorigin="anonymous"><\/script>`:z.fontawesome);C.removeAttribute("badcss-config");var v=document.createElement("style");v.setAttribute("badcss",":root");v.innerHTML=`
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
    ${d?.theme?.colors?.map(t=>`--${t.name}: ${t.value};
--${t.name}Light: ${L(t.value)};`).join(`
    `)||""}
  }
`;document.head.appendChild(v);document.addEventListener("DOMContentLoaded",async()=>{try{let t=document.getElementsByTagName("badcss");for(let r=0;r<t.length;r++){let e=t[r],o=e.getAttribute("component");if(T.includes(o))switch(o){case"button":{b(e);break}case"alert":{console.log("alert"),w(e);break}}else throw e.remove(),new Error(`Invalid component ${o}`)}}catch(t){console.error("Error loading scripts:",t)}})});H();})();
