const { createContext, useState, useContext, useEffect } = React;
const Loader = () => {
    return <div class="w-full h-full flex items-center justify-center text-center">Loading...</div>;
  };
const AdminNav = ({ selectedForm, setSelectedForm }) => {

    const handleSelectPlanPage = () => {
        setSelectedForm('planpage')
    }

    const hanldeSelectContactPage = () => {
        setSelectedForm('contactpage')
    }
    return (<div class="admin-nav flex flex-col mil-p-120-90">

        <span onClick={handleSelectPlanPage} class={`admin_nav_link p-lg-20 border-radius-50p p-md-10 ${selectedForm === 'planpage' ? 'active' : ''}`} >Free Growth Plan Data</span>

        <span onClick={hanldeSelectContactPage} class={`admin_nav_link p-lg-20 border-radius-50p  p-md-10 ${selectedForm === 'contactpage' ? 'active' : ''}`}>Lets talk Data</span>
    </div>)
}

const MessagePreview = ({ name, time, onClick }) => {

    return (
        <div class="w-full flex justify-content items-center" onClick={onClick}>

            <div class="mil-accordion-group w-full mil-up">
                <div class="mil-accordion-menu">

                    <p class="mil-accordion-head">{name}</p>

                    <p class=""> {time}</p>

                </div>


            </div>
        </div>)
}
const ContactMessagePreview = ({ name, time, onClick }) => {

    return (
        <div class="w-full flex justify-content items-center" onClick={onClick}>

            <div class="mil-accordion-group w-full mil-up">
                <div class="mil-accordion-menu">

                    <p class="mil-accordion-head">{name}</p>

                    <p class=""> {time}</p>

                </div>


            </div>
        </div>)
}

