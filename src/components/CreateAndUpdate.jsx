import Button from "./Button";
import { Link } from "react-router-dom";
import Spinnar from "./Spinnar";

const CreateAndUpdate = ({
  title,
  groups,
  groupsLength,
  groupName,
  createOrUpdate,
  style,
  handleInputUpdate,
  stateContactName,
  stateContactMobile,
  stateContactEmail,
  stateContactCompany,
  stateContactTitle,
  stateContactImageURL,
  stateContactGroupId,
  onSubmit,
  loading,
}) => {
  console.log(groups);
  return (
    <main className="px-3 lg:px-16 bg-green-100 w-full h-[100vh] pt-[120px]  ">
      <p className="text-xl font-medium">{title}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, at.</p>

      {loading ? (
        <div className="flex items-center justify-center ">
          {" "}
          <Spinnar />
        </div>
      ) : (
        <div className="w-full mt-4 ">
          <form action="" className="flex flex-col justify-center gap-3">
            <input
              required={true}
              name="name"
              value={stateContactName}
              onChange={handleInputUpdate}
              type="text"
              placeholder="Name"
              className="px-2 border border-black rounded-sm w-[300px] lg:w-[350px]"
            />
            <input
              required={true}
              name="imageUrl"
              value={stateContactImageURL}
              onChange={handleInputUpdate}
              type="url"
              placeholder="Photo url"
              className="px-2 border border-black rounded-sm w-[300px] lg:w-[350px]"
            />

            <input
              required={true}
              name="mobile"
              value={stateContactMobile}
              onChange={handleInputUpdate}
              type="number"
              placeholder="Phone number"
              className="px-2 border border-black rounded-sm w-[300px] lg:w-[350px]"
            />
            <input
              required={true}
              name="email"
              value={stateContactEmail}
              onChange={handleInputUpdate}
              type="email"
              placeholder="Email"
              className="px-2 border border-black rounded-sm w-[300px] lg:w-[350px]"
            />
            <input
              required={true}
              name="company"
              value={stateContactCompany}
              onChange={handleInputUpdate}
              type="text"
              placeholder="Company"
              className="px-2 border border-black rounded-sm w-[300px] lg:w-[350px]"
            />
            <input
              required={true}
              name="title"
              value={stateContactTitle}
              onChange={handleInputUpdate}
              type="text"
              placeholder="title"
              className="px-2 border border-black rounded-sm w-[300px] lg:w-[350px]"
            />
            {/* select group */}
            <select
              required={true}
              name="groupId"
              value={stateContactGroupId}
              onChange={handleInputUpdate}
              className="px-2 border border-black rounded-sm w-[300px] lg:w-[350px]"
            >
              <option value="">Select A Group</option>
              {groupsLength > 0 &&
                groups.map((group) => {
                  return (
                    <option key={group.id} value={group.id}>
                      {group.name}
                    </option>
                  );
                })}
            </select>
          </form>

          <div className="flex items-center gap-2 mt-4">
            <Button styles={`${style}`} onClick={onSubmit}>
              {createOrUpdate}
            </Button>
            <Link to={"/"}>
              <Button styles={`bg-red-600 hover:bg-red-700 `}>Cancel</Button>
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default CreateAndUpdate;
