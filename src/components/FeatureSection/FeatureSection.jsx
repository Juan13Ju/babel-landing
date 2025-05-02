import FeatureCard from "../FeatureCard/FeatureCard";
import InstantLogo from '../../assets/instant.svg'
import CommunityLogo from "../../assets/community.svg";
import ConnectedLogo from "../../assets/connected.svg";

const FeatureSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Makes Us Different
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          We focus on real connections, safety, and language freedom — here’s how.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <FeatureCard
          icon={InstantLogo}
          title="Instant Connection"
          description="No schedules, no waiting. Choose your language and start chatting right away."
        />
        <FeatureCard
          icon={CommunityLogo}
          title="Safe & Respectful Community"
          description="Zero tolerance. Our smart moderation and ranking system keep things kind."
        />
        <FeatureCard
          icon={ConnectedLogo}
          title="Speak the Languages You Love"
          description="Select all the languages you speak and learn — we’ll match you accordingly."
        />
      </div>
    </section>
  );
};

export default FeatureSection;
