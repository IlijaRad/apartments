const LocationIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.6001 47.2002H32.0001"
      stroke="#6B7280"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M43.1999 19.2C43.1999 9.03765 34.9623 0.800049 24.7999 0.800049C14.6375 0.800049 6.3999 9.03765 6.3999 19.2C6.3999 27.7496 12.2319 34.936 20.1343 37.0016L24.7999 43.7369L29.4655 37.0016C37.3679 34.936 43.1999 27.7496 43.1999 19.2V19.2Z"
      stroke="#6B7280"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M35.0026 26.9313C36.633 24.7833 37.6002 22.1049 37.6002 19.2001C37.6002 12.4265 32.3394 6.88169 25.6802 6.42969"
      stroke="#6B7280"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M16.2544 28.7305C18.5208 30.7633 21.516 32.0001 24.8 32.0001C28.0808 32.0001 31.0736 30.7657 33.3392 28.7361"
      stroke="#6B7280"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M23.9104 6.43042C17.256 6.88722 12 12.4296 12 19.2C12 22.1048 12.9672 24.7832 14.5976 26.9312"
      stroke="#6B7280"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M5.6001 35.2002V39.2002"
      stroke="#6B7280"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M5.6001 42.3999V46.3999"
      stroke="#6B7280"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M11.2002 40.7998H7.2002"
      stroke="#6B7280"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M4 40.7998H0"
      stroke="#6B7280"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M47.2002 12.0001V5.6001"
      stroke="#6B7280"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M47.2002 4.0001V1.6001"
      stroke="#6B7280"
      stroke-width="2"
      stroke-miterlimit="10"
    />
  </svg>
);

const LocationSection = () => {
  return (
    <div id="location" className="border border-gray-200 py-12">
      <h4 className="text-center text-2xl font-semibold leading-10 tracking-tight text-gray-900 lg:text-[32px]">
        Where are we located?
      </h4>
      <div className="mx-auto mt-6 w-fit">
        <LocationIcon />
      </div>
      <p className="mx-auto mt-8 max-w-xs text-center font-medium tracking-tight text-gray-700">
        Cavtat, Dubrovačko-neretvanska županija, Croatia
      </p>
    </div>
  );
};

export default LocationSection;
