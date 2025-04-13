/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  MdDelete,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdKeyboardDoubleArrowUp,
  MdOutlineRestore,
} from "react-icons/md";
import Title from "../components/Title";
import Button from "../components/Button";
import { PRIOTITYSTYLES, TASK_TYPE } from "../utils";
import clsx from "clsx";
import { tasks } from "../assets/data";
import ConfirmatioDialog from "../components/ConfirmatioDialog";
import AddUser from "../components/AddUser";

const ICONS = {
  high: <MdKeyboardDoubleArrowUp />,
  medium: <MdKeyboardArrowUp />,
  low: <MdKeyboardArrowDown />,
};

const Trash = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState(null);
  const [type, setType] = useState("delete");
  const [seleted, setSeleted] = useState("");

  const deleteAllClick = () => {
    setMsg("Bạn có chắc chắn muốn xóa tất cả công việc không?");
    setType("deleteAll");
    setOpenDialog(true);
  };

  const restoreAllClick = () => {
    setMsg("Bạn có chắc chắn muốn khôi phục tất cả công việc không?");
    setType("restoreAll");
    setOpenDialog(true);
  };

  const deleteClick = (id) => {
    setType("delete");
    setSeleted(id);
    setOpenDialog(true);
  };

  const restoreClick = (id) => {
    setType("restore");
    setSeleted(id);
    setMsg("Bạn có muốn khôi phục công việc đã chọn này không?");
    setOpenDialog(true);
  };

  const deleteRestoreHandler = () => {};

  const TableHeader = () => (
    <thead className="border-b border-gray-300">
      <tr className=" w-full text-black text-left">
        <th className="py-2">Tên công việc</th>
        <th className="py-2">Độ ưu tiên</th>
        <th className="py-2">Giai đoạn</th>
        <th className="py-2 line-clamp-1">Đã sửa đổi lúc</th>
      </tr>
    </thead>
  );

  const TableRow = ({ item }) => (
    <tr className="border-b border-gray-200 text-gray-600 hover:bg-gray-400/10">
      <td className="py-2">
        <div className="flex items-center gap-2">
          <div
            className={clsx("w-4 h-4 rounded-full", TASK_TYPE[item.stage])}
          />
          <p className="w-full line-clamp-2 text-base text-black">
            {item?.title}
          </p>
        </div>
      </td>

      <td className="py-2 capitalize">
        <div className={"flex gap-1 items-center"}>
          <span className={clsx("text-lg", PRIOTITYSTYLES[item?.priority])}>
            {ICONS[item?.priority]}
          </span>
          <span className="">{item?.priority}</span>
        </div>
      </td>

      <td className="py-2 capitalize text-center md:text-start">
        {item?.stage}
      </td>
      <td className="py-2 text-sm">{new Date(item?.date).toDateString()}</td>

      <td className="py-2 flex gap-1 justify-end">
        <Button
          icon={<MdOutlineRestore className="text-xl text-gray-500" />}
          onClick={() => restoreClick(item._id)}
        />
        <Button
          icon={<MdDelete className="text-xl text-red-600" />}
          onClick={() => deleteClick(item._id)}
        />
      </td>
    </tr>
  );

  return (
    <>
      <div className="w-full md:px-1 px-0 mb-6">
        <div className="flex items-center justify-between mb-8">
          <Title title="Công việc đã xóa" />

          <div className="flex gap-2 md:gap-4 items-center">
            <Button
              label="Khôi phục tất cả"
              icon={<MdOutlineRestore className="text-lg hidden md:flex" />}
              className="flex flex-row-reverse gap-1 items-center text-black text-sm md:text-base rounded-md 2xl:py-2.5"
              onClick={() => restoreAllClick()}
            />
            <Button
              label="Xóa tất cả"
              icon={<MdDelete className="text-lg hidden md:flex" />}
              className="flex flex-row-reverse gap-1 items-center text-red-600 text-sm md:text-base rounded-md 2xl:py-2.5"
              onClick={() => deleteAllClick()}
            />
          </div>
        </div>
        <div className="bg-white md:px-6 py-4 shadow-md rounded">
          <div className="overflow-x-auto">
            <table className="w-full mb-5">
              <TableHeader />
              <tbody>
                {tasks?.map((task, index) => (
                  <TableRow key={index} item={task} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AddUser open={open} setOpen={setOpen} />

      <ConfirmatioDialog
        open={openDialog}
        setOpen={setOpenDialog}
        msg={msg}
        setMsg={setMsg}
        type={type}
        setType={setType}
        onClick={() => deleteRestoreHandler()}
      />
    </>
  );
};

export default Trash;
