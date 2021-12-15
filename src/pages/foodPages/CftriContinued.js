import React, { useEffect } from 'react';
import { useHistory, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import ABOUTUS from '../../img/ABOUTUS.png'

export default function CftriContinued() {
    const history = useHistory();
    const onClickHome = (event) => {
        history.push("/");
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
                <img src={ABOUTUS} style={{ height: '155px', width: '100%' }} />
            </div>
            <div className="container" >
                <br></br>
                <div className="earlylife" >Central Food Technology Research Institute (CFTRI)(continued...)</div>
                <br></br>
                <div className="earlylifepara" >In his speech the Rajpramukh, the Maharaja of Mysore, observed that the importance of food cannot be over-emphasized in a poor under-nourished country like India. <font style={{ fontStyle: 'italic' }} >"This Institute"</font>, he observed, <font style={{ fontStyle: 'italic' }} >"is one amongst the many enterprises that are evidence of the innate constructive genius of our Nation. Our Government, since the advent of Swaraj, has been trying to liquidate the arrears of centuries in the matter of scientific, industrial and material progress. Think of the many research laboratories it has organized; of the many dams and reservoirs it has planned for the conservation of waters needed in our dry and droughty land; of the many power stations that are in the stage of planning or actually under construction for the improvement of the economic condition of our people; of the encouragement it has given to ship building; and of the many research laboratories -   pure and applied:  it is establishing all over the country and the stimulus and support it has given to research and creative activities."</font> Speaking of the conservative food habits of the people of India and how the people at large are apt to be reluctant to utilize new food products, he stressed the role of educated and upper strata of society in setting an example by be taking to such food products.</div>
                <br></br>
                <div className="earlylifepara" >Dr. S. S. Bhatnagar, in an illuminating address on the occasion, briefly traced  the circumstances leading to the establishment of the Institute, and observed, <font style={{ fontStyle: 'italic' }} >"Today's inauguration of this Institute is the first big step which the Government of India have taken to solve the food problem by the technological, as distinguished from the purely biological, methods. New food industries such as the manufacture of breakfast cereals and food yeast are being established in the country, and for their proper development, a Central Food Technological Research Institute is a real necessity."</font> He assured the gathering that within a year of its inauguration, the Institute will make distinct contributions towards the solution of food shortage in India. He paid a tribute   to the work of Dr. V. Subrahmanyan, who has worked zealously and hard to establish, as quickly as possible, this new aid to food industry.</div>
                <br></br>
                <div className="earlylifepara" >In his message Pandit Jawaharlal Nehru, the Prime Minister of India, referred to the scientific developments in the country during the past few years and said: "One of the remarkable developments in India, during the last three years, has been the opening of national laboratories and research institutes. We have put up some magnificent laboratories, not only impressive to look at, but I hope, the homes of productive effort and work. It is ultimately on the basis of work done in our research institutes and laboratories that we can progress in most directions. Thus far we have depended on other countries and have merely copied them or taken advantage of something that they have done. We cannot go far with this dependence. We have at least laid good and true foundations for scientific progress. It is for the young scientists of India to take advantage of the great opportunities   offered to them and thus help in building up the New India. "We have given top priority to the production of food grains or subsidiary foods. It is obvious that food is of the first importance and its value cannot be judged merely in money terms. We cannot depend on imports for our food and, therefore, we have laid down a target for food sufficiency.    This is the 1951-1952 season. In spite of all difficulties and disasters, we still adhere to that target and are trying to work up to it. We hope to succeed. It must always be remembered that food production has the highest priority. "How can science help in this? The primary responsibility is of our Department of Agriculture. Science can help in agriculture greatly. It can also help in various other processes. It is particularly with these other processes that this Institute will be concerned. I hope the work done in this Institute will bear fruit not in developments on paper and in scientific journals but in terms of human values and in increase of suitable food for our people."</div>
                <div className="earlylifepara" >The functions of the Central Food Technological Institute include:</div>
                <div className="earlylifepara" >
                    <ul style={{ color: "rgb(42, 42, 42)", listStyle: "disc outside", margin:"5px 0", paddingLeft:"3em" }} >
                        <li>Development of improved methods of storage; refrigeration, freezing, gas storage, dehydration, canning, etc; study of biochemical and microbiological changes accompanying spoilage; reclamation and utilization of infested or otherwise affected food materials;</li>
                        <li>Processing of food stuffs with a view to</li>
                        <li>Facilitating their ready usage, and</li>
                        <li>Improving their keeping quality; treatment of coarse materials to improve palatability, digestibility and food value; elimination of harmful and unpalatable ingredients from food materials;</li>
                        <li>Study of new and unfamiliar sources of food materials and processing of new materials to render them suitable for human consumption, emergency foods, survey of potential food resources in different regions.</li>
                        <li>Production of concentrated foods, vitamins and other food accessories, composite multi-purpose foods, supplementary foods, substitutes, etc.</li>
                        <li>Dietetics, design and demonstration of improved types of food preparations to suit the economic conditions and sentiments of people in different regions; studies on cooking utensils; improved cooking methods with a view to saving in labor and minimizing the consumption of fuel;</li>
                        <li>Study of problems relating to food industries; provision of technological information required by industry; survey of existing industries and their technical problems and collection of factual data for development of new industries; pilot plant trials;</li>
                        <li>Food sanitation, survey and advice on hygienic conditions for food industries;</li>
                        <li>Food adulteration; development of new methods of detection and quality control and food information; dissemination of general information on food and dietary problems through bulletins and technological reports.</li>
                    </ul>
                </div>
                <div className="earlylifepara" >The work of the Institute will be carried out through the following Divisions: Biochemistry and Nutrition, Processing, Storage and Preservation, Quality Control, Microbiology and Sanitation, Engineering, and Information and Statistics. A Division of Dietetics and a Section for Food Containers are also being organized. The Institute will soon have a staff of over 200, including 70 scientific workers.  As the activities develop, additional staff will be recruited. The Institute may also have to establish centers and regional laboratories which will work in close association with the Central Laboratory. The Institute is now in receipt of a recurring and capital grant aggregating to about Rs.  9 lakhs, but this is expected to increase steadily with the opening up of new Divisions and other activities" <Link to="/references" style={{ textDecoration: 'none', color: '#3819e9' }} >(5,6)</Link></div>
                <div className="earlylifepara" ><Link to="/references" style={{ textDecoration: 'none' }} ><font color="#3819e9">References</font></Link></div>
                <br></br>
                <div style={{ display: 'flex', justifyContent:'space-between' }} >
                    <div className="backbutton" ><Button size="small" onClick={onClickHome} >Back to Home</Button></div>
                    <div className="backbutton" ><Button size="small" onClick={onClickBack} >Back</Button></div>
                </div>
            </div>
        </>
    )
}