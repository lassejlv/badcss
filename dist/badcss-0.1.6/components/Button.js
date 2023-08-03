/* 
    @badcss/core v0.1.6 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license
    Github: https://github.com/lassejlv/badcss.git
*/
import{generateUUID as m}from"../utils/generateUUID.js";export function ButtonComponent(e){const n=document.createElement("button");n.innerHTML=e.innerHTML,e.parentNode.replaceChild(n,e);const t=e.getAttribute("variant"),r=e.getAttribute("size");if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(t))throw new Error(`Invalid variant ${t}`);const l={primary:"var(--primary)",secondary:"var(--secondary)",danger:"var(--danger)",success:"var(--success)",warning:"var(--warning)",info:"var(--info)",dark:"var(--dark)",light:"var(--light)"},s={sm:{padding:"0.25rem 0.5rem",fontSize:"0.75rem"},md:{padding:"0.5rem 1rem",fontSize:"0.875rem"},lg:{padding:"0.75rem 1rem",fontSize:"1rem"},xl:{padding:"1rem 1.5rem",fontSize:"1.125rem"}},o=document.createElement("style");o.setAttribute("data-id",m()),o.setAttribute("data-component-type","button"),o.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${m()}
        */

          .button-${t} {
              color:  ${t==="light"?"var(--dark)":"var(--light)"};
              background-color: ${l[t]};
              font-size: ${r==="sm"?"0.875rem":r==="md"?"1rem":r==="lg"?"1.25rem":r==="xl"?"1.5rem":"1rem"};

              /* types are sm,md,lg,xl */
              padding: ${s[r].padding||"0.5rem 1rem"};
              cursor: pointer;
              border-radius: 5px;
              border: none;
              transition: all 0.3s ease-in-out;
              font-size: ${s[r].fontSize};
          }

          /* Hover */
          .button-${t}:hover {
              opacity: 0.9;
          }

          /* Focus */
          .button-${t}:focus {
              outline: none;
          }
      `,document.head.appendChild(o),n.classList.add(`button-${t}`);const d=e.attributes;for(let i=0;i<d.length;i++){const{name:a,value:u}=d[i];a!=="component"&&a!=="variant"&&a!=="size"&&n.setAttribute(a,u)}}const c=document.querySelectorAll('themostbad[component="button"]');c&&c.forEach(e=>{ButtonComponent(e)});
