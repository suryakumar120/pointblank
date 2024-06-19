
// const { createContext, useState, useContext, useEffect } = React;
// const FirstForm = ({ onFormSubmit }) => {
//     const [pharma, setPharma] = React.useState(false);
//     const [hospital, setHospital] = React.useState(false);
//     const [healthtech, setHealthtech] = React.useState(false);
//     const [healthcare, setHealthcare] = React.useState(false);
//     const [selectedOption, setSelectedOption] = useState('');
//     const handlePharma = (e) => {
//         // e.preventDefault();
//         setPharma(!pharma);
//     }
//     const handleHospital = (e) => {
//         // e.preventDefault();
//         setHospital(!hospital);
//     }
//     const handleHealthtech = (e) => {
//         // e.preventDefault();
//         setHealthtech(!healthtech);
//     }
//     const handleHealthcare = (e) => {
//         // e.preventDefault();
//         setHealthcare(!healthcare);
//     }

//     const handleOptionChange = (option)=>{
//         setSelectedOption(option)
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onFormSubmit();
//         // Handle form submission logic here
//         // console.log({ name, email, phone, message });
//     };

//     return (
//         <form className="row justify-content-center" onSubmit={handleSubmit}>

//             <div className="col-lg-12 mil-up flex justify-content-center mil-mb-60">
//                 <h4>Please select the applicable category</h4>
//             </div>

//             <div className="col-lg-6 mil-up">
//                 <div className="col-lg-4 mil-up flex mil-mb-60">
//                     <h4>You are a </h4>
//                 </div>
//                 <div class="mil-accordion-group mil-up" onClick={() => handleOptionChange('pharma')}>
//                     <div class="mil-accordion-menu" >
//                         <p class="mil-accordion-head flex items-center justify-content-between">Pharma/medical device company  </p><input type="checkbox" checked={selectedOption === 'pharma'} />

//                     </div>
//                 </div>
//                 <div class="mil-accordion-group mil-up" onClick={() => handleOptionChange('hospital')}>
//                     <div class="mil-accordion-menu" >
//                         <p class="mil-accordion-head flex items-center justify-content-between">Hospital/Doctor</p><input type="checkbox" checked={selectedOption === 'hospital'} />

//                     </div>
//                 </div>
//                 <div class="mil-accordion-group mil-up" onClick={() => handleOptionChange('healthtech')}>
//                     <div class="mil-accordion-menu" >
//                         <p class="mil-accordion-head flex items-center justify-content-between">Healthtech company  </p><input type="checkbox" checked={selectedOption === 'healthtech'} />

//                     </div>
//                 </div>
//                 <div class="mil-accordion-group mil-up" onClick={() => handleOptionChange('healthcare')}>
//                     <div class="mil-accordion-menu" >
//                         <p class="mil-accordion-head flex items-center justify-content-between">Healthcare allied services company   </p><input type="checkbox" checked={selectedOption === 'healthcare'} />

//                     </div>
//                 </div>
//                 <div className="col-lg-12">
//                     <div className="mil-adaptive-right mil-up mil-mb-30">
//                         <button type="submit" className="mil-button ">
//                             <span class="flex justify-center items-center">Next
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mil-arrow-nxt">
//                                     <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
//                                 </svg>
//                             </span>
//                         </button>
//                     </div>
//                 </div>
//             </div>

//         </form>
//     );
// };

// const SecondFormContext = createContext();
// const SecondForm = ({ onFormSubmit, onPrevPage }) => {

//     const [activeForm, setActiveForm] = useState('');
//     const [brand, setBrand] = React.useState(false);
//     const [website, setWebsite] = React.useState(false);
//     const [app, setApp] = React.useState(false);
//     const [submitActive, setSubmitActive] = React.useState(false);

//     // Brand
//     const [brandOpt1, setBrandOpt1] = useState(false);
//     const [brandOpt2, setBrandOpt2] = useState(false);
//     const [brandOpt3, setBrandOpt3] = useState(false);
//     const [brandOpt4, setBrandOpt4] = useState(false);
//     const [brandOpt5, setBrandOpt5] = useState(false);
//     const [brandOpt6, setBrandOpt6] = useState(false);
//     const [brandOpt7, setBrandOpt7] = useState(false);

//     //Website
//     const [webOpt1, setWebOpt1] = useState(false);
//     const [webOpt2, setWebOpt2] = useState(false);
//     const [webOpt3, setWebOpt3] = useState(false);
//     const [webOpt4, setWebOpt4] = useState(false);

//     // App
//     const [appOpt1, setAppOpt1] = useState(false);
//     const [appOpt2, setAppOpt2] = useState(false);
//     const [appOpt3, setAppOpt3] = useState(false);
//     const [appOpt4, setAppOpt4] = useState(false);


//     const handleBrand = (e) => {
//         // e.preventDefault();
//         setBrand(!brand);
//         if (!brand) {
//             setActiveForm('brand');
//             setSubmitActive(true);
//         }
//         else {
//             if (website || app) {
//                 setSubmitActive(true);
//             }
//             else {
//                 setSubmitActive(false);
//             }

//         }
//         setBrandOpt1(false);
//         setBrandOpt2(false);
//         setBrandOpt3(false);
//         setBrandOpt4(false);
//         setBrandOpt5(false);
//         setBrandOpt6(false);
//         setBrandOpt7(false);
//     }
//     const handleWebsite = (e) => {
//         // e.preventDefault();
//         setWebsite(!website);
//         if (!website) {
//             setActiveForm('website');
//             setSubmitActive(true);
//         }
//         else {
//             // if(brand){
//             //     setActiveForm('brand');
//             // }
//             // else if(app){
//             //     setActiveForm('app');
//             // }
//             // else{
//             //     setActiveForm('');
//             // }
//             if (brand || app) {
//                 setSubmitActive(true);
//             }
//             else {
//                 setSubmitActive(false);
//             }
//         }
//         setWebOpt1(false);
//         setWebOpt2(false);
//         setWebOpt3(false);
//         setWebOpt4(false);
//     }
//     const handleApp = (e) => {
//         // e.preventDefault();
//         setApp(!app);
//         if (!app) {
//             setActiveForm('app');
//             setSubmitActive(true);
//         }
//         else {
//             if (website || brand) {
//                 setSubmitActive(true);
//             }
//             else {
//                 setSubmitActive(false);
//             }
//         }
//         setAppOpt1(false);
//         setAppOpt2(false);
//         setAppOpt3(false);
//         setAppOpt4(false);
//     }

//     const handleActiveForm = (formName) => {
//         setActiveForm(formName);
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const selectedCategories = { brand, website, app };
//         localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));

//         // onFormSubmit(); // Uncomment if you have this function defined elsewhere
//         console.log(selectedCategories);
//         onFormSubmit();
//         // Handle form submission logic here
//         console.log({ name, email, phone, message });
//     };

//     const handlePrevPage = () => {
//         onPrevPage();
//     }

//     return (
//         <div>


//             <SecondFormContext.Provider value={{
//                 activeForm, setBrand, brandOpt1, setBrandOpt1, brandOpt2, setBrandOpt2, brandOpt3,
//                 setBrandOpt3, brandOpt4, setBrandOpt4, brandOpt5, setBrandOpt5,
//                 brandOpt6, setBrandOpt6, brandOpt7, setBrandOpt7, webOpt1, setWebOpt1, webOpt2, setWebOpt2, webOpt3, setWebOpt3, webOpt4, setWebOpt4, setWebsite, setApp,
//                 appOpt1, setAppOpt1, appOpt2, setAppOpt2, appOpt3, setAppOpt3, appOpt4, setAppOpt4

//             }}>


//                 <form className="row justify-content-center " onSubmit={handleSubmit}>
//                     {/* <div className="col-lg-12 mil-up flex justify-content-center mil-mb-60">
//                 <h4>Please select the applicable category</h4>
//             </div> */}

//                     <div className={`col-lg-6 mil-up second-form-main ${activeForm === '' ? '' : 'active-form'}`}>
//                         <div className="col-lg-12 mil-up flex mil-mb-60">
//                             <h3>What's your goal? </h3>
//                         </div>
//                         <div class={`mil-accordion-group mil-up `} >
//                             <div class="mil-accordion-menu" >
//                                 <p class={`mil-accordion-head flex items-center justify-content-between ${activeForm === 'brand' ? 'active-form' : ''} `} onClick={() => handleActiveForm('brand')}>Enhance brand/business revenues </p><input type="checkbox" checked={brand} onClick={handleBrand} />

