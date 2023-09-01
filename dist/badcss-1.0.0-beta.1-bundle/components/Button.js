/* 
    @badcss/core v1.0.0-beta.1 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license
    Github: https://github.com/lassejlv/badcss.git
*/
(()=>{function l(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,n=t==="x"?e:e&3|8;return n.toString(16)})}function m(t){let e=document.createElement("div");e.setAttribute("badcss","error"),e.setAttribute("component","error"),e.style.backgroundColor="#eee",e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.width="100vw",e.style.height="100vh",e.style.display="flex",e.style.flexDirection="column",e.style.justifyContent="center",e.style.alignItems="center",e.style.zIndex="999999999",e.style.backdropFilter="blur(5px)";let r=[{keyWords:["component"],url:"https://badcss.dev/components"},{keyWords:["config","unexpected token"],url:"https://badcss.dev/config"},{keyWords:["Invalid variant","Spinner"],url:"https://badcss.dev/docs"}].find(o=>o.keyWords.some(i=>t.includes(i)));e.innerHTML=`
      <h1>
          Runtime Error <span style="color: var(--danger)">&times;</span>
      </h1>
      <p style="text-align: center">
        Badcss encountered an error while loading the page.<br />
        ${r?`
            Read the documentation for help, this might help you to fix the error.<br />
            <a href="${r.url}" target="_blank" style="color: var(--primary)">
              ${r.url}
            </a>`:""}
      </p>
      <p>
        <pre>${t}</pre>
      </p>
    `,document.body.appendChild(e)}function h(t){let e=["info","warn","error"],n=new Date().toISOString();if(t.type){let r;switch(t.type){case"info":r="#2563eb";break;case"warn":r="#eab308";break;case"error":r="#dc2626";break}console.log(`%c ${n} - ${t.type.toUpperCase()} %c ${t.message}`,`background: ${r}; color: white; padding: 2px; border-radius: 2px;`,"background: none; color: #999;")}else throw new Error("No type found")}function f(t){let e=document.createElement("button");e.innerHTML=t.innerHTML,t.parentNode.replaceChild(e,t);let n=t.getAttribute("variant"),r=t.getAttribute("size"),o=t.getAttribute("withRing"),i=t.getAttribute("color"),y=t.getAttribute("disabled:cursor"),c=t.getAttribute("isBold");if(r||(h({message:"No size found for button, defaulting to md",type:"warn"}),r="md"),!["primary","secondary","danger","success","warning","info","dark","light"].includes(n)&&!i)throw m(`Invalid variant ${n}`),new Error(`Invalid variant ${n}`);let u={primary:"var(--primary)",primaryLight:"var(--primary-light)",secondary:"var(--secondary)",secondaryLight:"var(--secondary-light)",danger:"var(--danger)",dangerLight:"var(--danger-light)",success:"var(--success)",successLight:"var(--success-light)",warning:"var(--warning)",warningLight:"var(--warning-light)",info:"var(--info)",infoLight:"var(--info-light)",dark:"var(--dark)",darkLight:"var(--dark-light)",light:"var(--light)",lightLight:"var(--light-light)"},g={sm:{padding:"0.25rem 0.5rem",fontSize:"0.75rem"},md:{padding:"0.5rem 1rem",fontSize:"0.875rem"},lg:{padding:"0.75rem 1rem",fontSize:"1rem"},xl:{padding:"1rem 1.5rem",fontSize:"1.125rem"}},s=document.createElement("style");s.setAttribute("data-id",l()),s.setAttribute("data-component-type","button"),s.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${l()}
        */

          .button-${n}${o==="true"?"-ring":""} {
              color:  ${n==="light"?"var(--dark)":"var(--light)"};
              background-color: ${i?`var(--${i})`:u[n]};
              font-size: ${r==="sm"?"0.875rem":r==="md"?"1rem":r==="lg"?"1.25rem":r==="xl"?"1.5rem":"1rem"};

              /* types are sm,md,lg,xl */
              padding: ${g[r].padding||"0.5rem 1rem"};
              cursor: pointer;
              border-radius: 5px;
              border: none;
              transition: all 0.3s ease-in-out;
              ${c?`font-weight: ${c};`:""}
              font-size: ${g[r].fontSize};
          }

          /* Hover */
          .button-${n}${o==="true"?"-ring":""}:hover {
              opacity: 0.9;
          }

          /* Focus */
          .button-${n}${o==="true"?"-ring":""}:focus {
              outline: none;
              ${o==="true"&&` box-shadow: 0 0 0 3px ${i?`var(--${i}Light)`:u[n+"Light"]};`}
             
          }

          .button-${n}${o==="true"?"-ring":""}:disabled {
            opacity: 0.5;
            ${y==="not-allowed"?"cursor: not-allowed;":""}
          }

          
      `,document.head.appendChild(s),e.classList.add(`button-${n}${o==="true"?"-ring":""}`);let p=t.attributes;for(let d=0;d<p.length;d++){let{name:a,value:x}=p[d];a!=="component"&&a!=="variant"&&a!=="size"&&a!=="withring"&&a!=="disabled:cursor"&&a!=="isBold"&&e.setAttribute(a,x)}}var b=document.querySelectorAll('themostbad[component="button"]');b&&b.forEach(t=>{f(t)});})();
