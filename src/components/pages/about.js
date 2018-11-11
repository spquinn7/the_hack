import React from 'react';
import withWidth from 'material-ui/utils/withWidth';
import Playground from "../utility/playground"
import PaperEngine from "../automation/paperEngine"
import UMassAmherst from "../img/UMassAmherst_seal_black.svg"
import BikeCoop from "../img/bikeCoop.jpg"
import {grey900, grey500} from 'material-ui/styles/colors';


class AboutPage extends React.Component{

   datastore = () => {
      const array = [
         {
            cardHeaderTitle:<p>UMass Bike Coop<sup></sup></p>,
            zDepth:5,
            url:undefined,
            dialogTitle:
            <div style={{fontFamily: 'Georgia'}}>Who We Are
               <p style={{fontSize:12, marginTop:-15, marginBottom:-10}}>
                  UMass Bike <sup>coop.</sup> est. 1970's.<br/>
               </p>
            </div>,
            dialogBody:
            <p style={{marginTop:0}}>
            We are a group of students who collectively co-manage a bicycle repair shop on the UMass campus.  Together we provide lower labor rates and speedy turnaround times than larger bike shops.  Ride on by to learn more about our business!
            </p>,
         },
         {
            cardHeaderTitle:<p>the Product <sup>co.</sup></p>,
            zDepth:5,
            url:undefined,
            dialogTitle:
            <div style={{fontFamily: 'Georgia'}}>Developer's Note
               <p style={{fontSize:12, fontFamily: 'Georgia', marginTop:-15, marginBottom:-10}}>
                  the Product <sup>co.</sup> est. 2015.<br/>
               </p>
            </div>,
            dialogBody:
            <p style={{marginTop:0}}>
            the Product <sup>co.</sup> is built upon our unwavering belief of curiosity and design,
            both of which we believe are inextricably bound. Keeping these truths at bay, we will tirelessly seek
            to explore the avenues of code and algorithms through the elemental principles of design.
            </p>,
         },
         {
            cardHeaderTitle:<p>Location & Hours<sup></sup></p>,
            zDepth:5,
            url:undefined,
            dialogTitle:
            <div style={{fontFamily: 'Georgia'}}>Where We Are
               <p style={{fontSize:12, marginTop:-15, marginBottom:-10}}>
                  UMass Bike <sup>coop.</sup> est. 1970's.<br/>
               </p>
            </div>,
            dialogBody:
            <p style={{marginTop:0}}>
               <div style={{fontFamily: 'Georgia'}}>Location:<br/></div>
               102 Bartlett Hall, University of Massachusetts Amherst

               <div style={{fontFamily: 'Georgia'}}><br/>Hours:<br/></div>
               M - T 11am - 4pm
               

               <div style={{fontFamily: 'Georgia'}}><br/>Contact:<br/></div>
               <div>
               (413) 545 - 0647 or (205) 549 - "COOP"
               </div>

            </p>,
         },
      ]
      return array
   }

   stylePaper = ((row, i, bg, fg)=>{
      return {
         margin:10,
         color: fg,
         background:bg,
         headerBackground:bg,
         key:i,
         collection:[row],

      }
   })

   data = this.datastore()

   render(){
      return (
         <div>
            <Playground
               payload={
                  <div>
                     <h2 style={{color: grey900, fontWeight: '100', lineHeight: '22px', marginTop: 39}}>
                        Bike Coop
                        <div style={{fontFamily: 'Times', fontSize:12, color:grey500 }}>
                           A Publication of the Product <sup>co. </sup>
                        <span style={{fontSize:9}}>EST 2o15.</span>
                        </div>
                        <br/>
                     </h2>
                     <div style={{textAlign: 'center'}}>
                        {
                        [this.data[0]].map((row, i) => {
                              return <PaperEngine {...this.stylePaper(row, i, '#ffffff', '#000000')} src={ BikeCoop }></PaperEngine>
                        })}
                        {
                        [this.data[2]].map((row, i) => {
                              return <PaperEngine {...this.stylePaper(row, i, '#ffffff', '#000000')}  src={ UMassAmherst }></PaperEngine>
                        })}
                        {
                        [this.data[1]].map((row, i) => {
                              return <PaperEngine {...this.stylePaper(row, i, '#ffffff', '#000000')}  src={ 'https://www.thinkava.com/assets/images/map.svg' }></PaperEngine>
                        })}
                     </div>
                  </div>
               }

               maxWidth={900}
               />
         </div>
      )
   }
};


export default withWidth()(AboutPage);