//                             </div>
//                         </div>
//                         <div class={`mil-accordion-group mil-up ${activeForm === 'website' ? 'active-form' : ''}`} >
//                             <div class="mil-accordion-menu" >
//                                 <p class={`mil-accordion-head flex items-center justify-content-between ${activeForm === 'website' ? 'active-form' : ''} `} onClick={() => handleActiveForm('website')}>Improve website performance </p><input type="checkbox" checked={website} onClick={handleWebsite} />

//                             </div>
//                         </div>
//                         <div class={`mil-accordion-group mil-up ${activeForm === 'app' ? 'active-form' : ''}`} >
//                             <div class="mil-accordion-menu" >
//                                 <p class={`mil-accordion-head flex items-center justify-content-between ${activeForm === 'app' ? 'active-form' : ''} `} onClick={() => handleActiveForm('app')}>Improve app performance </p><input type="checkbox" checked={app} onClick={handleApp} />

//                             </div>
//                         </div>
//                         {/* <div class="mil-accordion-group mil-up" onClick={handleHealthcare}>
//                     <div class="mil-accordion-menu" >
//                         <p class="mil-accordion-head flex items-center justify-content-between">Healthcare allied services company   </p><input type="checkbox" checked={healthcare} />

//                     </div>
//                 </div> */}
//                         <div className="col-lg-12">
//                             <div class="mil-works-nav mil-up free-growth-plan-submit">
//                                 <div class="mil-link mil-dark mil-arrow-place mil-icon-left mil-mb-30" onClick={handlePrevPage}>
//                                     <span class="flex no-wrap items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mil-arrow-nxt">
//                                         <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
//                                     </svg>
//                                         Previous</span>
//                                 </div>
//                                 <div className="mil-adaptive-right mil-up mil-mb-30">
//                                     {/* <button type="submit" className={`mil-button second-form-submit ${!submitActive?'mil-disabled':''}`}> */}

//                                     <button type="submit" className={`mil-button second-form-submit ${!submitActive ? 'mil-disabled' : ''}`}>
//                                         <span class="flex justify-center items-center">Next
//                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mil-arrow-nxt">
//                                                 <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
//                                             </svg>
//                                         </span>
//                                     </button>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                     <div className={`col-lg-6 mil-up second-form-sub ${activeForm === '' ? '' : 'active-form'}`} >
//                         {activeForm === 'brand' ? <BrandForm /> : (activeForm === 'website' ? <WebForm /> : (activeForm === 'app' ? <AppForm /> : ''))}
//                     </div>


//                 </form>

//             </SecondFormContext.Provider>
//         </div>
//     );
// };
// const BrandForm = ({ onFormSubmit }) => {
//     const {
//         brandOpt1, setBrandOpt1, brandOpt2, setBrandOpt2, brandOpt3,
//         setBrandOpt3, brandOpt4, setBrandOpt4, brandOpt5, setBrandOpt5,
//         brandOpt6, setBrandOpt6, brandOpt7, setBrandOpt7, setBrand, activeForm
//     } = useContext(SecondFormContext);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // onFormSubmit();
//         // Handle form submission logic here
//         // console.log("Submitted brand options:", brandOpts);
//     };

//     const handleBrandOption1 = () => {
//         setBrandOpt1(!brandOpt1);
//         if (!brandOpt1) {
//             setBrand(true);
//         } else {
//             if (!brandOpt2 && !brandOpt3 && !brandOpt4 && !brandOpt5 && !brandOpt6 && !brandOpt7) {
//                 setBrand(false);
//             }
//         }
//     };

//     const handleBrandOption2 = () => {
//         setBrandOpt2(!brandOpt2);
//         if (!brandOpt2) {
//             setBrand(true);
//         } else {
//             if (!brandOpt1 && !brandOpt3 && !brandOpt4 && !brandOpt5 && !brandOpt6 && !brandOpt7) {
//                 setBrand(false);
//             }
//         }
//     };

//     const handleBrandOption3 = () => {
//         setBrandOpt3(!brandOpt3);
//         if (!brandOpt3) {
//             setBrand(true);
//         } else {
//             if (!brandOpt1 && !brandOpt2 && !brandOpt4 && !brandOpt5 && !brandOpt6 && !brandOpt7) {
//                 setBrand(false);
//             }
//         }
//     };

//     const handleBrandOption4 = () => {
//         setBrandOpt4(!brandOpt4);
//         if (!brandOpt4) {
//             setBrand(true);
//         } else {
//             if (!brandOpt1 && !brandOpt2 && !brandOpt3 && !brandOpt5 && !brandOpt6 && !brandOpt7) {
//                 setBrand(false);
//             }
//         }
//     };

//     const handleBrandOption5 = () => {
//         setBrandOpt5(!brandOpt5);
//         if (!brandOpt5) {
//             setBrand(true);
//         } else {
//             if (!brandOpt1 && !brandOpt2 && !brandOpt3 && !brandOpt4 && !brandOpt6 && !brandOpt7) {
//                 setBrand(false);
//             }
//         }
//     };

//     const handleBrandOption6 = () => {
//         setBrandOpt6(!brandOpt6);
//         if (!brandOpt6) {
//             setBrand(true);
//         } else {
//             if (!brandOpt1 && !brandOpt2 && !brandOpt3 && !brandOpt4 && !brandOpt5 && !brandOpt7) {
//                 setBrand(false);
//             }
//         }
//     };

//     const handleBrandOption7 = () => {
//         setBrandOpt7(!brandOpt7);
//         if (!brandOpt7) {
//             setBrand(true);
//         } else {
//             if (!brandOpt1 && !brandOpt2 && !brandOpt3 && !brandOpt4 && !brandOpt5 && !brandOpt6) {
//                 setBrand(false);
//             }
//         }
//     };

//     return (
//         <div className={`col-lg-12 mil-up second-form-sub ${activeForm === '' ? '' : 'active-form'}`}>
//             <div className="col-lg-12 mil-up flex mil-mb-30">
//                 <h4>Which of these challenges are coming in the way of your goal? </h4>
//             </div>
//             <div className="mil-accordion-group mil-up" onClick={handleBrandOption1}>
//                 <div className="mil-accordion-menu">
//                     <p className="mil-accordion-head flex items-center justify-content-between">Brand story is not convincing</p>
//                     <input type="checkbox" checked={brandOpt1} />
//                 </div>
//             </div>
//             <div className="mil-accordion-group mil-up" onClick={handleBrandOption2}>
//                 <div className="mil-accordion-menu">
//                     <p className="mil-accordion-head flex items-center justify-content-between">Sales execution is not as per expectation</p>
//                     <input type="checkbox" checked={brandOpt2} />
//                 </div>
//             </div>
//             <div className="mil-accordion-group mil-up" onClick={handleBrandOption3}>
//                 <div className="mil-accordion-menu">
//                     <p className="mil-accordion-head flex items-center justify-content-between">Difficult to expand customer base</p>
//                     <input type="checkbox" checked={brandOpt3} />
//                 </div>
//             </div>
//             <div className="mil-accordion-group mil-up" onClick={handleBrandOption4}>
//                 <div className="mil-accordion-menu">
//                     <p className="mil-accordion-head flex items-center justify-content-between">Poor patient compliance</p>
//                     <input type="checkbox" checked={brandOpt4} />
//                 </div>
//             </div>
//             <div className="mil-accordion-group mil-up" onClick={handleBrandOption5}>
//                 <div className="mil-accordion-menu">
//                     <p className="mil-accordion-head flex items-center justify-content-between">Sub-optimal HCP engagement</p>
//                     <input type="checkbox" checked={brandOpt5} />
//                 </div>
//             </div>
//             <div className="mil-accordion-group mil-up" onClick={handleBrandOption6}>
//                 <div className="mil-accordion-menu">
//                     <p className="mil-accordion-head flex items-center justify-content-between">Unclear customer profiling</p>
//                     <input type="checkbox" checked={brandOpt6} />
//                 </div>
//             </div>
//             <div className="mil-accordion-group mil-up" onClick={handleBrandOption7}>
//                 <div className="mil-accordion-menu">
//                     <p className="mil-accordion-head flex items-center justify-content-between">Brand does not have a significant competitive advantage</p>
//                     <input type="checkbox" checked={brandOpt7} />
//                 </div>
//             </div>
//             {/* <div className="col-lg-12">
//                     <div className="mil-adaptive-right mil-up mil-mb-30">
//                         <button type="submit" className="mil-button">
//                             <span className="flex justify-center items-center">Next
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mil-arrow-nxt">
//                                     <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
//                                 </svg>
//                             </span>
//                         </button>
//                     </div>
//                 </div> */}
//         </div>

