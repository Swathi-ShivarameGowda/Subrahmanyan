import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import stjoseph from '../../../img/stjoseph.jpg'

export default function Tapioca() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
    }

    return (
        <>
            <div style={{
                backgroundImage: "url(" + stjoseph + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '155px'
            }} />
            <div className="container" >
                <br></br>
                <div className="earlylife" >Tapioca/Cassava</div>
                <br></br>
                <div className="earlylifepara" >Dr Subrahmanyan hastened to the work of fitting out two laboratory rooms, the library, the stores and the animal house. The research assistants on the schemes under his charge, sponsored by the ICMR and CSIR, now transferred over to the new Institute from the IISc., Bangalore, and a few new appointees formed the task force for this purpose. This work was completed in the next six months and by mid1949 research on projects was resumed. A new project for the preparation of rice-like grains by processing an admixture of tapioca flour and groundnut cake flour started.</div>
                <br></br>
                <div className="earlylifepara" >Although it would be true indeed to say that a good many of the research projects and developmental schemes at the CFTRI during Dr Subrahmanyan's regime as Director either stemmed from his original ideas or suggestions or progressed and came to fruition through his stimulating encouragement, only the few major developments in which he was directly and intimately involved could be mentioned here. The work on 'Soya bean Milk' and on 'Groundnut Milk' which was completed at the initial stage of formation of the CFTRI touched off some other novel ideas with regard to the processing of oilseed cakes into food products. They were now thought of as good sources for the protein enrichment of tuber starches. Preparation of rice-like grains (synthetic rice!) from judicious blends of extracted groundnut flour and tapioca flour was standardized. The protein content of such simulated grains could be controlled and they could be fortified with vitamins. Such nutritionally enriched products were produced on a large-scale and their consumer acceptability established by trials on large population groups in the State of Kerala and other states in South India. Such preparations were found to be efficacious in the clinical treatment of cases of protein malnutrition (Kwashiorkor) in therapeutic trials in hospitals. Macaroni type of products could also be made out of such blends.</div>
                <br></br>
                <div className="earlylifepara" >Tuber utilisation for stretching foodgrain supplies was an area dear to Dr. Subrahmanyan. A series of products such as Atta-tapioca flour blends, grain substitutes based on wheat and tapioca, and macaroni products from tapioca, were developed and produced at CFTRI for advising.</div>
                <br></br>
                <div className="earlylifepara" >A pilot plant was established soon after the CFTRI began to function for up-scaling the laboratory level processes. Initial success in the production of protein isolate, baby food, Multipurpose food, groundnut curd and tapioca macaroni provided the confidence for the design and fabrication of citrus juice extractor, mini mills for paddy, maize, sorghum and pulses, production units for Energy foods, chitosan, pectin, spice oils and oleoresin for under taking food engineering consultancy services.</div>
                <br></br>
                <div className="earlylifepara" >Enriched macaroni products: Macaroni products can be cooked and consumed in the same way as rice. Two types of enriched macaroni products- (i) enriched tapioca macaroni and (ii) enriched wheat macaroni have been prepared and their supplementary value to poor cereal diets studied with albino rats and children. The results are briefly described below: Enriched tapioca macroni: This has been prepared in the form of rice shaped grains from a blend of groundnut flour (30 per cent), wheat flour (30 per cent) and tapioca flour (40 per cent). This product was fortified with vitamin A and D, riboflavin and calcium carbonate. It cooks readily in 5 min and the cooked product can be consumed in the same way as cooked rice. It contains about 2 to 3 times as much protein and 3 to 6 times as much B-vitamins as compared with raw milled rice.</div>
                <div className="earlylifepara" >It is a rich source of calcium in which rice is deficient. Studies with albino rats showed that when fed as sole source of nutrients enriched tapioca macaroni promoted good growth in albino rats (16.4 g/week), comparing well with that obtained on stock diet16. When a poor rice diet was supplemented with 50 g of enriched tapioca macaroni, the diet promoted significantly higher growth in weaned infants and pre-school children as compared with the control rice diet17 in a period of 6 months</div>
                <br></br><br></br>
                <Button size="small" style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'darkblue', width: '155px', height: '35px' }} onClick={onClickHome} >Back to Home</Button>
            </div>
        </>
    )
}