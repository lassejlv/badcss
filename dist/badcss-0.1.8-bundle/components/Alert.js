/* 
    @badcss/core v0.1.8 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license
    Github: https://github.com/lassejlv/badcss.git
*/
(()=>{function s(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=Math.random()*16|0,r=e==="x"?t:t&3|8;return r.toString(16)})}function u(e){let t=document.createElement("div");t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t,e);let r=e.getAttribute("variant"),d=e.getAttribute("isShadow"),c=e.getAttribute("isCloseable");if(!r)throw new Error("No variant found");if(c==="true"){let a=document.createElement("button");a.innerHTML='<i class="fas fa-times"></i>',a.classList.add("close-btn"),a.addEventListener("click",()=>{t.remove()}),t.appendChild(a)}if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(r))throw new Error(`Invalid variant ${r}`);let n={primary:"var(--primary)",primaryLight:"var(--primary-light)",secondary:"var(--secondary)",secondaryLight:"var(--secondary-light)",danger:"var(--danger)",dangerLight:"var(--danger-light)",success:"var(--success)",successLight:"var(--success-light)",warning:"var(--warning)",warningLight:"var(--warning-light)",info:"var(--info)",infoLight:"var(--info-light)",dark:"var(--dark)",darkLight:"var(--dark-light)",light:"var(--light)",lightLight:"var(--light-light)"},i=document.createElement("style");i.setAttribute("data-id",s()),i.setAttribute("data-component-type","alert"),i.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${s()}
        */

          .alert-${r} {
             background-color: ${n[r]};
             border-radius: 5px;
             border: 2px solid ${n[r+"Light"]};
             color: rgba(255, 255, 255, 0.7);
             padding: 1rem;
             margin: 1rem;
             ${d==="true"?`box-shadow: 0 0 10px ${n[r+"Light"]}`:""}
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
                border: 1px solid ${n[r+"Light"]};
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
      `,document.head.appendChild(i),t.classList.add(`alert-${r}`);let l=e.attributes;for(let a=0;a<l.length;a++){let{name:o,value:g}=l[a];o!=="component"&&o!=="variant"&&t.setAttribute(o,g)}}})();
