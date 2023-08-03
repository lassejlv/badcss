/* 
    @badcss/core v0.1.6 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license
    Github: https://github.com/lassejlv/badcss.git
*/
import{generateUUID as l}from"../utils/generateUUID.js";export function AlertComponent(t){const a=document.createElement("div");a.innerHTML=t.innerHTML,t.parentNode.replaceChild(a,t);const e=t.getAttribute("variant"),d=t.getAttribute("isShadow"),c=t.getAttribute("isCloseable");if(!e)throw new Error("No variant found");if(c==="true"){const r=document.createElement("button");r.innerHTML='<i class="fas fa-times"></i>',r.classList.add("close-btn"),r.addEventListener("click",()=>{a.remove()}),a.appendChild(r)}if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(e))throw new Error(`Invalid variant ${e}`);const i={primary:"var(--primary)",primaryLight:"var(--primary-light)",secondary:"var(--secondary)",secondaryLight:"var(--secondary-light)",danger:"var(--danger)",dangerLight:"var(--danger-light)",success:"var(--success)",successLight:"var(--success-light)",warning:"var(--warning)",warningLight:"var(--warning-light)",info:"var(--info)",infoLight:"var(--info-light)",dark:"var(--dark)",darkLight:"var(--dark-light)",light:"var(--light)",lightLight:"var(--light-light)"},n=document.createElement("style");n.setAttribute("data-id",l()),n.setAttribute("data-component-type","alert"),n.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${l()}
        */

          .alert-${e} {
             background-color: ${i[e]};
             border-radius: 5px;
             border: 2px solid ${i[e+"Light"]};
             color: rgba(255, 255, 255, 0.7);
             padding: 1rem;
             margin: 1rem;
             ${d==="true"?`box-shadow: 0 0 10px ${i[e+"Light"]}`:""}
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
                border: 1px solid ${i[e+"Light"]};
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
      `,document.head.appendChild(n),a.classList.add(`alert-${e}`);const s=t.attributes;for(let r=0;r<s.length;r++){const{name:o,value:g}=s[r];o!=="component"&&o!=="variant"&&a.setAttribute(o,g)}}
