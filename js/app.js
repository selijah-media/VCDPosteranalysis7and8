const POSTERS=[["bolt","Bolt"],["shrek","Shrek"],["lorax","The Lorax"],["encanto","Encanto"],["luca","Luca"],["brave","Brave"],["grinch","The Grinch"],["hexed","Hexed"],["up","Up"],["snoopy","The Peanuts Movie"],["hoppers","Hoppers"],["wish","Wish"],["toy_story","Toy Story"],["moana_2","Moana 2"],["ice_age","Ice Age"]];
const $=(s,r=document)=>r.querySelector(s);
const grid=(rows)=>`<table class="chips">${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</table>`;
const stems=(rows)=>`<table class="stemtbl">${rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("")}</table>`;
const q=(t,rows,extra="")=>`<h3>${t}</h3>${extra}${grid(rows)}`;

function bar(){
 return `<div class="bar"><span class="brand">VCD Poster Analysis</span>
 <a class="btn" href="index.html">Home</a>
 ${document.body.dataset.page==="poster"?'<a class="btn blue" href="index.html#posters">Choose a different poster</a>':""}
 <a class="btn ghost" href="sample.html">Sample response</a>
 <a class="btn ghost" href="criteria.html">Criteria</a>
 ${document.body.dataset.page==="poster"?'<button class="btn" onclick="window.print()">Print this guide</button>':""}</div>`;
}

const ELEMENTS=`
<p>Choose the <b>3 most dominant design elements</b> you see in your poster.</p>
${grid([["Point","Line","Shape","Form"],["Tone","Texture","Colour","Type"]])}
<p class="note">Find the grid below for each of the 3 design elements you have chosen. Select the words carefully and use them together with your own words in a small paragraph on each element.</p>
${q("Point has been used to?",[["differentiate","define","separate","identify"],["emphasis","highlight","bulleted list","dot point"],["a map location","create texture","create pattern","other"]])}
${q("What kind of lines have been used?",[["straight","curvy","thin","thick","of consistent weight"],["flowing/wavy","rough/textured/fuzzy","horizontal","vertical","repetitive"],["opaque","precise","dotted/broken","delicate","other"]])}
${q("What kinds of shapes have been used?",[["geometric: squares, rectangles, circles, triangles","natural/organic","abstract","symbolic","common"],["feathered/soft edged","hard-edged","shape of texture","shape of tone","other"]])}
${q("What kinds of forms have been used?",[["abstract","geometric","natural/organic","soft-edged","hard-edged"],["free-form","common","cylindrical","cube","spherical"]])}
${q("What kind of tones have been used &amp; to what effect?",[["to create the illusion of form","to create depth","to create contrast","to create texture","to add variety"]])}
${q("What kind of textures have been used?",[["realistic","implied","natural","actual"],["sharp","smooth","bumpy","furry"],["prickly","rough","created by point, line, texture or tone","can create a pattern"]])}
${q("What kind of colours have been used &amp; to what effect?",[["primary","secondary","tertiary","complementary"],["harmonious","contrasting","warm","cool"],["monotone","dull","dark","dramatic"],["subdued","bright","vibrant","other"]])}
${q("What kind of Type/s have been used?",[["serif","sans serif","decorative","script"],["handwritten","bold/heavy","medium/regular","thin/light"],["italic","3D","condensed","other"]])}`;