//     );
// };
// const WebForm = ({ onFormSubmit }) => {
//     const {
//         webOpt1, setWebOpt1, webOpt2, setWebOpt2, webOpt3, setWebOpt3, webOpt4, setWebOpt4, setWebsite
//     } = useContext(SecondFormContext);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // onFormSubmit();
//         // Handle form submission logic here
//         // console.log("Submitted web options:", webOpts);
//     };

//     const handleWebOption1 = () => {
//         setWebOpt1(!webOpt1);
//         if (!webOpt1) {
//             setWebsite(true);
//         } else {
//             if (!webOpt2 && !webOpt3 && !webOpt4) {
//                 setWebsite(false);
//             }
//         }
//     };

//     const handleWebOption2 = () => {
//         setWebOpt2(!webOpt2);
//         if (!webOpt2) {
//             setWebsite(true);
//         } else {
//             if (!webOpt1 && !webOpt3 && !webOpt4) {
//                 setWebsite(false);
//             }
//         }
//     };

//     const handleWebOption3 = () => {
//         setWebOpt3(!webOpt3);
//         if (!webOpt3) {
//             setWebsite(true);
//         } else {
//             if (!webOpt1 && !webOpt2 && !webOpt4) {
//                 setWebsite(false);
//             }
//         }
//     };

//     const handleWebOption4 = () => {
//         setWebOpt4(!webOpt4);
//         if (!webOpt4) {
//             setWebsite(true);
//         } else {
//             if (!webOpt1 && !webOpt2 && !webOpt3) {
//                 setWebsite(false);
//             }
//         }
//     };


//     return (
//         <div className="col-lg-12 mil-up">
//             <div className="col-lg-12 mil-up flex mil-mb-30">
//                 <h4>Which of these challenges are coming in the way of your goal? </h4>
//             </div>
//             <div className="mil-accordion-group mil-up" onClick={handleWebOption1}>
//                 <div className="mil-accordion-menu">
//                     <p className="mil-accordion-head flex items-center justify-content-between">Not enough website traffic</p>
//                     <input type="checkbox" checked={webOpt1} />
//                 </div>
//             </div>
//             <div className="mil-accordion-group mil-up" onClick={handleWebOption2}>
//                 <div className="mil-accordion-menu">
//                     <p className="mil-accordion-head flex items-center justify-content-between">Bounce rate is high</p>
//                     <input type="checkbox" checked={webOpt2} />
//                 </div>
//             </div>
//             <div className="mil-accordion-group mil-up" onClick={handleWebOption3}>
//                 <div className="mil-accordion-menu">
//                     <p className="mil-accordion-head flex items-center justify-content-between">Users not spending enough time on website</p>
//                     <input type="checkbox" checked={webOpt3} />
//                 </div>
//             </div>
//             <div className="mil-accordion-group mil-up" onClick={handleWebOption4}>
//                 <div className="mil-accordion-menu">
//                     <p className="mil-accordion-head flex items-center justify-content-between">Conversion rate is low (conversion could be filling up a form, subscribing to a newsletter, downloading a document, purchasing a product/service, scheduling a demo, etc)
//                     </p>
//                     <input type="checkbox" checked={webOpt4} />
//                 </div>
//             </div>
//             {/* <div className="col-lg-12">
//                     <div className="mil-adaptive-right mil-up mil-mb-30">
//                         <button type="submit" className="mil-button">
//                             <span className="flex justify-center items-center">Next
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mil-arrow-nxt">
//                                     <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
//                                 </svg>
//                             </span>
//                         </button>
//                     </div>
//                 </div> */}
//         </div>
//     );
// };
// const AppForm = ({ onFormSubmit }) => {
//     const {
//         appOpt1, setAppOpt1, appOpt2, setAppOpt2, appOpt3, setAppOpt3, appOpt4, setAppOpt4, setApp
//     } = useContext(SecondFormContext);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // onFormSubmit();
//         // Handle form submission logic here
//         // console.log("Submitted app options:", appOpts);
//     };

//     const handleAppOption1 = () => {
//         setAppOpt1(!appOpt1);
//         if (!appOpt1) {
//             setApp(true);
//         } else {
//             if (!appOpt2 && !appOpt3 && !appOpt4) {
//                 setApp(false);
//             }
//         }
//     };

//     const handleAppOption2 = () => {
//         setAppOpt2(!appOpt2);
//         if (!appOpt2) {
//             setApp(true);
//         } else {
//             if (!appOpt1 && !appOpt3 && !appOpt4) {
//                 setApp(false);
//             }
//         }
//     };

//     const handleAppOption3 = () => {
//         setAppOpt3(!appOpt3);
//         if (!appOpt3) {
//             setApp(true);
//         } else {
//             if (!appOpt1 && !appOpt2 && !appOpt4) {
//                 setApp(false);
//             }
//         }
//     };

//     const handleAppOption4 = () => {
//         setAppOpt4(!appOpt4);
//         if (!appOpt4) {
//             setApp(true);
//         } else {
//             if (!appOpt1 && !appOpt2 && !appOpt3) {
//                 setApp(false);
//             }
//         }
//     };
//     return (
//         <div className="col-lg-12 mil-up">
//             <div className="col-lg-12 mil-up flex mil-mb-30">
//                 <h4>Which of these challenges are coming in the way of your goal? </h4>
//             </div>
//             <div className="mil-accordion-group mil-up" onClick={handleAppOption1}>
//                 <div className="mil-accordion-menu">
//                     <p className="mil-accordion-head flex items-center justify-content-between">Not enough app downloads</p>
//                     <input type="checkbox" checked={appOpt1} />
//                 </div>
//             </div>
//             <div className="mil-accordion-group mil-up" onClick={handleAppOption2}>
//                 <div className="mil-accordion-menu">
//                     <p className="mil-accordion-head flex items-center justify-content-between">App engagement is low</p>
//                     <input type="checkbox" checked={appOpt2} />
//                 </div>
//             </div>
//             <div className="mil-accordion-group mil-up" onClick={handleAppOption3}>
//                 <div className="mil-accordion-menu">
//                     <p className="mil-accordion-head flex items-center justify-content-between">App active users are low</p>
//                     <input type="checkbox" checked={appOpt3} />
//                 </div>
//             </div>
//             <div className="mil-accordion-group mil-up" onClick={handleAppOption4}>
//                 <div className="mil-accordion-menu">
//                     <p className="mil-accordion-head flex items-center justify-content-between">Not enough transactions on the app</p>
//                     <input type="checkbox" checked={appOpt4} />
//                 </div>
//             </div>
//             {/* <div className="col-lg-12">
//                     <div className="mil-adaptive-right mil-up mil-mb-30">
//                         <button type="submit" className="mil-button">
//                             <span className="flex justify-center items-center">Next
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mil-arrow-nxt">
//                                     <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
//                                 </svg>
//                             </span>
//                         </button>
//                     </div>
//                 </div> */}
//         </div>
//     );
// };

// const ThirdForm = ({ onFormSubmit, onPrevPage }) => {

//     const [brand, setBrand] = React.useState(false);
//     const [website, setWebsite] = React.useState(false);
//     const [app, setApp] = React.useState(false);

//     const handlePharma = (e) => {
//         // e.preventDefault();
//         setPharma(!pharma);
//     }
//     const handleHospital = (e) => {
//         // e.preventDefault();
//         setHospital(!hospital);
//     }
//     const handleHealthtech = (e) => {
//         // e.preventDefault();
//         setHealthtech(!healthtech);
//     }
//     const handleHealthcare = (e) => {
//         // e.preventDefault();
//         setHealthcare(!healthcare);
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onFormSubmit();
//         // Handle form submission logic here
//         console.log({ name, email, phone, message });
//     };

//     const handlePrevPage = ()=> {
//         onPrevPage();
//     }
//     useEffect(() => {
//         const selectedCategories = localStorage.getItem('selectedCategories');
//         if (selectedCategories) {
//             setBrand(JSON.parse(selectedCategories).brand);
//             setWebsite(JSON.parse(selectedCategories).website);
//             setApp(JSON.parse(selectedCategories).app);
//         }
//     }, [])

