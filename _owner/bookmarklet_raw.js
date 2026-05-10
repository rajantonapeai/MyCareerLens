// MyCareerLens Owner Stats Bookmarklet (readable source)
// This is the human-readable version. The actual bookmarklet uses a
// minified version (see bookmarklet_oneline.txt or install_bookmarklet.html).

(async()=>{
  const NS="mycareerlens-prod";
  const u=k=>"https://abacus.jasoncameron.dev/get/"+NS+"/"+k;
  const f=async k=>{try{const r=await fetch(u(k));if(r.status===404)return 0;if(!r.ok)return null;const d=await r.json();return typeof d.value==="number"?d.value:null;}catch(e){return null;}};
  const [v,s,c]=await Promise.all([f("visits"),f("starts"),f("completions")]);
  const N=n=>n===null?"(unavailable)":n.toLocaleString("en-IN");
  const P=(a,b)=>(a===null||b===null||b===0)?"—":((a/b)*100).toFixed(1)+"%";
  const dB=(v!==null&&s!==null)?Math.max(0,v-s):null;
  const dM=(s!==null&&c!==null)?Math.max(0,s-c):null;
  alert("MyCareerLens — Owner Stats\n"
    +"Generated: "+new Date().toLocaleString("en-IN")+"\n\n"
    +"Visits:                  "+N(v)+"\n"
    +"Starts:                  "+N(s)+"\n"
    +"Completions:             "+N(c)+"\n\n"
    +"Drop-off before start:   "+N(dB)+" ("+P(dB,v)+")\n"
    +"Drop-off mid-assessment: "+N(dM)+" ("+P(dM,s)+")\n\n"
    +"Completion rate: "+P(c,v)+" of visits, "+P(c,s)+" of starters");
})();
