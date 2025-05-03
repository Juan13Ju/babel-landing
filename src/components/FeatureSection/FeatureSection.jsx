import FeatureCard from "../FeatureCard/FeatureCard";
import InstantLogo from '../../assets/instant.svg'
import CommunityLogo from "../../assets/community.svg";
import ConnectedLogo from "../../assets/connected.svg";
import { useTranslation } from "react-i18next";

const FeatureSection = () => {
  const {t} = useTranslation();
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {t('features.title')}
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          {t('features.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <FeatureCard
          icon={InstantLogo}
          title={t('features.connection.title')}
          description={t('features.connection.subtitle')}
        />
        <FeatureCard
          icon={CommunityLogo}
          title={t('features.safe.title')}
          description={t('features.safe.subtitle')}
        />
        <FeatureCard
          icon={ConnectedLogo}
          title={t('features.speak.title')}
          description={t('features.speak.subtitle')}
        />
      </div>
    </section>
  );
};

export default FeatureSection;