//     return (
//         <div>
//             <form class="row align-items-center" onSubmit={handleSubmit}>
//                 <div className="col-lg-12 mil-up flex mil-mb-30">
//                     <h4>Give us some more details </h4>
//                 </div>
//                 <div class="col-lg-6 mil-up">
//                     <input type="text" placeholder="What's your name" required />
//                 </div>
//                 <div class="col-lg-6 mil-up">
//                     <input type="email" placeholder="Your Email" required />
//                 </div>
//                 <div class="col-lg-6 mil-up">
//                     <input type="tel" placeholder="Your Contact Number" />
//                 </div>
//                 {brand && <div class="col-lg-6 mil-up">
//                     <input type="text" placeholder="What's your brand name" required />
//                 </div>
//                 }
//                 {brand && <div class="col-lg-6 mil-up">
//                     <input type="text" placeholder="Indication" required />
//                 </div>
//                 }
//                 {website && <div class="col-lg-6 mil-up">
//                     <input type="text" placeholder="Website Url " required />
//                 </div>
//                 }
//                 {website && <div class="col-lg-6 mil-up">
//                     <input type="text" placeholder="Primary target audience" required />
//                 </div>
//                 }
//                 {app && <div class="col-lg-6 mil-up">
//                     <input type="text" placeholder="App store link" required />
//                 </div>
//                 }
//                 {app && <div class="col-lg-6 mil-up">
//                     <input type="text" placeholder="Play store link" required />
//                 </div>
//                 }
//                 {app && <div class="col-lg-6 mil-up">
//                     <input type="text" placeholder="Primary target audience" required />
//                 </div>
//                 }
//                 {/* <div class="col-lg-12 mil-up">
//                     <textarea placeholder="Wanna Tell Us Something?"></textarea>
//                 </div> */}
//                 <div class="col-lg-8">
//                     <p class="mil-up mil-mb-30"><span class="mil-accent">*</span> We promise not to disclose your personal information to third parties.</p>
//                 </div>
//                 <div className="col-lg-12">
//                     <div class="mil-works-nav mil-up free-growth-plan-submit">
//                         <div class="mil-link mil-dark mil-arrow-place mil-icon-left mil-mb-30" onClick={handlePrevPage}>
//                             <span class="flex no-wrap items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mil-arrow-nxt">
//                                 <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
//                             </svg>
//                                 Previous</span>
//                         </div>
//                         <div className="mil-adaptive-right mil-up mil-mb-30">
//                             <button type="submit" className="mil-button">
//                                 <span className="flex justify-center items-center">Submit
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mil-arrow-nxt">
//                                         <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
//                                     </svg>
//                                 </span>
//                             </button>
//                         </div>
//                     </div>

//                 </div>
//             </form>
//         </div>

//     );
// };
// const FourthForm = ({ onFormSubmit }) => {

//     const [brand, setBrand] = React.useState(false);
//     const [website, setWebsite] = React.useState(false);
//     const [app, setApp] = React.useState(false);

//     const handlePharma = (e) => {
//         // e.preventDefault();
//         setPharma(!pharma);
//     }
//     const handleHospital = (e) => {
//         // e.preventDefault();
//         setHospital(!hospital);
//     }
//     const handleHealthtech = (e) => {
//         // e.preventDefault();
//         setHealthtech(!healthtech);
//     }
//     const handleHealthcare = (e) => {
//         // e.preventDefault();
//         setHealthcare(!healthcare);
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onFormSubmit();
//         // Handle form submission logic here
//         console.log({ name, email, phone, message });
//     };

//     useEffect(() => {
//         const selectedCategories = localStorage.getItem('selectedCategories');
//         if (selectedCategories) {
//             setBrand(JSON.parse(selectedCategories).brand);
//             setWebsite(JSON.parse(selectedCategories).website);
//             setApp(JSON.parse(selectedCategories).app);
//         }
//     }, [])

//     return (
//         <div class='section h-90screen'>
//             <div class="row justify-content-center">

//                 <div class="col-lg-8">
//                     <h3 class={`mil-center mil-up mil-mb-60 }`}>Thank you for sharing your challenges.</h3>
//                     <p class="mil-text-xl mil-dark mil-up mil-mb-60"> You will receive your growth plan within 5 business days. Meanwhile you can check out some of our case studies <a
//                         href='/portfolio-1.html'
//                         style={{
//                             textDecoration: 'underline',
//                             color: '#333' // Adjust the color code to make it a bit darker
//                         }}
//                     >
//                         here.
//                     </a>

//                     </p>






//                 </div>
//             </div>

//         </div>

//     );
// };
// const MainComponent = () => {
//     const [firstFormSubmit, setFirstFormSubmit] = React.useState(false);
//     const [secondFormSubmit, setSecondFormSubmit] = React.useState(false);
//     const [thirdFormSubmit, setThirdFormSubmit] = React.useState(false);
//     const handleFirstFormSubmit = () => {
//         setFirstFormSubmit(true);
//     }

//     const handleSecondFormSubmit = () => {
//         setSecondFormSubmit(true);
//     }

//     const handlePrevSecondForm = () => {
//         setFirstFormSubmit(false);
//     }

//     const handleThirdFormSubmit = () => {
//         setThirdFormSubmit(true);
//     }

//     const handlePrevThirdForm = () => {
//         setSecondFormSubmit(false);
//     }
//     return (
//         <div>
//             <h3 class={`mil-center mil-up mil-mb-120 ${thirdFormSubmit ? 'hidden-div' : ''}`}><span class="mil-thin">Get Your</span> Free Growth Plan</h3>
//             {!firstFormSubmit ? <FirstForm onFormSubmit={handleFirstFormSubmit} /> : (!secondFormSubmit ? <SecondForm onFormSubmit={handleSecondFormSubmit} onPrevPage={handlePrevSecondForm} /> : (!thirdFormSubmit ? <ThirdForm onFormSubmit={handleThirdFormSubmit} onPrevPage={handlePrevThirdForm}/> : <FourthForm />))}
//             {/* <FourthForm /> */}
//         </div>
//     )
// }

// ReactDOM.render(<MainComponent />, document.getElementById('reactFormContainer'));

const { createContext, useState, useContext, useEffect } = React;
const FirstForm = ({ onFormSubmit }) => {
    const [pharma, setPharma] = React.useState(false);
    const [hospital, setHospital] = React.useState(false);
    const [healthtech, setHealthtech] = React.useState(false);
    const [healthcare, setHealthcare] = React.useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [activeForm, setActiveForm] = useState(false);
    const handlePharma = (e) => {
        // e.preventDefault();
        setPharma(!pharma);
    }
    const handleHospital = (e) => {
        // e.preventDefault();
        setHospital(!hospital);
    }
    const handleHealthtech = (e) => {
        // e.preventDefault();
        setHealthtech(!healthtech);
    }
    const handleHealthcare = (e) => {
        // e.preventDefault();
        setHealthcare(!healthcare);
    }

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setActiveForm(true);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit();
        // Handle form submission logic here
        // console.log({ name, email, phone, message });
    };

    return (
        <form className="row justify-content-center" onSubmit={handleSubmit}>

            <div className="col-lg-12 mil-up flex justify-content-center mil-mb-60">
                <h4>Please select the applicable category</h4>
            </div>

            <div className="col-lg-6 mil-up">
                <div className="col-lg-4 mil-up flex mil-mb-60">
                    <h4>You are a </h4>
                </div>
                <div class="mil-accordion-group mil-up" onClick={() => handleOptionChange('pharma')}>
                    <div class="mil-accordion-menu" >
                        <p class="mil-accordion-head flex items-center justify-content-between">Pharma/medical device company  </p><input type="checkbox" checked={selectedOption === 'pharma'} />

                    </div>
                </div>
                <div class="mil-accordion-group mil-up" onClick={() => handleOptionChange('hospital')}>
                    <div class="mil-accordion-menu" >
                        <p class="mil-accordion-head flex items-center justify-content-between">Hospital/Doctor</p><input type="checkbox" checked={selectedOption === 'hospital'} />

                    </div>
                </div>
                <div class="mil-accordion-group mil-up" onClick={() => handleOptionChange('healthtech')}>
                    <div class="mil-accordion-menu" >
                        <p class="mil-accordion-head flex items-center justify-content-between">Healthtech company  </p><input type="checkbox" checked={selectedOption === 'healthtech'} />

                    </div>
                </div>
                <div class="mil-accordion-group mil-up" onClick={() => handleOptionChange('healthcare')}>
                    <div class="mil-accordion-menu" >
                        <p class="mil-accordion-head flex items-center justify-content-between">Healthcare allied services company   </p><input type="checkbox" checked={selectedOption === 'healthcare'} />

                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="mil-adaptive-right mil-up mil-mb-30">
                        <button type="submit" className={`mil-button ${activeForm ? '' : 'mil-disabled'}`}>
                            <span class="flex justify-center items-center">Next
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mil-arrow-nxt">
                                    <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>

        </form>
    );
};

