function e(){console.log("creating footnotes");var e=document.getElementsByClassName("footnote"),t=document.getElementsByClassName("notes"),n=document.getElementsByClassName("note");if(n.length>0)for(var o=0;o<n.length;o++)console.log(n[o]);if(e.length>0){var s=t[0].getElementsByTagName("li");for(o=0;o<e.length;o++){let t=parseInt(e[o].getElementsByTagName("sup")[0].innerHTML);t-=1;let n=document.createElement("span");n.classList.add("note"),n.innerHTML=s[t].innerHTML,e[o].append(n)}}}export{e as c};