const PRINCIPLES=`
<p>Choose the <b>3 most dominant design principles</b> you see in your poster.</p>
${grid([["Figure and ground","Balance","Contrast","Cropping"],["Hierarchy","Scale","Proportion","Pattern"]])}
<p class="note">Find the grid below for each of the 3 design principles you have chosen. Select the words carefully and use them together with your own words in a small paragraph on each principle.</p>
${q("How has figure and ground been established?",[["figure may also be known as ‘positive space’","ground can be known as ‘background’ or ‘negative space’","subtle","bold"],["visually dominant","visually recessive","creates emphasis through dominance","other"]],"<p class='note'>‘Figure’ refers to components that are more visually dominant than the ground on which they are placed.</p>")}
${q("How has balance been created?",[["asymmetrical (each side of the artwork is different)","symmetrical (each side of the artwork is similar)","aligned to the left","aligned to the right"],["is dynamic","creates harmony","is stable","centred"]])}
${q("How has the designer applied contrast?",[["to create hierarchy","opposite aesthetic qualities of all design elements","opposite aesthetic qualities of some design principles","other"],["to create emphasis","to create focal point","to create visual tension","to create interest"],["light/heavy","long/short","light/dark","centred/off-centred"],["fine/coarse","thick/thin","simple/complex","geometric/organic"]])}
${q("How has the designer used cropping?",[["cutting","framing","masking","to create emphasis"],["to create focal point","open composition, object extending beyond the field of the format","to create impact by showing an object larger than possible in scale","other"]])}
${q("How has the designer applied hierarchy?",[["order of importance of…","of some design elements","of some design principles","imagery"],["can establish a focal point","can draw the eye to key visual information","to communicate ideas &amp; information in a progressively diminishing order","other"]])}
${q("How has the designer applied scale?",[["relative size of 2 objects","of most design elements","to create hierarchy","to create depth"],["to create a focus","to create visual dominance","to be visually recessive","other"]])}
${q("How has the designer applied proportion?",[["ratio between at least 2 dimensions of an object","in proportion","out of proportion","other"]])}
${q("How has the designer applied pattern?",[["repetition: creates a sense of order","repetition: creates a relationship between similar elements","repetition: repetition of one component to create a visual unit"],["alternation: can create complex &amp; dynamic visuals","alternation: alternation of more than one component to create a visual unit","other"]])}`;

const MMM=`
<p>Various <b>methods</b>, <b>materials</b> and <b>media</b> will have been used in the design of the ‘VC’ and also in the production of the ‘VC’.</p>
<p class="note">In the grids provided you will find words to choose from to help you with your analysis. Select the words carefully and use them together with your own words. Write a small paragraph on each of the methods, materials and media.</p>
<h3>Method</h3>
<table><tr><td><b>Drawing</b><ul><li>manual freehand</li><li>digital freehand</li></ul></td><td><b>Painting</b></td><td><b>Printmaking</b><ul><li>lino</li><li>intaglio</li><li>silk screen</li></ul></td><td><b>Printing</b><ul><li>inkjet</li><li>laser</li><li>offset</li></ul></td></tr>
<tr><td><b>Photography</b><ul><li>manual</li><li>digital</li></ul></td><td><b>Digital image manipulation</b><ul><li>digital design</li><li>page layout</li></ul></td><td><b>Collage</b></td><td><b>3D process</b><ul><li>construction</li><li>modelling</li></ul></td></tr></table>
<h3>Media</h3>
<table><tr><th>MANUAL MEDIA</th><th>DIGITAL MEDIA</th><th>PROTOTYPING</th></tr>
<tr><td>Pencil, ink, fineliner, marker, pastel, crayon, charcoal, acrylic paint, watercolour paint, gouache paint, dye, toner, analogue film</td><td><b>Vector based programs</b> (e.g. Adobe Illustrator – lines and shapes), <b>raster based programs</b> (e.g. Adobe Photoshop – pixels), page layout &amp; composition programs, computer-aided design <b>CAD programs</b></td><td><ul><li>Manual</li><li>Digital</li></ul></td></tr></table>
<h3>Material</h3>
<table><tr><th>MANUAL MATERIALS</th><th>DIGITAL MATERIALS</th></tr><tr><td>Paper, card, wood, glass, metal, clay, stone, plastic, textile</td><td>Screen</td></tr></table>`;

