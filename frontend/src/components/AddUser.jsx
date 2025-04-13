/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import ModalWrapper from "./ModalWrapper";
import { DialogTitle } from "@headlessui/react";
import Textbox from "./Textbox";
import Loading from "./Loader";
import Button from "./Button";

const AddUser = ({ open, setOpen, userData }) => {
  let defaultValues = userData ?? {};
  const { user } = useSelector((state) => state.auth);
  const isLoading = false,
    isUpdating = false;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const handleOnSubmit = () => {};

  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(handleOnSubmit)} className="">
          <DialogTitle
            as="h2"
            className="text-base font-bold leading-6 text-gray-900 mb-4"
          >
            {userData ? "CẬP NHẬT HỒ SƠ" : "THÊM NGƯỜI DÙNG"}
          </DialogTitle>
          <div className="mt-2 flex flex-col gap-6">
            <Textbox
              placeholder="Họ tên"
              type="text"
              name="name"
              label="Họ tên"
              className="w-full rounded"
              register={register("name", {
                required: "Full name is required",
              })}
              error={errors.name ? errors.name.message : ""}
            />
            <Textbox
              placeholder="Tiêu đề"
              type="text"
              name="title"
              label="Tiêu đề"
              className="w-full rounded"
              register={register("title", {
                required: "Title is required",
              })}
              error={errors.title ? errors.title.message : ""}
            />
            <Textbox
              placeholder="Địa chỉ Email"
              type="email"
              name="email"
              label="Địa chỉ Email"
              className="w-full rounded"
              register={register("email", {
                required: "Email is required",
              })}
              error={errors.email ? errors.email.message : ""}
            />
            <Textbox
              placeholder="Vai trò"
              type="text"
              name="role"
              label="Vai trò"
              className="w-full rounded"
              register={register("role", {
                required: "Role is required",
              })}
              error={errors.role ? errors.role.message : ""}
            />
          </div>

          {isLoading || isUpdating ? (
            <div className="py-5">
              <Loading />
            </div>
          ) : (
            <div className="py-3 mt-4 sm:flex sm:flex-row-reverse">
              <Button
                type="submit"
                className="bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700 sm:w-auto"
                label="Xác nhận"
              />
              <Button
                type="button"
                className="bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto"
                onClick={() => setOpen(false)}
                label="Hủy bỏ"
              />
            </div>
          )}
        </form>
      </ModalWrapper>
    </>
  );
};

export default AddUser;
