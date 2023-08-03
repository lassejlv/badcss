/* 
    @badcss/core v0.1.7 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license
    Github: https://github.com/lassejlv/badcss.git
*/
(()=>{function s(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var r=Math.random()*16|0,t=e==="x"?r:r&3|8;return t.toString(16)})}function x(e){let r=document.createElement("button");r.innerHTML=e.innerHTML,e.parentNode.replaceChild(r,e);let t=e.getAttribute("variant"),n=e.getAttribute("size");if(!["primary","secondary","danger","success","warning","info","dark","light"].includes(t))throw new Error(`Invalid variant ${t}`);let u={primary:"var(--primary)",secondary:"var(--secondary)",danger:"var(--danger)",success:"var(--success)",warning:"var(--warning)",info:"var(--info)",dark:"var(--dark)",light:"var(--light)"},d={sm:{padding:"0.25rem 0.5rem",fontSize:"0.75rem"},md:{padding:"0.5rem 1rem",fontSize:"0.875rem"},lg:{padding:"0.75rem 1rem",fontSize:"1rem"},xl:{padding:"1rem 1.5rem",fontSize:"1.125rem"}},o=document.createElement("style");o.setAttribute("data-id",s()),o.setAttribute("data-component-type","button"),o.innerHTML=`
        /*  
          "themostbad-css-framework" - Copyright \xA9 2023, Lasse Vestergaard
          MIT License - Free to use, modify, and distribute
          Compiled at: ${new Date().toISOString()}
          Compile ID: ${s()}
        */

          .button-${t} {
              color:  ${t==="light"?"var(--dark)":"var(--light)"};
              background-color: ${u[t]};
              font-size: ${n==="sm"?"0.875rem":n==="md"?"1rem":n==="lg"?"1.25rem":n==="xl"?"1.5rem":"1rem"};

              /* types are sm,md,lg,xl */
              padding: ${d[n].padding||"0.5rem 1rem"};
              cursor: pointer;
              border-radius: 5px;
              border: none;
              transition: all 0.3s ease-in-out;
              font-size: ${d[n].fontSize};
          }

          /* Hover */
          .button-${t}:hover {
              opacity: 0.9;
          }

          /* Focus */
          .button-${t}:focus {
              outline: none;
          }
      `,document.head.appendChild(o),r.classList.add(`button-${t}`);let m=e.attributes;for(let i=0;i<m.length;i++){let{name:a,value:l}=m[i];a!=="component"&&a!=="variant"&&a!=="size"&&r.setAttribute(a,l)}}var c=document.querySelectorAll('themostbad[component="button"]');c&&c.forEach(e=>{x(e)});})();
