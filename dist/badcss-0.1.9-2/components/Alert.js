/* 
    @badcss/core v0.1.9-2 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license
    Github: https://github.com/lassejlv/badcss.git
*/
import{generateUUID as l}from"../utils/generateUUID.js";import{displayError as d}from"../utils/error.js";export function AlertComponent(t){const a=document.createElement("div");a.innerHTML=t.innerHTML,t.parentNode.replaceChild(a,t);const r=t.getAttribute("variant"),c=t.getAttribute("isShadow"),g=t.getAttribute("isCloseable");if(!r)throw d("No variant found"),new Error("No variant found");if(g==="true"){const e=document.createElement("button");e.innerHTML='<i class="fas fa-times"></i>',e.classList.add("close-btn"),e.addEventListener("click",()=>{a.remove()}),a.appendChild(e)}if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(r))throw d(`Invalid variant ${r}`),new Error(`Invalid variant ${r}`);const i={primary:"var(--primary)",primaryLight:"var(--primary-light)",secondary:"var(--secondary)",secondaryLight:"var(--secondary-light)",danger:"var(--danger)",dangerLight:"var(--danger-light)",success:"var(--success)",successLight:"var(--success-light)",warning:"var(--warning)",warningLight:"var(--warning-light)",info:"var(--info)",infoLight:"var(--info-light)",dark:"var(--dark)",darkLight:"var(--dark-light)",light:"var(--light)",lightLight:"var(--light-light)"},n=document.createElement("style");n.setAttribute("data-id",l()),n.setAttribute("data-component-type","alert"),n.innerHTML=`
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
             ${c==="true"?`box-shadow: 0 0 10px ${i[r+"Light"]}`:""}
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
      `,document.head.appendChild(n),a.classList.add(`alert-${r}`);const s=t.attributes;for(let e=0;e<s.length;e++){const{name:o,value:h}=s[e];o!=="component"&&o!=="variant"&&a.setAttribute(o,h)}}
