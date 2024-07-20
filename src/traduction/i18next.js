import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources  = {
    fr : {
        translation : {
            "aboutMe" : "Merci d'avoir pris le temps de visiter mon site ! Je m'appelle Mahmoudou GOUMANE, et je suis un jeune développeur passionné par les langages de programmation. Fraîchement diplômé avec un Bac+3 en conception et développement d'applications, je suis actuellement en reconversion après une enrichissante expérience dans le secteur de l'automobile. Mon objectif est de devenir un excellent programmeur. Je serais ravi de collaborer avec toi pour développer tes projets, tout en apprenant de ton expérience et de celle de ton équipe.Si je devais me décrire en trois mots, ce serait : persévérance, organisation et minutie.",
        }
    },
    en : {
        translation : {
            "aboutMe" : "Thank you for taking the time to visit my site! My name is Mahmoudou GOUMANE, and I am a young developer passionate about programming languages. Recently graduated with a Bac+3 in application design and development, I am currently retraining after an enriching experience in the automotive sector. My goal is to become an excellent programmer.I would be delighted to collaborate with you to develop your projects, while learning from your experience and that of your team.If I had to describe myself in three words, they would be: perseverance, organization and meticulousness.",
        }
    }
}

i18n
  .use(initReactI18next) 
  .init({
    resources ,
    lng: "fr", // Langue par défaut
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;