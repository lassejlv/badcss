/* 
    @badcss/core v0.1.8 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license
    Github: https://github.com/lassejlv/badcss.git
*/
import{generateUUID as l}from"../utils/generateUUID.js";export function ButtonComponent(t){const i=document.createElement("button");i.innerHTML=t.innerHTML,t.parentNode.replaceChild(i,t);const e=t.getAttribute("variant"),r=t.getAttribute("size"),n=t.getAttribute("withRing");if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(e))throw new Error(`Invalid variant ${e}`);const d={primary:"var(--primary)",primaryLight:"var(--primary-light)",secondary:"var(--secondary)",secondaryLight:"var(--secondary-light)",danger:"var(--danger)",dangerLight:"var(--danger-light)",success:"var(--success)",successLight:"var(--success-light)",warning:"var(--warning)",warningLight:"var(--warning-light)",info:"var(--info)",infoLight:"var(--info-light)",dark:"var(--dark)",darkLight:"var(--dark-light)",light:"var(--light)",lightLight:"var(--light-light)"},c={sm:{padding:"0.25rem 0.5rem",fontSize:"0.75rem"},md:{padding:"0.5rem 1rem",fontSize:"0.875rem"},lg:{padding:"0.75rem 1rem",fontSize:"1rem"},xl:{padding:"1rem 1.5rem",fontSize:"1.125rem"}},o=document.createElement("style");o.setAttribute("data-id",l()),o.setAttribute("data-component-type","button"),o.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${l()}
        */

          .button-${e}${n==="true"?"-ring":""} {
              color:  ${e==="light"?"var(--dark)":"var(--light)"};
              background-color: ${d[e]};
              font-size: ${r==="sm"?"0.875rem":r==="md"?"1rem":r==="lg"?"1.25rem":r==="xl"?"1.5rem":"1rem"};

              /* types are sm,md,lg,xl */
              padding: ${c[r].padding||"0.5rem 1rem"};
              cursor: pointer;
              border-radius: 5px;
              border: none;
              transition: all 0.3s ease-in-out;
              font-size: ${c[r].fontSize};
          }

          /* Hover */
          .button-${e}${n==="true"?"-ring":""}:hover {
              opacity: 0.9;
          }

          /* Focus */
          .button-${e}${n==="true"?"-ring":""}:focus {
              outline: none;
              ${n==="true"&&` box-shadow: 0 0 0 3px ${d[e+"Light"]};`}
             
          }

          
      `,document.head.appendChild(o),i.classList.add(`button-${e}${n==="true"?"-ring":""}`);const g=t.attributes;for(let s=0;s<g.length;s++){const{name:a,value:u}=g[s];a!=="component"&&a!=="variant"&&a!=="size"&&i.setAttribute(a,u)}}const m=document.querySelectorAll('themostbad[component="button"]');m&&m.forEach(t=>{ButtonComponent(t)});
