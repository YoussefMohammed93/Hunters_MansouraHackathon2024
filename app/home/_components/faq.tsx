import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <section className="py-10">
      <h1 className="text-5xl text-center mb-8 text-[#33576E]">FAQ</h1>
      <div className="max-w-7xl mx-auto sm:w-8/12 px-5">
        <Accordion
          type="single"
          collapsible
          className="bg-[#33576E] rounded-lg"
        >
          <AccordionItem value="item-1" className="px-5 py-3 text-white">
            <AccordionTrigger className="text-xl">
              What is F-SKTK?
            </AccordionTrigger>
            <AccordionContent>
              F-SKTK is a carpooling app that connects drivers with available
              seats to riders heading in the same direction, making travel
              cost-effective, eco-friendly, and convenient.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="bg-[#33576E] rounded-lg mt-5"
        >
          <AccordionItem value="item-1" className="px-5 py-3 text-white">
            <AccordionTrigger className="text-xl">
              How do I book a ride?
            </AccordionTrigger>
            <AccordionContent>
              Simply search for your departure and destination locations, select
              a ride that suits your needs, and book it directly through the
              app.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="bg-[#33576E] rounded-lg mt-5"
        >
          <AccordionItem value="item-1" className="px-5 py-3 text-white">
            <AccordionTrigger className="text-xl">
              How do I offer a ride?{" "}
            </AccordionTrigger>
            <AccordionContent>
              If {"you're"} a driver, log in to your account, click{" "}
              <q>Passenger</q>
              and fill in the details like destination, departure time, and
              available seats.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="bg-[#33576E] rounded-lg mt-5"
        >
          <AccordionItem value="item-1" className="px-5 py-3 text-white">
            <AccordionTrigger className="text-xl">
              Is F-SKTK safe?
            </AccordionTrigger>
            <AccordionContent>
              Safety is our top priority. All users must verify their profiles
              through a High-quality verification process, and our rating system
              ensures accountability. Additionally, we offer an emergency
              contact feature during trips.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="bg-[#33576E] rounded-lg mt-5"
        >
          <AccordionItem value="item-1" className="px-5 py-3 text-white">
            <AccordionTrigger className="text-xl">
              How are prices calculated?
            </AccordionTrigger>
            <AccordionContent>
              Drivers determine the price of their rides based on factors such
              as distance and the daily fuel prices. To ensure fairness, they
              cannot set prices that deviate significantly from the current fuel
              rates. Riders can review and accept the price before booking.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