const P1=`<h3>Introduce the Visual Communication (VC)</h3><ul><li>Introduce the VC you are analysing (movie poster, cereal packaging, album cover).</li></ul>
<div class="stem">The poster to be analysed is ____________ (title of poster).</div>
<h3>Client and communication need</h3><ul><li>Who is the client and what did they require? The designer would have begun by establishing the communication need with the client prior to starting the poster design, when establishing the brief.</li></ul>
<div class="stem">The client for this poster is ____________, the communication need was to ____________.</div>
<h3>Describe the visual appearance</h3>
<div class="stem">Its layout is ____________ (portrait/landscape).</div><div class="stem">In the poster I see ____________.</div>
<h3>Context of the poster (2 parts)</h3><ul><li><b>a) Carrier:</b> What is it found on? Bus stop, billboard, shelf, hanging, magazine etc.</li><li><b>b) Location:</b> Where would you find the poster?</li></ul>
<div class="stem">The context of this poster. The carrier would be ____________. The location of this poster would be ____________.</div>
<h3>Purpose of the poster</h3><ul><li>depict / advertise / promote / identify / inform / teach / guide</li></ul>
<img class="small" src="images/purposes-1.jpg" alt="Purposes of visual communications poster: advertise, promote, depict, teach, inform, identify, guide">
<div class="stem">The main purpose of the poster is to ____________, because in the poster I see ____________.</div>`;

const P2=`<img class="small" src="images/audience-1.jpg" alt="Audience characteristics: age, gender, socioeconomic status, interests, cultural background, location">
<ul><li>Discuss the characteristics of the target audience of the poster.</li><li>Include the terms age, gender, interest, socio-economic status (high/medium/low – disposable income), location (city/suburbs/rural areas) and cultural background to describe the audience.</li></ul>
${stems([["Age","The target audience is aged between ___ and ___ years old."],["Gender","The media product is aimed at ___ (males/females/all genders)."],["Interests","The target audience is interested in ___, ___ and ___."],["Socio-economic status","The target audience has a high / medium / low socio-economic status, meaning they generally have ___ disposable income (money available to spend after essential expenses)."],["Location","The target audience lives in ___ (city / suburban / rural areas), particularly ___."],["Cultural background","The target audience includes people from ___ cultural backgrounds. The media product may appeal to this audience because ___."]])}
<h3>How does the poster attract this audience?</h3>
<div class="stem">The poster attracts its target audience through the use of ____________ (elements and principles), which appeals to their ____________ (age, gender, interests, cultural background, etc.) because ____________.</div>`;

const P3=`<ul><li>Discuss the three most dominant design elements, and describe why.</li></ul>
<div class="stem">One dominant design element is ____________. This can be seen in ____________.</div>
<div class="stem">Another important design element is ____________, which has been used to ____________.</div>
<div class="stem">The third dominant design element is ____________. This helps to create ____________ because ____________.</div>${ELEMENTS}`;
const P4=`<ul><li>Discuss the three most dominant design principles, and describe why.</li></ul>
<div class="stem">One dominant design principle is ____________. This is demonstrated through ____________.</div>
<div class="stem">The designer has also used ____________ to draw attention to ____________.</div>
<div class="stem">A third design principle is ____________, which helps to create ____________ and makes the design more ____________.</div>${PRINCIPLES}`;
const P5=`<ul><li>Discuss how various methods, materials and media will have been used in the design of the ‘VC’ and also in the production and printing of the carrier in which the ‘VC’ appears.</li></ul>
${stems([["Methods (processes and techniques)","The designer may have used ____________ (e.g. drawing, digital design, photography) to create ____________."],["Materials (physical surfaces and substances)","The carrier appears to be made from ____________ (e.g. paper, cardboard, plastic), which is suitable because ____________."],["Media (tools and technologies)","The designer may have used ____________ (e.g. Adobe Illustrator, Photoshop, printer) to produce ____________."],["Production and printing","The final design may have been printed using ____________ onto ____________. This allows the visual communication to ____________."]])}${MMM}`;

