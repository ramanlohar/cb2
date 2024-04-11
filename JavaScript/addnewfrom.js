let form = document.querySelector("form");
let addnew = document.getElementById("addnew");

addnew.addEventListener("click", (event) => {
  event.preventDefault();
  let newdiv = document.createElement("div");
  newdiv.innerHTML = `    <h2>भुगतान पक्ष</h2>
    <!-- <div class="f-div">
    <label for="bahiSNo">S.no</label>
    <input type="number" id="bahiSNo">
</div> -->
    <div class="rashi-cantainer">

        <div class="f-div">
            <label for="bahiAKMMKP">खाता पन्ना</label>
            <input type="number" id="bahiAKMMKP">
        </div>
        <div class="f-div">
            <label for="epono">E.P.O No.</label>
            <input type="number" id="epono">
        </div>
    </div>

    <div class="select-byore">

        <label for="" class="_17px">व्यय के ब्योरे</label>

        <div class="f-div">
            <label for="bselectOptions1">वेंडर का नाम</label>
            <select id="bselectOptions1">
                <option value=" ">विकल्प चुनें</option>
                <option value="other">अन्य</option>
            </select>
        </div>
        <div class="f-div flexc byore">
            <label for="bahibillno">बिल क्रमांक</label>
            <input type="text" id="bahibillno">
        </div>
        <div class="f-div">
            <label for="bselectOptions2">कार्य का नाम</label>
            <select id="bselectOptions2">
                <option value=" ">विकल्प चुनें</option>
                <option value="other">अन्य</option>
            </select>
        </div>

        <div class="f-div">
            <label for="bselectOptions3">भुगतान प्रकार</label>
            <select id="bselectOptions3">
                <option value="पीआरडी पोर्टल">पीआरडी पोर्टल</option>
                <option value="ई ग्रामस्वराज पोर्टल">ई ग्रामस्वराज पोर्टल</option>
                <option value="नगद">नगद राशि</option>
            </select>
        </div>
    </div>

    <div class="rashi-cantainer">

        <div class="f-div">
            <label for="bahiNagadRashi">नगद राशि</label>
            <input type="text" id="bahiNagadRashi">
        </div>
        <div class="f-div">
            <label for="bahiBankRashi">बैंक राशि</label>
            <input type="text" id="bahiBankRashi">
        </div>
    </div>
    <!-- <div class="f-div flexc byore">
        <label for="bahiBajtLs">बजट लेखा शीर्ष</label>
        <input type="text" id="bahiBajtLs">
    </div> -->

    <div class="f-div">
        <label for="bahiBajtLs">बजट लेखा शीर्ष</label>
        <select id="bahiBajtLs">
            <option value="">विकल्प चुनें</option>
            <option value="15 वा वित्त">15 वा वित्त</option>
            <option value="14 वा वित्त">14 वा वित्त</option>
            <option value="विधायक निधि">विधायक निधि</option>
            <option value="सांसद निधि">सांसद निधि</option>
            <option value="संबंल योजना">संबंल योजना</option>
            <option value="बैंक ब्याज">बैंक ब्याज</option>
            <option value="ग्राम पंचायत निधि">ग्राम पंचायत निधि</option>


            <option value="जिला पंचायत निधि">जिला पंचायत निधि</option>

            <option value="जनपद पंचायत निधि">जनपद पंचायत निधि</option>
            <option value="एस.बी.एम">एस.बी.एम</option>
            <option value="जल कर">जल कर</option>
            <option value="प्रकाश कर">प्रकाश कर</option>
            <option value="भवन कर">भवन कर</option>
            <option value="सफ़ाई कर">सफ़ाई कर</option>
            <option value="बाज़ार शुल्क">बाज़ार शुल्क</option>
            <option value="पशुहाट नीलामी">पशुहाट नीलामी</option>
            <!-- <option value="other">अन्य मद</option>                     -->
        </select>
    </div>`;
  form.insertBefore(newdiv, addnew);

  loadoptions();
  addchange();
});
