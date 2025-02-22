import React from 'react';
import '../styles/Features.css'; // Import the CSS file

const featuresData = [
  {
    title: "CourtRoom",
    description: "Lawyer.AI includes a feature called Courtroom, designed to provide a seamless and professional virtual meeting space where lawyers and Civilians can connect and collaborate efficiently.",
  },
  {
    title: "Blog",
    description: "Lawyer.AI offers a dedicated Blog, where experienced lawyers can share their insights and expertise with law students through informative blogs. This platform enables legal professionals to guide aspiring lawyers by sharing real-world experiences, best practices, and industry knowledge.",
  },
  {
    title: "AI-Powered Legal Assistance",
    description: "Lawyer.AI provides real-time legal advice, assisting in legal research, case management, and document drafting. It helps reduce the workload of legal professionals by offering automated solutions for routine tasks. The AI leverages the latest advancements in machine learning and legal databases to provide precise and relevant information for each case. With this feature, legal teams can significantly improve productivity while ensuring the accuracy of their work.",
  },
  {
    title: "Handcrafted Dataset",
    description: "The Lawyer.AI team has meticulously developed a comprehensive and highly personalized dataset consisting of over 12000 lines. This extensive dataset has been carefully curated to ensure accuracy, relevance, and efficiency in delivering legal insights. By leveraging advanced data processing techniques, the dataset is designed to enhance the platform’s ability to provide precise, context-aware, and intelligent legal solutions, ultimately improving the overall user experience for both lawyers and clients.",
  },
  {
    title: "IPC Dictionary",
    description: "This platform functions as a comprehensive and user-friendly dictionary specifically designed to assist users in locating detailed information regarding various sections of the Indian Penal Code (IPC). By providing an extensive repository of legal definitions, explanations, and interpretations, it serves as an invaluable resource for legal professionals, students, and anyone seeking to understand the intricacies of criminal law in India. ",
  },
  {
    title: "Wide Range of Knowledge",
    description: "Trained across various legal fields, Lawyer AI provides insights into different areas of law, aiding research, case preparation, and legal assistance. From corporate law to criminal justice, it serves as a valuable resource for attorneys, paralegals, and students. It references precedents, statutes, and legal principles, making it a comprehensive legal tool. With continuous learning, it stays updated with the latest legal developments.",
  },
  {
    title: "24/7 Availability",
    description: "Accessible anytime, Lawyer.AI ensures instant responses, making legal guidance and information available around the clock. Whether it's late-night research or urgent case assistance, it offers reliable support. Clients and lawyers can access information without time constraints, improving efficiency and responsiveness. This feature eliminates the need to wait for office hours, making legal help more accessible and convenient.",
  },
  
  {
    title: "Natural Language Understanding",
    description: "Lawyer.AI can understand and generate human-like text, ensuring more meaningful and fluid conversations for legal professionals and clients alike. It analyzes complex legal queries and provides clear, concise, and contextually accurate responses. With advanced NLP capabilities, it bridges the gap between legal jargon and everyday language, making law more accessible. Whether drafting documents or answering questions, it ensures clarity and precision.",
  },
];

const Features = () => {
  return (
    <div className="features-background border-2 border-blue-500 p-10 gradient-bg flex">
      <div className="features-container">
        <strong><h1>Features of Lawyer.AI</h1></strong> <hr />
        <div className="features-list">
          {featuresData.map((feature, index) => (
            <div className="feature-item" key={index}>
              <h2>{feature.title}</h2>
              <p className="feature-description">
                {feature.description.split(" ").slice(0, 10).join(" ")}...
              </p>
              <p className="feature-description-full">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Features;