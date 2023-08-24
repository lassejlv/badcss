/* 
    @badcss/core v0.1.9-2 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license
    Github: https://github.com/lassejlv/badcss.git
*/
(()=>{function d(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=Math.random()*16|0,r=e==="x"?t:t&3|8;return r.toString(16)})}function g(e){let t=document.createElement("div");t.setAttribute("badcss","error"),t.setAttribute("component","error"),t.style.backgroundColor="#eee",t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100vw",t.style.height="100vh",t.style.display="flex",t.style.flexDirection="column",t.style.justifyContent="center",t.style.alignItems="center",t.style.zIndex="999999999",t.style.backdropFilter="blur(5px)";let n=[{keyWords:["component"],url:"https://badcss.dev/components"},{keyWords:["config","unexpected token"],url:"https://badcss.dev/config"},{keyWords:["Invalid variant","Spinner"],url:"https://badcss.dev/docs"}].find(o=>o.keyWords.some(i=>e.includes(i)));t.innerHTML=`
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
        <pre>${e}</pre>
      </p>
    `,document.body.appendChild(t)}function x(e){let t=document.createElement("button");t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t,e);let r=e.getAttribute("variant"),n=e.getAttribute("size"),o=e.getAttribute("withRing"),i=e.getAttribute("color");if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(r))throw g(`Invalid variant ${r}`),new Error(`Invalid variant ${r}`);let c={primary:"var(--primary)",primaryLight:"var(--primary-light)",secondary:"var(--secondary)",secondaryLight:"var(--secondary-light)",danger:"var(--danger)",dangerLight:"var(--danger-light)",success:"var(--success)",successLight:"var(--success-light)",warning:"var(--warning)",warningLight:"var(--warning-light)",info:"var(--info)",infoLight:"var(--info-light)",dark:"var(--dark)",darkLight:"var(--dark-light)",light:"var(--light)",lightLight:"var(--light-light)"},u={sm:{padding:"0.25rem 0.5rem",fontSize:"0.75rem"},md:{padding:"0.5rem 1rem",fontSize:"0.875rem"},lg:{padding:"0.75rem 1rem",fontSize:"1rem"},xl:{padding:"1rem 1.5rem",fontSize:"1.125rem"}},s=document.createElement("style");s.setAttribute("data-id",d()),s.setAttribute("data-component-type","button"),s.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${d()}
        */

          .button-${r}${o==="true"?"-ring":""} {
              color:  ${r==="light"?"var(--dark)":"var(--light)"};
              background-color: ${i?`var(--${i})`:c[r]};
              font-size: ${n==="sm"?"0.875rem":n==="md"?"1rem":n==="lg"?"1.25rem":n==="xl"?"1.5rem":"1rem"};

              /* types are sm,md,lg,xl */
              padding: ${u[n].padding||"0.5rem 1rem"};
              cursor: pointer;
              border-radius: 5px;
              border: none;
              transition: all 0.3s ease-in-out;
              font-size: ${u[n].fontSize};
          }

          /* Hover */
          .button-${r}${o==="true"?"-ring":""}:hover {
              opacity: 0.9;
          }

          /* Focus */
          .button-${r}${o==="true"?"-ring":""}:focus {
              outline: none;
              ${o==="true"&&` box-shadow: 0 0 0 3px ${i?`var(--${i}Light)`:c[r+"Light"]};`}
             
          }

          
      `,document.head.appendChild(s),t.classList.add(`button-${r}${o==="true"?"-ring":""}`);let m=e.attributes;for(let l=0;l<m.length;l++){let{name:a,value:h}=m[l];a!=="component"&&a!=="variant"&&a!=="size"&&a!=="withring"&&t.setAttribute(a,h)}}var p=document.querySelectorAll('themostbad[component="button"]');p&&p.forEach(e=>{x(e)});})();
