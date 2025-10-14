export default function AnimatedBorderCard() {
  const data = {
    image: {
      src: "/assets/icons/free-scm-check.png",
      alt: "Placeholder",
    },
    content: {
      title: "Free SCM Check",
    },
    style: {
      width: "90px",
      height: "100px",
    },
  };
  return (
    <a href="/supply-health-check-info" target="_blank">
      <div className="bg-[#000] grid place-items-center">
        {/* The container for our animated border */}
        <div className="moving-border">
          {/* Inner card content */}
          <div className=" flex flex-col items-center justify-center text-white py-2">
            <img src={data.image.src} alt={data.image.alt} width={40} />
            <p
              style={{
                fontSize: "10px",
                paddingTop: "5px",
              }}
            >
              {data.content.title}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