const MessageView = ({ messageData, handleBackToList }) => {
    const { formData } = messageData;
    // const determineSecondFormOpt = () => {
    //     const { selectedCategories } = messageData;
    //     if (selectedCategories.brand) {
    //       return 'Enhance brand/business revenues';
    //     } else if (selectedCategories.website) {
    //       return 'Improve website performance';
    //     } else if (selectedCategories.app) {
    //       return 'Improve App Performance';
    //     } else {
    //       return 'No option selected';
    //     }
    //   };
    const determineFirstFormOpt = (selectedOption) => {
        console.log("selectedOption=",selectedOption)
        switch (selectedOption) {
          case 'hospital':
            return 'Hospital/Doctor';
          case 'pharma':
            return 'Pharma/medical device company';
          case 'healthtech':
            return 'Healthtech company';
          case 'healthcare':
            return 'Healthcare allied services company ';
          default:
            return 'No goal specified';
        }
      };
    const determineSecondFormOpt = () => {
        const { selectedCategories, brandOptions, webOptions, appOptions } = messageData;
        

        if (selectedCategories.brand) {
            const brandTexts = {
                brandOpt1: "Brand story is not convincing",
                brandOpt2: "Sales execution is not as per expectation",
                brandOpt3: "Difficult to expand customer base",
                brandOpt4: "Poor patient compliance",
                brandOpt5: "Sub-optimal HCP engagement",
                brandOpt6: "Unclear customer profiling",
                brandOpt7: "Brand does not have a significant competitive advantage"
            };
            return {
                goal: 'Enhance brand/business revenues',
                suboptions: Object.keys(brandOptions)
                    .filter(opt => brandOptions[opt])
                    .map(opt => brandTexts[opt])
            };
        } else if (selectedCategories.website) {
            const webTexts = {
                webOpt1: "Not enough website traffic",
                webOpt2: "Bounce rate is high",
                webOpt3: "Users not spending enough time on website",
                webOpt4: "Conversion rate is low (conversion could be filling up a form, subscribing to a newsletter, downloading a document, purchasing a product/service, scheduling a demo, etc)"
            };
            return {
                goal: 'Improve website performance',
                suboptions: Object.keys(webOptions)
                    .filter(opt => webOptions[opt])
                    .map(opt => webTexts[opt])
            };
        } else if (selectedCategories.app) {
            const appTexts = {
                appOpt1: "Not enough app downloads",
                appOpt2: "App engagement is low",
                appOpt3: "App active users are low",
                appOpt4: "Not enough transactions on the app"
            };
            return {
                goal: 'Improve app performance',
                suboptions: Object.keys(appOptions)
                    .filter(opt => appOptions[opt])
                    .map(opt => appTexts[opt])
            };
        } else {
            return {
                goal: 'No goal selected',
                suboptions: []
            };
        }
    };

    const { goal, suboptions } = determineSecondFormOpt();
    const name = messageData.formData.name.toUpperCase();
    const email = messageData.formData.email.toUpperCase();
    const firstFormOpt =determineFirstFormOpt(messageData.firstFormOpts.selectedOption);

    const secondFormOpt = determineSecondFormOpt();
    return (<div class="border-bottom">

        <div class="mil-link mil-dark mil-arrow-place mil-icon-left mil-mb-30 max-width-60px" onClick={handleBackToList}>
            <span class="flex no-wrap items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mil-arrow-nxt">
                <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
            </svg>
                Go back</span>
        </div>
        <div class="message-data">
            <div class="client-details">
                <p> {name}</p>
                <p> {email}</p>
                <p> {messageData.formData.contactNumber}</p>

            </div>
            <div class="flex form-data justify-between">
                <span class="col-lg-5 col-md-5 col-sm-10">You are a: </span>
                <span class="col-lg-5 col-md-5 col-sm-10">{firstFormOpt}</span>
            </div>
            <div class="flex form-data justify-between">
                <span class="col-lg-5 col-md-5">What's Your goal: </span>
                <span class="col-lg-5 col-md-5">{goal}</span>
            </div>
            <div class="flex form-data justify-between items-center">

                <span className="col-lg-5 col-md-5">Which of these challenges are coming in the way of your goal? </span>
                <span className="col-lg-5 col-md-5">
                    {suboptions.map((option, index) => (
                        <React.Fragment key={index}>
                            {option}
                            {index !== suboptions.length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </span>

            </div>

        {formData.brandName && (
          <div className="flex form-data justify-between">
            <span className="col-lg-5 col-md-5">Brand Name: </span>
            <span className="col-lg-5 col-md-5">{formData.brandName}</span>
          </div>
        )}

        {formData.indication && (
          <div className="flex form-data justify-between">
            <span className="col-lg-5 col-md-5">Indication: </span>
            <span className="col-lg-5 col-md-5">{formData.indication}</span>
          </div>
        )}

        {formData.websiteUrl && (
          <div className="flex form-data justify-between">
            <span className="col-lg-5 col-md-5">Website URL: </span>
            <span className="col-lg-5 col-md-5">{formData.websiteUrl}</span>
          </div>
        )}

        {formData.primaryTargetAudience && (
          <div className="flex form-data justify-between">
            <span className="col-lg-5 col-md-5">Primary Target Audience: </span>
            <span className="col-lg-5 col-md-5">{formData.primaryTargetAudience}</span>
          </div>
        )}
        

        {formData.appStoreLink && (
          <div className="flex form-data justify-between">
            <span className="col-lg-5 col-md-5">App Store Link: </span>
            <span className="col-lg-5 col-md-5">{formData.appStoreLink}</span>
          </div>
        )}

        {formData.playStoreLink && (
          <div className="flex form-data justify-between">
            <span className="col-lg-5 col-md-5">Play Store Link: </span>
            <span className="col-lg-5 col-md-5">{formData.playStoreLink}</span>
          </div>
        )}
      

        </div>
    </div>)
}
const ContactMessageView = ({ messageData, handleBackToList }) => {
    
    
        

        

    const name = messageData.name.toUpperCase();
    const email = messageData.email.toUpperCase();
    const query = messageData.query;
    const mobile = 'mobile' in messageData ? messageData.mobile : '';
    
    return (<div class="border-bottom">

        <div class="mil-link mil-dark mil-arrow-place mil-icon-left mil-mb-30 max-width-60px" onClick={handleBackToList}>
            <span class="flex no-wrap items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mil-arrow-nxt">
                <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
            </svg>
                Go back</span>
        </div>
        <div class="message-data">
            <div class="client-details-contact">
                <p> {name}</p>
                <p> {mobile}</p>
                <p> {email}</p>
                

            </div>
            <div class="flex form-data justify-between">
                <span class="col-lg-3 col-md-3">query: </span>
                <span class="col-lg-7 col-md-7">{query}</span>
            </div>
            
      

        </div>
    </div>)
}
const MessageList = () => {

    const [selectedMessageData, setSelectedMessageData] = useState([]);
    const [viewMessage, setViewMessage] = useState(false);
    const [messages, setMessages] = useState([]);
    const [loading,setLoading] = useState(false);
    // var messages = [
    // { index: 0, name: 'John Doe', time: '10:30 AM', data: 'this is message data 1' },
    // { index: 1, name: 'Jane Smith', time: '11:00 AM', data: 'this is message data 2 ' },
    // { index: 2, name: 'Bob Johnson', time: '12:15 PM', data: 'this is message data 3' },
    // Add more sample messages as needed
    // ];

    const handleSelectedMessage = (index) => {
        console.log("selectedMessage= ", messages[index]);
        setSelectedMessageData(messages[index]);
        setViewMessage(true);
    }

    const handleBackToList = () => {
        setViewMessage(false);
    }

    useEffect(() => {
        // fetch('http://localhost:5000/getFreeGrowthPlanData/', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // })
        //     .then(response => {

        //         if (!response.ok) {


        //         }
        //         console.log("response=",response);
        //         return response.json;
        //     })
        //     .then(data => {

        //         console.log('Success:',JSON.parse(data[0].formData));

        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
        setLoading(true);
        const fetchData = async () => {
            try {
              const response = await fetch('https://wordle-server2-heaqgnd3encpb3ak.southeastasia-01.azurewebsites.net/getFreeGrowthPlanData/'); 
              const jsonData = await response.json(); 
              setMessages(jsonData); 
              setLoading(false);
            } catch (error) {
                alert('Error fetching data', error);
              setLoading(false);
            }
          };
        // const sampleData = [
        //     {
        //         "_id": "66822bca7942a8e2b9bacbaa",
        //         "formData": {
        //             "name": "Surya",
        //             "email": "surya@mail.com",
        //             "contactNumber": "9999999999",
        //             "brandName": "",
        //             "indication": "",
        //             "websiteUrl": "surya@test.com",
        //             "primaryTargetAudience": "test",
        //             "appStoreLink": "",
        //             "playStoreLink": ""
        //         },
        //         "firstFormOpts": {
        //             "selectedOption": "hospital"
        //         },
        //         "selectedCategories": {
        //             "brand": false,
        //             "website": true,
        //             "app": false
        //         },
        //         "brandOptions": {
        //             "brandOpt1": false,
        //             "brandOpt2": false,
        //             "brandOpt3": false,
        //             "brandOpt4": false,
        //             "brandOpt5": false,
        //             "brandOpt6": false,
        //             "brandOpt7": false
        //         },
        //         "webOptions": {
        //             "webOpt1": true,
        //             "webOpt2": true,
        //             "webOpt3": true,
        //             "webOpt4": false
        //         },
        //         "appOptions": {
        //             "appOpt1": false,
        //             "appOpt2": false,
        //             "appOpt3": false,
        //             "appOpt4": false
        //         },
        //         "requestDate": "2024-07-01T04:08:42.472Z"
        //     }
        // ];
        // console.log(sampleData);

        // setMessages(sampleData);
        if(messages.length === 0){
            fetchData();
        }   
         
    }, [])
    return (
        <div class="h-full w-full message-list " >
            {!loading&&!viewMessage && messages && messages.map((message, index) => (
                <MessagePreview name={message.formData.name} time={message.requestDate} onClick={() => handleSelectedMessage(index)} />

            ))}

            {viewMessage &&
                (<MessageView messageData={selectedMessageData} handleBackToList={handleBackToList} />)

            }
            {
                loading&&<Loader/>
            }
        </div>
    )
}
const ContactMessageList = () => {

    const [selectedMessageData, setSelectedMessageData] = useState([]);
    const [viewMessage, setViewMessage] = useState(false);
    const [messages, setMessages] = useState([]);
    const [loading,setLoading] = useState(false);
    const handleSelectedMessage = (index) => {
        console.log("selectedMessage= ", messages[index]);
        setSelectedMessageData(messages[index]);
        setViewMessage(true);
    }

    const handleBackToList = () => {
        setViewMessage(false);
    }

    useEffect(() => {
        // fetch('http://localhost:5000/getFreeGrowthPlanData/', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // })
        //     .then(response => {

        //         if (!response.ok) {


        //         }
        //         console.log("response=",response);
        //         return response.json;
        //     })
        //     .then(data => {

        //         console.log('Success:',JSON.parse(data[0].formData));

        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
        setLoading(true);
        const fetchData = async () => {
            try {
              const response = await fetch('https://wordle-server2-heaqgnd3encpb3ak.southeastasia-01.azurewebsites.net/getContactData/'); 
              const jsonData = await response.json(); 
              console.log("contact data=",jsonData);
              setMessages(jsonData); 
              setLoading(false);
            } catch (error) {
              alert('Error fetching data', error);
              setLoading(false);
            }
          };
        // const sampleData = [
        //     {
        //         "_id": "66822bca7942a8e2b9bacbaa",
        //         "formData": {
        //             "name": "Surya",
        //             "email": "surya@mail.com",
        //             "contactNumber": "9999999999",
        //             "brandName": "",
        //             "indication": "",
        //             "websiteUrl": "surya@test.com",
        //             "primaryTargetAudience": "test",
        //             "appStoreLink": "",
        //             "playStoreLink": ""
        //         },
        //         "firstFormOpts": {
        //             "selectedOption": "hospital"
        //         },
        //         "selectedCategories": {
        //             "brand": false,
        //             "website": true,
        //             "app": false
        //         },
        //         "brandOptions": {
        //             "brandOpt1": false,
        //             "brandOpt2": false,
        //             "brandOpt3": false,
        //             "brandOpt4": false,
        //             "brandOpt5": false,
        //             "brandOpt6": false,
        //             "brandOpt7": false
        //         },
        //         "webOptions": {
        //             "webOpt1": true,
        //             "webOpt2": true,
        //             "webOpt3": true,
        //             "webOpt4": false
        //         },
        //         "appOptions": {
        //             "appOpt1": false,
        //             "appOpt2": false,
        //             "appOpt3": false,
        //             "appOpt4": false
        //         },
        //         "requestDate": "2024-07-01T04:08:42.472Z"
        //     }
        // ];
        // console.log(sampleData);

        // setMessages(sampleData);
        if(messages.length === 0){
            fetchData();
        }   
         
    }, [])
    return (
        <div class="h-full w-full message-list " >
            {!loading && !viewMessage && messages && messages.map((message, index) => (
                <MessagePreview name={message.name} time={message.requestDate} onClick={() => handleSelectedMessage(index)} />

            ))}


            {viewMessage &&
                (<ContactMessageView messageData={selectedMessageData} handleBackToList={handleBackToList} />)

            }
             {
                loading&&<Loader/>
            }
        </div>
    )
}
const PlanPage = () => {

    return (
        <div class="h-full planpage mil-p-120-0">
            <MessageList />



        </div>)
}

const ContactPage = () => {
    return (
        <div class="h-full planpage mil-p-120-0">
            <ContactMessageList />



        </div>)
}

const MainComponent = () => {

    const [selectedForm, setSelectedForm] = useState('planpage');
    const [loading,setLoading] = useState(false);
    return (

        <div class="h-min-screen w-screen flex mil-p-120-90 adminpage">
            <AdminNav selectedForm={selectedForm} setSelectedForm={setSelectedForm} />
            {(selectedForm === 'planpage' ? (<PlanPage />) : (<ContactPage />))}

        </div>

    )
}

ReactDOM.render(<MainComponent />, document.getElementById('admin_react_container'));