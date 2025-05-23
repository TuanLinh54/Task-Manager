/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { MdGridView } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Loading from "../components/Loader";
import Title from "../components/Title";
import { IoMdAdd } from "react-icons/io";
import Button from "../components/Button";
import Tabs from "../components/Tabs";
import TaskTitle from "../components/TaskTitle";
import BoardView from "../components/BoardView";
import { tasks } from "../assets/data";
import Table from "../components/task/Table";
import AddTask from "../components/task/AddTask";

const TABS = [
  { title: "Xem bảng", icon: <MdGridView /> },
  { title: "Xem danh sách", icon: <FaList /> },
];

const TASK_TYPE = {
  todo: "bg-blue-600",
  "in-progress": "bg-yellow-600",
  completed: "bg-green-600",
};

const Tasks = () => {
  const params = useParams();

  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const status = params?.status || "";

  return loading ? (
    <div className="py-10">
      <Loading />
    </div>
  ) : (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <Title title={status ? `${status} Công việc` : "Công việc"} />

        {!status && (
          <Button
            onClick={() => setOpen(true)}
            label="Tạo công việc"
            icon={<IoMdAdd className="text-lg" />}
            className="flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md py-2 2xl:py-2.5"
          />
        )}
      </div>

      <Tabs tabs={TABS} setSelected={setSelected}>
        {!status && (
          <div className="w-full flex justify-between gap-4 md:gap-x-12 py-4">
            <TaskTitle label="Cần làm" className={TASK_TYPE.todo} />
            <TaskTitle
              label="Đang tiến hành"
              className={TASK_TYPE["in-progress"]}
            />
            <TaskTitle label="Đã hoàn thành" className={TASK_TYPE.completed} />
          </div>
        )}

        {selected === 0 ? (
          <BoardView tasks={tasks} />
        ) : (
          <div className="w-full">
            <Table tasks={tasks} />
          </div>
        )}
      </Tabs>

      <AddTask open={open} setOpen={setOpen} />
    </div>
  );
};

export default Tasks;
