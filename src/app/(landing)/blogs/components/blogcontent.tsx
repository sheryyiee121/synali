export interface BlogSection {
  id: string;
  title: string;
  content: string;
  image: string;
}

export const blogSections: BlogSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content:
      "Welcome to Scouting, your intelligent interview dashboard packed with powerful features to simplify candidate screening and streamline the hiring process.The Scouting dashboard offers an intuitive overview where employers can track interview stats, monitorcandidate progress, and view upcoming interviews at a glance.",
    image: "/images/Dashboard.png",
  },
  {
    id: "Total Jobs",
    title: "Total Jobs",
    content:
      "The Total Saved Job section shows how many interview setups you've created and saved for easy access and management.",
    image: "",
  },
  {
    id: "Application",
    title: "Application",
    content:
      "The Applications section displays the total number of candidates who have applied or been added for interviews.",
    image: "",
  },
  {
    id: "Interview",
    title: "Interview",
    content:
      "The Interview section shows the total number of candidate interviews scheduled and managedthrough the dashboard.",
    image: "",
  },

  {
    id: "Jobs Posted",
    title: "Jobs Posted",
    content:
      "The Jobs Posted section shows the total number of job openings you have published for candidates.From the left side panel, you can easily navigate to jobs, settings, and the Help Center for Quick Access and Control.",
    image: "",
  },
  {
    id: "Job Section (From Navigation Panel)",
    title: "Job Section (From Navigation Panel)",
    content:
      "In the Jobs section, you can view all the jobs you have posted, including detailed information,and had new job openings easily.",
    image: "",
  },
  {
    id: "Job Card Design Explanation",
    title: "Job Card Design Explanation",
    content:
      "Each job card shows the current status first, followed by the job title and description for easy tracking.",
    image: "",
  },
  {
    id: "Filter Feature",
    title: "Filter Feature",
    content:
      "You can filter jobs by their status open or closed for easier management.",
    image: "",
  },
  {
    id: "Create a New Job",
    title: "Create a New Job",
    content:
      "Easily create a new job by clicking the Create button at the top right.Provide detailed job information, including title, experience required, salary offered, working hours,job type, and description. Click on Save to save the job details and post the job.",
    image: "",
  },
  {
    id: "Customize the Job Details",
    title: "Customize the Job Details",
    content:
      "To customize a job and schedule interviews, simply click on the specific job card you want to manage.By clicking a job card, you'll be able to see all the job details clearly.",
    image: "",
  },
  {
    id: "Edit Job Basic Details",
    title: "Edit Job Basic Details",
    content:
      "You can edit the job details by clicking the Edit button at the top right of the job page.",
    image: "",
  },
  {
    id: "Create an Interview",
    title: "Create an Interview",
    content:
      "To create an interview for this job, simply click on the Generate Interview button. Click on Generate Questions to let scouting AI create relevant interview questions for this job. You can view all the interview questions that scouting AI has generated for you. Click on Add Custom Question to include your own questions tailored to this interview. Type your question along with its answer and add as many custom questions as you need.",
    image: "",
  },
  {
    id: "View Status of the Applications",
    title: "View Status of the Applications",
    content:
      "Click on Applications to view the status and the ATA scores of all the applicants for the job. Filter candidates based on their status approved, pending, or rejected for easy review.",
    image: "",
  },
  {
    id: "Schedule Interview",
    title: "Schedule Interview",
    content:
      "To schedule a new interview, click on Schedule Interview at the top right. Enter the exact date and time for the interview, then click on Schedule to confirm.",
    image: "",
  },
  {
    id: "Results of the Interview",
    title: "Results of the Interview",
    content:
      "Click on Results to view candidate outcomes and filter to short list top talent. You will be able to see candidate scores, selection status, and feedback in the Results section.",
    image: "",
  },
  {
    id: "Settings Overview",
    title: "Settings Overview",
    content:
      "The Settings section lets you customize your dashboard, manage account details, and adjust system preferences.Customize your profile, account settings, dashboard appearance, notifications, and display for a personalized experience.",
    image: "",
  },
  {
    id: "Company Profile",
    title: "Company Profile",
    content:
      "Add or update your company's profile easily by clicking on profile. Add your company logo, name, email, website country, social links, Instagram, LinkedIn, et cetera, description, benefits, and values. Click on Save Changes to update and save your company profile information.",
    image: "",
  },
  {
    id: "Outro",
    title: "Outro",
    content:
      "That's a quick look at the scouting dashboard, making hiring easier and smarter. Try scouting today and simplify your recruitment.",
    image: "",
  },
];
