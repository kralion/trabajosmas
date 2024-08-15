const HomepageTab = ({ homepage_tab: { img, title, description } }) => {
  return (
    <div className="tab gx-5 row items-center">
      <div className="lg:col-7 lg:order-2">
        <div className="tab-content">
          <img className="w-full object-contain rounded-xl" src={img} />
        </div>
      </div>
      <div className="mt-6 lg:col-5 lg:order-1 lg:mt-0">
        <div className="text-container">
          <h2 className="lg:text-4xl">{title}</h2>
          <p className="lg:mt-4 my-8">{description}</p>
          {/* <ul className="tab-nav mt-8 border-b-0"></ul> */}
        </div>
      </div>
    </div>
  );
};

export default HomepageTab;
