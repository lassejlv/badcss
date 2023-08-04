/* 
    @badcss/core v0.1.8 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license
    Github: https://github.com/lassejlv/badcss.git
*/
(()=>{function d(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var r=Math.random()*16|0,e=t==="x"?r:r&3|8;return e.toString(16)})}function x(t){let r=document.createElement("button");r.innerHTML=t.innerHTML,t.parentNode.replaceChild(r,t);let e=t.getAttribute("variant"),n=t.getAttribute("size"),i=t.getAttribute("withRing");if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(e))throw new Error(`Invalid variant ${e}`);let c={primary:"var(--primary)",primaryLight:"var(--primary-light)",secondary:"var(--secondary)",secondaryLight:"var(--secondary-light)",danger:"var(--danger)",dangerLight:"var(--danger-light)",success:"var(--success)",successLight:"var(--success-light)",warning:"var(--warning)",warningLight:"var(--warning-light)",info:"var(--info)",infoLight:"var(--info-light)",dark:"var(--dark)",darkLight:"var(--dark-light)",light:"var(--light)",lightLight:"var(--light-light)"},g={sm:{padding:"0.25rem 0.5rem",fontSize:"0.75rem"},md:{padding:"0.5rem 1rem",fontSize:"0.875rem"},lg:{padding:"0.75rem 1rem",fontSize:"1rem"},xl:{padding:"1rem 1.5rem",fontSize:"1.125rem"}},o=document.createElement("style");o.setAttribute("data-id",d()),o.setAttribute("data-component-type","button"),o.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${d()}
        */

          .button-${e}${i==="true"?"-ring":""} {
              color:  ${e==="light"?"var(--dark)":"var(--light)"};
              background-color: ${c[e]};
              font-size: ${n==="sm"?"0.875rem":n==="md"?"1rem":n==="lg"?"1.25rem":n==="xl"?"1.5rem":"1rem"};

              /* types are sm,md,lg,xl */
              padding: ${g[n].padding||"0.5rem 1rem"};
              cursor: pointer;
              border-radius: 5px;
              border: none;
              transition: all 0.3s ease-in-out;
              font-size: ${g[n].fontSize};
          }

          /* Hover */
          .button-${e}${i==="true"?"-ring":""}:hover {
              opacity: 0.9;
          }

          /* Focus */
          .button-${e}${i==="true"?"-ring":""}:focus {
              outline: none;
              ${i==="true"&&` box-shadow: 0 0 0 3px ${c[e+"Light"]};`}
             
          }

          
      `,document.head.appendChild(o),r.classList.add(`button-${e}${i==="true"?"-ring":""}`);let u=t.attributes;for(let s=0;s<u.length;s++){let{name:a,value:m}=u[s];a!=="component"&&a!=="variant"&&a!=="size"&&r.setAttribute(a,m)}}var l=document.querySelectorAll('themostbad[component="button"]');l&&l.forEach(t=>{x(t)});})();
