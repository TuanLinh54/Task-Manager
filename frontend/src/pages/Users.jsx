/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { IoMdAdd } from "react-icons/io";
import { summary } from "../assets/data";
import { getInitials } from "../utils";
import clsx from "clsx";
import ConfirmatioDialog, { UserAction } from "../components/ConfirmatioDialog";
import AddUser from "../components/AddUser";

const Users = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAction, setOpenAction] = useState(false);
  const [seleted, setSeleted] = useState(null);

  const userActionHandler = () => {};

  const deleteHandler = () => {};

  const deleteClick = (id) => {
    setSeleted(id);
    setOpenDialog(true);
  };

  const editClick = (el) => {
    setSeleted(el);
    setOpen(true);
  };

  const TableHeader = () => (
    <thead className="border-b border-gray-300">
      <tr className=" w-full text-black text-left">
        <th className="py-2">Họ tên</th>
        <th className="py-2">Tiêu đề</th>
        <th className="py-2">Email</th>
        <th className="py-2">Vai trò</th>
        <th className="py-2">Hoạt động</th>
      </tr>
    </thead>
  );

  const TableRow = ({ user }) => (
    <tr className="border-b border-gray-200 text-gray-600 hover:bg-gray-400/10">
      <td className="p-2">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full text-white flex items-center justify-center text-sm bg-blue-700">
            <span className="text-xs md:text-sm text-center">
              {getInitials(user.name)}
            </span>
          </div>
          {user.name}
        </div>
      </td>

      <td className="p-2">{user.title}</td>
      <td className="p-2">{user.email}</td>
      <td className="p-2">{user.role}</td>

      <td>
        <button
          // onClick={() => userStatusClick(user)}
          className={clsx(
            "w-fit px-4 py-1 rounded-full",
            user?.isActive ? "bg-blue-200" : "bg-yellow-100"
          )}
        >
          {user?.isActive ? "Active" : "Disabled"}
        </button>
      </td>
      <td className="p-2 flex gap-4 justify-end">
        <Button
          className="text-blue-600 hover:text-blue-500 font-semibold sm:px-0"
          label="Sửa"
          type="button"
          onClick={() => editClick(user)}
        />

        <Button
          className="text-red-700 hover:text-red-500 font-semibold sm:px-0"
          label="Xóa"
          type="button"
          onClick={() => deleteClick(user?._id)}
        />
      </td>
    </tr>
  );

  return (
    <>
      <div className="w-full md:px-1 px-0 mb-6">
        <div className="flex items-center justify-between mb-8">
          <Title title="  Thành viên nhóm" />
          <Button
            label="Thêm mới"
            icon={<IoMdAdd className="text-lg" />}
            className="flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded"
            onClick={() => setOpen(true)}
          />
        </div>

        <div className="bg-white px-2 md:px-4 py-4 shadow-md rounded">
          <div className="overflow-x-auto">
            <table className="w-full mb-5">
              <TableHeader />
              <tbody>
                {summary.users?.map((user, index) => (
                  <TableRow key={index} user={user} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AddUser
        open={open}
        setOpen={setOpen}
        userData={seleted}
        key={new Date().getTime().toString()}
      />

      <ConfirmatioDialog
        open={openDialog}
        setOpen={setOpenDialog}
        onClick={deleteHandler}
      />

      <UserAction
        open={openAction}
        setOpen={setOpenAction}
        onClick={userActionHandler}
      />
    </>
  );
};

export default Users;
