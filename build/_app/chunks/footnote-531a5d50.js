function e(){console.log("creating footnotes");var e=document.getElementsByClassName("footnote"),t=document.getElementsByClassName("notes");if(e.length>0)for(var n=t[0].getElementsByTagName("li"),a=0;a<e.length;a++){let t=e[a].getElementsByTagName("sup")[0].innerHTML;t=parseInt(t.replace(/^\D+/g,"")),t-=1;let s=document.createElement("span");s.classList.add("note"),s.innerHTML=n[t].innerHTML,e[a].append(s)}}export{e as c};