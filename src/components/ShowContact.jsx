import Button from "./Button";
import { Link } from "react-router-dom";

const ShowContact = ({ name, mobile, email, image, contactId, onDelete }) => {
  return (
    <div className="w-[360px] lg:w-[390px] h-[150px] bg-white mt-6 flex items-center justify-center px-1">
      <div>
        <img
          src={image}
          alt=""
          className="w-[100px] h-[100px] object-cover rounded-full"
        />
      </div>
      <div className="ml-2 px-2 py-1 text-sm">
        <p className="">Name: {name}</p>
        <p className="">Mobile: {mobile}</p>
        <p className="">Email: {email}</p>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <Link to={`/contacts/view/${contactId}`}>
          <Button styles={"bg-yellow-600 hover:bg-yellow-800"}>View</Button>
        </Link>
        <Link to={`/contacts/edit/${contactId}`}>
          <Button styles={"bg-green-950 hover:bg-green-900"}>Edit</Button>
        </Link>
        <Button
          onClick={() => onDelete(contactId)}
          styles={"bg-red-600 hover:bg-red-700"}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ShowContact;
