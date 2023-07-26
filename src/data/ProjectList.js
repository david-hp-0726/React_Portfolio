import Image_Blog from '../assets/blog.png';
import Image_Todoapp from '../assets/todoapp.png';
import Image_Xgboost from '../assets/xgboost.png';
import Image_Translation from '../assets/translation.png';
import Image_Ecommerce from '../assets/ecommerce.png'

const ProjectList = [
    { 
        name: "Amazon Mock-up",
        language: "JavaScript", 
        framework_library: "React",
        github_link: "https://github.com/david-hp-0726/Ecommerce_App",
        image: Image_Ecommerce
    },
    {
        name: "Markdown Article Blog", 
        language: "JavaScript",
        framework_library: "React",
        github_link: "https://github.com/david-hp-0726/Markdown_Blog",
        image: Image_Blog
    },
    {
        name: "Task Manager",
        language: "Python",
        framework_library: "Django",
        github_link: "https://github.com/david-hp-0726/To_Do_App",
        image: Image_Todoapp
    },
    {
        name: "Study Covid-19 with ML Model",
        language: "Python",
        framework_library: "XGBoost",
        github_link: "https://github.com/david-hp-0726/Python_Data_Science_Project",
        image: Image_Xgboost
    },
    {
        name: "Analysis of GCloud Translation API", 
        language: "Python",
        framework_library: "Google Cloud",
        github_link: "https://github.com/david-hp-0726/Gcloud_Translation_API_Project",
        image: Image_Translation
    }
]

export default ProjectList;