const SecondFormContext = createContext();
const SecondForm = ({ onFormSubmit, onPrevPage, activeSubForm }) => {

    const [activeForm, setActiveForm] = useState('');
    const [brand, setBrand] = React.useState(false || (activeSubForm === 'brand'));
    const [website, setWebsite] = React.useState(false || activeSubForm === 'website');
    const [app, setApp] = React.useState(false || activeSubForm === 'app');
    const [submitActive, setSubmitActive] = React.useState(false);
    const [secondFormQuestionsSubmit, setSecondFormQuestionsSubmit] = useState(false || !(activeSubForm === ''));


    // Brand
    const [brandOpt1, setBrandOpt1] = useState(false);
    const [brandOpt2, setBrandOpt2] = useState(false);
    const [brandOpt3, setBrandOpt3] = useState(false);
    const [brandOpt4, setBrandOpt4] = useState(false);
    const [brandOpt5, setBrandOpt5] = useState(false);
    const [brandOpt6, setBrandOpt6] = useState(false);
    const [brandOpt7, setBrandOpt7] = useState(false);

    //Website
    const [webOpt1, setWebOpt1] = useState(false);
    const [webOpt2, setWebOpt2] = useState(false);
    const [webOpt3, setWebOpt3] = useState(false);
    const [webOpt4, setWebOpt4] = useState(false);

    // App
    const [appOpt1, setAppOpt1] = useState(false);
    const [appOpt2, setAppOpt2] = useState(false);
    const [appOpt3, setAppOpt3] = useState(false);
    const [appOpt4, setAppOpt4] = useState(false);


    const handleBrand = (e) => {
        // e.preventDefault();
        setBrand(!brand);
        if (!brand) {
            setActiveForm('brand');
            setSubmitActive(true);
        }
        else {
            if (website || app) {
                setSubmitActive(true);
            }
            else {
                setSubmitActive(false);
            }

        }
        setBrandOpt1(false);
        setBrandOpt2(false);
        setBrandOpt3(false);
        setBrandOpt4(false);
        setBrandOpt5(false);
        setBrandOpt6(false);
        setBrandOpt7(false);
    }
    const handleWebsite = (e) => {
        // e.preventDefault();
        setWebsite(!website);
        if (!website) {
            setActiveForm('website');
            setSubmitActive(true);
        }
        else {
            // if(brand){
            //     setActiveForm('brand');
            // }
            // else if(app){
            //     setActiveForm('app');
            // }
            // else{
            //     setActiveForm('');
            // }
            if (brand || app) {
                setSubmitActive(true);
            }
            else {
                setSubmitActive(false);
            }
        }
        setWebOpt1(false);
        setWebOpt2(false);
        setWebOpt3(false);
        setWebOpt4(false);
    }
    const handleApp = (e) => {
        // e.preventDefault();
        setApp(!app);
        if (!app) {
            setActiveForm('app');
            setSubmitActive(true);
        }
        else {
            if (website || brand) {
                setSubmitActive(true);
            }
            else {
                setSubmitActive(false);
            }
        }
        setAppOpt1(false);
        setAppOpt2(false);
        setAppOpt3(false);
        setAppOpt4(false);
    }

    const handleActiveForm = (formName) => {
        setActiveForm(formName);
    }
    const handleSubmit = (e) => {
        // e.preventDefault();
        const selectedCategories = { brand, website, app };
        localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));

        // onFormSubmit(); // Uncomment if you have this function defined elsewhere
        console.log(selectedCategories);
        onFormSubmit();
        // Handle form submission logic here
        console.log({ name, email, phone, message });
    };

    const handlePrevPage = () => {
        onPrevPage();
    }

    useEffect(()=>{
        console.log("activeSubForm= ",activeSubForm);
    },[])

    return (
        <div class="row justify-content-center">


            <SecondFormContext.Provider value={{
                brand, website, app, setBrand, setWebsite, setApp,
                activeForm, setBrand, brandOpt1, setBrandOpt1, brandOpt2, setBrandOpt2, brandOpt3,
                setBrandOpt3, brandOpt4, setBrandOpt4, brandOpt5, setBrandOpt5,
                brandOpt6, setBrandOpt6, brandOpt7, setBrandOpt7, webOpt1, setWebOpt1, webOpt2, setWebOpt2, webOpt3, setWebOpt3, webOpt4, setWebOpt4, setWebsite, setApp,
                appOpt1, setAppOpt1, appOpt2, setAppOpt2, appOpt3, setAppOpt3, appOpt4, setAppOpt4, setSecondFormQuestionsSubmit

            }}>




                {!secondFormQuestionsSubmit ? <SecondFormQuestions onPrevPage={handlePrevPage} /> : (<div className={`row justify-content-center col-lg-6 ${activeForm === '' ? '' : 'active-form'}`} >
                    {brand ? <BrandForm onFormSubmit={handleSubmit} /> : (website ? <WebForm onFormSubmit={handleSubmit} /> : (app ? <AppForm onFormSubmit={handleSubmit} /> : ''))}
                </div>)}



            </SecondFormContext.Provider>
        </div>
    );
};
const SecondFormQuestions = ({ onPrevPage }) => {
    const {
        brand, website, setWebsite, app, setApp,
        brandOpt1, setBrandOpt1, brandOpt2, setBrandOpt2, brandOpt3,
        setBrandOpt3, brandOpt4, setBrandOpt4, brandOpt5, setBrandOpt5,
        brandOpt6, setBrandOpt6, brandOpt7, setBrandOpt7, setBrand, activeForm, setSecondFormQuestionsSubmit
    } = useContext(SecondFormContext);
    const [selectedOption, setSelectedOption] = useState('');
    const [choosenOne, setChoosenOne] = useState(false);
    const handleBrand = (e) => {
        // e.preventDefault();
        setBrand(!brand);

    }
    const handleWebsite = (e) => {
        // e.preventDefault();
        setWebsite(!website);

    }
    const handleApp = (e) => {
        // e.preventDefault();
        setApp(!app);

    }

    const handleOptionChange = (option) => {
        console.log("option=", option);
        setSelectedOption(option);

        setChoosenOne(true);
        // console.log("selected opiton = ",selectedOptio   n);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // onFormSubmit();
        // Handle form submission logic here
        // console.log("Submitted brand options:", brandOpts);
        if (selectedOption === 'brand') {
            setBrand(true);
            setApp(false);
            setWebsite(false);
        }
        else if (selectedOption === 'website') {
            setWebsite(true);
            setApp(false);
            setBrand(false);
        }
        else if (selectedOption === 'app') {
            setApp(true);
            setWebsite(false);
            setBrand(false);
        }
        setSecondFormQuestionsSubmit(true);
    };

    const handlePrevPage = () => {
        onPrevPage();
    }



    return (
        <div>
            <form className="row justify-content-center " onSubmit={handleSubmit}>
                {/* <div className="col-lg-12 mil-up flex justify-content-center mil-mb-60">
                <h4>Please select the applicable category</h4>
            </div> */}

                <div className={`col-lg-6 mil-up second-form-main `}>
                    <div className="col-lg-12 mil-up flex mil-mb-60">
                        <h3>What's your goal? </h3>
                    </div>
                    <div class={`mil-accordion-group mil-up `} onClick={() => handleOptionChange('brand')}>
                        <div class="mil-accordion-menu" >
                            <p class={`mil-accordion-head flex items-center justify-content-between  `} >Enhance brand/business revenues </p><input type="checkbox" checked={selectedOption === 'brand'} />

                        </div>
                    </div>
                    <div class={`mil-accordion-group mil-up `} onClick={() => handleOptionChange('website')}>
                        <div class="mil-accordion-menu" >
                            <p class={`mil-accordion-head flex items-center justify-content-between  `} >Improve website performance </p><input type="checkbox" checked={selectedOption === 'website'} />

                        </div>
                    </div>
                    <div class={`mil-accordion-group mil-up `} onClick={() => handleOptionChange('app')}>
                        <div class="mil-accordion-menu" >
                            <p class={`mil-accordion-head flex items-center justify-content-between `} >Improve app performance </p><input type="checkbox" checked={selectedOption === 'app'} />

                        </div>
                    </div>
                    <div class={`mil-accordion-group mil-up boundary-none pointer-none`} onClick={() => handleOptionChange('app')}>
                        <div class="mil-accordion-menu" >
                            <p class={`mil-accordion-head flex items-center justify-content-between `} >&nbsp;<br /></p>

                        </div>
                    </div>
                    {/* <div class="mil-accordion-group mil-up" onClick={handleHealthcare}>
                    <div class="mil-accordion-menu" >
                        <p class="mil-accordion-head flex items-center justify-content-between">Healthcare allied services company   </p><input type="checkbox" checked={healthcare} />

                    </div>
                </div> */}
                    <div className="col-lg-12">
                        <div class="mil-works-nav mil-up free-growth-plan-submit">
                            <div class="mil-link mil-dark mil-arrow-place mil-icon-left mil-mb-30" onClick={handlePrevPage}>
                                <span class="flex no-wrap items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mil-arrow-nxt">
                                    <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
                                </svg>
                                    Previous</span>
                            </div>
                            <div className="mil-adaptive-right mil-up mil-mb-30">
                                {/* <button type="submit" className={`mil-button second-form-submit ${!submitActive?'mil-disabled':''}`}> */}

                                <button type="submit" className={`mil-button second-form-submit ${choosenOne ? '' : 'mil-disabled'}`}>
                                    <span class="flex justify-center items-center">Next
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mil-arrow-nxt">
                                            <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>

    );
};
const BrandForm = ({ onFormSubmit }) => {
    const {
        brandOpt1, setBrandOpt1, brandOpt2, setBrandOpt2, brandOpt3,
        setBrandOpt3, brandOpt4, setBrandOpt4, brandOpt5, setBrandOpt5,
        brandOpt6, setBrandOpt6, brandOpt7, setBrandOpt7, setBrand, activeForm, setSecondFormQuestionsSubmit
    } = useContext(SecondFormContext);

    const [choosenOne, setChoosenOne] = useState(false);

    const checkIfAnySelected = () => {
        setChoosenOne(brandOpt1 || brandOpt2 || brandOpt3 || brandOpt4 || brandOpt5 || brandOpt6 || brandOpt7);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit();
        // Handle form submission logic here
        // console.log("Submitted brand options:", brandOpts);
    };

    const handleBrandOption1 = () => {
        setBrandOpt1(!brandOpt1);
        // if(!brandOpt1){
        //     setChoosenOne(true);
        // }
        // else{
        //     setChoosenOne(false);
        // }
        // if (!brandOpt1) {
        //     setBrand(true);
        // } else {
        //     if (!brandOpt2 && !brandOpt3 && !brandOpt4 && !brandOpt5 && !brandOpt6 && !brandOpt7) {
        //         setBrand(false);
        //     }
        // }
        checkIfAnySelected();
    };

    const handleBrandOption2 = () => {
        setBrandOpt2(!brandOpt2);
        if (!brandOpt2) {
            setChoosenOne(true);
        }
        // else{
        //     setChoosenOne(false);
        // }  
        // if (!brandOpt2) {
        //     setBrand(true);
        // } else {
        //     if (!brandOpt1 && !brandOpt3 && !brandOpt4 && !brandOpt5 && !brandOpt6 && !brandOpt7) {
        //         setBrand(false);
        //     }
        // }
    };

    const handleBrandOption3 = () => {
        setBrandOpt3(!brandOpt3);
        // if(!brandOpt3){
        //     setChoosenOne(true);
        // }
        // else{
        //     setChoosenOne(false);
        // }
        // if (!brandOpt3) {
        //     setBrand(true);
        // } else {
        //     if (!brandOpt1 && !brandOpt2 && !brandOpt4 && !brandOpt5 && !brandOpt6 && !brandOpt7) {
        //         setBrand(false);
        //     }
        // }
    };

    const handleBrandOption4 = () => {
        setBrandOpt4(!brandOpt4);
        // if(!brandOpt4){
        //     setChoosenOne(true);
        // }
        // else{
        //     setChoosenOne(false);
        // }
        // if (!brandOpt4) {
        //     setBrand(true);
        // } else {
        //     if (!brandOpt1 && !brandOpt2 && !brandOpt3 && !brandOpt5 && !brandOpt6 && !brandOpt7) {
        //         setBrand(false);
        //     }
        // }
    };

    const handleBrandOption5 = () => {
        setBrandOpt5(!brandOpt5);
        // if(!brandOpt5){
        //     setChoosenOne(true);
        // }
        // else{
        //     setChoosenOne(false);
        // }
        // if (!brandOpt5) {
        //     setBrand(true);
        // } else {
        //     if (!brandOpt1 && !brandOpt2 && !brandOpt3 && !brandOpt4 && !brandOpt6 && !brandOpt7) {
        //         setBrand(false);
        //     }
        // }
    };

    const handleBrandOption6 = () => {
        setBrandOpt6(!brandOpt6);
        // if(!brandOpt6){
        //     setChoosenOne(true);
        // }
        // else{
        //     setChoosenOne(false);
        // }
        // if (!brandOpt6) {
        //     setBrand(true);
        // } else {
        //     if (!brandOpt1 && !brandOpt2 && !brandOpt3 && !brandOpt4 && !brandOpt5 && !brandOpt7) {
        //         setBrand(false);
        //     }
        // }
    };

    const handleBrandOption7 = () => {
        setBrandOpt7(!brandOpt7);
        // if(!brandOpt7){
        //     setChoosenOne(true);
        // }
        // else{
        //     setChoosenOne(false);
        // }
        // if (!brandOpt7) {
        //     setBrand(true);
        // } else {
        //     if (!brandOpt1 && !brandOpt2 && !brandOpt3 && !brandOpt4 && !brandOpt5 && !brandOpt6) {
        //         setBrand(false);
        //     }
        // }
    };

    const handlePrevPage = () => {

        setSecondFormQuestionsSubmit(false);
    }

    useEffect(() => {
        const anyOptionSelected = brandOpt1 || brandOpt2 || brandOpt3 || brandOpt4 || brandOpt5 || brandOpt6 || brandOpt7;
        setChoosenOne(anyOptionSelected);
    }, [brandOpt1, brandOpt2, brandOpt3, brandOpt4, brandOpt5, brandOpt6, brandOpt7]);

    return (
        <div class="row justify-content-center">
            <form className={`col-lg-12 row justify-content-center ${activeForm === '' ? '' : 'active-form'}`} onSubmit={handleSubmit}>
                <div className="col-lg-12 mil-up flex mil-mb-30">
                    <h4>Which of these challenges are coming in the way of your goal? </h4>
                </div>
                <div className="mil-accordion-group mil-up" onClick={handleBrandOption1}>
                    <div className="mil-accordion-menu">
                        <p className="mil-accordion-head flex items-center justify-content-between">Brand story is not convincing</p>
                        <input type="checkbox" checked={brandOpt1} />
                    </div>
                </div>
                <div className="mil-accordion-group mil-up" onClick={handleBrandOption2}>
                    <div className="mil-accordion-menu">
                        <p className="mil-accordion-head flex items-center justify-content-between">Sales execution is not as per expectation</p>
                        <input type="checkbox" checked={brandOpt2} />
                    </div>
                </div>
                <div className="mil-accordion-group mil-up" onClick={handleBrandOption3}>
                    <div className="mil-accordion-menu">
                        <p className="mil-accordion-head flex items-center justify-content-between">Difficult to expand customer base</p>
                        <input type="checkbox" checked={brandOpt3} />
                    </div>
                </div>
                <div className="mil-accordion-group mil-up" onClick={handleBrandOption4}>
                    <div className="mil-accordion-menu">
                        <p className="mil-accordion-head flex items-center justify-content-between">Poor patient compliance</p>
                        <input type="checkbox" checked={brandOpt4} />
                    </div>
                </div>
                <div className="mil-accordion-group mil-up" onClick={handleBrandOption5}>
                    <div className="mil-accordion-menu">
                        <p className="mil-accordion-head flex items-center justify-content-between">Sub-optimal HCP engagement</p>
                        <input type="checkbox" checked={brandOpt5} />
                    </div>
                </div>
                <div className="mil-accordion-group mil-up" onClick={handleBrandOption6}>
                    <div className="mil-accordion-menu">
                        <p className="mil-accordion-head flex items-center justify-content-between">Unclear customer profiling</p>
                        <input type="checkbox" checked={brandOpt6} />
                    </div>
                </div>
                <div className="mil-accordion-group mil-up" onClick={handleBrandOption7}>
                    <div className="mil-accordion-menu">
                        <p className="mil-accordion-head flex items-center justify-content-between">Brand does not have a significant competitive advantage</p>
                        <input type="checkbox" checked={brandOpt7} />
                    </div>
                </div>
                <div class="mil-works-nav mil-up free-growth-plan-submit">
                    <div class="mil-link mil-dark mil-arrow-place mil-icon-left mil-mb-30" onClick={handlePrevPage}>
                        <span class="flex no-wrap items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mil-arrow-nxt">
                            <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
                        </svg>
                            Previous</span>
                    </div>
                    <div className="mil-adaptive-right mil-up mil-mb-30">
                        {/* <button type="submit" className={`mil-button second-form-submit ${!submitActive?'mil-disabled':''}`}> */}

                        <button type="submit" className={`mil-button second-form-submit ${choosenOne ? '' : 'mil-disabled'}`}>
                            <span class="flex justify-center items-center">Next
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mil-arrow-nxt">
                                    <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </form>
        </div>


    );
};
const WebForm = ({ onFormSubmit }) => {
    const {
        webOpt1, setWebOpt1, webOpt2, setWebOpt2, webOpt3, setWebOpt3, webOpt4, setWebOpt4, setWebsite, setSecondFormQuestionsSubmit
    } = useContext(SecondFormContext);
    const [choosenOne,setChoosenOne] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit();
        // Handle form submission logic here
        // console.log("Submitted web options:", webOpts);
    };

    const handleWebOption1 = () => {
        setWebOpt1(!webOpt1);
        // if (!webOpt1) {
        //     setWebsite(true);
        // } else {
        //     if (!webOpt2 && !webOpt3 && !webOpt4) {
        //         setWebsite(false);
        //     }
        // }
    };

    const handleWebOption2 = () => {
        setWebOpt2(!webOpt2);
        // if (!webOpt2) {
        //     setWebsite(true);
        // } else {
        //     if (!webOpt1 && !webOpt3 && !webOpt4) {
        //         setWebsite(false);
        //     }
        // }
    };

    const handleWebOption3 = () => {
        setWebOpt3(!webOpt3);
        // if (!webOpt3) {
        //     setWebsite(true);
        // } else {
        //     if (!webOpt1 && !webOpt2 && !webOpt4) {
        //         setWebsite(false);
        //     }
        // }
    };

    const handleWebOption4 = () => {
        setWebOpt4(!webOpt4);
        // if (!webOpt4) {
        //     setWebsite(true);
        // } else {
        //     if (!webOpt1 && !webOpt2 && !webOpt3) {
        //         setWebsite(false);
        //     }
        // }
    };

    const handlePrevPage = () => {

        setSecondFormQuestionsSubmit(false);
    }

    useEffect(() => {
        const anyOptionSelected = webOpt1 || webOpt2 || webOpt3 || webOpt4;
        setChoosenOne(anyOptionSelected);
    }, [webOpt1, webOpt2, webOpt3, webOpt4]);

    return (
        <form className="col-lg-12 mil-up" onSubmit={handleSubmit}>
            <div className="col-lg-12 mil-up flex mil-mb-30">
                <h4>Which of these challenges are coming in the way of your goal? </h4>
            </div>
            <div className="mil-accordion-group mil-up" onClick={handleWebOption1}>
                <div className="mil-accordion-menu">
                    <p className="mil-accordion-head flex items-center justify-content-between">Not enough website traffic</p>
                    <input type="checkbox" checked={webOpt1} />
                </div>
            </div>
            <div className="mil-accordion-group mil-up" onClick={handleWebOption2}>
                <div className="mil-accordion-menu">
                    <p className="mil-accordion-head flex items-center justify-content-between">Bounce rate is high</p>
                    <input type="checkbox" checked={webOpt2} />
                </div>
            </div>
            <div className="mil-accordion-group mil-up" onClick={handleWebOption3}>
                <div className="mil-accordion-menu">
                    <p className="mil-accordion-head flex items-center justify-content-between">Users not spending enough time on website</p>
                    <input type="checkbox" checked={webOpt3} />
                </div>
            </div>
            <div className="mil-accordion-group mil-up" onClick={handleWebOption4}>
                <div className="mil-accordion-menu">
                    <p className="mil-accordion-head flex items-center justify-content-between">Conversion rate is low (conversion could be filling up a form, subscribing to a newsletter, downloading a document, purchasing a product/service, scheduling a demo, etc)
                    </p>
                    <input type="checkbox" checked={webOpt4} />
                </div>
            </div>
            {/* <div className="col-lg-12">
                    <div className="mil-adaptive-right mil-up mil-mb-30">
                        <button type="submit" className="mil-button">
                            <span className="flex justify-center items-center">Next
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mil-arrow-nxt">
                                    <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div> */}
            <div class="mil-works-nav mil-up free-growth-plan-submit">
                <div class="mil-link mil-dark mil-arrow-place mil-icon-left mil-mb-30" onClick={handlePrevPage}>
                    <span class="flex no-wrap items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mil-arrow-nxt">
                        <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
                    </svg>
                        Previous</span>
                </div>
                <div className="mil-adaptive-right mil-up mil-mb-30">
                    {/* <button type="submit" className={`mil-button second-form-submit ${!submitActive?'mil-disabled':''}`}> */}

                    <button type="submit" className={`mil-button second-form-submit ${choosenOne? '':'mil-disabled'}`}>
                        <span class="flex justify-center items-center">Next
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mil-arrow-nxt">
                                <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </form>
    );
};
const AppForm = ({ onFormSubmit }) => {
    const {
        appOpt1, setAppOpt1, appOpt2, setAppOpt2, appOpt3, setAppOpt3, appOpt4, setAppOpt4, setApp, setSecondFormQuestionsSubmit
    } = useContext(SecondFormContext);
    const [choosenOne, setChoosenOne] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit();
        // Handle form submission logic here
        // console.log("Submitted app options:", appOpts);
    };

    const handleAppOption1 = () => {
        setAppOpt1(!appOpt1);
        // if (!appOpt1) {
        //     setApp(true);
        // } else {
        //     if (!appOpt2 && !appOpt3 && !appOpt4) {
        //         setApp(false);
        //     }
        // }
    };

    const handleAppOption2 = () => {
        setAppOpt2(!appOpt2);
        // if (!appOpt2) {
        //     setApp(true);
        // } else {
        //     if (!appOpt1 && !appOpt3 && !appOpt4) {
        //         setApp(false);
        //     }
        // }
    };

    const handleAppOption3 = () => {
        setAppOpt3(!appOpt3);
        // if (!appOpt3) {
        //     setApp(true);
        // } else {
        //     if (!appOpt1 && !appOpt2 && !appOpt4) {
        //         setApp(false);
        //     }
        // }
    };

    const handleAppOption4 = () => {
        setAppOpt4(!appOpt4);
        // if (!appOpt4) {
        //     setApp(true);
        // } else {
        //     if (!appOpt1 && !appOpt2 && !appOpt3) {
        //         setApp(false);
        //     }
        // }
    };

    const handlePrevPage = () => {

        setSecondFormQuestionsSubmit(false);
    }

    useEffect(() => {
        const anyOptionSelected = appOpt1 || appOpt2 || appOpt3 || appOpt4;
        setChoosenOne(anyOptionSelected);
    }, [appOpt1, appOpt2, appOpt3, appOpt4, setApp]);

    return (
        <form className="col-lg-12 mil-up" onSubmit={handleSubmit}>
            <div className="col-lg-12 mil-up flex mil-mb-30">
                <h4>Which of these challenges are coming in the way of your goal? </h4>
            </div>
            <div className="mil-accordion-group mil-up" onClick={handleAppOption1}>
                <div className="mil-accordion-menu">
                    <p className="mil-accordion-head flex items-center justify-content-between">Not enough app downloads</p>
                    <input type="checkbox" checked={appOpt1} />
                </div>
            </div>
            <div className="mil-accordion-group mil-up" onClick={handleAppOption2}>
                <div className="mil-accordion-menu">
                    <p className="mil-accordion-head flex items-center justify-content-between">App engagement is low</p>
                    <input type="checkbox" checked={appOpt2} />
                </div>
            </div>
            <div className="mil-accordion-group mil-up" onClick={handleAppOption3}>
                <div className="mil-accordion-menu">
                    <p className="mil-accordion-head flex items-center justify-content-between">App active users are low</p>
                    <input type="checkbox" checked={appOpt3} />
                </div>
            </div>
            <div className="mil-accordion-group mil-up" onClick={handleAppOption4}>
                <div className="mil-accordion-menu">
                    <p className="mil-accordion-head flex items-center justify-content-between">Not enough transactions on the app</p>
                    <input type="checkbox" checked={appOpt4} />
                </div>
            </div>
            {/* <div className="col-lg-12">
                    <div className="mil-adaptive-right mil-up mil-mb-30">
                        <button type="submit" className="mil-button">
                            <span className="flex justify-center items-center">Next
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mil-arrow-nxt">
                                    <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div> */}
            <div class="mil-works-nav mil-up free-growth-plan-submit">
                <div class="mil-link mil-dark mil-arrow-place mil-icon-left mil-mb-30" onClick={handlePrevPage}>
                    <span class="flex no-wrap items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mil-arrow-nxt">
                        <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
                    </svg>
                        Previous</span>
                </div>
                <div className="mil-adaptive-right mil-up mil-mb-30">
                    {/* <button type="submit" className={`mil-button second-form-submit ${!submitActive?'mil-disabled':''}`}> */}

                    <button type="submit" className={`mil-button second-form-submit ${choosenOne? '':'mil-disabled'}`}>
                        <span class="flex justify-center items-center">Next
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mil-arrow-nxt">
                                <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </form>
    );
};

