import Image from "next/image";
import Navbar from "~/components/NavBar";

const Contact = () => {
  return (
    <>
      <div className="bg-white text-black">
        <Navbar />
        <div className=" p-5 text-center text-4xl text-primary">Contact Us</div>

        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center p-5">
          <div className="w-full p-5 lg:w-6/12 xl:w-7/12">
            <div className="space-y-5">
              <h4 className="text-3xl font-bold">Contact Us</h4>
              <p className="text-md">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
                alteration in some form.
              </p>
              <form className="space-y-3">
                <div className="-mx-2 flex flex-wrap">
                  <div className="w-full p-2 md:w-6/12">
                    <div className="mb-2">
                      Name <span className="text-red-500">*</span>
                    </div>
                    <input
                      type="text"
                      className="w-full border border-primary px-4 py-2 focus:border-primary focus:outline-none"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="w-full p-2 md:w-6/12">
                    <div className="mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </div>
                    <input
                      type="email"
                      className="w-full border border-primary px-4 py-2 focus:border-primary focus:outline-none"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div className="w-full p-2 md:w-6/12">
                    <div className="mb-2">
                      Phone <span className="text-red-500">*</span>
                    </div>
                    <input
                      type="tel"
                      className="w-full border border-primary px-4 py-2 focus:border-primary focus:outline-none"
                      placeholder="123 123 123"
                    />
                  </div>
                  <div className="w-full p-2 md:w-6/12">
                    <div className="mb-2">
                      Date <span className="text-red-500">*</span>
                    </div>
                    <input
                      type="date"
                      className="w-full border border-primary px-4 py-2 focus:border-primary focus:outline-none"
                      placeholder="mm - dd - yyyy"
                    />
                  </div>

                  <div className="w-full p-2">
                    <div className="mb-2">
                      Your message <span className="text-red-500">*</span>
                    </div>
                    {/* <textarea
                      cols="10"
                      rows="5"
                      className="w-full border border-primary px-4 py-2 focus:border-primary focus:outline-none"
                    /> */}
                  </div>
                </div>
                <label className="flex cursor-pointer items-center">
                  <input
                    className="mr-2 h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[rgba(0,0,0,0.25)] bg-white outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:bg-white focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
                    type="checkbox"
                  />
                  <div>
                    You agree to our friendly{" "}
                    {/* <Link className="ml-1 inline-block underline" to="/" alt="">
                      privacy policy.
                    </Link> */}
                  </div>
                </label>
                <div className="text-right">
                  <button className="rounded-lg border bg-black px-4 py-2 text-white hover:border-transparent hover:bg-primary hover:text-black">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full p-5 lg:w-6/12 xl:w-5/12">
            <Image
              width={500}
              height={500}
              src="/../assets/images/map.png"
              alt="dummy Map"
              className="mt-6 pr-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
