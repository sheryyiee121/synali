import { Button } from "@/components/ui/button";
import Footer from "@/src/app/components/layout/footer";
import Navbar from "@/src/app/components/layout/header";

export default function Pricing() {
  return (
    <>
      <Navbar />
      <div
        data-aos="fade-up"
        className="w-full max-w-[1600px] m-auto flex flex-col items-start md:items-center justify-start lg:justify-center p-4 lg:px-6 lg:p-20"
      >
        <div className="flex flex-col justify-start lg:justify-center lg:items-center items-start gap-4 p-10">
          <h1 className="text-3xl md:text-5xl font-bold">Pricing Plans</h1>
          <p className=" text-[16px] md:text-[20px] font-semibold">
            Use <span className="font-bold">Scoutin</span> software for free or
            pick the premium features that fit your needs.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row  lg:items-center lg:justify-between border-2 rounded-lg  gap-20 lg:gap-90 p-4">
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <h3 className="font-bold">Start for free with 2 job postings</h3>
            <p>
              Enjoy 2 free active jobs for trial on Standard Plan—no fees, no
              commitment!
            </p>
          </div>
          <Button className=" flex  text-center " variant="default" size="lg">
            Get Started for free
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
