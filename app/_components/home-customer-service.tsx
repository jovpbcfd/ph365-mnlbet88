import Dot from "@/components/dot";

export default function CustomerService() {
  return (
    <section>
      <div className="max-w-[1200px] mx-auto text-white lg:my-8">
        <h2 className="text-[30px] font-bold text-center mb-2 lg:mb-3">
          How can I contact Ph365 customer service?
        </h2>
        <p>
          Around-the-clock, our dedicated customer support team is on hand to
          ensure that using our platform offers the best possible experience.
          Should you run across any issues or have questions about your account,
          payment methods, game policies, or anything else, please contact us
          without delay. We offer many channels of contact so that we may assist
          you in the most efficient manner possible.
        </p>
        <p>One can contact our support personnel by:</p>
        <ul>
          <li className="flex items-center gap-4 mt-4">
            <Dot />
            <div>
              <p>
                <strong>Live Chat:</strong> Directly on our website, the live
                chat feature links you with a support agent in real-time thereby
                enabling us to provide quick and effective assistance.
              </p>
            </div>
          </li>
          <li className="flex items-center gap-4 mt-4">
            <Dot />
            <div>
              <p>
                <strong>Email:</strong> Should you prefer written discussion,
                you can reach our support team via email; we will forward
                back-off straight to you.
              </p>
            </div>
          </li>
          <li className="flex items-center gap-4 mt-4">
            <Dot />
            <div>
              <p>
                <strong>Phone:</strong> For more tailored assistance, our
                customer service team can also be accessed on phone. Our agents
                are instructed in answering queries and fast handling any issues
                you could have.
              </p>
            </div>
          </li>
        </ul>

        <div className="mt-2">
          <p>
            Our first focus at ph365 is customer satisfaction, hence, we work
            very hard to ensure that every player receives first-rate assistance
            whenever required.
          </p>
        </div>
      </div>
    </section>
  );
}
