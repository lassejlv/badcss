/* 
    @badcss/core v0.1.8 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license
    Github: https://github.com/lassejlv/badcss.git
*/
(()=>{var u=(t,r)=>()=>(t&&(r=t(t=0)),r);var E=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports);function m(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var r=Math.random()*16|0,e=t==="x"?r:r&3|8;return e.toString(16)})}var h=u(()=>{});function p(t){let r=document.createElement("button");r.innerHTML=t.innerHTML,t.parentNode.replaceChild(r,t);let e=t.getAttribute("variant"),n=t.getAttribute("size"),i=t.getAttribute("withRing");if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(e))throw new Error(`Invalid variant ${e}`);let a={primary:"var(--primary)",primaryLight:"var(--primary-light)",secondary:"var(--secondary)",secondaryLight:"var(--secondary-light)",danger:"var(--danger)",dangerLight:"var(--danger-light)",success:"var(--success)",successLight:"var(--success-light)",warning:"var(--warning)",warningLight:"var(--warning-light)",info:"var(--info)",infoLight:"var(--info-light)",dark:"var(--dark)",darkLight:"var(--dark-light)",light:"var(--light)",lightLight:"var(--light-light)"},s={sm:{padding:"0.25rem 0.5rem",fontSize:"0.75rem"},md:{padding:"0.5rem 1rem",fontSize:"0.875rem"},lg:{padding:"0.75rem 1rem",fontSize:"1rem"},xl:{padding:"1rem 1.5rem",fontSize:"1.125rem"}},c=document.createElement("style");c.setAttribute("data-id",m()),c.setAttribute("data-component-type","button"),c.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${m()}
        */

          .button-${e}${i==="true"?"-ring":""} {
              color:  ${e==="light"?"var(--dark)":"var(--light)"};
              background-color: ${a[e]};
              font-size: ${n==="sm"?"0.875rem":n==="md"?"1rem":n==="lg"?"1.25rem":n==="xl"?"1.5rem":"1rem"};

              /* types are sm,md,lg,xl */
              padding: ${s[n].padding||"0.5rem 1rem"};
              cursor: pointer;
              border-radius: 5px;
              border: none;
              transition: all 0.3s ease-in-out;
              font-size: ${s[n].fontSize};
          }

          /* Hover */
          .button-${e}${i==="true"?"-ring":""}:hover {
              opacity: 0.9;
          }

          /* Focus */
          .button-${e}${i==="true"?"-ring":""}:focus {
              outline: none;
              ${i==="true"&&` box-shadow: 0 0 0 3px ${a[e+"Light"]};`}
             
          }

          
      `,document.head.appendChild(c),r.classList.add(`button-${e}${i==="true"?"-ring":""}`);let o=t.attributes;for(let d=0;d<o.length;d++){let{name:g,value:A}=o[d];g!=="component"&&g!=="variant"&&g!=="size"&&r.setAttribute(g,A)}}var b,v=u(()=>{h();b=document.querySelectorAll('themostbad[component="button"]');b&&b.forEach(t=>{p(t)})});function y(t){let r=document.createElement("div");r.innerHTML=t.innerHTML,t.parentNode.replaceChild(r,t);let e=t.getAttribute("variant"),n=t.getAttribute("isShadow"),i=t.getAttribute("isCloseable");if(!e)throw new Error("No variant found");if(i==="true"){let o=document.createElement("button");o.innerHTML='<i class="fas fa-times"></i>',o.classList.add("close-btn"),o.addEventListener("click",()=>{r.remove()}),r.appendChild(o)}if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(e))throw new Error(`Invalid variant ${e}`);let a={primary:"var(--primary)",primaryLight:"var(--primary-light)",secondary:"var(--secondary)",secondaryLight:"var(--secondary-light)",danger:"var(--danger)",dangerLight:"var(--danger-light)",success:"var(--success)",successLight:"var(--success-light)",warning:"var(--warning)",warningLight:"var(--warning-light)",info:"var(--info)",infoLight:"var(--info-light)",dark:"var(--dark)",darkLight:"var(--dark-light)",light:"var(--light)",lightLight:"var(--light-light)"},s=document.createElement("style");s.setAttribute("data-id",m()),s.setAttribute("data-component-type","alert"),s.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${m()}
        */

          .alert-${e} {
             background-color: ${a[e]};
             border-radius: 5px;
             border: 2px solid ${a[e+"Light"]};
             color: rgba(255, 255, 255, 0.7);
             padding: 1rem;
             margin: 1rem;
             ${n==="true"?`box-shadow: 0 0 10px ${a[e+"Light"]}`:""}
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
                border: 1px solid ${a[e+"Light"]};
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
      `,document.head.appendChild(s),r.classList.add(`alert-${e}`);let c=t.attributes;for(let o=0;o<c.length;o++){let{name:d,value:g}=c[o];d!=="component"&&d!=="variant"&&r.setAttribute(d,g)}}var x=u(()=>{h()});var z=E(($,k)=>{v();x();var S=["button","alert"];document.body.style.fontFamily="sans-serif";document.body.style.margin="0";document.body.style.padding="0";var w=document.getElementsByTagName("body")[0],L=w.getAttribute("badcss-config");L||console.warn("No config found");var l=eval("("+L+")");l||console.warn("No config found JSON");console.log(l);var T={fontawesome:`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${l?.plugins?.fontawesome?.version||"6.4.0"}/css/all.min.css" />`};l?.plugins?.fontawesome&&(document.head.innerHTML+=l.plugins.fontawesome.kitId?`<script src="https://kit.fontawesome.com/${l?.plugins?.fontawesome?.kitId}.js" crossorigin="anonymous"><\/script>`:T.fontawesome);w.removeAttribute("badcss-config");var f=document.createElement("style");f.setAttribute("badcss",":root");f.innerHTML=`
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
    ${l?.theme?.colors?.map(t=>`--${t.name}: ${t.value};`)||""}
  }
`;document.head.appendChild(f);document.addEventListener("DOMContentLoaded",async()=>{try{let t=document.getElementsByTagName("badcss");for(let r=0;r<t.length;r++){let e=t[r],n=e.getAttribute("component");if(S.includes(n))switch(n){case"button":{p(e);break}case"alert":{console.log("alert"),y(e);break}}else throw e.remove(),new Error(`Invalid component ${n}`)}}catch(t){console.error("Error loading scripts:",t)}})});z();})();