function viewer(id,alt){
 return `<div class="left"><div class="zoom"><button id="zo" aria-label="Zoom out">−</button><span id="zl">100%</span><button id="zi" aria-label="Zoom in">+</button><button class="t" id="zr">Fit</button></div><div class="view" id="view"><img id="pimg" src="images/${id}.jpg" alt="${alt}"></div></div>`;
}
function zoomInit(){
 const img=$("#pimg"),v=$("#view");let z=1;
 const fit=()=>{const r=Math.min(v.clientWidth/img.naturalWidth,v.clientHeight/img.naturalHeight);img.style.width=img.naturalWidth*r*z+"px";img.style.height="auto";$("#zl").textContent=Math.round(z*100)+"%"};
 img.onload=fit;if(img.complete)fit();addEventListener("resize",fit);
 let d=null;v.onmousedown=e=>{d=[e.clientX,e.clientY,v.scrollLeft,v.scrollTop];v.style.cursor="grabbing"};addEventListener("mouseup",()=>{d=null;v.style.cursor=""});addEventListener("mousemove",e=>{if(d){v.scrollLeft=d[2]-(e.clientX-d[0]);v.scrollTop=d[3]-(e.clientY-d[1])}});
 $("#zi").onclick=()=>{z=Math.min(4,z+.25);fit()};$("#zo").onclick=()=>{z=Math.max(1,z-.25);fit()};$("#zr").onclick=()=>{z=1;fit();v.scrollTo(0,0)};
}
addEventListener("beforeprint",()=>document.querySelectorAll("details").forEach(d=>d.open=true));

