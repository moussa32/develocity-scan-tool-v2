import { DescList } from "./DescList/DescList"
import { HeaderCaption } from "./HeaderCaption/HeaderCaption"
import styles from './PrivacyPolicy.module.css'
import BootstrapTable from "react-bootstrap-table-next"
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
    const tbl_content_5_8=[
        {
            'header1':'5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?',
            'short':'In Short: ',
            'short_msg':'We are not responsible for the safety of any information that you share with third parties that we may link to or who advertise on our Services, but are not affiliated with, our Services.',
            'msg1':'The Services may link to third-party websites, online services, or mobile applications and/or contain advertisements from third parties that are not affiliated with us and which may link to other websites, services, or applications. Accordingly, we do not make any guarantee regarding any such third parties, and we will not be liable for any loss or damage caused by the use of such third-party websites, services, or applications. The inclusion of a link towards a third-party website, service, or application does not imply an endorsement by us. We cannot guarantee the safety and privacy of data you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the Services. You should review the policies of such third parties and contact them directly to respond to your questions. '
            
        },
        {
            'header1':'6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES? ',
            'short':'In Short: ',
            'short_msg':'We may use cookies and other tracking technologies to collect and store your information. ',
            'msg1':'We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.  '
        },
        {
            'header1':'7. HOW LONG DO WE KEEP YOUR INFORMATION? ',
            'short':'In Short: ',
            'short_msg':'We keep your information for as long as necessary to fulfil the purposes outlined in this privacy notice unless otherwise required by law.',
            'msg1':" We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us. ",
            'msg2':'When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymise such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible. '
        },
        {
            'header1':'8. HOW DO WE KEEP YOUR INFORMATION SAFE? ',
            'short':'In Short: ',
            'short_msg':'We aim to protect your personal information through a system of organisational and technical security measures.',
            'msg1':'We have implemented appropriate and reasonable technical and organisational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorised third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment. '
        }

    ]

    const products = [ 
        {
            "category":'A. Identifiers ',
            "exp":"Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name ",
            "collected":"NO "
        },
        {
            "category":'B. Personal information categories listed in the California Customer Records statute ',
            "exp":"Name, contact information, education, employment, employment history, and financial information  ",
            "collected":"NO "
        },
        {
            "category":'C. Protected classification characteristics under California or federal law ',
            "exp":"Gender and date of birth  ",
            "collected":"NO "
        },
        {
            "category":'D. Commercial information ',
            "exp":"Transaction information, purchase history, financial details, and payment information ",
            "collected":"NO "
        },
        {
            "category":'E. Biometric information ',
            "exp":"Fingerprints and voiceprints  ",
            "collected":"NO "
        },
        {
            "category":'F. Internet or other similar network activity ',
            "exp":"Browsing history, search history, online behaviour, interest data, and interactions with our and other websites, applications, systems, and advertisements  ",
            "collected":"NO "
        },
        {
            "category":'G. Geolocation data ',
            "exp":"Device location ",
            "collected":"NO "
        },
        {
            "category":'H. Audio, electronic, visual, thermal, olfactory, or similar information ',
            "exp":"Images and audio, video or call recordings created in connection with our business activities ",
            "collected":"NO "
        },
        {
            "category":'I. Professional or employment-related information ',
            "exp":"Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us  ",
            "collected":"NO "
        },
        {
            "category":'J. Education Information ',
            "exp":"Student records and directory information  ",
            "collected":"NO "
        },
        {
            "category":'K. Inferences drawn from other personal information  ',
            "exp":"Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics   ",
            "collected":"NO "
        },

     ];
