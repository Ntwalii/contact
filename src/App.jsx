import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import Socials from "./components/Socials";
export default function App() {
  const [content, setContent] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch('./content.json');
      const data = await response.json();
      setContent(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // const socials=content[3].map(picture=>{
  //   return 
  // })
  return (
    <main>
      {content && (
        <div className="flex">
          <div className="w-3/5">
          <ContactForm 
          title={content[0].title}
          subtitle={content[0].subtitle}
          name={content[0]["name-input"]}
          mail={content[0]["mail-input"]}
          textarea={content[0]["textarea"]}
          />
          </div>
          <div className="w-2/5">
          <ContactInfo
          title={content[1].title}
          address={content[1]["sub-content"]['address']["title"]}
          addressBody={content[1]["sub-content"]['address']["content"]}
          addressPicture={content[1]["sub-content"]['address']["picture"]}
          phone={content[1]["sub-content"]['phone']["title"]}
          phoneBody={content[1]["sub-content"]['phone']["content"]}
          phonePicture={content[1]["sub-content"]['phone']["picture"]}
          mail={content[1]["sub-content"]['Email']["title"]}
          emailBody={content[1]["sub-content"]['Email']["content"]}
          emailPicture={content[1]["sub-content"]['Email']["picture"]}
          />
          </div>
        </div>
      )}
      <div className="flex flex-row gap-5 justify-center mb-7">

      </div>
    </main>
  );
}
