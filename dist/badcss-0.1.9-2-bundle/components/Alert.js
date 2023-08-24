/* 
    @badcss/core v0.1.9-2 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license
    Github: https://github.com/lassejlv/badcss.git
*/
(()=>{function d(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){var e=Math.random()*16|0,t=r==="x"?e:e&3|8;return t.toString(16)})}function c(r){let e=document.createElement("div");e.setAttribute("badcss","error"),e.setAttribute("component","error"),e.style.backgroundColor="#eee",e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100vw",e.style.height="100vh",e.style.display="flex",e.style.flexDirection="column",e.style.justifyContent="center",e.style.alignItems="center",e.style.zIndex="999999999",e.style.backdropFilter="blur(5px)";let o=[{keyWords:["component"],url:"https://badcss.dev/components"},{keyWords:["config","unexpected token"],url:"https://badcss.dev/config"},{keyWords:["Invalid variant","Spinner"],url:"https://badcss.dev/docs"}].find(s=>s.keyWords.some(p=>r.includes(p)));e.innerHTML=`
      <h1>
          Runtime Error <span style="color: var(--danger)">&times;</span>
      </h1>
      <p style="text-align: center">
        Badcss encountered an error while loading the page.<br />
        ${o?`
            Read the documentation for help, this might help you to fix the error.<br />
            <a href="${o.url}" target="_blank" style="color: var(--primary)">
              ${o.url}
            </a>`:""}
      </p>
      <p>
        <pre>${r}</pre>
      </p>
    `,document.body.appendChild(e)}function v(r){let e=document.createElement("div");e.innerHTML=r.innerHTML,r.parentNode.replaceChild(e,r);let t=r.getAttribute("variant"),o=r.getAttribute("isShadow"),s=r.getAttribute("isCloseable");if(!t)throw c("No variant found"),new Error("No variant found");if(s==="true"){let n=document.createElement("button");n.innerHTML='<i class="fas fa-times"></i>',n.classList.add("close-btn"),n.addEventListener("click",()=>{e.remove()}),e.appendChild(n)}if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(t))throw c(`Invalid variant ${t}`),new Error(`Invalid variant ${t}`);let a={primary:"var(--primary)",primaryLight:"var(--primary-light)",secondary:"var(--secondary)",secondaryLight:"var(--secondary-light)",danger:"var(--danger)",dangerLight:"var(--danger-light)",success:"var(--success)",successLight:"var(--success-light)",warning:"var(--warning)",warningLight:"var(--warning-light)",info:"var(--info)",infoLight:"var(--info-light)",dark:"var(--dark)",darkLight:"var(--dark-light)",light:"var(--light)",lightLight:"var(--light-light)"},i=document.createElement("style");i.setAttribute("data-id",d()),i.setAttribute("data-component-type","alert"),i.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${d()}
        */

          .alert-${t} {
             background-color: ${a[t]};
             border-radius: 5px;
             border: 2px solid ${a[t+"Light"]};
             color: rgba(255, 255, 255, 0.7);
             padding: 1rem;
             margin: 1rem;
             ${o==="true"?`box-shadow: 0 0 10px ${a[t+"Light"]}`:""}
          }

          .alert-${t} .alert-title {
            font-size: 1.5rem;
            font-weight: bold;
            opacity: 1;
            margin: 0;
          }

          .alert-${t} .alert-message {
             font-size: 1rem;
             opacity: 1;
             margin: 0;

           }

           .alert-${t} hr {
                border: 1px solid ${a[t+"Light"]};
                margin: 1rem 0;
            }

            .alert-${t} .close-btn {
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

            .alert-${t} .close-btn:hover {
                color: rgba(255, 255, 255, 1);
            }
      `,document.head.appendChild(i),e.classList.add(`alert-${t}`);let g=r.attributes;for(let n=0;n<g.length;n++){let{name:l,value:h}=g[n];l!=="component"&&l!=="variant"&&e.setAttribute(l,h)}}})();
