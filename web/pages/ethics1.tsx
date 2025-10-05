import BottomBar from "@/components/bottombar";
import NavBar from "@/components/navbar";
const Ethics1 = () => {
  return (
    <>
      <NavBar />
      <div className="bg-background flex flex-col items-center text-text w-full font-roboto min-h-screen pb-[15%]">
        <p className="text-4xl mt-[5%]"> Ethics Assignment 1 </p>
        <br></br>
        <div className="container mx-auto px-[15%]">
          <p className="text-xl">  </p>
          <p className="text-lg"><b>Cambridge Analytica & Facebook</b> </p>
          <li>
            <b>Situation: </b>A quiz app on Facebook collected data not just from the user, but also from all their friends, because the Facebook API at the time allowed such wide access. This data was then fed into machine learning models to build psychographic profiles of millions of people.
          </li>
          <li>
            <b>Behavior: </b>Those profiles were used to deliver hyper-targeted political ads designed to manipulate voter behavior exploiting psychological vulnerabilities.
          </li>
          <li>
            <b>Why Unethical: </b>Engineers didn’t just use machine learning to make things more personal , they also used it to subtly shape people’s behavior. Facebook’s API was built in a way that left it wide open, allowing massive amounts of data to be taken without users ever really knowing or agreeing to it. In the end, people lost their privacy, trust was broken, and even democracy took a hit.
          </li>
          <li>
            <b>Responsibility: </b>Both engineers, for not building protections into APIs  and leadership, for monetizing that access.
          </li>
        </div>
        <br></br>
        <div className="container mx-auto px-[15%]">
          <p className="text-xl">  </p>
          <p className="text-lg"><b>Uber’s “Greyball” Program </b> </p>
          <li>
            <b>Situation: </b>Uber developed internal software called Greyball that identified regulators or law enforcement officers based on geolocation, credit card metadata, and app usage patterns. When detected, those users were shown a fake version of the app with ghost cars, so they couldn’t hail rides to catch illegal drivers.
          </li>
          <li>
            <b>Behavior: </b>The software actively deceived government officials, making it nearly impossible to enforce local taxi laws.
          </li>
          <li>
            <b>Why Unethical: </b>Engineers deliberately created a system of data-driven discrimination, deciding who sees the real app and who sees the fake one. 
          </li>
          <li>
            <b>Responsibility: </b>Both engineers implemented a deceptive algorithm, and leadership sanctioned it.
          </li>
        </div>
        <br></br>
        <div className="container mx-auto px-[15%]">
          <p className="text-xl">  </p>
          <p className="text-lg"><b>TikTok’s Algorithm & Content Moderation Bias</b> </p>
          <li>
            <b>Situation: </b>TikTok’s recommendation system selects videos based on engagement factors like watch time, likes, and shares. However, leaked moderation guidelines showed that the app intentionally downranked content from disabled, LGBTQ+, or “unattractive” users under the pretext of preventing bullying.
          </li>
          <li>
            <b>Behavior: </b>This meant marginalized users’ voices were systematically silenced. Algorithm also trapped users in filter bubbles, pushing harmful content like eating disorder videos once they showed slight interest.
          </li>
          <li>
            <b>Why Unethical: </b>Optimizing only for engagement without considering user well-being created amplification of harm. Moderation rules were discriminatory by design.
          </li>
          <li>
            <b>Responsibility: </b>It goes to the product behavior since the algorithm’s optimization goals and  corporate bias in moderation policies.
          </li>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default Ethics1;