const page=document.body.dataset.page;
document.body.insertAdjacentHTML("afterbegin",bar());
if(page==="home"){
 const t=$("#track");
 t.innerHTML=POSTERS.map(([id,n])=>`<a class="card" href="poster.html?p=${id}"><img src="images/${id}.jpg" alt="${n} movie poster"><h2>${n}</h2><span>Select this poster</span></a>`).join("");
 $("#prev").onclick=()=>t.scrollBy({left:-290,behavior:"smooth"});$("#next").onclick=()=>t.scrollBy({left:290,behavior:"smooth"});
}
if(page==="poster"){
 const id=new URLSearchParams(location.search).get("p");const p=POSTERS.find(x=>x[0]===id)||POSTERS[0];
 document.title=p[1]+" – Poster analysis";
 const secs=[P1,P2,P3,P4,P5];const TT=["Introduction", "Audience", "Design Elements", "Design Principles", "Methods, Media and Materials"];
 $("#app").innerHTML=viewer(p[0],p[1]+" movie poster")+`<div class="right"><h1>Analysing: ${p[1]}</h1><p class="sub">Select a paragraph number to open its writing guide. Handwrite your analysis using the sentence stems.</p>${secs.map((s,i)=>`<details><summary><span class="n">${i+1}</span>Paragraph ${i+1} – ${TT[i]}</summary><div class="body">${s}</div></details>`).join("")}</div>`;
 zoomInit();
}
if(page==="sample"){
 $("#app").innerHTML=viewer("powerpuff","The Powerpuff Girls Movie poster")+`<div class="right sample"><h1>Sample response: The Powerpuff Girls Movie</h1>
<h2>PARAGRAPH 1 – Introduction</h2>
<p>The <b>visual communication</b> to be analysed is a poster for the ‘Powerpuff Girls’ movie. Its <b>format</b> is portrait. The <b>context</b> of this VC would be the <b>carrier</b> as an A1 poster. The <b>location</b> of this poster would be found in the foyer of cinemas. The <b>client</b> is Warner Brothers, the <b>communication need</b> is that they required a poster design for the Powerpuff Girls movie.<br>The main <b>purpose</b> for this poster is to <b>promote</b> the movie as the name of the movie and the Powerpuff girls are <b>depicted</b> on the poster to encourage young children to watch this movie. Cartoon Network and Warner Brothers movie studios are also <b>promoted</b> as their logos are <b>depicted</b> at the bottom of the poster.</p>
<p>The poster depicts the three main Powerpuff Girl characters from the movie. They are colourful in the centre of the poster, there is an evil character hiding behind them. Behind them I see blue and black city buildings in the night sky which forms the <b>ground</b>. The message they are trying to send their audience is that it’s hinting that there is going to be a battle because of the evil character hiding behind them and the moody sky.</p>
<h2>PARAGRAPH 2 – Audience</h2>
<p>The <span class="blue">age</span> of the target audience is 5-12 because it has a classification of ‘G’ for The Powerpuff Girls. The <span class="blue">gender</span> would be both males &amp; females but mainly girls because the main characters are girls fighting crime. This movie is meant for children <span class="blue">interested</span> in fighting crime, adventure and teamwork. The <span class="blue">location of the audience</span> would be city, suburbs and large country towns where the movie is showing at cinemas. The <span class="blue">socio-economic status</span> of the audience would be medium to high as tickets sell in this price range. The <span class="blue">cultural background</span> status of the audience would be non-specific as children from all cultural groups would enjoy this movie. This poster attracts and maintains the audience’s attention by it’s strong colour &amp; imagery of the 3 main characters &amp; its city location. The crime theme of the movie, which is solved by The Powerpuff Girls also makes it exciting.</p>
<h2>PARAGRAPH 3 – Design Elements</h2>
<p>The three most dominant <b>design elements</b> displayed in the poster are <b>colour</b>, <b>shape</b> and <b>type</b>.<br><b>Colour</b> is the most dominant. When I first saw the poster it directed me straight to Blossom, since she is the leader of the group as she is larger, wearing a bright pink dress with red ears and orange hair that are warm advancing colours that make her contrast and stand out from the cooler receding colours worn by the other two girls wearing blue and green. The <b>ground</b> behind the girls is purple and blue in the city building in the night sky, they are also cooler receding colours. The type is also a bright pink &amp; lime green which are light &amp; bright &amp; pop out of the composition attracting the target audience’s attention.</p>
<p>The <b>shapes</b> seen in this poster are hard-edged and show stylized simplified shapes of the girls with exaggerated features that are out of proportion to real children. We also see geometric common shapes of the building and the curved floor the girls are standing on and the decorative swirls behind them, which are Mojo Jojo’s cape. This variety creates visual interest and attracts the audience.</p>
<p>The <b>type</b> is all sans serif which creates a contemporary feel to the poster. The title of the movie is decorative, bold and the largest scale to attract the most attention to the audience. The rest of the type is in a range of scales and thickness to create a hierarchy of importance for the information to the audience. This attracts the audience to the most important information first and also creates visual interest for the audience.</p>
<h2>PARAGRAPH 4 – Design Principles</h2>
<p>The three most dominant <b>design principles</b> in the advertisement are <b>contrast</b>, <b>cropping</b> and <b>scale</b>.<br><b>Contrast</b> is displayed in the advertisement using colour as there is a difference between warm and cool colours such as the warm bright pink dress worn by Blossom and her red ears and orange hair and the cooler receding colours worn by the other two girls wearing blue and green, tones such as black and white used widely in the poster, the shapes are stylised and geometric and the scale is large and small. The variety of dramatic contrast creates visual interest for the audience and maintains their attention.</p>
<p><b>Scale</b> is seen with the main characters and the villain scaled up to create visual dominance against the smaller-scaled buildings in the ground. This is also seen in the different scaled type to create a hierarchy of importance for the information to the audience.</p>
<p><b>Cropping</b> is seen in the ground with the city buildings and the night sky. If you look at the image, there is more on the outside but it’s been cropped since you can’t see the whole set. This creates a sense of mystery and intrigue for what else might be out there.</p>
<h2>PARAGRAPH 5 – Methods, Media and Materials</h2>
<p>The <span class="purp">methods</span> used to design and produce this poster are <span class="purp">digital image manipulation</span> in the form of <span class="purp">design</span> for the character designs and <span class="purp">layout</span> of the poster &amp; including the ground and placement of the characters and type. The <span class="purp">method printing</span> would be used if the poster was printed &amp; displayed in the foyer of a cinema.<br>The <span class="grn">media</span> used to design and produce this poster are <span class="grn">digital media</span>. A <span class="grn">vector program</span> such as Adobe Illustrator was used for the characters, ground, type and <span class="grn">ink</span> to print the final design if it was printed on the material paper &amp; displayed in the foyer of a cinema.<br>The <span class="red">materials</span> used to design and produce this poster are <span class="red">digital materials</span> of the computer <span class="red">screen</span> when designing the poster.<br>The completed poster design would be found online on the <span class="red">screen</span> of a digital device or on the material <span class="red">paper</span> if displayed in the foyer of a cinema.</p>
<p>The Designer used these methods, media and materials to give a high-quality professional finish to the design task requested by the client.</p></div>`;
 zoomInit();
}
