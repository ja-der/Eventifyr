import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Explore, Find, Celebrate: Discover Ottawa, All In One Place!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Though ranked as the most boring city in Canada, there is a lot
              more than meets the eye.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Learn more about your next experience</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero2.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">
          A Collection <br /> of the Hottest Events
        </h2>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <p className="p-regular-16 md:p-regular-18">
            Welcome to Eventifyr, your ultimate guide to unlocking the vibrant
            and diverse world of events in Ottawa! Despite its reputation as one
            of the "boringest" cities in Canada, Ottawa is a dynamic hub with a
            thriving cultural scene and an array of exciting activities waiting
            to be discovered. As the nation's capital and a home to federal
            servants, Ottawa has often been overlooked, but Eventifyr is here to
            change that perception. We believe that every city has its own
            unique charm, and Ottawa is no exception. Our platform is dedicated
            to showcasing the multitude of events that contribute to the lively
            spirit of this remarkable city. <br />
            <br />
            <img
              src="/assets/images/ottawa-sign.png"
              alt="ottawa sign"
              className="object-contain object-center"
            />{" "}
            <br />
            At Eventifyr, we curate a comprehensive calendar featuring a wide
            range of events, from arts and entertainment to sports and community
            gatherings. Whether you're a local looking for new experiences or a
            visitor eager to explore beyond the typical tourist attractions,
            Eventifyr has you covered. Our goal is to highlight the richness of
            Ottawa's cultural tapestry and provide a one-stop resource for
            residents and visitors alike. Join us on a journey to redefine
            Ottawa as a city bursting with excitement and opportunities, and let
            Eventifyr be your passport to the best events in the capital.
            <br />
            <br />
            Discovering the heartbeat of Ottawa has never been easier. Eventifyr
            not only showcases major festivals and concerts but also highlights
            the smaller, hidden gems that add character to the city. We believe
            that every event, big or small, contributes to the unique tapestry
            of Ottawa's cultural landscape. As we debunk the myth of Ottawa
            being boring, Eventifyr is your ally in uncovering the countless
            reasons why this city is a thriving and dynamic place to live, work,
            and play. Embrace the diversity of Ottawa's events with Eventifyr –
            where the pulse of the city comes to life! <br />
            <br />
            Join the movement to redefine Ottawa's image with Eventifyr as your
            trusted companion. Our platform is designed to empower you to
            explore the city's vibrant events scene and make the most of your
            time in the nation's capital. Ottawa may have been underestimated in
            the past, but with Eventifyr, you'll never miss a beat in this
            exciting and evolving city. Let the adventure begin, and let
            Eventifyr be your guide to the extraordinary events that await you
            in Ottawa!
          </p>
        </div>
      </section>
    </main>
  );
}
