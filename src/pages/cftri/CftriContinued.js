import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import homenew from '../../img/homenew.png'

export default function CftriContinued() {
    const history = useHistory();
    const onClickNext = (event) => {
        history.push("/development-amul-food");
    }
    const onClickBack = (event) => {
        history.push("/cftri");
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className="headerimg">
                <img src={homenew} style={{ height: '155px', width: '100%' }} />
            </div>
            <div className="container" >
                <br></br>
                <div className="earlylife" >Central Food Technology Research Institute (CFTRI)(continued...)</div>
                <br></br>
                <div className="earlylifepara" >“In his speech the Rajpramukh, the Maharaja of Mysore, observed that the importance of food cannot be over-emphasized in a poor under-nourished country like India." “This Institute” he observed, " is one amongst the many enterprises that are evidence of the innate constructive genius of our Nation. Our Government, since the advent of Swaraj, has been trying to liquidate the arrears of centuries in the matter of scientific, industrial and material progress. Think of the many research laboratories it has organized; of the many dams and reservoirs it has planned for the conservation of waters needed in our dry and droughty land; of the many power stations that are in the stage of planning or actually under construction for the improvement of the economic condition of our people; of the encouragement it has given to ship building; and of the many research laboratories -   pure and applied:  it is establishing all over the country and the stimulus and support it has given to research and creative activities." The Rajpramukh felt that the educated and the well to do would have to set an example in endorsing new food products.</div>
                <br></br>
                <div className="earlylifepara" >Dr. S. S. Bhatnagar in his address, briefly traced the circumstances leading to the establishment of the Institute, and observed, "To¬day's inauguration of this Institute is the first big step which the Government of India have taken to solve the food problem by the technological, as distinguished from the purely biological, methods. New food industries such as the manufacture of break¬fast cereals and food yeast are being established in the country, and for their proper development, a Central Food Technological Research Institute is a real necessity." He expressed confidence that the Institute would soon contribute to the food and nutritional well being of the populace. He paid a tribute   to the work of Dr. V. Subrahmanyan, who had worked hard to help the food industry.</div>
                <br></br>
                <div className="earlylifepara" >In his message Pandit Jawaharlal Nehru, the Prime Minister of India, referred to the scientific developments in the country during the past few years and said: “One of the remarkable developments in India, during the last three years, has been the opening of national laboratories and research institutes. We have put up some magnificent laboratories, not only impressive to look at, but I hope, the homes of productive effort and work. It is ultimately on the basis of work done in our research institutes and laboratories that we can progress in most directions. Thus far we have depended on other countries and have merely copied them or taken advantage of something that they have done. We cannot go far with this dependence. We have at least laid good and true founda¬tions for scientific progress. It is for the young scientists of India to take advantage of the great opportunities   offered to them and thus help in building up the New India. "We have given top priority to the production of food grains or subsidiary foods. It is obvious that food is of the first importance and its value cannot be judged merely in money terms. We cannot depend on imports for our food and, therefore, we have laid down a target for food sufficiency.    This is the 1951-1952 season. In spite of all difficulties and disasters, we still adhere to that target and are trying to work up to it. We hope to succeed. It must always be remembered that food production has the highest priority. “How can science help in this? The primary responsibility is of our Department of Agriculture. Science can help in agriculture greatly. It can also help in various other processes. It is particularly with these other processes that this Institute will be concerned. I hope the work done in this Institute will bear fruit not in developments on paper and in scientific journals but in terms of human values and in increase of suitable food for our people."</div>
                <div className="earlylifepara" >The functions of the Central Food Technological Institute include:</div>
                <div className="earlylifepara" >
                    <ul style={{ color: "rgb(42, 42, 42)", listStyle: "disc outside", margin:"5px 0", paddingLeft:"3em" }} >
                        <li>Development of improved methods of storage; refrigeration, freezing, gas storage, dehydration, canning, etc; study of biochemical and microbiological changes accompanying spoilage; reclamation and utilization of infested or otherwise affected food materials;</li>
                        <li>Processing of food stuffs with a view to</li>
                        <div>1. Facilitating their ready usage, and</div>
                        <div>2. Improving their keeping quality; treatment of coarse materials to improve palatability, digestibility and food value; elimination of harmful and unpalatable ingredients from food materials;</div>
                        <li>Study of new and unfamiliar sources of food materials and processing of new materials to render them suitable for human consumption, emergency foods, survey of potential food resources in different regions.</li>
                        <li>Production of concentrated foods, vitamins and other food accessories, composite multi-purpose foods, supplementary foods, substitutes, etc.</li>
                        <li>Dietetics, design and demonstration of improved types of food preparations to suit the economic conditions and sentiments of people in different regions; studies on cooking utensils; improved cooking methods with a view to saving in labor and minimizing the consumption of fuel;</li>
                        <li>Study of problems relating to food industries; provision of technological information required by industry; survey of existing industries and their technical problems and collection of factual data for development of new industries; pilot plant trials;</li>
                        <li>Food sanitation, survey and advice on hygienic conditions for food industries;</li>
                        <li>Food adulteration; development of new methods of detection and quality control and food information; dissemination of general information on food and dietary problems through bulletins and technological reports.</li>
                    </ul>
                </div>
                <div className="earlylifepara" >The work of the Institute will be carried out through the following Divisions: Biochemistry and Nutrition, Processing, Storage and Preservation, Quality Control, Microbiology and Sanitation, Engineering, and Information and Statistics. A Division of Dietetics and a Section for Food Containers are also being organized. The Institute will soon have a staff of over 200, including 70 scientific workers.  As the activities develop, additional staff will be recruited. The Institute may also have to establish centers and regional laboratories which will work in close association with the Central Laboratory. The Institute is now in receipt of a recurring and capital grant aggregating to about Rs.  9 lakhs, but this is expected to increase steadily with the opening up of new Divisions and other activities" (5,6)</div>
                <br></br>
                <div className="earlylife" style={{ fontSize: 'large' }} >References</div>
                <br></br>
                <div className='referencepara'> (1) Bhima Rao, C.N. (1980) Prof. V.Subrahmanyan-Some personal reminiscences. Journal of Food Science and Technology.17:121-123. (2) Mysore Information Bulletin (1948) Prime Minister of India visits Mysore: Vol 11 ,457-459. (3)3. Mysore Information Bulletin (1949) International Forestry conference. 12, 75-76.8. (4). K.C. Reddy in Chief Ministers Speak: Being resumes of the activities of the Governments central and state during the three years 1947-1950. All India Congress Committee, New Delhi. (5) The Central Food Technological Research Institute, Mysore. Opening Ceremony , Oct 21, 1950. (1950) Journal of Scientific and Industrial Research  9.439-441.(6) Mysore Information Bulletin (1950), Fervent Efforts to fight food crisis 13, 396-402. </div>
                <br></br>
                <div style={{ display: 'flex', justifyContent:'space-between' }} >
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickNext} >Next</Button></div>
                </div>
            </div>
        </>
    )
}