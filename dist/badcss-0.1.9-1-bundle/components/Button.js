/* 
    @badcss/core v0.1.9-1 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license
    Github: https://github.com/lassejlv/badcss.git
*/
(()=>{function c(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,r=t==="x"?e:e&3|8;return r.toString(16)})}function h(t){let e=document.createElement("button");e.innerHTML=t.innerHTML,t.parentNode.replaceChild(e,t);let r=t.getAttribute("variant"),n=t.getAttribute("size"),i=t.getAttribute("withRing"),a=t.getAttribute("color");if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(r))throw new Error(`Invalid variant ${r}`);let g={primary:"var(--primary)",primaryLight:"var(--primary-light)",secondary:"var(--secondary)",secondaryLight:"var(--secondary-light)",danger:"var(--danger)",dangerLight:"var(--danger-light)",success:"var(--success)",successLight:"var(--success-light)",warning:"var(--warning)",warningLight:"var(--warning-light)",info:"var(--info)",infoLight:"var(--info-light)",dark:"var(--dark)",darkLight:"var(--dark-light)",light:"var(--light)",lightLight:"var(--light-light)"},l={sm:{padding:"0.25rem 0.5rem",fontSize:"0.75rem"},md:{padding:"0.5rem 1rem",fontSize:"0.875rem"},lg:{padding:"0.75rem 1rem",fontSize:"1rem"},xl:{padding:"1rem 1.5rem",fontSize:"1.125rem"}},s=document.createElement("style");s.setAttribute("data-id",c()),s.setAttribute("data-component-type","button"),s.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${c()}
        */

          .button-${r}${i==="true"?"-ring":""} {
              color:  ${r==="light"?"var(--dark)":"var(--light)"};
              background-color: ${a?`var(--${a})`:g[r]};
              font-size: ${n==="sm"?"0.875rem":n==="md"?"1rem":n==="lg"?"1.25rem":n==="xl"?"1.5rem":"1rem"};

              /* types are sm,md,lg,xl */
              padding: ${l[n].padding||"0.5rem 1rem"};
              cursor: pointer;
              border-radius: 5px;
              border: none;
              transition: all 0.3s ease-in-out;
              font-size: ${l[n].fontSize};
          }

          /* Hover */
          .button-${r}${i==="true"?"-ring":""}:hover {
              opacity: 0.9;
          }

          /* Focus */
          .button-${r}${i==="true"?"-ring":""}:focus {
              outline: none;
              ${i==="true"&&` box-shadow: 0 0 0 3px ${a?`var(--${a}Light)`:g[r+"Light"]};`}
             
          }

          
      `,document.head.appendChild(s),e.classList.add(`button-${r}${i==="true"?"-ring":""}`);let u=t.attributes;for(let d=0;d<u.length;d++){let{name:o,value:x}=u[d];o!=="component"&&o!=="variant"&&o!=="size"&&o!=="withring"&&e.setAttribute(o,x)}}var m=document.querySelectorAll('themostbad[component="button"]');m&&m.forEach(t=>{h(t)});})();
