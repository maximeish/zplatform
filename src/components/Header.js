import { Link } from "react-router-dom";

export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
}) {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img
          alt=""
          className="h-14 w-14"
          src="https://ik.imagekit.io/zplatform/1077055_4175_axhoTZlDm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660512439956"
        />
      </div>
      <p className="text-center text-xs text-gray-400 tracking-wide">
        Access various online services with ease
      </p>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="text-center text-sm text-gray-600 mt-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-sky-400 hover:text-sky-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
