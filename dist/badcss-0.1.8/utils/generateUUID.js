/* 
    @badcss/core v0.1.8 
    Copyright (c) 2022 Lasse Vestergaard 
    Licensed under the MIT license
    Github: https://github.com/lassejlv/badcss.git
*/
export function generateUUID(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){var x=Math.random()*16|0,n=r==="x"?x:x&3|8;return n.toString(16)})}
