import React from "react";

const ServiceCard = ({ title, main_icon, desc, list }) => {
  return (
    <div className="animate-fade-in-up pt-6">
      <div className="flow-root rounded-3xl border-4 px-6 pb-8">
        <div className="-mt-6">
          <div>
            <span className="inline-flex items-center justify-center rounded-xl bg-white p-3 text-secondary shadow-lg">
              {main_icon}
            </span>
          </div>
          <h3 className="mt-8 text-xl font-medium tracking-tight text-white">
            {title}
          </h3>
          <p className="mt-3 text-base leading-tight text-gray-300">{desc}</p>
          <dl className="mt-6 space-y-2 md:mt-3 md:space-y-2">
            {list?.map((list, i) => (
              <div key={i} className="flex items-start">
                <div className="flex-shrink-0">{list.icon}</div>
                <div className="ml-3">
                  <dt className="text-sm font-medium text-white">
                    {list.title}
                  </dt>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
