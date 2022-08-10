import { DescList } from "./DescList/DescList"
import { HeaderCaption } from "./HeaderCaption/HeaderCaption"
export default function PrivacyPolicy(){
    const summarylist=[
        {
            "dtermheader":"What personal information do we process? ",
            "dterm":"When you visit, use, or navigate our Services, we may process personal information depending on how you interact with DEVE and the Services, the choices you make, and the products and features you use."
        },
        {
            "dtermheader":"Do we process any sensitive personal information?",
            "dterm":"We do not process sensitive personal information."
        },
        {
            "dtermheader":"Do we receive any information from third parties?  ",
            "dterm":"We do not receive any information from third parties."
        },
        {
            "dtermheader":"How do we process your information? ",
            "dterm":" We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so."
        },
        {
            "dtermheader":"In what situations and with which parties do we share personal information?",
            "dterm":"We may share information in specific situations and with specific third parties."
        },
        {
            "dtermheader":"How do we keep your information safe? ",
            "dterm":"We have organisationals and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorises third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. "
        },
        {
            "dtermheader":"What are your rights?",
            "dterm":"Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information."
        },
        {
            "dtermheader":"How do you exercise your rights?",
            "dterm":"contacting us. We will consider and act upon any request in accordance with applicable data protection laws."
        },



    ]
    const content_tbl=[
        'WHAT INFORMATION DO WE COLLECT?',
        'HOW DO WE PROCESS YOUR INFORMATION?',
        'WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?',
        'WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?',
        'WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?',
        'DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?',
        'HOW LONG DO WE KEEP YOUR INFORMATION?',
        'HOW DO WE KEEP YOUR INFORMATION SAFE?',
        'WHAT ARE YOUR PRIVACY RIGHTS?',
        'CONTROLS FOR DO-NOT-TRACK FEATURES',
        'DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?',
        'DO WE MAKE UPDATES TO THIS NOTICE?',
        'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?',
        'HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?'
    ]
    const info_collected=[
        "Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called 'crash dumps'), and hardware settings). ",
        "Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information. ",
        "Location Data. We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services. "
    ]
    const process_info=[
        {
            'header':'To facilitate account creation and authentication and otherwise manage user accounts.',
            'def':'We may process your information so you can create and log in to your account, as well as keep your account in working order.'
        },
        {
            'header':'To request feedback.',
            'def':'We may process your information when necessary to request feedback and to contact you about your use of our Services.'
        },
        {
            'header':'To send you marketing and promotional communications.',
            'def':'We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time.'
        },
        {
            'header':'To deliver targeted advertising to you. ',
            'def':'We may process your information to develop and display personalised content and advertising tailored to your interests, location, and more.'
        },
        {
            'header':'To protect our Services.',
            'def':'We may process your information as part of our efforts to keep our Services safe and secure, including fraud monitoring and prevention.'
        },
        {
            'header':'To identify usage trends. ',
            'def':'We may process information about how you use our Services to better understand how they are being used so we can improve them.'
        },
        {
            'header':'To determine the effectiveness of our marketing and promotional campaigns.',
            'def':'We may process your information to better understand how to provide marketing and promotional campaigns that are most relevant to you.'
        },
        {
            'header':"To save or protect an individual's vital interest. ",
            'def':'We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm. '
        },

    ]
    const legitimate_interests=[
       'Send users information about special offers and discounts on our products and services ',
       'Develop and display personalised and relevant advertising content for our users ',
       'Analyse how our services are used so we can improve them to engage and retain users ',
       'Support our marketing activities ',
       'Diagnose problems and/or prevent fraudulent activities ',
       'Understand how our users use our products and services so we can improve user experience ',
       

    ]
    const canada_process=[
        'If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way ',
        'For investigations and fraud detection and prevention ',
        'For business transactions provided certain conditions are met ',
        'If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim ',
        'For identifying injured, ill, or deceased persons and communicating with next of kin ',
        'If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse ',
        'If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province ',
        'If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records ',
        'If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced ',
        'If the collection is solely for journalistic, artistic, or literary purposes ',
        'If the information is publicly available and is specified by the regulations '
    ]
    return(
        <>
        <div className="container mt-5 ">
            <h5>RIVACY NOTICE</h5>
            <h5 className="text-muted">Last updated August 08, 2022 </h5>
            <DescList dtermheader=" " dterm="This privacy notice for Develocity Finance Technology Company (doing business as DEVE) ('DEVE', 'we', 'us', or 'our',), describes how and why we might collect, store, use, and/or share ('process') your information when you use our services ('Services'), such as when you"
               ddata={['Visit our website at https://develocity.finance, or any website of ours that links to this privacy notice.','Engage with us in other related ways, including any sales, marketing, or events.']}
               stylingobj={{"marginTop":"40px"}}
               />
            <DescList dtermheader="Questions or concerns?" dterm="Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at info@develocity.finance." ddata={[]}
               stylingobj={{"marginTop":"10px"}}
              />
           
            {/*summery part  */}
            <div>
                <h2 className="mb-4">SUMMARY OF KEY POINTS.</h2>
                {
                    summarylist.map((item)=>(
                        <DescList dtermheader={item.dtermheader} dterm={item.dterm} ddata={[]} stylingobj={{"marginTop":"15px"}}/>
                    ) )
                }
            </div>
            {/* table of content */}
            <div>
                <h2>TABLE OF CONTENTS </h2>
                <ol>
                    {
                        content_tbl.map( (item,index)=>(
                            <li key={index}>{item}</li>
                        ) )
                    }
                </ol>
            </div>
            {/* explain table of content */}
            <div>
                <h2 className="text-muted">1. WHAT INFORMATION DO WE COLLECT? </h2>
                <HeaderCaption data="Personal information you disclose to us  "/>
                <DescList dtermheader="In Short: " dterm="We collect personal information that you provide to us." ddata={[]}
               stylingobj={{"marginTop":"15px"}}
               />
                <DescList dtermheader="" dterm="We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us." ddata={[]}
               stylingobj={{"marginTop":"15px"}}
               />
               
               <DescList dtermheader="Personal Information Provided by You. " dterm="The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:"
               ddata={['email addresses','names','contact preferences','contact or authentication data ']}
               stylingobj={{"marginTop":"40px"}}
               />

                <DescList dtermheader="Sensitive Information. " dterm="We do not process sensitive information."
               ddata={[]}
               stylingobj={{"marginTop":"15px"}}
               />

                <DescList dtermheader="Payment Data." dterm="We may collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by AlchemyPAy. You may find their privacy notice link(s) here: https://alchemypay.org/privacy-policy/."
               ddata={[]}
               stylingobj={{"marginTop":"40px"}}
               />
               
               <DescList dtermheader="" dterm="Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services."
               ddata={[]}
               stylingobj={{"marginTop":"40px"}}
               />
              
              <HeaderCaption data="Information automatically collected"/>
              <DescList dtermheader="In Short: " dterm="We collect personal information that you provide to us." ddata={[]}
               stylingobj={{"marginTop":"15px"}}
               />
                 <DescList dtermheader="" dterm="We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes. " ddata={[]}
               stylingobj={{"marginTop":"15px"}}
               />
                 <DescList dtermheader="" dterm="Like many businesses, we also collect information through cookies and similar technologies." ddata={[]}
               stylingobj={{"marginTop":"40px"}}
               />
             <DescList dtermheader="" dterm="The information we collect includes: "
             
             ddata={info_collected}
               stylingobj={{"marginTop":"40px"}}
               />
               
               
            </div>
            {/* two */}
            <div>
                <h2 className="text-muted">2. HOW DO WE PROCESS YOUR INFORMATION? </h2>
               
                <DescList dtermheader="In Short: " dterm="We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent." ddata={[]}
               stylingobj={{"marginTop":"15px"}}
               />
                <DescList dtermheader="We process your personal information for a variety of reasons, depending on how you interact with our Services, including:" dterm="" 
                ddata={[]}
               stylingobj={{"marginTop":"15px"}}
               />
               <ul>
                {
                    process_info.map((item,index)=>(
                        <li key={index}><DescList dtermheader={item.header} dterm={item.def} 
                        ddata={[]}
                       stylingobj={{"marginTop":"15px"}} /></li>
                    ) )
                }
               </ul>               
            </div>
            {/* three */}
            <div>
                <h2 className="text-muted">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION? </h2>
               
                <DescList dtermheader="In Short: " dterm="We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e. legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfil our contractual obligations, to protect your rights, or to fulfil our legitimate business interests." ddata={[]}
               stylingobj={{"marginTop":"15px"}}
               />
               <p className="text-decoration-underline">If you are located in the EU or UK, this section applies to you. </p>
                <DescList dterm="The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information: " dtermheader="" 
                ddata={[]}
               stylingobj={{"marginTop":"15px"}}
               />
               <ul>
                <li><DescList dtermheader="Consent" dterm="We may process your information if you have given us permission (i.e. consent) to use your personal information for a specific purpose. You can withdraw your consent at any time." 
                        ddata={[]}
                       stylingobj={{"marginTop":"15px"}} />
                       </li>
                <li>
                <DescList dtermheader="Legitimate Interests." dterm="We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:" 
                        ddata={legitimate_interests}
                       stylingobj={{"marginTop":"15px"}} />
                </li>
                <li><DescList dtermheader="Legal Obligations." dterm="We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved." 
                        ddata={[]}
                       stylingobj={{"marginTop":"15px"}} />
                </li>
                <li>
                <DescList dtermheader="Vital Interests."  dterm=" We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person."
                        ddata={[]}
                       stylingobj={{"marginTop":"15px"}} />
                </li>
               </ul> 
               <p className="text-decoration-underline">If you are located in Canada, this section applies to you. </p>   
               <DescList dterm="We may process your information if you have given us specific permission (i.e. express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e. implied consent). You can withdraw your consent at any time.  " dtermheader="" 
                ddata={[]}
               stylingobj={{"marginTop":"15px"}}
               /> 
                 <DescList dterm="In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:  " dtermheader="" 
                ddata={canada_process}
               stylingobj={{"marginTop":"15px"}}
               />           
            </div>
            {/* four */}
            <div>
                <h2 className="text-muted">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?  </h2>
               
                <DescList dtermheader="In Short: " dterm="We may share information in specific situations described in this section and/or with the following third parties" ddata={[]}
               stylingobj={{"marginTop":"15px"}}
               />
                 <DescList dtermheader="" dterm="We may need to share your personal information in the following situations: " 
                        ddata={[]}
                       stylingobj={{"marginTop":"15px"}} />
               <ul>
               <li>
                <DescList dtermheader="Business Transfers." dterm="We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company." 
                        ddata={[]}
                       stylingobj={{"marginTop":"15px"}} />
                </li>
               </ul>
               
                
                
              
                     
            </div>


        </div>
        </>
    )
}