const columns = [{
  dataField: 'category',
  text: 'Category'
}, {
  dataField: 'exp',
  text: 'Examples',
  style: {
    color: '#333',
    fontSize: '18px',
    width:'50px'
  }
}, {
  dataField: 'collected',
  text: 'Collected'
}];
    return(
        <>
        <div className="container mt-5 ">
            <h5>PRIVACY NOTICE</h5>
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
           
            {/* 5:8 */}
            <div>
                {
                    tbl_content_5_8.map((item,index)=>(
                        <>
                         <h2 className="text-muted" key={index}>{item.header1}</h2>
                <DescList dtermheader="In Short: " dterm={item.short_msg} ddata={[]}
               stylingobj={{"marginTop":"15px"}}
               />
                <DescList dtermheader="" dterm={item.msg1}
                        ddata={[]}
                       stylingobj={{"marginTop":"15px"}} />
                        <DescList dtermheader="" dterm={item.msg2&&item.msg2}
                        ddata={[]}
                       stylingobj={{"marginTop":"15px"}} />
                        </>
                    ) )
                }
                 </div>
                 {/* 9 */}
                 <div>
                 <h2 className="text-muted" >9. WHAT ARE YOUR PRIVACY RIGHTS? </h2>
                <DescList dtermheader="In Short: " dterm="In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time" ddata={[]}
               stylingobj={{"marginTop":"15px"}}
               />
               <p>In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section <span className="text-primary">'HOW CAN YOU CONTACT US ABOUT THIS NOTICE?'</span>below.</p>
               <DescList dtermheader="" dterm="We will consider and act upon any request in accordance with applicable data protection laws. " ddata={[]}
               stylingobj={{"marginTop":"15px"}}
               />
               <p>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a  href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.">https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm.</a></p>
                <p>If you are located in Switzerland, the contact details for the data protection authorities are available here: <a href="https://www.edoeb.admin.ch/edoeb/en/home.html">https://www.edoeb.admin.ch/edoeb/en/home.html.</a></p>
                <p> <span className="yext-decoration-underline">Withdrawing your consent: </span>If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section '<span className="text-primary">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span>'below or updating your preferences.</p>
                <DescList dtermheader="" dterm="However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent. " ddata={[]}
               stylingobj={{"marginTop":"15px"}}
               />
               <p><span className="text-decoration-underline">Opting out of marketing and promotional communications: </span>You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying 'STOP' or 'UNSUBSCRIBE' to the SMS messages that we send, or by contacting us using the details provided in the section ' <span>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span>'below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</p>
               <HeaderCaption data="Account Information  "/>
               <DescList dtermheader="" dterm="If you would at any time like to review or change the information in your account or terminate your account, you can: " ddata={['Log in to your account settings and update your user account. ', 'Contact us using the contact information provided. ']}
               stylingobj={{"marginTop":"15px"}}
               />
                 <DescList dtermheader="" dterm="Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements. " ddata={[]}
               stylingobj={{"marginTop":"15px"}}
               />
               <p><span className="text-decoration-underline">Cookies and similar technologies: </span>Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt out of interest-based advertising by advertisers on our Services visit  <a href="http://www.aboutads.info/choices/">http://www.aboutads.info/choices/.</a></p>
                <p>If you have questions or comments about your privacy rights, you may email us at  <span className="bg-white">info@develocity.finance.</span></p>
                </div>
                {/* 10 */}
                <div>
                <h2 className="text-muted" >10. CONTROLS FOR DO-NOT-TRACK FEATURES </h2>
                <DescList dtermheader="" dterm="Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ('DNT') feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage no uniform technology standard for recognising and implementing DNT signals has been finalised. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy notice. "
                        ddata={[]}
                       stylingobj={{"marginTop":"15px"}} />
                </div>
                {/* 11 */}
                <div>
                <h2 className="text-muted" >11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS? </h2>
                <DescList dtermheader="In Short: " dterm="Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information. "
                        ddata={[]}
                       stylingobj={{"marginTop":"15px"}} />
                <DescList dtermheader="" dterm="California Civil Code Section 1798.83, also known as the 'Shine The Light' law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below. "
                        ddata={[]}
                       stylingobj={{"marginTop":"15px"}} />

<DescList dtermheader="" dterm="If you are under 18 years of age, reside in California, and have a registered account with Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from all our systems (e.g. backups, etc.). "
                        ddata={[]}
                       stylingobj={{"marginTop":"15px"}} />
                          <HeaderCaption data="CCPA Privacy Notice  "/>
                          <dl>
                            <dt>The California Code of Regulations defines a 'resident' as: </dt>
                            <dd>
                                <ol>
                                    <li>every individual who is in the State of California for other than a temporary or transitory purpose.</li>
                                    <li>every individual who is domiciled in the State of California who is outside the State of California for a temporary or transitory purpose.</li>
                                </ol>
                            </dd>
                          </dl>
                          <DescList dtermheader="" dterm="All other individuals are defined as 'non-residents'. "
                        ddata={[]}
                       stylingobj={{"marginTop":"15px"}} />
                             <DescList dtermheader="" dterm="All other individuals are defined as 'non-residents'. "
                        ddata={[]}
                       stylingobj={{"marginTop":"15px"}} />
                       <DescList dtermheader="" dterm="If this definition of 'resident' applies to you, we must adhere to certain rights and obligations regarding your personal information. "
                        ddata={[]}
                       stylingobj={{"marginTop":"15px"}} />
                       <h5>What categories of personal information do we collect? </h5>
                       <DescList dtermheader="" dterm="We have collected the following categories of personal information in the past twelve (12) months:  "
                        ddata={[]}
                       stylingobj={{"marginTop":"15px"}} />
<div className={`${styles.large_table} table-responsive  row col-6 d-flex`} style={{overflowX: 'auto'}}>
<BootstrapTable keyField='id' data={ products } columns={ columns } hover={true}/>
</div>

<DescList dtermheader="" dterm="We may also collect other personal information outside of these categories instances where you interact with us in person, online, or by phone or mail in the context of: "
 ddata={['Receiving help through our customer support channels.','Participation in customer surveys or contests.','Facilitation in the delivery of our Services and to respond to your inquiries. ']}
               stylingobj={{"marginTop":"10px"}}
              />
              <h5>How do we use and share your personal information? </h5>
              <p>More information about our data collection and sharing practices can be found in this privacy notice. </p>
              <p>You may contact us by email at <span className="bg-white">info@develocity.finance</span>by visiting  <a href="https://develocity.finance/#contact">https://develocity.finance/#contact, </a>or by referring to the contact details at the bottom of this document.</p>

              <DescList dtermheader="" dterm="If you are using an authorised agent to exercise your right to opt out we may deny a request if the authorised agent does not submit proof that they have been validly authorised to act on your behalf. "
 ddata={[]}
               stylingobj={{"marginTop":"10px"}}
              />  
              <h5>Will your information be shared with anyone else? </h5>   
              <DescList dtermheader="" dterm="We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Each service provider is a for-profit entity that processes the information on our behalf.  "
 ddata={[]}
               stylingobj={{"marginTop":"10px"}}
              /> 
                   <DescList dtermheader="" dterm="We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be 'selling' of your personal information.  "
 ddata={[]}
               stylingobj={{"marginTop":"10px"}}
              /> 
                   <DescList dtermheader="" dterm="Develocity Finance Technology Company has not disclosed or sold any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. Develocity Finance Technology Company will not sell personal information in the future belonging to website visitors, users, and other consumers.  "
 ddata={[]}
               stylingobj={{"marginTop":"10px"}}
              />   
              <h5>Your rights with respect to your personal data </h5>
              <p className="text-decoration-underline">Right to request deletion of the data — Request to delete </p>
              <DescList dtermheader="" dterm="You can ask for the deletion of your personal information. If you ask us to delete your personal information, we will respect your request and delete your personal information, subject to certain exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our compliance requirements resulting from a legal obligation, or any processing that may be required to protect against illegal activities. "
 ddata={[]}
               stylingobj={{"marginTop":"10px"}}
              /> 
              <p className="text-decoration-underline">Right to be informed — Request to know </p>
              <DescList dtermheader="" dterm="Depending on the circumstances, you have a right to know: "
 ddata={['whether we collect and use your personal information.', 'the categories of personal information that we collect.', 'the purposes for which the collected personal information is used.', 'whether we sell your personal information to third parties.', 'the categories of personal information that we sold or disclosed for a business purpose.', 'the categories of third parties to whom the personal information was sold or disclosed for a business purpose.', 'the business or commercial purpose for collecting or selling personal information. ']}
               stylingobj={{"marginTop":"10px"}}
              /> 
                    <DescList dtermheader="" dterm="In accordance with applicable law, we are not obligated to provide or delete consumer information that is de-identified in response to a consumer request or to re-identify individual data to verify a consumer request.  "
 ddata={[]}
               stylingobj={{"marginTop":"10px"}}
              /> 
              <p className="text-decoration-underline">Right to Non-Discrimination for the Exercise of a Consumer’s Privacy Rights </p>
              <DescList dtermheader="" dterm="We will not discriminate against you if you exercise your privacy rights. "
 ddata={[]}
               stylingobj={{"marginTop":"10px"}}
              /> 
              <p className="text-decoration-underline">Verification process </p>
              <DescList dtermheader="" dterm="Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. These verification efforts require us to ask you to provide information so that we can match it with information you have previously provided us. For instance, depending on the type of request you submit, we may ask you to provide certain information so that we can match the information you provide with the information we already have on file, or we may contact you through a communication method (e.g. phone or email) that you have previously provided to us. We may also use other verification methods as the circumstances dictate. "
 ddata={[]}
               stylingobj={{"marginTop":"10px"}}
              />
               <DescList dtermheader="" dterm="We will only use personal information provided in your request to verify your identity or authority to make the request. To the extent possible, we will avoid requesting additional information from you for the purposes of verification. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes. We will delete such additionally provided information as soon as we finish verifying you.  "
 ddata={[]}
               stylingobj={{"marginTop":"10px"}}
              />
              <p className="text-decoration-underline">Other privacy rights </p>
               <DescList dtermheader="" dterm=" "
 ddata={['You may object to the processing of your personal information. ','You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict the processing of the information. ', 'You can designate an authorised agent to make a request under the CCPA on your behalf. We may deny a request from an authorised agent that does not submit proof that they have been validly authorised to act on your behalf in accordance with the CCPA. ','You may request to opt out from future selling of your personal information to third parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly possible, but no later than fifteen (15) days from the date of the request submission. ']}
               stylingobj={{"marginTop":"10px"}}
              />

                <p>To exercise these rights, you can contact us by email at <span className="bg-white">info@develocity.finance</span>, by visiting <a href="https://develocity.finance/#contact">https://develocity.finance/#contact</a>, or by referring to the contact details at the bottom of this document. If you have a complaint about how we handle your data, we would like to hear from you.</p>
                </div>
                {/* 12 */}
                <div>
                <h2 className="text-muted" >12. DO WE MAKE UPDATES TO THIS NOTICE?  </h2>
                <DescList dtermheader="In Short: " dterm="Yes, we will update this notice as necessary to stay compliant with relevant laws" ddata={[]}
               stylingobj={{"marginTop":"15px"}}
               />
               <DescList dtermheader="In Short: " dterm="We may update this privacy notice from time to time. The updated version will be indicated by an updated 'Revised' date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information. " ddata={[]}
               stylingobj={{"marginTop":"15px"}}
               />
                 </div>
                 {/* 13 */}
                 <div>
                 <h2 className="text-muted" >13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?  </h2>  
                 <p>If you have questions or comments about this notice, you may email us at <span className="bg-white">info@develocity.finance</span>or by post to:</p>
                 <ul style={{listStyleType:'none'}}>
                    <li>Develocity Finance Technology Company </li>
                    <li>DFC</li>
                    <li>Dubai</li>
                    <li>United Arab Emirates </li>
                 </ul>
                 </div>
                 {/* 14 */}
                 <div>
                 <h2 className="text-muted" >14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU? </h2>   
                 <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, change that information, or delete it. To request to review, update, or delete your personal information, please submit a request form by clicking <a href="https://develocity.finance/#contact">here</a></p>
                 </div>
               
               
           

        </div>
        </>
    )
}