/* 
    @badcss/core v1.0.0-beta.1 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license
    Github: https://github.com/lassejlv/badcss.git
*/
import{generateUUID as m}from"../utils/generateUUID.js";import{displayError as v}from"../utils/error.js";import{Log as f}from"../utils/Logger.js";export function ButtonComponent(t){const a=document.createElement("button");a.innerHTML=t.innerHTML,t.parentNode.replaceChild(a,t);const r=t.getAttribute("variant");let e=t.getAttribute("size");const n=t.getAttribute("withRing"),o=t.getAttribute("color"),p=t.getAttribute("disabled:cursor"),l=t.getAttribute("isBold");if(e||(f({message:"No size found for button, defaulting to md",type:"warn"}),e="md"),!["primary","secondary","danger","success","warning","info","dark","light"].includes(r)&&!o)throw v(`Invalid variant ${r}`),new Error(`Invalid variant ${r}`);const c={primary:"var(--primary)",primaryLight:"var(--primary-light)",secondary:"var(--secondary)",secondaryLight:"var(--secondary-light)",danger:"var(--danger)",dangerLight:"var(--danger-light)",success:"var(--success)",successLight:"var(--success-light)",warning:"var(--warning)",warningLight:"var(--warning-light)",info:"var(--info)",infoLight:"var(--info-light)",dark:"var(--dark)",darkLight:"var(--dark-light)",light:"var(--light)",lightLight:"var(--light-light)"},u={sm:{padding:"0.25rem 0.5rem",fontSize:"0.75rem"},md:{padding:"0.5rem 1rem",fontSize:"0.875rem"},lg:{padding:"0.75rem 1rem",fontSize:"1rem"},xl:{padding:"1rem 1.5rem",fontSize:"1.125rem"}},s=document.createElement("style");s.setAttribute("data-id",m()),s.setAttribute("data-component-type","button"),s.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${m()}
        */

          .button-${r}${n==="true"?"-ring":""} {
              color:  ${r==="light"?"var(--dark)":"var(--light)"};
              background-color: ${o?`var(--${o})`:c[r]};
              font-size: ${e==="sm"?"0.875rem":e==="md"?"1rem":e==="lg"?"1.25rem":e==="xl"?"1.5rem":"1rem"};

              /* types are sm,md,lg,xl */
              padding: ${u[e].padding||"0.5rem 1rem"};
              cursor: pointer;
              border-radius: 5px;
              border: none;
              transition: all 0.3s ease-in-out;
              ${l?`font-weight: ${l};`:""}
              font-size: ${u[e].fontSize};
          }

          /* Hover */
          .button-${r}${n==="true"?"-ring":""}:hover {
              opacity: 0.9;
          }

          /* Focus */
          .button-${r}${n==="true"?"-ring":""}:focus {
              outline: none;
              ${n==="true"&&` box-shadow: 0 0 0 3px ${o?`var(--${o}Light)`:c[r+"Light"]};`}
             
          }

          .button-${r}${n==="true"?"-ring":""}:disabled {
            opacity: 0.5;
            ${p==="not-allowed"?"cursor: not-allowed;":""}
          }

          
      `,document.head.appendChild(s),a.classList.add(`button-${r}${n==="true"?"-ring":""}`);const g=t.attributes;for(let d=0;d<g.length;d++){const{name:i,value:b}=g[d];i!=="component"&&i!=="variant"&&i!=="size"&&i!=="withring"&&i!=="disabled:cursor"&&i!=="isBold"&&a.setAttribute(i,b)}}const h=document.querySelectorAll('themostbad[component="button"]');h&&h.forEach(t=>{ButtonComponent(t)});