const ThirdForm = ({ onFormSubmit, onPrevPage }) => {

    const [brand, setBrand] = React.useState(false);
    const [website, setWebsite] = React.useState(false);
    const [app, setApp] = React.useState(false);


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        brandName: '',
        indication: '',
        websiteUrl: '',
        primaryTargetAudience: '',
        appStoreLink: '',
        playStoreLink: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };
    const handlePharma = (e) => {
        // e.preventDefault();
        setPharma(!pharma);
    }
    const handleHospital = (e) => {
        // e.preventDefault();
        setHospital(!hospital);
    }
    const handleHealthtech = (e) => {
        // e.preventDefault();
        setHealthtech(!healthtech);
    }
    const handleHealthcare = (e) => {
        // e.preventDefault();
        setHealthcare(!healthcare);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('name',formData.name)
        onFormSubmit();
        // Handle form submission logic here
        console.log(formData);
    };

    const handlePrevPage = () => {
        onPrevPage();
    }
    useEffect(() => {
        const selectedCategories = localStorage.getItem('selectedCategories');
        if (selectedCategories) {
            setBrand(JSON.parse(selectedCategories).brand);
            setWebsite(JSON.parse(selectedCategories).website);
            setApp(JSON.parse(selectedCategories).app);
        }
    }, [])

    return (
        <div>
            <form class="row align-items-center" onSubmit={handleSubmit}>
                <div className="col-lg-12 mil-up flex mil-mb-30">
                    <h4>Give us some more details </h4>
                </div>
                <div className="col-lg-6 mil-up">
                    <input
                        type="text"
                        name="name"
                        placeholder="What's your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-lg-6 mil-up">
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-lg-6 mil-up">
                    <input
                        type="text"
                        name="contactNumber"
                        title="Invalid Mobile Number"
                        pattern="[1-9]{1}[0-9]{9}"
                        placeholder="Your Contact Number"
                        value={formData.contactNumber}
                        onChange={handleChange}
                    />
                </div>
                {brand && (

                    <div className="col-lg-6 mil-up">
                        <input
                            type="text"
                            name="brandName"
                            placeholder="What's your brand name"
                            value={formData.brandName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                )
                }
                {brand && (

                    <div className="col-lg-6 mil-up">
                        <input
                            type="text"
                            name="indication"
                            placeholder="Indication"
                            value={formData.indication}
                            onChange={handleChange}
                            required
                        />
                    </div>

                )
                }
                {website && (
                    
                        <div className="col-lg-6 mil-up">
                            <input
                                type="text"
                                name="websiteUrl"
                                placeholder="Website Url"
                                value={formData.websiteUrl}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                    
                )}
                {website && (
                    
                    
                    <div className="col-lg-6 mil-up">
                        <input
                            type="text"
                            name="primaryTargetAudience"
                            placeholder="Primary target audience"
                            value={formData.primaryTargetAudience}
                            onChange={handleChange}
                            required
                        />
                    </div>
                
            )}
                {app && (
                   
                        <div className="col-lg-6 mil-up">
                            <input
                                type="text"
                                name="appStoreLink"
                                placeholder="App store link"
                                value={formData.appStoreLink}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                )}
                {app && (
                   
                       
                        <div className="col-lg-6 mil-up">
                            <input
                                type="text"
                                name="playStoreLink"
                                placeholder="Play store link"
                                value={formData.playStoreLink}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                )}
                {app && (
                   
                        <div className="col-lg-6 mil-up">
                            <input
                                type="text"
                                name="primaryTargetAudience"
                                placeholder="Primary target audience"
                                value={formData.primaryTargetAudience}
                                onChange={handleChange}
                                required
                            />
                        </div>
                   
                )}
                {/* <div class="col-lg-12 mil-up">
                    <textarea placeholder="Wanna Tell Us Something?"></textarea>
                </div> */}
                <div class="col-lg-8">
                    <p class="mil-up mil-mb-30"><span class="mil-accent">*</span> We promise not to disclose your personal information to third parties.</p>
                </div>
                <div className="col-lg-12 flex justify-center items-center">
                    <div class="col-lg-6 mil-works-nav mil-up free-growth-plan-submit">
                        <div class="mil-link mil-dark mil-arrow-place mil-icon-left mil-mb-30" onClick={handlePrevPage}>
                            <span class="flex no-wrap items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="mil-arrow-nxt">
                                <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
                            </svg>
                                Previous</span>
                        </div>
                        <div className="mil-adaptive-right mil-up mil-mb-30">
                            <button type="submit" className="mil-button">
                                <span className="flex justify-center items-center">Submit
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mil-arrow-nxt">
                                        <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>

                </div>
            </form>
        </div>

    );
};
const FourthForm = ({ onFormSubmit }) => {

    const [brand, setBrand] = React.useState(false);
    const [website, setWebsite] = React.useState(false);
    const [app, setApp] = React.useState(false);
    const [name,setName] = useState('');

    const handlePharma = (e) => {
        // e.preventDefault();
        setPharma(!pharma);
    }
    const handleHospital = (e) => {
        // e.preventDefault();
        setHospital(!hospital);
    }
    const handleHealthtech = (e) => {
        // e.preventDefault();
        setHealthtech(!healthtech);
    }
    const handleHealthcare = (e) => {
        // e.preventDefault();
        setHealthcare(!healthcare);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onFormSubmit();
        // Handle form submission logic here
        console.log({ name, email, phone, message });
    };

    useEffect(() => {
        const get_name = localStorage.getItem('name');
        if(get_name){
            setName(get_name);
        }
    }, [])

    return (
        <div class='section h-90screen'>
            <div class="row justify-content-center">

                <div class="col-lg-8">
                    <h3 class={`mil-center mil-up mil-mb-60 }`}>Thank you for sharing your challenges, {name}.</h3>
                    <p class="mil-text-xl mil-dark mil-up mil-mb-60"> You will receive your growth plan within 5 business days. Meanwhile you can check out some of our case studies <a
                        href='/portfolio-1.html'
                        style={{
                            textDecoration: 'underline',
                            color: '#333' // Adjust the color code to make it a bit darker
                        }}
                    >
                        here.
                    </a>

                    </p>






                </div>
            </div>

        </div>

    );
};
const MainComponent = () => {
    const [firstFormSubmit, setFirstFormSubmit] = React.useState(false);
    const [secondFormSubmit, setSecondFormSubmit] = React.useState(false);
    const [thirdFormSubmit, setThirdFormSubmit] = React.useState(false);
    const [activeSubForm, setActiveSubForm] = useState('')
    const handleFirstFormSubmit = () => {
        setFirstFormSubmit(true);
        setActiveSubForm('');
    }

    const handleSecondFormSubmit = () => {
        setSecondFormSubmit(true);
    }

    const handlePrevSecondForm = () => {
        setFirstFormSubmit(false);
    }

    const handleThirdFormSubmit = () => {
        setThirdFormSubmit(true);
    }

    const handlePrevThirdForm = () => {
        const selectedCategories = localStorage.getItem('selectedCategories');
        console.log("selectedCategories=",selectedCategories);
        if(selectedCategories){
            const parsedCategories = JSON.parse(selectedCategories);
            if(parsedCategories.brand){
                setActiveSubForm('brand');
            }
            else if(parsedCategories.website){
                setActiveSubForm('website');
            }
            else{
                setActiveSubForm('app');
            }
        }
        
        setSecondFormSubmit(false);
        

    }
    return (
        <div>
            <h3 class={`mil-center mil-up mil-mb-120 ${thirdFormSubmit ? 'hidden-div' : ''}`}><span class="mil-thin">Get Your</span> Free Growth Plan</h3>
            {!firstFormSubmit ? <FirstForm onFormSubmit={handleFirstFormSubmit} /> : (!secondFormSubmit ? <SecondForm onFormSubmit={handleSecondFormSubmit} onPrevPage={handlePrevSecondForm} activeSubForm={activeSubForm}/> : (!thirdFormSubmit ? <ThirdForm onFormSubmit={handleThirdFormSubmit} onPrevPage={handlePrevThirdForm} /> : <FourthForm />))}
            {/* <FourthForm /> */}
        </div>
    )
}

ReactDOM.render(<MainComponent />, document.getElementById('reactFormContainer'));